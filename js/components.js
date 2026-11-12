// Reusable UI pieces.
import { h, settings, saveSettings } from './util.js';
import { LESSONS } from '../data/vocab.js';

export function pageHead(eyebrow, title, desc, crumbs) {
  return h(
    'header.page-head',
    crumbs ? h('div.crumbs', crumbs.map(([label, href], i) => [i ? ' / ' : '', href ? h('a', { href }, label) : label])) : null,
    eyebrow ? h('div.eyebrow', eyebrow) : null,
    h('h1', title),
    desc ? h('p', desc) : null,
  );
}

/** Lesson filter chips bound to settings.lessons. Calls onChange(selectedIds). */
export function lessonChips(onChange, { ids = LESSONS.map((l) => l.id) } = {}) {
  const wrap = h('div.chips', { role: 'group', 'aria-label': 'Lessons' });
  const draw = () => {
    const sel = new Set(settings().lessons);
    wrap.replaceChildren(
      h('button.chip', { type: 'button', onclick: () => set(ids.every((i) => sel.has(i)) ? [] : ids) }, ids.every((i) => sel.has(i)) ? 'None' : 'All'),
      ...LESSONS.filter((l) => ids.includes(l.id)).map((l) =>
        h(
          `button.chip${sel.has(l.id) ? '.on' : ''}`,
          { type: 'button', title: `${l.title} — ${l.en}`, 'aria-pressed': String(sel.has(l.id)), onclick: () => set(sel.has(l.id) ? [...sel].filter((x) => x !== l.id) : [...sel, l.id]) },
          h('span.sw', { style: { background: `var(--${l.color})` } }),
          l.short,
        ),
      ),
    );
  };
  const set = (arr) => {
    saveSettings({ lessons: arr });
    draw();
    onChange?.(arr);
  };
  draw();
  return wrap;
}

/** Filter a pool by the selected lessons; fall back to the whole pool if the filter leaves fewer than `min`. */
export function byLessons(pool, min = 1) {
  const sel = new Set(settings().lessons);
  const f = pool.filter((x) => sel.has(String(x.l)));
  return f.length >= min ? f : pool;
}

export function ring(pct, label, color = 'var(--accent)') {
  return h('div.ring', { style: { '--v': Math.round(pct), '--c': color } }, h('span', label ?? `${Math.round(pct)}%`));
}

export function bar(pct, cls = '') {
  return h(`div.bar${cls}`, h('span', { style: { width: `${Math.max(0, Math.min(100, pct))}%` } }));
}

/** 0..max self-assessment chips. */
export function selfGrade(max, onChange, label = 'Your mark:') {
  let val = null;
  const wrap = h('div.self-grade', h('span.small.muted', label));
  const chips = [];
  for (let i = 0; i <= max; i++) {
    const c = h('button.chip', { type: 'button', onclick: () => { val = i; chips.forEach((x, j) => x.classList.toggle('on', j === i)); onChange?.(i); } }, `${i}`);
    chips.push(c);
    wrap.append(c);
  }
  wrap.value = () => val;
  return wrap;
}

export function feedback(kind, ...kids) {
  return h(`div.feedback.${kind}`, ...kids);
}

/** A 田字格 grid SVG behind handwriting canvases. */
export function gridSvg(size) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'grid');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  const lines = [
    [0, 0, size, size], [size, 0, 0, size], [size / 2, 0, size / 2, size], [0, size / 2, size, size / 2],
  ];
  for (const [x1, y1, x2, y2] of lines) {
    const l = document.createElementNS(ns, 'line');
    Object.entries({ x1, y1, x2, y2, stroke: 'var(--line)', 'stroke-dasharray': '4 4', 'stroke-width': 1 }).forEach(([k, v]) => l.setAttribute(k, v));
    svg.append(l);
  }
  return svg;
}

/** Inline HanziWriter quiz for a string of characters. */
export function writePad(text, { size = 200 } = {}) {
  const chars = [...text].filter((c) => /[\u4e00-\u9fff]/.test(c));
  const wrap = h('div.stack');
  const status = h('div.small.muted.center');
  const pads = h('div.row', { style: { justifyContent: 'center' } });
  wrap.append(pads, status);
  if (!window.HanziWriter) {
    status.textContent = 'Handwriting needs an internet connection (loading the stroke data library).';
    return wrap;
  }
  const dark = document.documentElement.dataset.theme === 'dark';
  chars.forEach((ch) => {
    const box = h('div.hw-target', { style: { width: `${size}px`, height: `${size}px` } });
    box.append(gridSvg(size));
    const target = h('div');
    box.append(target);
    pads.append(box);
    const w = window.HanziWriter.create(target, ch, {
      width: size, height: size, padding: 12, showCharacter: false, showOutline: true,
      strokeColor: dark ? '#f2ece2' : '#1d1a16', outlineColor: dark ? '#352e27' : '#e6ded1',
      drawingColor: dark ? '#ec6a55' : '#c8402f', highlightColor: '#23806a', drawingWidth: 22,
      onLoadCharDataError: () => { status.textContent = `Could not load stroke data for ${ch}.`; },
    });
    w.quiz({
      showHintAfterMisses: 2,
      onComplete: ({ totalMistakes }) => {
        status.textContent = totalMistakes === 0 ? `${ch} — perfect! 很好！` : `${ch} — done with ${totalMistakes} mistake${totalMistakes > 1 ? 's' : ''}.`;
      },
    });
  });
  status.textContent = 'Write each character stroke by stroke. Hints appear after 2 misses.';
  return wrap;
}
