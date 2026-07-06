import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';

const files = readdirSync('.').filter((file) => file.endsWith('.html'));
const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

const addUnique = (map, value, file, label) => {
  if (!value) return errors.push(`${file}: missing ${label}`);
  if (map.has(value)) errors.push(`${file}: duplicate ${label} also used by ${map.get(value)}`);
  map.set(value, file);
};

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]?.trim();
  addUnique(titles, title, file, 'title');
  addUnique(descriptions, description, file, 'meta description');

  const h1Count = (html.match(/<h1[ >]/g) || []).length;
  if (h1Count !== 1) errors.push(`${file}: expected one h1, found ${h1Count}`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) errors.push(`${file}: duplicate ids ${[...new Set(duplicateIds)].join(', ')}`);

  for (const match of html.matchAll(/<(?:a|link|script|img)[^>]+(?:href|src)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(?:https?:|tel:|mailto:|#)/.test(ref)) continue;
    const path = ref.split('#')[0].split('?')[0];
    if (path && !existsSync(path)) errors.push(`${file}: missing local reference ${path}`);
  }

  for (const match of html.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(match[0])) errors.push(`${file}: image missing alt`);
    if (!/\swidth="\d+"/.test(match[0]) || !/\sheight="\d+"/.test(match[0])) warnings.push(`${file}: image missing explicit dimensions`);
  }

  for (const match of html.matchAll(/<a\s[^>]*target="_blank"[^>]*>/g)) {
    if (!/rel="[^"]*noopener/.test(match[0])) errors.push(`${file}: target blank link missing noopener`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { errors.push(`${file}: invalid JSON-LD`); }
  }
}

const usedAssets = new Set();
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)) usedAssets.add(match[1]);
}
const usedBytes = [...usedAssets].reduce((total, asset) => total + (existsSync(asset) ? statSync(asset).size : 0), 0);

console.log(JSON.stringify({ pages: files.length, uniqueTitles: titles.size, uniqueDescriptions: descriptions.size, usedAssets: usedAssets.size, usedAssetKB: Math.round(usedBytes / 1024), errors, warnings }, null, 2));
if (errors.length) process.exit(1);
