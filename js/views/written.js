import { h, store, logResult } from '../util.js';
import { pageHead, bar } from '../components.js';
import { PARTS, BUILDERS } from '../drills.js';
import { makeComposition, compositionTips } from '../compose.js';

const CN_NUM = '一二三四五六七八九';

function best(kind) {
  const rs = store.get('results', []).filter((r) => r.kind === kind);
  if (!rs.length) return null;
  return Math.max(...rs.map((r) => Math.round((r.score / r.max) * 100)));
}

export function render(root, { args }) {
  const n = Number(args[0]);
  if (!n) return hub(root);
  const part = PARTS.find((p) => p.n === n);
  if (!part) {
    root.append(h('div.empty', 'Unknown part.'));
    return;
  }
  return n === 9 ? composition(root, part) : drill(root, part);
}

function hub(root) {
  root.append(
    pageHead('Written exam · 笔试', 'Drill every part of the paper', 'Each drill copies the format of the sample midterm (120 min, 100 points). Pick a part, answer the whole set, then press Check. Sets are random every time — repeat until you hit 100%.'),
    h('div.grid.g3', PARTS.map((p) => {
      const b = best(`p${p.n}`);
      return h('a.tile', { href: `#/written/${p.n}` },
        h('span.tp', h('span.tag.accent', `${p.pts} pts`)),
        h('span.tc', CN_NUM[p.n - 1]),
        h('span.tt', h('span.hz', p.zh)),
        h('span.td', `${p.en} — ${p.desc}`),
        b != null ? h('div', { style: { marginTop: '6px' } }, h('div.small.muted', `Best: ${b}%`), bar(b, '.jade')) : h('span.small.muted', { style: { marginTop: '6px' } }, 'Not tried yet'),
      );
    })),
    h('div.card', { style: { marginTop: '20px' } }, h('h3', 'Ready for the real thing?'), h('p.muted', 'The mock exam puts all nine parts together with a 120-minute timer and a score out of 100.'), h('a.btn.primary', { href: '#/mock' }, 'Start a mock exam →')),
  );
}

function drill(root, part) {
  const holder = h('div');
  const banner = h('div');
  const checkBtn = h('button.btn.primary', { type: 'button' }, 'Check answers');
  const newBtn = h('button.btn', { type: 'button' }, '↻ New set');
  let cur = null;
  let checked = false;

  function update() {
    if (!checked || !cur) return;
    const r = cur.result();
    const pct = Math.round((r.score / r.max) * 100);
    banner.replaceChildren(
      h('div.score-banner',
        h('div.big', `${r.score}/${r.max}`),
        h('div', { style: { flex: 1 } },
          h('div', h('b', pct === 100 ? '满分！Perfect!' : pct >= 80 ? '很好！Great work.' : pct >= 50 ? '不错 — keep going.' : '加油！Review and try again.')),
          r.pending ? h('div.small.muted', `Mark yourself on ${r.pending} item${r.pending > 1 ? 's' : ''} below to finish scoring.`) : h('div.small.muted', 'Scroll down to see corrections.'),
          bar(pct, '.jade'),
        ),
      ),
    );
  }

  function fresh() {
    checked = false;
    banner.replaceChildren();
    const b = BUILDERS[part.n];
    const data = b.gen();
    cur = b.make(data, { onChange: update });
    holder.replaceChildren(h('div.card', cur.el));
    checkBtn.disabled = false;
    checkBtn.textContent = 'Check answers';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  checkBtn.addEventListener('click', () => {
    if (checked) return;
    checked = true;
    cur.check();
    checkBtn.disabled = true;
    checkBtn.textContent = 'Checked';
    update();
    const r = cur.result();
    if (!cur.selfGraded) logResult(`p${part.n}`, r.score, r.max);
    else {
      // log self-graded parts once every item is marked
      const iv = setInterval(() => {
        if (!cur || !checked) return clearInterval(iv);
        const x = cur.result();
        if (!x.pending) {
          logResult(`p${part.n}`, x.score, x.max);
          clearInterval(iv);
        }
      }, 800);
    }
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  newBtn.addEventListener('click', fresh);

  root.append(
    pageHead(`Part ${part.n} · ${part.pts} points`, h('span', h('span.hz', part.zh), ' ', h('span.muted', { style: { fontWeight: 600 } }, `· ${part.en}`)), part.desc, [['Written', '#/written'], [`Part ${part.n}`]]),
    banner,
    holder,
    h('div.sticky-actions', h('a.btn.ghost', { href: part.n > 1 ? `#/written/${part.n - 1}` : '#/written' }, '←'), h('span.spacer'), newBtn, checkBtn, h('a.btn.ghost', { href: part.n < 9 ? `#/written/${part.n + 1}` : '#/mock' }, '→')),
  );
  fresh();
}

function composition(root, part) {
  const comp = makeComposition({});
  const fb = h('div');
  root.append(
    pageHead(`Part 9 · ${part.pts} points (+2 bonus)`, h('span', h('span.hz', '作文'), h('span.muted', { style: { fontWeight: 600 } }, ' · Composition')), 'In the exam the topic is given as “Write a composition introducing (____)”. Practise the likely topics: write 100+ words, use as many Hanzi as you can (≥20% earns up to +2), then compare with the model.', [['Written', '#/written'], ['Part 9']]),
    h('div.card', comp.el, fb),
    h('div', { style: { marginTop: '16px' } }, compositionTips()),
    h('div.sticky-actions', h('a.btn.ghost', { href: '#/written/8' }, '←'), h('span.spacer'), h('button.btn.primary', { type: 'button', onclick: (e) => { comp.check(); e.target.disabled = true; } }, 'Finish & self-mark')),
  );
}
