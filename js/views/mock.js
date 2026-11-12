import { h, store, fmtTime, logResult, toast } from '../util.js';
import { pageHead, bar } from '../components.js';
import { PARTS, BUILDERS } from '../drills.js';
import { makeComposition } from '../compose.js';
import { COMPOSITION } from '../../data/composition.js';

const CN_NUM = '一二三四五六七八九';
const DURATION = 120 * 60;
let stopTimer = null;

export function render(root) {
  const history = store.get('mocks', []);
  const start = h('button.btn.primary.lg', { type: 'button', onclick: () => exam(root) }, 'Start mock exam');
  root.append(
    pageHead('Mock exam · 模拟考试', 'Full written midterm, 100 points', 'A fresh paper every time, built in the exact format of the sample: nine parts, 120 minutes. Parts 1–5 and 8 are marked automatically; for parts 6, 7 and 9 you compare with model answers and mark yourself honestly.'),
    h('div.grid.g2',
      h('div.card',
        h('h3', 'Paper structure'),
        h('table.format-table', h('tbody', PARTS.map((p) => h('tr', h('td.num', CN_NUM[p.n - 1]), h('td', h('span.hz', p.zh), h('div.small.muted', p.en)), h('td.pts', `${p.pts}`))))),
      ),
      h('div.stack',
        h('div.card', h('h3', 'Before you start'), h('ul.small', { style: { paddingLeft: '18px' } },
          h('li', 'Turn pinyin OFF (press P) — the real paper only gives pinyin in some parts.'),
          h('li', 'No dictionary, no phone. Write answers in Hanzi where you can.'),
          h('li', 'The timer is a guide: the real exam is 120 minutes.'),
          h('li', 'Lesson filter is ignored here — the mock covers everything.'),
        ), start),
        history.length
          ? h('div.card', h('h3', 'Your previous mocks'), history.slice(-6).reverse().map((m) => h('div', { style: { margin: '8px 0' } }, h('div.row.between.small', h('span', new Date(m.t).toLocaleString()), h('b', `${m.score}/100${m.bonus ? ` (+${m.bonus})` : ''}`)), bar(m.score, '.jade'))))
          : null,
      ),
    ),
  );
  return () => stopTimer?.();
}

function exam(root) {
  stopTimer?.();
  const saved = store.get('settings', {});
  // Mock covers all lessons regardless of the filter.
  store.set('settings', { ...saved, lessons: ['R', '10', '11', '12', '13', '14', '15', 'X'] });
  const parts = PARTS.map((p) => {
    const built = p.n === 9 ? makeComposition({ topicId: COMPOSITION[Math.floor(Math.random() * COMPOSITION.length)].id, compact: true, onChange: () => submitted && refresh() }) : BUILDERS[p.n].make(BUILDERS[p.n].gen(), { onChange: () => submitted && refresh() });
    return { p, built };
  });
  store.set('settings', saved);

  let left = DURATION;
  let submitted = false;
  let saved2 = false;
  const timer = h('span.timer', fmtTime(left));
  const iv = setInterval(() => {
    left--;
    timer.textContent = fmtTime(Math.max(0, left));
    timer.classList.toggle('warn', left < 600);
    if (left === 600) toast('10 minutes left!');
    if (left <= 0) {
      clearInterval(iv);
      toast('Time is up — submitting.');
      submit();
    }
  }, 1000);

  const resultBox = h('div');
  const submitBtn = h('button.btn.primary', { type: 'button', onclick: () => { if (confirm('Submit your paper?')) submit(); } }, 'Submit paper');

  function totals() {
    let score = 0;
    let pending = 0;
    let bonus = 0;
    const rows = parts.map(({ p, built }) => {
      const r = built.result();
      // scale each part to its point value (e.g. part 5 may have 10 questions → 10 pts)
      const pts = r.max ? Math.round((r.score / r.max) * p.pts * 10) / 10 : 0;
      score += pts;
      pending += r.pending || 0;
      bonus += r.bonus || 0;
      return { p, pts };
    });
    return { score: Math.round(score), pending, bonus, rows };
  }

  function refresh() {
    const t = totals();
    resultBox.replaceChildren(
      h('div.card', { style: { marginBottom: '18px' } },
        h('div.score-banner', { style: { boxShadow: 'none', border: 0, padding: 0 } },
          h('div.big', `${t.score}/100`),
          h('div', { style: { flex: 1 } },
            t.bonus ? h('div', h('b', `+${t.bonus} Hanzi bonus`)) : null,
            t.pending ? h('div.small', `⚠︎ ${t.pending} self-marked item${t.pending > 1 ? 's' : ''} still unmarked (parts 6, 7, 8, 9). Scroll down and mark them.`) : h('div.small.muted', 'All parts marked.'),
            bar(t.score, '.jade'),
          ),
        ),
        h('table.breakdown', { style: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' } }, h('tbody', t.rows.map(({ p, pts }) => h('tr', h('td', `${CN_NUM[p.n - 1]}、`, h('span.hz', p.zh), h('span.small.muted', ` · ${p.en}`)), h('td', `${pts} / ${p.pts}`))))),
        h('div.row', { style: { marginTop: '12px' } },
          h('button.btn.jade', { type: 'button', disabled: saved2, onclick: (e) => { saveMock(t); saved2 = true; e.target.disabled = true; e.target.textContent = 'Saved ✓'; } }, saved2 ? 'Saved ✓' : 'Save score to history'),
          h('button.btn', { type: 'button', onclick: () => exam(root) }, 'New mock exam'),
        ),
      ),
    );
  }

  function saveMock(t) {
    store.update('mocks', [], (a) => [...a, { t: Date.now(), score: t.score, bonus: t.bonus, used: DURATION - left }].slice(-30));
    logResult('mock', t.score, 100);
    toast('Score saved');
  }

  function submit() {
    if (submitted) return;
    submitted = true;
    clearInterval(iv);
    parts.forEach(({ built }) => built.check());
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitted';
    refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  root.replaceChildren(
    h('div.row.between', { style: { marginBottom: '6px' } }, h('div.crumbs', h('a', { href: '#/mock' }, 'Mock exam'), ' / Paper'), timer),
    h('div.card.center', h('div.small.muted', 'CHN201 Midterm · Mock paper'), h('h1', { style: { margin: '6px 0' } }, h('span.hz-big', '期中考试'), ' · Midterm Exam'), h('div.small.muted', 'Duration 120 minutes · Total 100 points · No dictionaries or devices')),
    resultBox,
    ...parts.map(({ p, built }) =>
      h('section.mock-part',
        h('h2', h('span.hz-big', { style: { color: 'var(--accent)' } }, `${CN_NUM[p.n - 1]}、`), h('span.hz', p.zh), h('span.small.muted', { style: { fontWeight: 500 } }, ` ${p.en}`), h('span.pts', `${p.pts} pts`)),
        h('p.small.muted', p.desc),
        h('div.card', built.el),
      ),
    ),
    h('div.sticky-actions', h('span.small.muted', 'Answer everything, then submit.'), h('span.spacer'), submitBtn),
  );
  window.scrollTo({ top: 0 });
  stopTimer = () => clearInterval(iv);
}
