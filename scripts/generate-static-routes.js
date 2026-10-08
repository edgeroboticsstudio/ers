import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPostsSEO } from './blog-posts-seo-data.js';
import { servicesSEO } from './services-seo-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');
const DOMAIN = 'https://edgeroboticsstudio.com';

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
 * @param {string} routePath - e.g. "blog/who-i-am-and-what-i-build/"
 * @param {boolean} noindex  - inject <meta name="robots" content="noindex, nofollow"> if true
 * @param {string} templateHtml - clean HTML template before root prerender
 */
function generatePage(routePath, noindex, templateHtml) {
  const targetDir = path.join(DIST_DIR, routePath);
  const targetFile = path.join(targetDir, 'index.html');
  const canonicalUrl = `${DOMAIN}/${routePath}`;

  console.log(`Generating ${noindex ? '[noindex] ' : ''}route: /${routePath}`);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let htmlContent = templateHtml;

  // ── 1. Canonical URL ────────────────────────────────────────────────────────
  htmlContent = htmlContent.replace(
    /<link id="canonical-link" rel="canonical" href="https:\/\/edgeroboticsstudio\.com\/" \/>/,
    `<link id="canonical-link" rel="canonical" href="${canonicalUrl}" />`
  );

  // ── 2. Determine Route Details & Pre-rendered Content ───────────────────────
  const trimmedRoute = routePath.replace(/^\/+|\/+$/g, '');
  const segments = trimmedRoute.split('/').filter(Boolean);

  let pageTitle = 'Edge Robotics Studio';
  let pageDescription =
    'An independent robotics studio founded by Dharmesh Makvana, specializing in ROS2, Embedded Systems, Computer Vision, and AI.';
  let ogType = 'website';
  let extraHeadTags = '';
  let prerenderedBody = '';

  if (trimmedRoute === 'blog') {
    // ── Blog Hub Page ──
    pageTitle = 'Blog - Edge Robotics Studio';
    pageDescription = 'Insights, experiences, and reflections from the world of robotics, embedded systems, and automation software at Edge Robotics Studio.';
    
    prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;">Blog</h1>
      <p style="font-size:1.125rem;color:#94a3b8;margin-bottom:3rem;">Insights, experiences, and reflections from the world of robotics and beyond.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:2rem;">
        ${blogPostsSEO.map(p => `
        <article style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:1.5rem;">
          <p style="color:#0ea5e9;font-size:0.875rem;margin-bottom:0.5rem;">${p.date} &bull; ${p.category}</p>
          <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;">
            <a href="${DOMAIN}/blog/${p.slug}/" style="color:#fff;text-decoration:none;">${p.title}</a>
          </h2>
          <p style="color:#94a3b8;font-size:0.875rem;line-height:1.6;margin-bottom:1rem;">${p.excerpt}</p>
          <a href="${DOMAIN}/blog/${p.slug}/" style="color:#0ea5e9;font-weight:600;text-decoration:none;">Read More &rarr;</a>
        </article>`).join('\n')}
      </div>
    </main>
  </div>`;
  } else if (segments[0] === 'blog' && segments[1]) {
    // ── Single Blog Post Page ──
    const slug = segments[1];
    const post = blogPostsSEO.find(p => p.slug === slug);

    if (post) {
      pageTitle = `${post.title} - Edge Robotics Studio`;
      pageDescription = post.excerpt;
      ogType = 'article';

      extraHeadTags = `
  <meta property="article:published_time" content="${post.datePublished}" />
  <meta property="article:modified_time" content="${post.dateModified || post.datePublished}" />
  <meta property="article:author" content="${post.author}" />
  <meta property="article:section" content="${post.category}" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${canonicalUrl}"
    },
    "headline": "${post.title.replace(/"/g, '\\"')}",
    "description": "${post.excerpt.replace(/"/g, '\\"')}",
    "image": "${DOMAIN}/favicon-512x512.png",
    "author": {
      "@type": "Person",
      "name": "${post.author}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Edge Robotics Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "${DOMAIN}/favicon-512x512.png"
      }
    },
    "datePublished": "${post.datePublished}",
    "dateModified": "${post.dateModified || post.datePublished}"
  }
  </script>`;

      prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <article style="max-width:56rem;margin:0 auto;padding:0 1.5rem;">
      <nav style="margin-bottom:2rem;"><a href="${DOMAIN}/blog/" style="color:#94a3b8;text-decoration:none;">&larr; Back to Blog</a></nav>
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;color:#fff;line-height:1.2;">${post.title}</h1>
      <div style="display:flex;gap:0.75rem;color:#0ea5e9;font-size:0.875rem;margin-bottom:2rem;">
        <span>By ${post.author}</span>
        <span>&bull;</span>
        <span>${post.date}</span>
        <span>&bull;</span>
        <span>${post.category}</span>
      </div>
      <div style="font-size:1.125rem;line-height:1.8;color:#cbd5e1;">
        ${post.content.map(c => {
          if (c.type === 'heading') return `<h2 style="font-size:1.5rem;font-weight:700;color:#fff;margin-top:2.5rem;margin-bottom:1rem;">${c.text}</h2>`;
          if (c.type === 'subheading') return `<h3 style="font-size:1.25rem;font-weight:600;color:#e2e8f0;margin-top:2rem;margin-bottom:0.75rem;">${c.text}</h3>`;
          return `<p style="margin-bottom:1.5rem;">${c.text}</p>`;
        }).join('\n        ')}
      </div>
    </article>
  </div>`;
    } else {
      const titleSegments = segments.map((segment) =>
        segment.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      );
      pageTitle = [...titleSegments].reverse().join(' - ') + ' - Edge Robotics Studio';
      pageDescription = `Read ${titleSegments[1] || 'our blog'} at Edge Robotics Studio.`;
    }
  } else if (trimmedRoute === 'about') {
    pageTitle = 'About - Edge Robotics Studio';
    pageDescription = 'Edge Robotics Studio is founded by Dharmesh Makvana, bridging the gap between idea and creation in robotics, ROS2, and embedded systems.';
    prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;">About Edge Robotics Studio</h1>
      <p style="font-size:1.25rem;color:#0ea5e9;margin-bottom:2rem;">Bridging the gap between idea and creation</p>
      <section style="color:#cbd5e1;font-size:1.125rem;line-height:1.8;max-width:56rem;">
        <h2 style="font-size:1.5rem;font-weight:700;color:#fff;margin-top:2rem;margin-bottom:1rem;">Our Story</h2>
        <p style="margin-bottom:1.5rem;">Edge Robotics Studio is a space built on the belief that access to technology and knowledge should be open to everyone who is curious to learn, build, and innovate. Founded by Dharmesh Makvana, the studio focuses on making tools and learning accessible while empowering individuals to turn their ideas into creation.</p>
        <h2 style="font-size:1.5rem;font-weight:700;color:#fff;margin-top:2rem;margin-bottom:1rem;">Our Mission</h2>
        <p style="margin-bottom:1.5rem;font-style:italic;border-left:2px solid #0ea5e9;padding-left:1rem;">"Our mission is to empower individuals to transform ideas into creation while fostering creativity, problem-solving, and continuous learning, enabling a new generation of self-reliant creators."</p>
      </section>
    </main>
  </div>`;
  } else if (trimmedRoute === 'media' || segments[0] === 'media') {
    pageTitle = 'Media & Highlights - Edge Robotics Studio';
    pageDescription = 'Explore workshop photos, YouTube tutorials, and robotics project demonstration videos from Edge Robotics Studio.';
    prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;">Media & Highlights</h1>
      <p style="font-size:1.125rem;color:#94a3b8;margin-bottom:3rem;">Explore hands-on workshop moments, YouTube tutorials, and real-world project demonstrations in action.</p>
    </main>
  </div>`;
  } else if (trimmedRoute === 'projects') {
    // ── Projects Hub Page ──
    pageTitle = 'Projects - Edge Robotics Studio';
    pageDescription = 'Explore cutting-edge robotics projects, autonomous systems, and engineering prototypes developed by Edge Robotics Studio.';
    extraHeadTags = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects - Edge Robotics Studio",
    "description": "Explore cutting-edge robotics projects, autonomous systems, and engineering prototypes developed by Edge Robotics Studio.",
    "url": "${canonicalUrl}"
  }
  </script>`;
    prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;color:#fff;">Projects</h1>
      <p style="font-size:1.125rem;color:#94a3b8;margin-bottom:3rem;max-width:48rem;">
        Edge Robotics Studio is dedicated to pushing the boundaries of robotics and AI. Explore our engineering prototypes, autonomous platforms, and upcoming releases.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:2rem;">
        <article style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
            <span style="display:inline-block;padding:0.25rem 0.75rem;background:rgba(14,165,233,0.2);color:#0ea5e9;border-radius:9999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Coming Soon</span>
          </div>
          <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem;color:#fff;">Edge AI Manipulator</h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">
            A high-precision 6-DOF robotic arm featuring integrated edge computing for real-time trajectory optimization, object recognition, and autonomous sorting.
          </p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1.5rem;">
            <span style="background:#1e293b;border:1px solid #334155;color:#cbd5e1;padding:0.25rem 0.6rem;border-radius:0.5rem;font-size:0.75rem;">Robotics</span>
            <span style="background:#1e293b;border:1px solid #334155;color:#cbd5e1;padding:0.25rem 0.6rem;border-radius:0.5rem;font-size:0.75rem;">Edge AI</span>
            <span style="background:#1e293b;border:1px solid #334155;color:#cbd5e1;padding:0.25rem 0.6rem;border-radius:0.5rem;font-size:0.75rem;">Control Systems</span>
          </div>
          <p style="color:#0ea5e9;font-size:0.875rem;font-weight:600;">Initial prototyping in progress</p>
        </article>
      </div>
    </main>
  </div>`;
  } else if (trimmedRoute === 'services') {
    // ── Services Hub Page ──
    pageTitle = 'Services - Edge Robotics Studio';
    pageDescription = 'Comprehensive engineering services across ROS2, Embedded Systems, Simulation, Computer Vision, AI, and Hardware Design.';
    extraHeadTags = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Robotics & Engineering Services - Edge Robotics Studio",
    "description": "Comprehensive engineering services across ROS2, Embedded Systems, Simulation, Computer Vision, AI, and Hardware Design.",
    "url": "${canonicalUrl}"
  }
  </script>`;
    prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;color:#fff;">Our Services</h1>
      <p style="font-size:1.125rem;color:#94a3b8;margin-bottom:3rem;max-width:48rem;">
        End-to-end engineering solutions spanning firmware, ROS2 architecture, computer vision, AI perception, and custom hardware.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:2rem;">
        ${servicesSEO.map(s => `
        <article style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <h2 style="font-size:1.35rem;font-weight:700;margin-bottom:0.75rem;">
            <a href="${DOMAIN}/services/${s.slug}/" style="color:#fff;text-decoration:none;">${s.title}</a>
          </h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">${s.description}</p>
          <a href="${DOMAIN}/services/${s.slug}/" style="color:#0ea5e9;font-weight:600;text-decoration:none;">Learn More &rarr;</a>
        </article>`).join('\n')}
      </div>
    </main>
  </div>`;
  } else if (segments[0] === 'services' && segments[1]) {
    // ── Individual Service Details Page ──
    const slug = segments[1];
    const service = servicesSEO.find(s => s.slug === slug);
    if (service) {
      pageTitle = `${service.title} - Edge Robotics Studio`;
      pageDescription = service.description;
      extraHeadTags = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${service.title.replace(/"/g, '\\"')}",
    "description": "${service.description.replace(/"/g, '\\"')}",
    "provider": {
      "@type": "Organization",
      "name": "Edge Robotics Studio",
      "url": "${DOMAIN}"
    },
    "url": "${canonicalUrl}"
  }
  </script>`;
      prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <article style="max-width:56rem;margin:0 auto;padding:0 1.5rem;">
      <nav style="margin-bottom:2rem;"><a href="${DOMAIN}/services/" style="color:#94a3b8;text-decoration:none;">&larr; Back to Services</a></nav>
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1.5rem;color:#fff;line-height:1.2;">${service.title}</h1>
      <p style="font-size:1.25rem;color:#0ea5e9;margin-bottom:2rem;line-height:1.6;">${service.description}</p>
      <div style="font-size:1.125rem;line-height:1.8;color:#cbd5e1;">
        ${service.content.map(p => `<p style="margin-bottom:1.5rem;">${p}</p>`).join('\n        ')}
      </div>
      <div style="margin-top:3rem;padding:2rem;background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;">
        <h2 style="font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:0.75rem;">Build your next project with Edge Robotics Studio</h2>
        <p style="color:#94a3b8;margin-bottom:1.5rem;">Edge Robotics Studio is ready to tackle your hardest robotics challenges.</p>
        <a href="${DOMAIN}/contact/" style="display:inline-block;background:#0ea5e9;color:#fff;padding:0.75rem 1.75rem;border-radius:0.75rem;font-weight:600;text-decoration:none;">Start a Conversation</a>
      </div>
    </article>
  </div>`;
    }
  } else if (trimmedRoute === 'studio') {
    // ── Studio Hub Page ──
    pageTitle = 'Studio - Edge Robotics Studio';
    pageDescription = 'Explore Edge Robotics Studio: our engineering space, comprehensive services, robotics projects, facility, and courses.';
    prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;color:#fff;">Edge Robotics Studio</h1>
      <p style="font-size:1.125rem;color:#94a3b8;margin-bottom:3rem;max-width:48rem;">
        An independent engineering studio bridging the gap between idea and creation across services, projects, rapid prototyping, and hands-on learning.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:2rem;">
        <div style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <h2 style="font-size:1.35rem;font-weight:700;margin-bottom:0.75rem;"><a href="${DOMAIN}/services/" style="color:#fff;text-decoration:none;">Services</a></h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">Full-lifecycle engineering support across embedded software, ROS2, computer vision, simulation, and hardware.</p>
          <a href="${DOMAIN}/services/" style="color:#0ea5e9;font-weight:600;text-decoration:none;">Explore Services &rarr;</a>
        </div>
        <div style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <h2 style="font-size:1.35rem;font-weight:700;margin-bottom:0.75rem;"><a href="${DOMAIN}/projects/" style="color:#fff;text-decoration:none;">Projects</a></h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">Innovative hardware and software developments, including our flagship Edge AI Manipulator arm.</p>
          <a href="${DOMAIN}/projects/" style="color:#0ea5e9;font-weight:600;text-decoration:none;">Explore Projects &rarr;</a>
        </div>
      </div>
    </main>
  </div>`;
  } else if (trimmedRoute === 'contact') {
    // ── Contact Page ──
    pageTitle = 'Contact - Edge Robotics Studio';
    pageDescription = 'Get in touch with Edge Robotics Studio for custom robotics development, embedded systems, ROS2 consulting, and engineering projects.';
    prerenderedBody = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;">
      <h1 style="font-size:2.5rem;font-weight:900;margin-bottom:1rem;color:#fff;">Contact Edge Robotics Studio</h1>
      <p style="font-size:1.125rem;color:#94a3b8;margin-bottom:3rem;max-width:48rem;">
        Have a robotics challenge, project inquiry, or collaboration idea? Let's talk.
      </p>
      <div style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;max-width:36rem;">
        <h2 style="font-size:1.35rem;font-weight:700;color:#fff;margin-bottom:1rem;">Email Us Directly</h2>
        <p style="color:#cbd5e1;font-size:1.125rem;margin-bottom:1.5rem;">
          <a href="mailto:edgeroboticsstudio@gmail.com" style="color:#0ea5e9;text-decoration:underline;">edgeroboticsstudio@gmail.com</a>
        </p>
        <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;">
          Whether you need advisory support, full-stack prototyping, or custom robotics solutions, we respond within 24-48 business hours.
        </p>
      </div>
    </main>
  </div>`;
  } else if (segments.length > 0) {
    const titleSegments = segments.map((segment) =>
      segment.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );
    pageTitle = [...titleSegments].reverse().join(' - ') + ' - Edge Robotics Studio';
    pageDescription = `Learn more about ${titleSegments.join(' ')} at Edge Robotics Studio. Specializing in ROS2, Embedded Systems, Computer Vision, and AI.`;
  }

  // ── 3. Replace Title & Meta Description ────────────────────────────────────
  htmlContent = htmlContent.replace(
    /<title>.*?<\/title>/,
    `<title>${pageTitle}</title>`
  );

  htmlContent = htmlContent.replace(
    /<meta name="description"[\s\S]*?content="[^"]*" \/>/,
    `<meta name="description" content="${pageDescription}" />`
  );

  // ── 4. Open Graph + Twitter Card tags ──────────────────────────────────────
  htmlContent = htmlContent.replace(
    /\s*<!-- Open Graph -->[\s\S]*?<!-- Twitter Card -->[\s\S]*?<meta name="twitter:image"[^>]*\/>/,
    ''
  );

  const ogTags = `
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${pageTitle}" />
  <meta property="og:description" content="${pageDescription}" />
  <meta property="og:image" content="${DOMAIN}/favicon-512x512.png" />
  <meta property="og:site_name" content="Edge Robotics Studio" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${pageTitle}" />
  <meta name="twitter:description" content="${pageDescription}" />
  <meta name="twitter:image" content="${DOMAIN}/favicon-512x512.png" />${extraHeadTags}`;

  // Insert after the <meta name="author"> tag
  htmlContent = htmlContent.replace(
    /(<meta name="author" content="[^"]*" \/>)/,
    `$1${ogTags}`
  );

  // ── 5. Inject Pre-rendered Content inside <div id="root"> ─────────────────
  if (prerenderedBody) {
    htmlContent = htmlContent.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${prerenderedBody}\n  </div>`
    );
  }

  // ── 6. noindex for coming-soon / thin-content routes ───────────────────────
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

  // Store the base clean HTML template from Vite before any edits
  const baseHtmlTemplate = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

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
    generatePage(routePath, false, baseHtmlTemplate);
  }

  // ── noindex routes (generated for SPA nav, not in sitemap) ─────────────────
  console.log(`\nGenerating ${NOINDEX_ROUTES.length} noindex routes...`);
  for (const routePath of NOINDEX_ROUTES) {
    generatePage(routePath, true, baseHtmlTemplate);
  }

  // ── Prerender Home page in dist/index.html ──────────────────────────────────
  console.log('\nPrerendering home page in dist/index.html...');
  let homeHtml = baseHtmlTemplate;
  const homePrerender = `
  <div style="min-height:100vh;background-color:#0f172a;color:#fff;padding-top:8rem;padding-bottom:6rem;">
    <main style="max-width:80rem;margin:0 auto;padding:0 1.5rem;text-align:center;">
      <h1 style="font-size:3rem;font-weight:900;margin-bottom:1.5rem;color:#fff;line-height:1.2;">
        Empowering <span style="color:#0ea5e9;">Discovery</span><br />Guiding Exploration
      </h1>
      <p style="font-size:1.25rem;color:#94a3b8;margin-bottom:3rem;max-width:48rem;margin-left:auto;margin-right:auto;line-height:1.8;">
        An independent robotics studio founded by Dharmesh Makvana, specializing in ROS2, Embedded Systems, Computer Vision, and AI. Bridging the gap between knowledge and creation.
      </p>
      <div style="display:flex;justify-content:center;gap:1.5rem;flex-wrap:wrap;margin-bottom:4rem;">
        <a href="${DOMAIN}/contact/" style="background:#0ea5e9;color:#020617;padding:0.875rem 2rem;border-radius:9999px;font-weight:700;text-decoration:none;">Start Your Project</a>
        <a href="${DOMAIN}/studio/" style="background:rgba(255,255,255,0.1);color:#fff;padding:0.875rem 2rem;border-radius:9999px;font-weight:600;border:1px solid rgba(255,255,255,0.2);text-decoration:none;">Explore Studio</a>
      </div>
      <section style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:2rem;text-align:left;margin-top:4rem;">
        <div style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <h2 style="font-size:1.25rem;font-weight:700;color:#fff;margin-bottom:0.75rem;">Hands-on Learning</h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;">Activity-based education programs designed to bridge the gap between theoretical concepts and real-world application.</p>
        </div>
        <div style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <h2 style="font-size:1.25rem;font-weight:700;color:#fff;margin-bottom:0.75rem;">End-to-End Solutions</h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;">Bringing together mechanical design, electronics, software, and AI to build practical, intelligent machines.</p>
        </div>
        <div style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <h2 style="font-size:1.25rem;font-weight:700;color:#fff;margin-bottom:0.75rem;">Accessible Technology</h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;">Providing the tools, resources, and knowledge necessary to empower anyone to become a self-reliant creator.</p>
        </div>
        <div style="background:rgba(30,41,59,0.8);border:1px solid #334155;border-radius:1.5rem;padding:2rem;">
          <h2 style="font-size:1.25rem;font-weight:700;color:#fff;margin-bottom:0.75rem;">Real-world Innovation</h2>
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.6;">Focusing on transforming raw ideas into impactful, deployable systems that drive meaningful progress.</p>
        </div>
      </section>
    </main>
  </div>`;

  homeHtml = homeHtml.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${homePrerender}\n  </div>`
  );
  fs.writeFileSync(INDEX_HTML_PATH, homeHtml);

  console.log('\nStatic route generation complete!');
}

generateStaticRoutes().catch((err) => {
  console.error('Error generating static routes:', err);
  process.exit(1);
});
