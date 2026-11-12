import { h, $, settings, saveSettings, stopSpeaking, toast } from './util.js';

const NAV = [
  { path: '/', icon: '首', label: 'Home', tab: true },
  { path: '/vocab', icon: '词', label: 'Vocabulary', tab: true, tabLabel: 'Words' },
  { path: '/flashcards', icon: '卡', label: 'Flashcards' },
  { path: '/grammar', icon: '法', label: 'Grammar' },
  { path: '/write', icon: '写', label: 'Handwriting' },
  { path: '/written', icon: '笔', label: 'Written exam', tab: true, tabLabel: 'Written' },
  { path: '/oral', icon: '说', label: 'Oral exam', tab: true, tabLabel: 'Oral' },
  { path: '/mock', icon: '考', label: 'Mock exam', tab: true, tabLabel: 'Mock' },
  { path: '/settings', icon: '设', label: 'Settings' },
];

const ROUTES = [
  [/^\/$/, () => import('./views/home.js')],
  [/^\/vocab$/, () => import('./views/vocab.js')],
  [/^\/flashcards$/, () => import('./views/flashcards.js')],
  [/^\/grammar(?:\/([\w-]+))?$/, () => import('./views/grammar.js')],
  [/^\/write$/, () => import('./views/handwriting.js')],
  [/^\/written(?:\/(\d))?$/, () => import('./views/written.js')],
  [/^\/oral(?:\/(\d))?$/, () => import('./views/oral.js')],
  [/^\/mock$/, () => import('./views/mock.js')],
  [/^\/settings$/, () => import('./views/settings.js')],
];

function buildNav() {
  const nav = $('#nav');
  const tab = $('#tabbar');
  for (const item of NAV) {
    nav.append(h('a', { href: `#${item.path}`, dataset: { path: item.path } }, h('span.ni', item.icon), item.label));
    if (item.tab) tab.append(h('a', { href: `#${item.path}`, dataset: { path: item.path } }, h('span.ti', item.icon), item.tabLabel || item.label));
  }
}

function markActive(path) {
  const best = NAV.filter((n) => n.path && (n.path === path || (n.path !== '/' && path.startsWith(n.path + '/')) || n.path === path))
    .sort((a, b) => b.path.length - a.path.length)[0];
  for (const a of document.querySelectorAll('#nav a, #tabbar a')) {
    const p = a.dataset.path;
    const on = best ? p === best.path || (a.closest('#tabbar') && p !== '/' && path.startsWith(p)) : false;
    a.classList.toggle('active', !!on);
  }
}

let cleanup = null;
let renderId = 0;

async function route() {
  const raw = location.hash.replace(/^#/, '') || '/';
  const [path, query = ''] = raw.split('?');
  const params = Object.fromEntries(new URLSearchParams(query));
  const app = $('#app');
  stopSpeaking();
  if (typeof cleanup === 'function') cleanup();
  cleanup = null;
  markActive(path);

  const match = ROUTES.map(([re, load]) => [path.match(re), load]).find(([m]) => m);
  const id = ++renderId;
  if (!match) {
    app.replaceChildren(h('div.empty', h('h2', '404 · 找不到'), h('p', 'This page does not exist.'), h('a.btn', { href: '#/' }, 'Go home')));
    return;
  }
  const [m, load] = match;
  try {
    const mod = await load();
    if (id !== renderId) return;
    const root = h('div');
    app.replaceChildren(root);
    cleanup = (await mod.render(root, { args: m.slice(1), params, path })) || null;
    $('#main').focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  } catch (err) {
    console.error(err);
    app.replaceChildren(h('div.empty', h('h2', 'Something went wrong'), h('pre.small', String(err && err.stack || err))));
  }
}

function applyTheme() {
  const t = settings().theme;
  const dark = t === 'dark' || (t === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  $('#toggle-theme').textContent = dark ? '☀︎' : '☾';
}

function applyPinyin() {
  document.documentElement.classList.toggle('hide-pinyin', !settings().pinyin);
}

function togglePinyin() {
  const s = saveSettings({ pinyin: !settings().pinyin });
  applyPinyin();
  toast(s.pinyin ? 'Pinyin shown' : 'Pinyin hidden — test yourself!');
}

buildNav();
applyTheme();
applyPinyin();
$('#toggle-theme').addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  saveSettings({ theme: dark ? 'light' : 'dark' });
  applyTheme();
});
$('#toggle-pinyin').addEventListener('click', togglePinyin);
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
document.addEventListener('keydown', (e) => {
  if (e.target.closest('input, textarea, select, [contenteditable]')) return;
  if (e.key === 'p' && !e.metaKey && !e.ctrlKey && !e.altKey) togglePinyin();
});
window.addEventListener('hashchange', route);
route();
