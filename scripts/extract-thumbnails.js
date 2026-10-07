import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIDEOS_DIR = path.resolve(__dirname, '../src/assets/videos');
const THUMBNAILS_DIR = path.resolve(__dirname, '../src/assets/video-thumbnails');

if (!fs.existsSync(THUMBNAILS_DIR)) {
  fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
}

const forceAll = process.argv.includes('--all') || process.argv.includes('--force');

const videoFiles = fs.readdirSync(VIDEOS_DIR).filter(file => {
  const ext = path.extname(file).toLowerCase();
  if (!['.mp4', '.webm', '.mov'].includes(ext)) return false;
  if (forceAll) return true;
  const baseName = path.basename(file, path.extname(file));
  const thumbPath = path.join(THUMBNAILS_DIR, `${baseName}.jpg`);
  return !fs.existsSync(thumbPath);
});

if (videoFiles.length === 0) {
  console.log('All video thumbnails are already generated! Use "npm run extract-thumbnails -- --all" to force regenerate.');
  process.exit(0);
}

console.log(`Found ${videoFiles.length} videos to process.`);

const PORT = 4567;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Serve HTML extraction app
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Extract Thumbnails</title>
</head>
<body>
  <h1>Extracting Thumbnails...</h1>
  <div id="status">Starting...</div>
  <script>
    const videos = ${JSON.stringify(videoFiles)};
    const statusEl = document.getElementById('status');

    async function extractThumbnails() {
      for (let i = 0; i < videos.length; i++) {
        const file = videos[i];
        statusEl.textContent = 'Processing ' + (i + 1) + '/' + videos.length + ': ' + file;
        console.log('Processing:', file);

        try {
          const dataUrl = await captureFrame('/video/' + encodeURIComponent(file));
          if (dataUrl) {
            await fetch('/save-thumbnail', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ filename: file, dataUrl })
            });
            console.log('Saved thumbnail for:', file);
          } else {
            console.warn('Could not extract frame for:', file);
          }
        } catch (err) {
          console.error('Error on file ' + file + ':', err);
        }
      }

      statusEl.textContent = 'Done all!';
      await fetch('/done', { method: 'POST' });
    }

    function captureFrame(videoUrl) {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.crossOrigin = 'anonymous';
        video.muted = true;
        video.preload = 'auto';

        const timeout = setTimeout(() => {
          console.warn('Timeout loading video: ' + videoUrl);
          resolve(null);
        }, 15000);

        video.onloadeddata = () => {
          // Seek a little into the video (0.5s or 0.1s) to get a clear frame
          const seekTime = Math.min(0.5, (video.duration && video.duration > 0.5) ? 0.5 : 0.1);
          video.currentTime = seekTime;
        };

        video.onseeked = () => {
          clearTimeout(timeout);
          try {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth || 640;
            canvas.height = video.videoHeight || 360;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
            resolve(dataUrl);
          } catch (e) {
            console.error('Canvas error:', e);
            resolve(null);
          }
        };

        video.onerror = (e) => {
          clearTimeout(timeout);
          console.error('Video error for ' + videoUrl, e);
          resolve(null);
        };

        video.src = videoUrl;
        video.load();
      });
    }

    extractThumbnails();
  </script>
</body>
</html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.method === 'GET' && req.url.startsWith('/video/')) {
    const rawFilename = decodeURIComponent(req.url.replace('/video/', ''));
    const filePath = path.join(VIDEOS_DIR, rawFilename);

    if (fs.existsSync(filePath)) {
      const ext = path.extname(rawFilename).toLowerCase();
      const contentType = ext === '.mov' ? 'video/quicktime' : 'video/mp4';
      const stat = fs.statSync(filePath);
      const range = req.headers.range;

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : Math.min(start + 5000000, stat.size - 1);
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${stat.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
        });
        file.pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Length': stat.size,
          'Content-Type': contentType,
          'Accept-Ranges': 'bytes'
        });
        fs.createReadStream(filePath).pipe(res);
      }
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.method === 'POST' && req.url === '/save-thumbnail') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { filename, dataUrl } = JSON.parse(body);
        const baseName = path.basename(filename, path.extname(filename));
        const outPath = path.join(THUMBNAILS_DIR, `${baseName}.jpg`);
        const base64Data = dataUrl.replace(/^data:image\/jpeg;base64,/, '');
        fs.writeFileSync(outPath, Buffer.from(base64Data, 'base64'));
        console.log(`[SAVED] ${baseName}.jpg (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        console.error('Save error:', e);
        res.writeHead(500);
        res.end(JSON.stringify({ error: e.message }));
      }
    });
  } else if (req.method === 'POST' && req.url === '/done') {
    console.log('\nAll thumbnails processed!');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    setTimeout(() => {
      if (chromeProcess) {
        chromeProcess.kill();
      }
      server.close(() => {
        console.log('Server stopped.');
        process.exit(0);
      });
    }, 1000);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

let chromeProcess = null;

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);

  const chromePaths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  ];

  const browserPath = chromePaths.find(p => fs.existsSync(p));
  if (!browserPath) {
    console.error('No Chrome or Edge found!');
    process.exit(1);
  }

  console.log(`Launching browser: ${browserPath}`);
  chromeProcess = spawn(browserPath, [
    '--headless=new',
    '--no-sandbox',
    '--enable-features=PlatformHEVCDecoderSupport',
    '--autoplay-policy=no-user-gesture-required',
    `http://127.0.0.1:${PORT}/`
  ], { stdio: 'inherit' });

  chromeProcess.on('exit', (code) => {
    console.log(`Browser process exited with code ${code}`);
  });
});
