import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');
const DOMAIN = 'https://www.edgeroboticsstudio.com';

// Routes that need a static index.html for SPA navigation but must NOT be indexed by Google.
// These are intentionally absent from sitemap.xml (coming-soon / thin-content pages).
const NOINDEX_ROUTES = [
  'facility/',
  'product/',
  'courses/',
  'projects/edge-ai-manipulator/',
  'blog/1-year-of-edge-robotics-studio/',
];

/**
 * Builds a static index.html for a given route path.
 * @param {string} routePath - e.g. "services/embedded-system-software/"
 * @param {boolean} noindex  - inject <meta name="robots" content="noindex, nofollow"> if true
 */
function generatePage(routePath, noindex) {
  const targetDir = path.join(DIST_DIR, routePath);
  const targetFile = path.join(targetDir, 'index.html');
  const canonicalUrl = `${DOMAIN}/${routePath}`;

  console.log(`Generating ${noindex ? '[noindex] ' : ''}route: /${routePath}`);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let htmlContent = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

  // ── 1. Canonical URL ────────────────────────────────────────────────────────
  htmlContent = htmlContent.replace(
    /<link id="canonical-link" rel="canonical" href="https:\/\/www\.edgeroboticsstudio\.com\/" \/>/,
    `<link id="canonical-link" rel="canonical" href="${canonicalUrl}" />`
  );

  // ── 2. Title & Description ──────────────────────────────────────────────────
  const segments = routePath.split('/').filter(Boolean);
  let pageTitle = 'Edge Robotics Studio';
  let pageDescription =
    'An independent robotics studio specializing in ROS2, Embedded Systems, Computer Vision, and AI.';

  if (segments.length > 0) {
    const titleSegments = segments.map((segment) =>
      segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
    // FIX: was missing the ' - ' separator before brand name
    pageTitle = [...titleSegments].reverse().join(' - ') + ' - Edge Robotics Studio';
    pageDescription = `Learn more about ${titleSegments.join(' ')} at Edge Robotics Studio. Specializing in ROS2, Embedded Systems, Computer Vision, and AI.`;

    htmlContent = htmlContent.replace(
      /<title>Edge Robotics Studio<\/title>/,
      `<title>${pageTitle}</title>`
    );

    htmlContent = htmlContent.replace(
      /<meta name="description"[\s\S]*?content="[^"]*" \/>/,
      `<meta name="description" content="${pageDescription}" />`
    );
  }

  // ── 3. Open Graph + Twitter Card tags ──────────────────────────────────────
  // First, strip the static home-page OG block that is baked into index.html
  htmlContent = htmlContent.replace(
    /\s*<!-- Open Graph -->[\s\S]*?<!-- Twitter Card -->[\s\S]*?<meta name="twitter:image"[^>]*\/>/,
    ''
  );

  const ogTags = `
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${pageTitle}" />
  <meta property="og:description" content="${pageDescription}" />
  <meta property="og:image" content="${DOMAIN}/favicon-512x512.png" />
  <meta property="og:site_name" content="Edge Robotics Studio" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${pageTitle}" />
  <meta name="twitter:description" content="${pageDescription}" />
  <meta name="twitter:image" content="${DOMAIN}/favicon-512x512.png" />`;

  // Insert after the <meta name="author"> tag
  htmlContent = htmlContent.replace(
    /(<meta name="author" content="[^"]*" \/>)/,
    `$1${ogTags}`
  );

  // ── 4. noindex for coming-soon / thin-content routes ───────────────────────
  if (noindex) {
    htmlContent = htmlContent.replace(
      /(<meta name="viewport")/,
      `<meta name="robots" content="noindex, nofollow" />\n  $1`
    );
  }

  fs.writeFileSync(targetFile, htmlContent);
}

async function generateStaticRoutes() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('sitemap.xml not found in dist/. Run build first.');
    process.exit(1);
  }
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error('index.html not found in dist/.');
    process.exit(1);
  }

  // ── Sitemap routes (indexable) ─────────────────────────────────────────────
  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locs = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = locs.map((loc) => loc.replace(/<\/?loc>/g, '').trim());

  console.log(`Found ${urls.length} URLs in sitemap.\n`);

  for (const url of urls) {
    if (!url.startsWith(DOMAIN)) continue;
    let routePath = url.replace(DOMAIN, '');
    if (routePath === '' || routePath === '/') continue;
    if (routePath.startsWith('/')) routePath = routePath.substring(1);
    generatePage(routePath, false);
  }

  // ── noindex routes (generated for SPA nav, not in sitemap) ─────────────────
  console.log(`\nGenerating ${NOINDEX_ROUTES.length} noindex routes...`);
  for (const routePath of NOINDEX_ROUTES) {
    generatePage(routePath, true);
  }

  console.log('\nStatic route generation complete!');
}

generateStaticRoutes().catch((err) => {
  console.error('Error generating static routes:', err);
  process.exit(1);
});
