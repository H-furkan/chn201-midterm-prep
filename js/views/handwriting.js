import { h, speakBtn, zh } from '../util.js';
import { pageHead, gridSvg } from '../components.js';
import { VOCAB } from '../../data/vocab.js';

const SIZE = 280;

export function render(root) {
  let chars = [];
  let cur = null;
  let writer = null;
  let modeTest = false;
  const list = h('div.hw-chars');
  const boxHolder = h('div');
  const info = h('div.stack');
  const status = h('div.small.muted.center', { style: { minHeight: '1.5em' } });
  const testBtn = h('button.chip', { type: 'button', onclick: () => { modeTest = !modeTest; testBtn.classList.toggle('on', modeTest); show(cur); } }, '🙈 Test mode (no outline)');

  function collect() {
    const seen = new Map();
    for (const w of VOCAB) {
      for (const c of w.h) {
        if (!/[\u4e00-\u9fff]/.test(c)) continue;
        if (!seen.has(c)) seen.set(c, []);
        seen.get(c).push(w);
      }
    }
    return [...seen.entries()].map(([c, words]) => ({ c, words }));
  }

  function drawList() {
    chars = collect();
    list.replaceChildren(...chars.map((x) => h(`button.tok${cur?.c === x.c ? '.on' : ''}`, { type: 'button', lang: 'zh-CN', onclick: () => show(x) }, x.c)));
    if (!cur || !chars.some((x) => x.c === cur.c)) show(chars[0]);
  }

  function show(x) {
    if (!x) {
      boxHolder.replaceChildren(h('div.empty', 'No characters.'));
      return;
    }
    cur = x;
    [...list.children].forEach((b) => b.classList.toggle('on', b.textContent === x.c));
    const box = h('div.hw-target', { style: { width: `${SIZE}px`, height: `${SIZE}px` } }, gridSvg(SIZE));
    const target = h('div');
    box.append(target);
    boxHolder.replaceChildren(box);
    status.textContent = '';
    if (!window.HanziWriter) {
      status.textContent = 'Handwriting library is still loading (needs internet). Try again in a moment.';
      return;
    }
    const dark = document.documentElement.dataset.theme === 'dark';
    writer = window.HanziWriter.create(target, x.c, {
      width: SIZE, height: SIZE, padding: 16, showCharacter: false, showOutline: !modeTest,
      strokeColor: dark ? '#f2ece2' : '#1d1a16', outlineColor: dark ? '#3a332b' : '#e6ded1', drawingColor: dark ? '#ec6a55' : '#c8402f',
      highlightColor: '#23806a', drawingWidth: 24, strokeAnimationSpeed: 1.2, delayBetweenStrokes: 180,
      onLoadCharDataError: () => { status.textContent = 'Could not load stroke data (offline?).'; },
    });
    quiz();
    info.replaceChildren(
      h('div.row', h('span.hz-big', { style: { fontSize: '3rem' } }, x.c), speakBtn(x.c)),
      h('div.small.muted', 'Appears in:'),
      ...x.words.slice(0, 6).map((w) => h('div.ex', { style: { padding: '6px 0' } }, zh(w.h, w.p, w.e, { speak: true }))),
    );
  }

  function quiz() {
    writer.quiz({
      showHintAfterMisses: modeTest ? 3 : 2,
      onMistake: () => { status.textContent = 'Not quite — check the stroke order.'; },
      onCorrectStroke: ({ strokesRemaining }) => { status.textContent = strokesRemaining ? `${strokesRemaining} stroke${strokesRemaining > 1 ? 's' : ''} left` : ''; },
      onComplete: ({ totalMistakes }) => { status.textContent = totalMistakes ? `Done with ${totalMistakes} mistake${totalMistakes > 1 ? 's' : ''}. Try again or move on.` : '完美！Perfect — next one →'; },
    });
  }

  function step(d) {
    const i = chars.findIndex((x) => x.c === cur?.c);
    show(chars[(i + d + chars.length) % chars.length]);
  }

  root.append(
    pageHead('Handwriting · 写汉字', 'Write characters stroke by stroke', 'Part 8 of the exam asks you to WRITE characters by hand, and Hanzi in your composition earns bonus points. Draw on the grid with your finger or mouse — wrong strokes are rejected so you learn correct stroke order.'),
    h('div.grid.g2', { style: { alignItems: 'start' } },
      h('div.card.stack',
        boxHolder,
        status,
        h('div.row', { style: { justifyContent: 'center' } },
          h('button.btn.sm', { type: 'button', onclick: () => step(-1) }, '←'),
          h('button.btn.sm', { type: 'button', onclick: () => writer?.animateCharacter({ onComplete: () => quiz() }) }, '▶ Show stroke order'),
          h('button.btn.sm', { type: 'button', onclick: () => { writer?.hideCharacter(); quiz(); } }, '↺ Retry'),
          h('button.btn.sm.primary', { type: 'button', onclick: () => step(1) }, 'Next →'),
        ),
        h('div.row', { style: { justifyContent: 'center' } }, testBtn),
      ),
      h('div.card', info),
    ),
    h('div.card', { style: { marginTop: '16px' } }, h('h3', 'All exam characters'), list),
  );
  // HanziWriter loads with `defer`; wait for it if needed.
  if (window.HanziWriter || document.readyState === 'complete') drawList();
  else window.addEventListener('load', drawList, { once: true });
}
