document.documentElement.classList.add('js-ready');

const siteHeader = document.querySelector('.site-header');
const menuToggleEl = document.querySelector('.menu-toggle');
if (siteHeader && menuToggleEl) {
  const shareButton = document.createElement('button');
  shareButton.type = 'button';
  shareButton.className = 'share-button';
  shareButton.setAttribute('aria-label', 'Share this page');
  shareButton.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.6" y1="10.5" x2="15.4" y2="6.5"></line><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"></line></svg>';
  siteHeader.insertBefore(shareButton, menuToggleEl);

  const closeShareMenu = () => document.querySelector('.share-menu')?.remove();

  shareButton.addEventListener('click', async () => {
    const shareData = { title: document.title, text: 'Khairpur Date Palm & Nursery', url: location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* user cancelled */ }
      return;
    }
    if (document.querySelector('.share-menu')) { closeShareMenu(); return; }
    const menu = document.createElement('div');
    menu.className = 'share-menu';
    menu.innerHTML = `
      <a href="https://wa.me/?text=${encodeURIComponent(`${shareData.text} ${shareData.url}`)}" target="_blank" rel="noopener">WhatsApp par bhejein</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}" target="_blank" rel="noopener">Facebook par share karein</a>
      <button type="button" data-copy>Link copy karein</button>
    `;
    siteHeader.appendChild(menu);
    menu.querySelector('[data-copy]').addEventListener('click', async () => {
      await navigator.clipboard.writeText(shareData.url);
      menu.querySelector('[data-copy]').textContent = 'Copy ho gaya ✓';
      setTimeout(closeShareMenu, 1200);
    });
    setTimeout(() => document.addEventListener('click', function onDocClick(event) {
      if (!menu.contains(event.target) && event.target !== shareButton) {
        closeShareMenu();
        document.removeEventListener('click', onDocClick);
      }
    }), 0);
  });
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const header = document.querySelector('[data-header]');
if (header) {
  const headerPoint = header.offsetTop + header.offsetHeight;
  addEventListener('scroll', () => header.classList.toggle('is-stuck', scrollY > headerPoint), { passive: true });
}

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold: 0.08 });
document.querySelectorAll('.reveal-section').forEach((section) => revealObserver.observe(section));

const purpose = document.querySelector('[name="purpose"]');
const product = document.querySelector('[name="product"]');
document.querySelectorAll('[data-purpose]').forEach((link) => link.addEventListener('click', () => { purpose.value = link.dataset.purpose; }));
document.querySelectorAll('[data-product]').forEach((control) => control.addEventListener('click', () => {
  if (product) product.value = control.dataset.product;
  if (control.tagName === 'BUTTON') document.querySelector('#quote').scrollIntoView({ behavior: 'smooth' });
}));

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  const status = document.createElement('p');
  status.className = 'form-status';
  status.setAttribute('aria-live', 'polite');
  quoteForm.append(status);
  quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) {
    status.textContent = 'Please required fields complete karein.';
    status.classList.add('error');
    return;
  }
  const data = Object.fromEntries(new FormData(quoteForm));
  const text = `Assalam-o-Alaikum, mujhe date palm quotation chahiye.\n\nNaam: ${data.name}\nLocation: ${data.location}\nPurpose: ${data.purpose}\nPalm: ${data.product}\nQuantity: ${data.quantity || 'Not decided'}\nInstallation: ${data.installation}\nDetails: ${data.message || '-'}`;
  status.textContent = 'WhatsApp khul raha hai...';
  status.classList.remove('error');
  if (window.dataLayer) window.dataLayer.push({ event: 'whatsapp_quote_start', purpose: data.purpose, product: data.product });
  window.open(`https://wa.me/923023111589?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const heroImage = document.querySelector('.hero-image');
if (heroImage && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const rotation = [
    'assets/khairpur-date-palm-hero.webp',
    'assets/date-orchard-editorial-v2.webp',
    'assets/farmhouse-palm-editorial.webp',
    'assets/young-palm-nursery-editorial.webp',
    'assets/real-palm-installation.webp',
  ].filter((src) => !heroImage.src.endsWith(src));
  rotation.forEach((src) => { new Image().src = src; });
  let index = 0;
  setInterval(() => {
    heroImage.style.opacity = '0';
    setTimeout(() => {
      heroImage.src = rotation[index];
      index = (index + 1) % rotation.length;
      heroImage.style.opacity = '1';
    }, 400);
  }, 7000);
}

(() => {
  const KEY = 'khairpur_build_version';
  const checkVersion = async () => {
    try {
      const res = await fetch('/version.json?cb=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) return;
      const { build } = await res.json();
      const stored = sessionStorage.getItem(KEY);
      if (stored === null) { sessionStorage.setItem(KEY, build); return; }
      if (String(stored) !== String(build)) location.reload();
    } catch { /* offline or blocked — ignore, cached copy still works */ }
  };
  checkVersion();
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') checkVersion(); });
  addEventListener('pageshow', (event) => { if (event.persisted) checkVersion(); });
})();
