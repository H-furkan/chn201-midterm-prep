import { h, zh, LETTERS, store, shuffle } from '../util.js';
import { pageHead, feedback } from '../components.js';
import { GRAMMAR } from '../../data/grammar.js';

export function render(root, { args }) {
  const id = args[0];
  if (id === 'quiz') return quizAll(root);
  if (id) return detail(root, id);
  const done = store.get('grammarDone', {});
  root.append(
    pageHead('语法', 'Grammar', 'Each point has a pattern, examples you can listen to, common mistakes and a short quiz. Parts 2, 3 and 6 of the exam test these patterns.'),
    h('div.row', { style: { marginBottom: '18px' } }, h('a.btn.primary', { href: '#/grammar/quiz' }, 'Take the mixed quiz')),
    h('div.gp-list', GRAMMAR.map((g) =>
      h('a.gp-item', { href: `#/grammar/${g.id}` },
        h(`span.gs${done[g.id] ? '.done' : ''}`, { title: done[g.id] ? 'Quiz passed' : 'Not passed yet' }),
        h('div', { style: { flex: 1, minWidth: 0 } }, h('div.gt', g.title), h('div.gf', g.pattern.split('\n')[0])),
      ),
    )),
  );
}

function quizBlock(questions, onDone) {
  let right = 0;
  let answered = 0;
  const score = h('div.small.muted');
  const wrap = h('div', questions.map((q, i) => {
    const fb = h('div');
    const btns = q.options.map((o, j) => h('button.opt', { type: 'button', onclick: () => choose(j) }, h('span.ol', LETTERS[j]), h('span.hz', o)));
    function choose(j) {
      btns.forEach((b, k) => { b.disabled = true; b.classList.toggle('correct', k === q.answer); b.classList.toggle('wrong', k === j && j !== q.answer); });
      const ok = j === q.answer;
      if (ok) right++;
      answered++;
      fb.replaceChildren(feedback(ok ? 'good' : 'bad', ok ? '✓ 对！ ' : '✗ ', q.why || ''));
      score.textContent = `${right}/${answered} correct`;
      if (answered === questions.length) onDone?.(right, questions.length);
    }
    return h('div.q', h('div.q-head', h('span.q-num', String(i + 1)), h('div.q-body', q.src ? h('div.small.muted', q.src) : null, h('div.hz', { style: { fontSize: '1.1rem', fontWeight: 600 } }, q.q), h('div.opts', btns), fb)));
  }));
  return { wrap, score };
}

function detail(root, id) {
  const idx = GRAMMAR.findIndex((g) => g.id === id);
  const g = GRAMMAR[idx];
  if (!g) {
    root.append(h('div.empty', 'Grammar point not found. ', h('a', { href: '#/grammar' }, 'Back')));
    return;
  }
  const prev = GRAMMAR[idx - 1];
  const next = GRAMMAR[idx + 1];
  const quiz = quizBlock(g.quiz, (r, n) => { if (r === n) store.update('grammarDone', {}, (d) => ({ ...d, [g.id]: true })); });
  root.append(
    pageHead(null, g.title, null, [['Grammar', '#/grammar'], [g.title]]),
    h('div.formula', g.pattern),
    h('div.card', { style: { marginTop: '16px' } }, h('p', { style: { margin: 0 } }, g.explain)),
    h('div.grid.g2', { style: { marginTop: '16px', alignItems: 'start' } },
      h('div.card', h('h3', 'Examples'), g.examples.map((e) => h('div.ex', zh(e.h, e.p, e.e, { speak: true }))), g.negative ? h('div', { style: { marginTop: '10px' } }, h('div.small.muted', 'Negative'), h('div.ex', zh(g.negative.h, g.negative.p, g.negative.e, { speak: true }))) : null),
      h('div.stack',
        g.mistakes?.length ? h('div.card', h('h3', 'Common mistakes'), g.mistakes.map((m) => h('div.mistake', h('span.x', '✗'), h('s.hz', m.wrong), h('span.ok', '✓'), h('b.hz', m.right), h('span'), h('span.small.muted', m.why)))) : null,
        h('div.card', h('div.row.between', h('h3', { style: { margin: 0 } }, 'Mini quiz'), quiz.score), quiz.wrap),
      ),
    ),
    h('div.row.between', { style: { marginTop: '18px' } },
      prev ? h('a.btn', { href: `#/grammar/${prev.id}` }, '← ', h('span.hz', prev.title.slice(0, 18))) : h('span'),
      next ? h('a.btn.primary', { href: `#/grammar/${next.id}` }, h('span.hz', next.title.slice(0, 18)), ' →') : h('a.btn.primary', { href: '#/grammar/quiz' }, 'Take the mixed quiz'),
    ),
  );
}

function quizAll(root) {
  const qs = shuffle(GRAMMAR.flatMap((g) => g.quiz.map((q) => ({ ...q, src: g.title })))).slice(0, 20);
  const res = h('div');
  const quiz = quizBlock(qs, (r, n) => res.replaceChildren(feedback(r / n >= 0.8 ? 'good' : 'info', h('b', `Final: ${r}/${n}. `), r / n >= 0.8 ? '很好！' : 'Review the points you missed, then try again.')));
  root.append(
    pageHead(null, 'Mixed grammar quiz', '20 random questions from all grammar points, with an explanation after each answer.', [['Grammar', '#/grammar'], ['Mixed quiz']]),
    h('div.card', h('div.row.between', h('span'), quiz.score), quiz.wrap, res),
    h('div.row', { style: { marginTop: '16px' } }, h('button.btn.primary', { type: 'button', onclick: () => { root.replaceChildren(); quizAll(root); } }, 'New quiz')),
  );
}
