import { h } from '../util.js';
import { tz, paperIndex } from '../components.js';
import { PARTS } from '../drills.js';

const CN_NUM = '一二三四五六七八九';

export function render(root) {
  root.append(
    h('section.hero',
      tz('期中考试', 'xl'),
      h('h1', 'Practise every part of the CHN201 midterm'),
      h('p', 'Words, grammar, the written paper and the oral exam, in the same format your teacher uses.'),
      h('div.row', { style: { marginTop: '20px' } },
        h('a.btn.primary.lg', { href: '#/mock' }, 'Take a mock exam'),
        h('a.btn.lg', { href: '#/flashcards' }, 'Study the words'),
      ),
    ),
    h('div.grid.g2', { style: { gap: '40px', alignItems: 'start' } },
      h('section',
        h('div.section-title', h('span.hz', '笔试'), h('h2', { style: { margin: 0 } }, 'Written exam')),
        h('p.small.muted', '120 minutes, 100 points'),
        paperIndex(PARTS.map((p) => ({ n: CN_NUM[p.n - 1], zh: p.zh, en: p.en, pts: `${p.pts}`, href: `#/written/${p.n}` }))),
      ),
      h('section',
        h('div.section-title', h('span.hz', '口试'), h('h2', { style: { margin: 0 } }, 'Oral exam')),
        h('p.small.muted', 'Three parts, answered out loud'),
        paperIndex([
          { n: '一', zh: '说中文', en: 'Say an English word or sentence in Chinese', href: '#/oral/1' },
          { n: '二', zh: '听后回答', en: 'Answer questions read aloud once', href: '#/oral/2' },
          { n: '三', zh: '话题', en: 'Talk about your day, or you then and now', href: '#/oral/3' },
        ]),
        h('div', { style: { marginTop: '28px' } },
          h('div.section-title', h('span.hz', '复习'), h('h2', { style: { margin: 0 } }, 'Review')),
          paperIndex([
            { n: '词', zh: '生词', en: 'All exam words with audio', href: '#/vocab' },
            { n: '卡', zh: '卡片', en: 'Flashcards that repeat what you miss', href: '#/flashcards' },
            { n: '法', zh: '语法', en: 'Grammar patterns with quizzes', href: '#/grammar' },
            { n: '写', zh: '写汉字', en: 'Write characters stroke by stroke', href: '#/write' },
          ]),
        ),
      ),
    ),
  );
}
