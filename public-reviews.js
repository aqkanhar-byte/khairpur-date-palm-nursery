(() => {
  const grid = document.querySelector('[data-public-reviews]');
  if (!grid) return;
  const section = grid.closest('section');
  const esc = (value) => String(value || '').replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
  const stars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);
  async function fetchReviews() {
    const config = window.KHAIRPUR_SUPABASE;
    if (!config?.url || !config?.anonKey) return [];
    const url = `${config.url}/rest/v1/reviews?select=customer_name,rating,review_text,created_at&published=eq.true&order=created_at.desc&limit=12`;
    const response = await fetch(url, { headers: { apikey: config.anonKey, Authorization: `Bearer ${config.anonKey}` } });
    if (!response.ok) return [];
    return response.json();
  }
  function markup(items) {
    return items
      .map(
        (item) =>
          `<figure class="review-item"><span class="review-item-stars">${stars(item.rating)}</span><blockquote>${esc(item.review_text)}</blockquote><figcaption>${esc(item.customer_name)}</figcaption></figure>`
      )
      .join('');
  }
  fetchReviews()
    .then((items) => {
      if (!items.length) return;
      grid.innerHTML = markup(items);
      if (section) section.hidden = false;
    })
    .catch(() => {});
})();
