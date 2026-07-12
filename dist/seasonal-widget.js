/* Floating seasonal offer widget — Fresh Khalal Aseel Dates.
   Vanilla JS, no dependencies. Builds and injects its own markup so every
   page only needs one <link> and one <script> tag (see build.mjs / index.html).
   Behaviour:
   - First shows 5s after page load.
   - Closing it (X) suppresses the widget for 24 hours (localStorage).
   - After 24 hours it is free to show again, including mid-session if the
     tab is left open past the cooldown window. */
(() => {
  const STORAGE_KEY = 'khairpurSeasonalWidgetDismissedAt';
  const COOLDOWN_MS = 24 * 60 * 60 * 1000;
  const SHOW_DELAY_MS = 5000;
  const RECHECK_MS = 5 * 60 * 1000;

  const WHATSAPP_NUMBER = '923023111589';
  const WHATSAPP_MESSAGE = 'Assalam-o-Alaikum, mujhe Fresh Khalal Aseel Dates ke bare mein maloomat chahiye.';
  const PRODUCT_URL = 'date-products.html#fresh-aseel-dates';
  const PRODUCT_IMAGE = 'assets/khalal-aseel-dates.webp';

  const isSuppressed = () => {
    const stamp = Number(localStorage.getItem(STORAGE_KEY));
    return stamp && Date.now() - stamp < COOLDOWN_MS;
  };

  function build() {
    const aside = document.createElement('aside');
    aside.className = 'seasonal-widget';
    aside.id = 'seasonalWidget';
    aside.setAttribute('role', 'complementary');
    aside.setAttribute('aria-label', 'Seasonal offer: Fresh Khalal Aseel Dates');
    aside.hidden = true;

    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    aside.innerHTML = `
      <button type="button" class="seasonal-widget-close" aria-label="Close offer">&times;</button>
      <div class="seasonal-widget-media">
        <img src="${PRODUCT_IMAGE}" alt="Fresh Khalal Aseel dates from Khairpur, Sindh" loading="lazy" width="340" height="170">
        <span class="seasonal-badge seasonal-badge-harvest">🌴 Fresh Harvest</span>
      </div>
      <div class="seasonal-widget-body">
        <span class="seasonal-badge seasonal-badge-limited">⏳ Limited Seasonal Offer</span>
        <h3>Fresh Khalal Aseel Dates</h3>
        <p class="seasonal-widget-copy">Freshly harvested from our own farms in Khairpur, Sindh.</p>
        <ul class="seasonal-widget-checks">
          <li>100% Farm Fresh</li>
          <li>Naturally Sweet</li>
          <li>Crispy &amp; Juicy</li>
          <li>Handpicked Premium Quality</li>
        </ul>
        <p class="seasonal-widget-notice">Fresh Khalal Aseel Dates are available only during the Khalal season. Once the season ends, this fresh product won't be available again until the next harvest — order now before the season ends.</p>
        <div class="seasonal-widget-actions">
          <a class="button button-gold seasonal-widget-cta" href="${whatsappHref}" target="_blank" rel="noopener">Order on WhatsApp</a>
          <a class="seasonal-widget-link" href="${PRODUCT_URL}">View product <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>`;

    document.body.appendChild(aside);
    return aside;
  }

  function init() {
    const widget = build();
    const closeBtn = widget.querySelector('.seasonal-widget-close');
    let shownThisSession = false;

    const show = () => {
      if (isSuppressed()) return;
      widget.hidden = false;
      // A short setTimeout (rather than requestAnimationFrame) still fires
      // in background/inactive tabs, so the widget doesn't get stuck
      // invisible if it was scheduled while the tab wasn't in focus.
      setTimeout(() => widget.classList.add('is-visible'), 20);
      shownThisSession = true;
    };

    const dismiss = () => {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
      widget.classList.remove('is-visible');
      setTimeout(() => { widget.hidden = true; }, 450);
    };

    closeBtn.addEventListener('click', dismiss);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && widget.classList.contains('is-visible')) dismiss();
    });

    setTimeout(show, SHOW_DELAY_MS);

    // If the tab stays open past the cooldown window, let the widget
    // reappear without needing a page reload.
    setInterval(() => {
      if (!shownThisSession && !widget.classList.contains('is-visible')) show();
    }, RECHECK_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
