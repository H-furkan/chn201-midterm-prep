// Reusable UI pieces.
import { h, LETTERS } from './util.js';

export function pageHead(eyebrow, title, desc, crumbs) {
  return h(
    'header.page-head',
    crumbs ? h('div.crumbs', crumbs.map(([label, href], i) => [i ? ' / ' : '', href ? h('a', { href }, label) : label])) : null,
    eyebrow ? h('div.eyebrow', eyebrow) : null,
    h('h1', title),
    desc ? h('p', desc) : null,
  );
}

export function bar(pct, cls = '') {
  return h(`div.bar${cls}`, h('span', { style: { width: `${Math.max(0, Math.min(100, pct))}%` } }));
}

/**
 * Word bank + drop slots (exam parts 1 and 2). Drag a chip onto a blank with mouse or finger,
 * or tap a chip and then tap a blank. Each chip fits one blank; dropping onto a filled blank
 * swaps the two chips (or sends the old one back to the bank). Drag a placed chip back to the
 * bank, or tap it, to remove it.
 * options: [{ value, label }]. Returns { bank, slots, value(i), lock(), mark(i, ok) }.
 */
export function dropBoard(options, slotCount, { onChange } = {}) {
  const place = Array(slotCount).fill(null); // slot index -> option index
  let picked = null; // option index chosen by tap, waiting for a blank
  let locked = false;

  const chip = (oi) => h('button.tok.dnd', {
    type: 'button',
    'aria-label': `${LETTERS[oi]}: ${options[oi].label}`,
    onpointerdown: (e) => startDrag(oi, e),
    onclick: (e) => { if (e.detail === 0) tap(oi); }, // keyboard activation
  }, h('span.tl', LETTERS[oi]), options[oi].label);

  const bankChips = options.map((_, oi) => chip(oi));
  const bank = h('div.bank.dnd-bank', bankChips);
  const slots = Array.from({ length: slotCount }, (_, si) => h('span.slot', {
    role: 'button',
    tabindex: 0,
    'aria-label': `Blank ${si + 1}`,
    onclick: (e) => { if (!e.target.closest('.tok') && picked != null && !locked) put(picked, si); },
    onkeydown: (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget && picked != null && !locked) { e.preventDefault(); put(picked, si); } },
  }));

  function draw() {
    const used = new Set(place.filter((x) => x != null));
    bankChips.forEach((c, oi) => {
      c.classList.toggle('used', used.has(oi));
      c.classList.toggle('picked', picked === oi);
      c.disabled = locked;
    });
    slots.forEach((s, si) => {
      const oi = place[si];
      s.classList.toggle('filled', oi != null);
      s.classList.toggle('ready', picked != null && !locked);
      const c = oi != null ? chip(oi) : null;
      if (c) c.disabled = locked;
      s.replaceChildren(...(c ? [c] : []));
    });
  }

  function put(oi, si) {
    const from = place.indexOf(oi);
    if (si == null) {
      if (from >= 0) place[from] = null;
    } else if (from !== si) {
      const prev = place[si];
      place[si] = oi;
      if (from >= 0) place[from] = prev; // swap between blanks; from the bank, prev returns to the bank
    }
    picked = null;
    draw();
    onChange?.();
  }

  function tap(oi) {
    if (locked) return;
    const at = place.indexOf(oi);
    if (at >= 0) {
      if (picked != null && picked !== oi) put(picked, at); // tap a placed chip with another chip selected: replace it
      else put(oi, null); // tap a placed chip: send it back
      return;
    }
    picked = picked === oi ? null : oi;
    draw();
  }

  function targetAt(x, y) {
    const el = document.elementFromPoint(x, y);
    const slot = el?.closest('.slot');
    if (slot && slots.includes(slot)) return slot;
    return el?.closest('.dnd-bank') === bank ? bank : null;
  }

  function startDrag(oi, e) {
    if (locked || e.button > 0) return;
    const src = e.currentTarget;
    const sx = e.clientX;
    const sy = e.clientY;
    let ghost = null;
    const move = (ev) => {
      if (!ghost) {
        if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 6) return;
        ghost = src.cloneNode(true);
        ghost.classList.add('drag-ghost');
        document.body.append(ghost);
        src.classList.add('dragging');
      }
      ev.preventDefault();
      ghost.style.left = `${ev.clientX}px`;
      ghost.style.top = `${ev.clientY}px`;
      const t = targetAt(ev.clientX, ev.clientY);
      slots.forEach((s) => s.classList.toggle('over', s === t));
      if (ev.clientY < 70) window.scrollBy(0, -14);
      else if (ev.clientY > window.innerHeight - 70) window.scrollBy(0, 14);
    };
    const end = (ev) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      if (!ghost) {
        if (ev.type === 'pointerup') tap(oi);
        return;
      }
      ghost.remove();
      src.classList.remove('dragging');
      slots.forEach((s) => s.classList.remove('over'));
      if (ev.type !== 'pointerup') return;
      const t = targetAt(ev.clientX, ev.clientY);
      if (t === bank) put(oi, null);
      else if (t) put(oi, slots.indexOf(t));
    };
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
  }

  draw();
  return {
    bank,
    slots,
    value: (si) => (place[si] == null ? null : options[place[si]].value),
    lock() {
      locked = true;
      picked = null;
      bank.classList.add('locked');
      draw();
    },
    mark(si, ok) {
      slots[si].classList.add(ok ? 'correct' : 'wrong');
    },
  };
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
