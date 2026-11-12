import { h } from '../util.js';
import { PARTS } from '../drills.js';

const CN_NUM = '一二三四五六七八九';

export function render(root) {
  root.append(
    h('section.hero',
      h('div.bigchar', { 'aria-hidden': 'true' }, '考'),
      h('div', { style: { position: 'relative' } },
        h('h1', '期中考试加油！ Ace the CHN201 midterm.'),
        h('p', 'Everything you need for the written and oral exam, in the same format as the real paper.'),
        h('div.row', { style: { marginTop: '14px' } },
          h('a.btn', { href: '#/flashcards' }, 'Study words'),
          h('a.btn.outline', { href: '#/mock' }, 'Take a mock exam'),
          h('a.btn.outline', { href: '#/oral/2' }, 'Oral Q&A'),
        ),
      ),
    ),
    h('div.grid.g2', { style: { alignItems: 'start' } },
      h('div.card',
        h('h2', '笔试 Written exam'),
        h('p.small.muted', '120 minutes · 100 points · 9 parts. Click a part to practise it.'),
        h('table.format-table', h('tbody', PARTS.map((p) => h('tr', h('td.num', CN_NUM[p.n - 1]), h('td', h('a', { href: `#/written/${p.n}` }, h('span.hz', p.zh), ' ', h('span.muted', { style: { fontWeight: 500 } }, `· ${p.en}`))), h('td.pts', `${p.pts}`))))),
      ),
      h('div.card',
        h('h2', '口试 Oral exam'),
        h('p.small.muted', '3 parts. Speak every answer out loud.'),
        h('table.format-table', h('tbody',
          h('tr', h('td.num', '1'), h('td', h('a', { href: '#/oral/1' }, 'Say it in Chinese'), h('div.small.muted', 'English word or sentence → Chinese'))),
          h('tr', h('td.num', '2'), h('td', h('a', { href: '#/oral/2' }, 'Listen & answer'), h('div.small.muted', 'Questions read once, from the class Q&A sheet'))),
          h('tr', h('td.num', '3'), h('td', h('a', { href: '#/oral/3' }, 'Topic talk'), h('div.small.muted', 'My day · or · me 10 years ago / now / in 10 years'))),
        )),
      ),
    ),
  );
}
