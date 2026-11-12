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
    pageHead('笔试', 'Written exam', 'Each part is practised in the same format as the sample paper. Answer the whole set, then check it. You get new questions every time.'),
    h('div.grid.g3', PARTS.map((p) => {
      const b = best(`p${p.n}`);
      return h('a.tile', { href: `#/written/${p.n}` },
        h('span.tp', `${p.pts} points`),
        h('span.tc', CN_NUM[p.n - 1]),
        h('span.tt.hz', p.zh),
        h('span.td', p.en),
        b != null ? h('div', { style: { marginTop: 'auto', paddingTop: '8px' } }, h('div.small.muted', `Best: ${b}%`), bar(b, '.jade')) : null,
      );
    })),
    h('div.row.between', { style: { marginTop: '22px', padding: '18px 0', borderTop: '1px solid var(--rule)' } }, h('p.muted', { style: { margin: 0 } }, 'All nine parts together, timed, scored out of 100.'), h('a.btn.primary', { href: '#/mock' }, 'Start a mock exam')),
  );
}

function drill(root, part) {
  const holder = h('div');
  const banner = h('div');
  const checkBtn = h('button.btn.primary', { type: 'button' }, 'Check answers');
  const newBtn = h('button.btn', { type: 'button' }, 'New set');
  let cur = null;
  let checked = false;

  function update() {
    if (!checked || !cur) return;
    const r = cur.result();
    const pct = Math.round((r.score / r.max) * 100);
    banner.replaceChildren(
      h('div.score-banner',
        h('div.score-mark', String(r.score), h('small', `/${r.max}`)),
        h('div', { style: { flex: 1 } },
          h('div.verdict', pct === 100 ? '满分！Full marks.' : pct >= 80 ? '很好！Very good.' : pct >= 50 ? '不错。Not bad, keep going.' : '加油！Review the corrections and try a new set.'),
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
    pageHead(part.zh, `Part ${part.n}: ${part.en}`, `${part.desc} Worth ${part.pts} points.`, [['Written exam', '#/written'], [`Part ${part.n}`]]),
    banner,
    holder,
    h('div.sticky-actions', h('a.btn.ghost', { href: part.n > 1 ? `#/written/${part.n - 1}` : '#/written', title: 'Previous part', 'aria-label': 'Previous part' }, '←'), h('span.spacer'), newBtn, checkBtn, h('a.btn.ghost', { href: part.n < 9 ? `#/written/${part.n + 1}` : '#/mock', title: 'Next part', 'aria-label': 'Next part' }, '→')),
  );
  fresh();
}

function composition(root, part) {
  const comp = makeComposition({});
  const fb = h('div');
  root.append(
    pageHead('作文', 'Part 9: Composition', 'In the exam the topic is given as “Write a composition introducing (____)”. Practise the likely topics: write 100+ words, use as many Hanzi as you can (≥20% earns up to +2), then compare with the model.', [['Written exam', '#/written'], ['Part 9']]),
    h('div.card', comp.el, fb),
    h('div', { style: { marginTop: '16px' } }, compositionTips()),
    h('div.sticky-actions', h('a.btn.ghost', { href: '#/written/8' }, '←'), h('span.spacer'), h('button.btn.primary', { type: 'button', onclick: (e) => { comp.check(); e.target.disabled = true; } }, 'Finish & self-mark')),
  );
}
