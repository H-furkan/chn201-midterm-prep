import { h, speak, speakBtn, shuffle, store } from '../util.js';
import { pageHead, bar } from '../components.js';
import { grade, queue, mastery, nextDueIn } from '../srs.js';
import { VOCAB } from '../../data/vocab.js';

const MODES = {
  hanzi: { label: '汉字 → meaning', front: (w) => [h('div.big', { lang: 'zh-CN' }, w.h)] },
  english: { label: 'English → 汉字', front: (w) => [h('div.big.en', w.e)] },
  pinyin: { label: 'Pinyin → 汉字', front: (w) => [h('div.big.py', w.p)] },
  listen: { label: 'Listen → meaning', front: () => [h('div.big', '🎧'), h('div.en', 'Listen, then flip')] },
};

export function render(root) {
  let mode = store.get('fcMode', 'hanzi');
  let cram = false;
  let deck = [];
  let i = 0;
  let flipped = false;
  let stats = { again: 0, ok: 0 };

  const stage = h('div');
  const progress = h('div');
  const modeSel = h('select.select', { onchange: (e) => { mode = e.target.value; store.set('fcMode', mode); start(); } }, Object.entries(MODES).map(([k, m]) => h('option', { value: k, selected: k === mode }, m.label)));
  const summary = h('div.small.muted');

  function start() {
    const ws = VOCAB;
    deck = cram ? shuffle(ws).slice(0, 25) : queue(ws, { limit: 20 });
    i = 0;
    stats = { again: 0, ok: 0 };
    const m = mastery(ws);
    summary.textContent = `${m.known} mastered · ${m.learning} learning · ${m.fresh} new`;
    draw();
  }

  function draw() {
    flipped = false;
    progress.replaceChildren(h('div.row.between.small.muted', h('span', deck.length ? `Card ${Math.min(i + 1, deck.length)} of ${deck.length}` : ''), h('span', `✓ ${stats.ok} · ↺ ${stats.again}`)), bar(deck.length ? (i / deck.length) * 100 : 0));
    if (!deck.length) {
      const due = nextDueIn(VOCAB);
      stage.replaceChildren(h('div.card.empty', h('div', { style: { fontSize: '3rem' } }, '🎉'), h('h2', 'All caught up!'), due != null ? h('p', `Next review in about ${Math.max(1, Math.round(due / 60000))} min.`) : null, h('button.btn.primary', { type: 'button', onclick: () => { cram = true; start(); } }, '⚡ Practise random cards anyway')));
      return;
    }
    if (i >= deck.length) {
      stage.replaceChildren(h('div.card.empty', h('div', { style: { fontSize: '3rem' } }, '✅'), h('h2', 'Session complete'), h('p', `You knew ${stats.ok} and need more practice on ${stats.again}.`), h('div.row', { style: { justifyContent: 'center' } }, h('button.btn.primary', { type: 'button', onclick: () => { cram = false; start(); } }, 'Next session'), h('a.btn', { href: '#/vocab' }, 'Word list'))));
      return;
    }
    const w = deck[i];
    const back = [
      h('div.big', { lang: 'zh-CN', style: { fontSize: '4rem' } }, w.h),
      h('div.pin', w.p),
      h('div.en', w.e),
      h('div.small.muted', w.pos),
    ];
    const card = h('div.fc', { role: 'button', tabindex: 0, 'aria-label': 'Flip card', onclick: flip },
      h('div.fc-face.front', ...MODES[mode].front(w), h('div.hint', 'Click or press Space to flip')),
      h('div.fc-face.back', speakBtn(w.h), ...back),
    );
    const gradeRow = h('div.grade', { style: { visibility: 'hidden' } },
      gbtn('again', 'Again', '1 · forgot', 0),
      gbtn('', 'Hard', '2 · slow', 1),
      gbtn('good', 'Good', '3 · knew it', 2),
      gbtn('', 'Easy', '4 · instant', 3),
    );
    stage.replaceChildren(h('div.fc-stage', card), gradeRow, h('p.small.muted.center', { style: { marginTop: '10px' } }, h('kbd', 'Space'), ' flip · ', h('kbd', '1'), '–', h('kbd', '4'), ' grade'));
    if (mode === 'listen') speak(w.h);

    function flip() {
      flipped = !flipped;
      card.classList.toggle('flipped', flipped);
      gradeRow.style.visibility = flipped ? 'visible' : 'hidden';
      if (flipped && mode !== 'listen') speak(w.h);
    }
    stage.flip = flip;
  }

  function gbtn(cls, label, sub, g) {
    return h(`button.btn${cls ? '.' + cls : ''}`, { type: 'button', onclick: () => rate(g) }, label, h('small', sub));
  }

  function rate(g) {
    if (!flipped || i >= deck.length) return;
    const w = deck[i];
    grade(w.id, g);
    if (g === 0) {
      stats.again++;
      deck.push(w); // see it again this session
    } else stats.ok++;
    i++;
    draw();
  }

  const onKey = (e) => {
    if (e.target.closest('input, textarea, select')) return;
    if (e.code === 'Space' || e.key === 'Enter') {
      if (stage.flip) { e.preventDefault(); stage.flip(); }
    } else if (['1', '2', '3', '4'].includes(e.key)) rate(Number(e.key) - 1);
  };
  document.addEventListener('keydown', onKey);

  root.append(
    pageHead('Flashcards · 卡片', 'Spaced-repetition flashcards', 'Cards you miss come back quickly; cards you know wait longer. 20 cards per session — do a few sessions a day this week.'),
    h('div.toolbar', modeSel, h('span.spacer'), summary),
    h('div.fc-wrap', progress, stage),
  );
  start();
  return () => document.removeEventListener('keydown', onKey);
}
