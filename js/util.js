// DOM, storage, randomness, speech and pinyin helpers shared by all views.

/** Hyperscript: h('div.card#id', {onclick}, child, [children], 'text') */
export function h(sel, attrs, ...kids) {
  if (attrs == null || typeof attrs !== 'object' || attrs instanceof Node || Array.isArray(attrs)) {
    kids.unshift(attrs);
    attrs = {};
  }
  const [, tag = 'div', rest = ''] = sel.match(/^([a-z0-9-]*)(.*)$/i);
  const el = document.createElement(tag || 'div');
  for (const part of rest.match(/[.#][^.#]+/g) || []) {
    if (part[0] === '.') el.classList.add(part.slice(1));
    else el.id = part.slice(1);
  }
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else if (k === 'class') el.className += (el.className ? ' ' : '') + v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (k in el && k !== 'list' && k !== 'form') el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  append(el, kids);
  return el;
}

function append(el, kids) {
  for (const k of kids) {
    if (k == null || k === false) continue;
    if (Array.isArray(k)) append(el, k);
    else el.append(k instanceof Node ? k : String(k));
  }
}

export const $ = (s, root = document) => root.querySelector(s);
export const $$ = (s, root = document) => [...root.querySelectorAll(s)];

// ---------- storage ----------
const PREFIX = 'chn201:';
export const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(PREFIX + key);
      return v == null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {
      /* storage full or disabled: progress just won't persist */
    }
  },
  update(key, fallback, fn) {
    const next = fn(store.get(key, fallback));
    store.set(key, next);
    return next;
  },
};

export function settings() {
  return { theme: 'auto', pinyin: true, speed: 1, voice: 'natural', ...store.get('settings', {}) };
}
export function saveSettings(patch) {
  const s = { ...settings(), ...patch };
  store.set('settings', s);
  return s;
}

/** Record a practice result: kind = 'p1'..'p9', 'oral1'.. ; score/max */
export function logResult(kind, score, max) {
  store.update('results', [], (arr) => {
    arr.push({ kind, score, max, t: Date.now() });
    return arr.slice(-400);
  });
}

// ---------- random ----------
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export const sample = (arr, n) => shuffle(arr).slice(0, n);
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const LETTERS = 'ABCDEFGHIJKLMNOP';

// ---------- text ----------
/** Strip punctuation/whitespace for answer comparison. */
export function norm(s) {
  return String(s || '')
    .replace(/[\s，。？！、：；“”‘’"'（）()…,.?!:;·\-—~～]/g, '')
    .toLowerCase();
}
export const hasHanzi = (s) => /[\u4e00-\u9fff]/.test(s || '');
export const countHanzi = (s) => (String(s || '').match(/[\u4e00-\u9fff]/g) || []).length;

/** Pinyin + hanzi + english block, respecting the global pinyin toggle. */
export function zh(h1, p, e, { speak: withSpeak = false, big = false, keepPinyin = false } = {}) {
  const line = h('span.zh-line', h('span.h', { lang: 'zh-CN', style: big ? { fontSize: '1.5em' } : null }, h1), p ? h(`span.p${keepPinyin ? '.keep' : ''}`, p) : null, e ? h('span.e', e) : null);
  if (!withSpeak) return line;
  return h('div.row', { style: { flexWrap: 'nowrap', alignItems: 'flex-start' } }, speakBtn(h1), line);
}

// ---------- speech ----------
let zhVoice = null;
let voicesLoaded = false;
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return;
  voicesLoaded = true;
  const zhs = voices.filter((v) => /^zh(-|_)?(CN|Hans)?/i.test(v.lang) && !/HK|TW|yue/i.test(v.lang));
  // Prefer neural/online voices (Edge "Xiaoxiao Online (Natural)", Chrome "Google 普通话") over older system voices.
  const pref = ['Xiaoxiao', 'Yunxi', 'Natural', 'Google 普通话', 'Google', 'Tingting', 'Ting-Ting', 'Lili', 'Meijia'];
  zhVoice = pref.map((n) => zhs.find((v) => v.name.includes(n))).find(Boolean) || zhs[0] || voices.find((v) => /^zh/i.test(v.lang)) || null;
}
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
export const canSpeak = () => 'speechSynthesis' in window;
export const hasZhVoice = () => !!zhVoice || !voicesLoaded;

// Pre-recorded neural-voice audio (audio/manifest.json maps text -> mp3; see tools/gen_audio.py).
const AUDIO_BASE = new URL('../audio/', import.meta.url);
let manifest = {};
const manifestReady = fetch(new URL('manifest.json', AUDIO_BASE))
  .then((r) => (r.ok ? r.json() : {}))
  .then((m) => (manifest = m))
  .catch(() => {});
export const hasRecording = (text) => !!manifest[text];

let currentAudio = null;
let current = null; // active SpeechSynthesisUtterance
let gen = 0; // playback generation; bumped by every speak()/stopSpeaking()
let pending = null; // resolver of the active playback

function settle(completed) {
  const p = pending;
  pending = null;
  p?.(completed);
}

/**
 * Speak Chinese text: recorded natural voice when available, browser TTS otherwise.
 * Resolves `true` when it played to the end, `false` when interrupted (another clip,
 * stopSpeaking(), navigation) — sequences must stop on `false`.
 */
export async function speak(text, { onend } = {}) {
  stopSpeaking();
  const token = gen;
  await manifestReady;
  if (token !== gen) return false; // superseded while the manifest loaded
  const s = settings();
  const file = s.voice !== 'browser' && manifest[text];
  const done = await (file ? playFile(text, file, s.speed) : ttsSpeak(text, s.speed));
  onend?.();
  return done;
}

function playFile(text, file, speed) {
  const a = new Audio(new URL(file, AUDIO_BASE));
  a.playbackRate = speed;
  a.preservesPitch = true;
  currentAudio = a;
  return new Promise((resolve) => {
    pending = resolve;
    a.onended = () => { if (currentAudio === a) { currentAudio = null; settle(true); } };
    // Missing file / decode error: fall back to the browser voice for this clip.
    a.onerror = () => {
      if (currentAudio !== a) return;
      currentAudio = null;
      pending = null;
      ttsSpeak(text, speed).then(resolve);
    };
    a.play().catch(() => { if (currentAudio === a) { currentAudio = null; settle(false); } });
  });
}

function ttsSpeak(text, speed) {
  if (!canSpeak()) {
    toast('Speech is not supported in this browser');
    return Promise.resolve(false);
  }
  const u = new SpeechSynthesisUtterance(String(text).replace(/_{2,}/g, '……'));
  u.lang = 'zh-CN';
  if (zhVoice) u.voice = zhVoice;
  u.rate = 0.85 * speed; // system voices are fast; 0.85 ≈ the recorded audio's pace
  current = u;
  return new Promise((resolve) => {
    pending = resolve;
    // Handlers of a cancelled utterance fire late; only the current one may settle.
    u.onend = () => { if (current === u) { current = null; settle(true); } };
    u.onerror = () => { if (current === u) { current = null; settle(false); } };
    speechSynthesis.speak(u);
  });
}

/** Play clips in order with a pause between them; stops (returns false) as soon as anything else plays or stops. */
export async function speakSequence(texts, gapMs = 400) {
  for (let i = 0; i < texts.length; i++) {
    if (!(await speak(texts[i]))) return false;
    if (i < texts.length - 1) {
      const g = gen;
      await new Promise((r) => setTimeout(r, gapMs));
      if (g !== gen) return false;
    }
  }
  return true;
}

export function stopSpeaking() {
  gen++;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  current = null;
  if (canSpeak()) speechSynthesis.cancel();
  settle(false);
}

export function speakBtn(text, label = 'Listen') {
  const b = h('button.speak', { type: 'button', title: label, 'aria-label': `${label}: ${text}` }, '▶');
  b.addEventListener('click', async (ev) => {
    ev.stopPropagation();
    b.classList.add('playing');
    await speak(text);
    b.classList.remove('playing');
  });
  return b;
}

// ---------- toast ----------
let toastTimer;
export function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/** Count syllables in a pinyin/hanzi mixed text (composition "word" count). */
export function compositionStats(text) {
  const hanzi = countHanzi(text);
  const latin = String(text || '')
    .replace(/[\u4e00-\u9fff]/g, ' ')
    .match(/[a-zA-ZāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüĀÁǍÀĒÉĚÈĪÍǏÌŌÓǑÒŪÚǓÙ']+/g) || [];
  // A pinyin "word" like "xuésheng" counts as its syllables (vowel groups).
  const sylls = latin.reduce((n, w) => n + Math.max(1, (w.match(/[aeiouüāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+/gi) || []).length), 0);
  const total = hanzi + sylls;
  return { hanzi, sylls, total, pct: total ? Math.round((hanzi / total) * 100) : 0 };
}

export function fmtTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
