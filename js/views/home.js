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
        h('div.card-head', h('span.badge-zh', '笔'), h('div', h('h2', 'Written exam'), h('div.small.muted', '120 minutes · 100 points · 9 parts'))),
        h('table.format-table', h('tbody', PARTS.map((p) => h('tr',
          h('td.num', CN_NUM[p.n - 1]),
          h('td', h('a', { href: `#/written/${p.n}` }, h('span.hz.row-zh', p.zh), h('span.row-en', p.en))),
          h('td.pts', h('span.pts-pill', `${p.pts}`)),
        )))),
      ),
      h('div.card',
        h('div.card-head', h('span.badge-zh', '说'), h('div', h('h2', 'Oral exam'), h('div.small.muted', '3 parts · speak every answer out loud'))),
        h('table.format-table', h('tbody',
          h('tr', h('td.num', '一'), h('td', h('a', { href: '#/oral/1' }, h('span.row-zh', 'Say it in Chinese'), h('span.row-en', 'English word or sentence → Chinese')))),
          h('tr', h('td.num', '二'), h('td', h('a', { href: '#/oral/2' }, h('span.row-zh', 'Listen & answer'), h('span.row-en', 'Questions read once, from the class Q&A sheet')))),
          h('tr', h('td.num', '三'), h('td', h('a', { href: '#/oral/3' }, h('span.row-zh', 'Topic talk'), h('span.row-en', 'My day, or me 10 years ago, now and in 10 years')))),
        )),
      ),
    ),
  );
}
