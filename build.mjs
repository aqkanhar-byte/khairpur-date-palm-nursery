import { existsSync, mkdirSync, rmSync, writeFileSync, readFileSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { business, pages } from './site-data.mjs';

const SITE_URL = 'https://khairpurdatepalms.com';
const OUT_DIR = 'dist';
const BUILD_ID = Date.now();

// Appends a build-id query string to local .js/.css references so every
// deploy forces browsers to fetch fresh copies, regardless of cache headers
// or a stale service worker. Leaves external (http/https) URLs untouched.
const versionAssets = (html) =>
  html.replace(/(src|href)="([a-zA-Z0-9_.-]+\.(?:js|css))"/g, (match, attr, path) => `${attr}="${path}?v=${BUILD_ID}"`);

if (existsSync(OUT_DIR)) {
  rmSync(OUT_DIR, { recursive: true, force: true });
}

mkdirSync(OUT_DIR, { recursive: true });

const copyIfExists = (src, dest = src) => {
  if (!existsSync(src)) return;

  const target = join(OUT_DIR, dest);

  try {
    cpSync(src, target, { recursive: true });
  } catch (error) {
    console.warn(`Warning: Could not copy ${src} to ${target}`);
    console.warn(error.message);
  }
};

copyIfExists('assets');
copyIfExists('styles.css');
copyIfExists('refined.css');
copyIfExists('script.js');
copyIfExists('assistant.js');
copyIfExists('admin.js');
copyIfExists('admin.css');
copyIfExists('admin-refined.css');
copyIfExists('admin-cloud.css');
copyIfExists('supabase-config.js');
copyIfExists('supabase-service.js');
copyIfExists('media-gallery.js');
copyIfExists('sw.js');
copyIfExists('site.webmanifest');
copyIfExists('robots.txt');
copyIfExists('sitemap.xml');
copyIfExists('index.html');
copyIfExists('admin.html');
copyIfExists('404.html');

for (const file of ['index.html', 'admin.html', '404.html']) {
  const target = join(OUT_DIR, file);
  if (existsSync(target)) writeFileSync(target, versionAssets(readFileSync(target, 'utf8')), 'utf8');
}

writeFileSync(join(OUT_DIR, 'version.json'), JSON.stringify({ build: BUILD_ID }));
copyIfExists('.nojekyll');

const esc = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

function navigation(page) {
  const groups = {
    palms: ['date-palms', 'aseel-date-palm', 'qarbala-date-palm'],
    products: ['date-products', 'wholesale-export'],
    services: ['palm-installation', 'palm-supply-delivery'],
  };

  const current = (key) =>
    (groups[key] || [key]).includes(page.slug) ? ' aria-current="page"' : '';

  return `<a href="index.html">Home</a><a href="date-palms.html"${current('palms')}>Date Palms</a><a href="date-products.html"${current('products')}>Date Products</a><a href="palm-installation.html"${current('services')}>Services</a><a href="projects.html"${current('projects')}>Projects</a><a href="index.html#gallery">Pictures & Videos</a><a href="about.html"${current('about')}>About</a>`;
}

function schema(page) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    isPartOf: {
      '@type': 'WebSite',
      name: business.name,
    },
    about: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: `+${business.phoneIntl}`,
      email: business.email,
      areaServed: 'Pakistan',
    },
  }).replaceAll('<', '\\u003c');
}

function section([title, copy, bullets], index) {
  return `<article class="detail-block"><span>0${index + 1}</span><div><h2>${esc(title)}</h2><p>${esc(copy)}</p><ul>${bullets.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div></article>`;
}

function pageTemplate(page) {
  const whatsapp = `https://wa.me/${business.phoneIntl}?text=${encodeURIComponent(
    `Assalam-o-Alaikum, mujhe ${page.purpose} ke bare mein maloomat chahiye.\n\nCity: \nQuantity: \nRequired date/height: `
  )}`;

  const mediaClass = page.imageAuthentic ? ' verified-media' : ' editorial-media';

  const heroMedia = `<div class="subhero-media${mediaClass}"><img src="${page.image}" alt="${esc(page.imageAlt)}" width="1600" height="1000"></div>`;

  const gallery = page.gallery
    ? `<section class="evidence-gallery section"><div class="container"><div class="gallery-heading"><div><p class="eyebrow"><span></span>Authentic Facebook archive</p><h2>Field, harvest and<br><em>product activity.</em></h2></div><p>Every image below comes from the company’s public media. The large installation image is project evidence; smaller images document seasonal business activity and product communication.</p></div><div class="media-gallery-grid">${page.gallery
        .map(
          ([src, title, copy, width, height], index) =>
            `<figure class="gallery-item${index === 0 ? ' gallery-feature' : ''}"><img src="${src}" alt="${esc(title)}" width="${width}" height="${height}" loading="lazy"><figcaption><strong>${esc(title)}</strong><span>${esc(copy)}</span></figcaption></figure>`
        )
        .join('')}</div></div></section>`
    : '';

  const dynamicGallery = page.mediaCategory
    ? `<section class="media-showcase section"><div class="container"><div class="section-heading split"><div><p class="eyebrow"><span></span>Latest uploads</p><h2>See it.<br><em>Not just read it.</em></h2></div><p>Photos and videos published from the admin dashboard for this page. New uploads appear here automatically.</p></div><div class="public-media-grid" data-public-gallery="${esc(page.mediaCategory)}" aria-live="polite"><p class="media-loading">Loading gallery…</p></div></div></section>`
    : '';

  const pricing = page.pricing
    ? `<section class="pricing-section section"><div class="container"><p class="eyebrow"><span></span>Indicative pricing</p><div class="section-heading split"><h2>Typical price guide.<br><em>Confirmed at enquiry.</em></h2><p>Prices vary with current nursery stock, quantity and delivery destination. Use this as a starting guide, then confirm the final quotation on WhatsApp.</p></div><table class="price-table"><thead><tr><th>Plant</th><th>Size</th><th>Price</th></tr></thead><tbody>${page.pricing
        .map(([plant, size, price]) => `<tr><td>${esc(plant)}</td><td>${esc(size)}</td><td>${esc(price)}</td></tr>`)
        .join('')}</tbody></table></div></section>`
    : '';

  const whatsappCeo = page.ceo
    ? `https://wa.me/${business.phoneIntl}?text=${encodeURIComponent(`Assalam-o-Alaikum, mujhe ${page.ceo.name} se baat karni hai.\n\n`)}`
    : '';

  const founder = page.ceo
    ? `<section class="founder-section section"><div class="container founder-grid"><div class="founder-visual"><img src="${page.ceo.image}" alt="${esc(page.ceo.name)}, ${esc(page.ceo.designation)} of ${business.name}" width="480" height="580" loading="lazy"></div><div class="founder-copy"><p class="eyebrow"><span></span>Leadership</p><h2>${esc(page.ceo.name)}</h2><span class="founder-role">${esc(page.ceo.designation)}</span><p class="founder-credentials">${esc(page.ceo.credentials)}</p><p>${esc(page.ceo.bio)}</p><blockquote class="founder-quote">“${esc(page.ceo.quote)}”<cite>— ${esc(page.ceo.name)}</cite></blockquote><div class="founder-contact"><a class="button button-gold" href="${whatsappCeo}" target="_blank" rel="noopener">WhatsApp ${esc(page.ceo.name.split(' ')[0])} <span>→</span></a><a class="text-link" href="mailto:${business.email}">✉ ${business.email}</a></div></div></div></section>`
    : '';

  return `<!doctype html>
<html lang="en"><head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="description" content="${esc(page.description)}"><meta name="theme-color" content="#123c2b">
  <meta property="og:type" content="website"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="${SITE_URL}/${page.slug}.html"><meta property="og:image" content="${SITE_URL}/${page.image}">
  <title>${esc(page.title)} | ${business.name}</title>
  <link rel="canonical" href="${SITE_URL}/${page.slug}.html">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="manifest" href="site.webmanifest"><link rel="apple-touch-icon" href="assets/app-icon-192.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="refined.css">
  <script type="application/ld+json">${schema(page)}</script>
</head><body class="inner-page"><a class="skip-link" href="#main">Skip to content</a>
<div class="topbar"><span>Nursery-grown in Khairpur, Sindh</span><a href="tel:+${business.phoneIntl}">Call: ${business.phone}</a></div>
<header class="site-header"><a class="brand" href="index.html"><img class="brand-logo" src="assets/khairpur-logo.jpg" alt="" width="52" height="52"><span><strong>Khairpur</strong><small>Date Palm & Nursery</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span><b class="sr-only">Menu</b></button><nav id="nav" aria-label="Main navigation">${navigation(page)}</nav><a class="button button-small header-cta" href="contact.html">Request a quote <span>↗</span></a></header>
<main id="main">
  <section class="subhero"><div class="container subhero-grid"><div class="subhero-copy"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span aria-current="page">${esc(page.title)}</span></nav><p class="eyebrow light"><span></span>${esc(page.eyebrow)}</p><h1>${esc(page.title)}</h1><p>${esc(page.intro)}</p><a class="button button-gold" href="${whatsapp}" target="_blank" rel="noopener">${esc(page.cta)} <span>→</span></a></div>${heroMedia}</div></section>
  <section class="fact-band"><div class="container">${page.facts.map(([label, value]) => `<div><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join('')}</div></section>${founder}
  <section class="detail-section section"><div class="container"><p class="eyebrow"><span></span>What buyers need to know</p>${page.sections.map(section).join('')}</div></section>${pricing}${gallery}${dynamicGallery}
  <section class="inner-cta"><div class="container"><div><p class="eyebrow light"><span></span>Direct, structured enquiry</p><h2>Send the right details.<br><em>Get a more useful answer.</em></h2></div><a class="button button-gold" href="${whatsapp}" target="_blank" rel="noopener">Continue on WhatsApp <span>→</span></a></div></section>
</main>
<footer><div class="container footer-grid"><div><a class="brand footer-brand" href="index.html"><span class="brand-mark">K</span><span><strong>Khairpur</strong><small>Date Palm & Nursery</small></span></a><p>Authentic date palms, date products and evidence-backed service information.</p></div><div><h3>Products</h3><a href="date-palms.html">Date palms</a><a href="date-products.html">Date products</a><a href="wholesale-export.html">Wholesale</a></div><div><h3>Services</h3><a href="palm-supply-delivery.html">Supply & delivery</a><a href="palm-installation.html">Installation</a><a href="projects.html">Projects</a></div><div><h3>Contact</h3><a href="tel:+${business.phoneIntl}">${business.phone}</a><a href="mailto:${business.email}">${business.email}</a><span>${business.location}</span></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${business.name}</span><span>Rooted in Khairpur. Growing across Pakistan.</span></div></footer>
<a class="floating-wa" href="${whatsapp}" target="_blank" rel="noopener" aria-label="Start WhatsApp enquiry">◉ <span>WhatsApp enquiry</span></a><nav class="mobile-conversion" aria-label="Quick contact"><a href="tel:+${business.phoneIntl}"><span>Call us</span><strong>${business.phone}</strong></a><a href="${whatsapp}" target="_blank" rel="noopener"><span>WhatsApp</span><strong>Start enquiry</strong></a></nav><script src="script.js"></script>${page.mediaCategory ? '<script src="supabase-config.js"></script><script src="media-gallery.js"></script>' : ''}<script src="assistant.js"></script></body></html>`;
}

for (const page of pages) {
  writeFileSync(join(OUT_DIR, `${page.slug}.html`), versionAssets(pageTemplate(page)), 'utf8');
}

console.log(`Built ${pages.length} content pages into ${OUT_DIR}/`);