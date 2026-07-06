document.documentElement.classList.add('js-ready');

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
