import { h, store, settings, saveSettings } from '../util.js';
import { ring, bar } from '../components.js';
import { mastery } from '../srs.js';
import { VOCAB, LESSONS } from '../../data/vocab.js';
import { PARTS } from '../drills.js';

const CN_NUM = '一二三四五六七八九';

const PLAN = [
  ['Day 1', 'Lessons 10–11: flashcards, grammar (location words, 能, telling time), Part 1 pinyin drill', '#/flashcards'],
  ['Day 2', 'Lessons 12–13: flashcards, grammar (太…了, 会, 在…呢, 吧), Parts 2 & 3', '#/grammar'],
  ['Day 3', 'Lessons 14–15: flashcards, grammar (了, 是…的), Part 4 + Part 8 handwriting', '#/write'],
  ['Day 4', 'Reading, answering & picture sentences (Parts 5–7) + oral Q&A 1–16', '#/written/5'],
  ['Day 5', 'Write two compositions (Part 9) + oral Q&A 17–32 + oral Part 1 prompts', '#/written/9'],
  ['Day 6', 'Mock exam #1, review every mistake; memorise your oral Part 3 talks', '#/mock'],
  ['Day 7', 'Mock exam #2, clear all due flashcards, full oral run-through', '#/oral'],
];

export function render(root) {
  const s = settings();
  const m = mastery(VOCAB);
  const knownPct = (m.known / m.total) * 100;
  const results = store.get('results', []);
  const mocks = store.get('mocks', []);
  const bestMock = mocks.length ? Math.max(...mocks.map((x) => x.score)) : null;
  const plan = store.get('plan', {});

  const days = s.examDate ? Math.ceil((new Date(s.examDate + 'T00:00') - new Date(new Date().toDateString())) / 86400000) : null;
  const dateInput = h('input.input', { type: 'date', value: s.examDate, style: { width: 'auto', background: 'rgba(255,255,255,.95)', color: '#1d1a16', padding: '6px 10px' }, onchange: (e) => { saveSettings({ examDate: e.target.value }); root.replaceChildren(); render(root); } });

  root.append(
    h('section.hero',
      h('div.bigchar', { 'aria-hidden': 'true' }, '考'),
      h('div', { style: { position: 'relative' } },
        h('div', { style: { fontWeight: 800, letterSpacing: '.12em', fontSize: '.75rem', textTransform: 'uppercase', opacity: 0.85 } }, 'CHN201 · HSK Standard Course 1 · Lessons 10–15'),
        h('h1', '期中考试加油！ Ace the midterm.'),
        h('p', 'Everything from the slides, flashcards, sample paper and oral Q&A sheet — turned into drills that match the real exam, part by part.'),
        h('div.row', { style: { marginTop: '14px' } },
          h('a.btn', { href: '#/flashcards' }, 'Study flashcards'),
          h('a.btn.outline', { href: '#/mock' }, 'Take a mock exam'),
          h('a.btn.outline', { href: '#/oral/2' }, 'Oral Q&A'),
        ),
        h('div.row', { style: { marginTop: '16px', alignItems: 'center' } },
          days != null
            ? h('div.countdown', h('b', days > 0 ? String(days) : days === 0 ? '今天!' : '✓'), h('span', days > 0 ? `day${days > 1 ? 's' : ''} until your exam` : days === 0 ? 'Exam day — 加油!' : 'Exam date passed'))
            : h('span.small', { style: { opacity: 0.9 } }, 'Set your exam date for a countdown →'),
          dateInput,
        ),
      ),
    ),

    h('div.grid.g3',
      h('div.card.stat', ring(knownPct, `${Math.round(knownPct)}%`, 'var(--jade)'), h('div', h('div.label', 'Words mastered'), h('div.val', `${m.known} / ${m.total}`), h('div.small.muted', `${m.learning} learning · ${m.fresh} new`))),
      h('div.card.stat', ring(Math.min(100, (new Set(results.map((r) => r.kind)).size / 12) * 100), String(results.length)), h('div', h('div.label', 'Drills completed'), h('div.val', String(results.length)), h('div.small.muted', 'across written & oral parts'))),
      h('div.card.stat', ring(bestMock ?? 0, bestMock != null ? String(bestMock) : '—', 'var(--gold)'), h('div', h('div.label', 'Best mock score'), h('div.val', bestMock != null ? `${bestMock}/100` : 'Not yet'), h('div.small.muted', `${mocks.length} mock${mocks.length === 1 ? '' : 's'} taken`))),
    ),

    h('div.grid.g2', { style: { marginTop: '16px', alignItems: 'start' } },
      h('div.card',
        h('h2', '笔试 Written exam'),
        h('p.small.muted', '120 minutes · 100 points · 9 parts. Click a part to drill it.'),
        h('table.format-table', h('tbody', PARTS.map((p) => h('tr', h('td.num', CN_NUM[p.n - 1]), h('td', h('a', { href: `#/written/${p.n}` }, h('span.hz', p.zh), ' ', h('span.muted', { style: { fontWeight: 500 } }, `· ${p.en}`))), h('td.pts', `${p.count}×${p.each} = ${p.pts}`))))),
      ),
      h('div.stack',
        h('div.card',
          h('h2', '口试 Oral exam'),
          h('table.format-table', h('tbody',
            h('tr', h('td.num', '1'), h('td', h('a', { href: '#/oral/1' }, 'Say it in Chinese'), h('div.small.muted', '5 English words/sentences → Chinese'))),
            h('tr', h('td.num', '2'), h('td', h('a', { href: '#/oral/2' }, 'Listen & answer'), h('div.small.muted', 'Questions read once — pool: the lesson 10–15 Q&A sheet'))),
            h('tr', h('td.num', '3'), h('td', h('a', { href: '#/oral/3' }, 'Topic talk'), h('div.small.muted', 'My day · or · me 10 years ago / now / in 10 years'))),
          )),
        ),
        h('div.card',
          h('h2', '7-day plan'),
          PLAN.map(([d, text, href], i) => {
            const done = !!plan[i];
            const cb = h('input', { type: 'checkbox', checked: done, onchange: (e) => { store.update('plan', {}, (p) => ({ ...p, [i]: e.target.checked })); e.target.closest('.plan-day').classList.toggle('done', e.target.checked); } });
            return h(`div.plan-day${done ? '.done' : ''}`, h('span.d', d), h('label', cb, h('span', text, ' ', h('a.small', { href, style: { color: 'var(--accent)' } }, 'Go →'))));
          }),
        ),
      ),
    ),

    h('h2', { style: { marginTop: '26px' } }, 'Lessons'),
    h('div.grid.g3', LESSONS.filter((l) => l.id !== 'X').map((l) => {
      const words = VOCAB.filter((w) => w.l === l.id);
      const lm = mastery(words);
      return h('a.tile', { href: `#/vocab?l=${l.id}` },
        h('span.tp', h('span.tag', l.short)),
        h('span.tt.hz', { style: { fontSize: '1.2rem', paddingRight: '40px' } }, l.title),
        h('span.td', l.en),
        h('div', { style: { marginTop: '8px' } }, h('div.small.muted', `${lm.known}/${lm.total} words mastered`), bar((lm.known / Math.max(1, lm.total)) * 100, '.jade')),
      );
    })),
  );
}
