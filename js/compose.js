// Part 9 composition workspace: editor + live length/Hanzi meter + outline/phrases + model essay.
import { h, store, compositionStats, zh, speakBtn } from './util.js';
import { feedback, selfGrade } from './components.js';
import { COMPOSITION, COMPOSITION_TIPS } from '../data/composition.js';

const RUBRIC = [
  ['Length', '100+ characters/syllables, complete text'],
  ['Content', 'On topic, covers several points from the outline'],
  ['Grammar', 'Correct word order: Subject + Time + Place + Verb; 了 / 的 / 在 / 是…的 used correctly'],
  ['Vocabulary', 'Uses lesson words, measure words, time expressions'],
];

export function makeComposition({ topicId, onChange, compact = false } = {}) {
  let topic = COMPOSITION.find((t) => t.id === topicId) || COMPOSITION[0];
  const draftKey = () => `draft:${topic.id}`;
  const textarea = h('textarea.input', { lang: 'zh-CN', placeholder: '大家好！我叫… (you may mix Hanzi and pinyin)', oninput: () => { store.set(draftKey(), textarea.value); meter(); onChange?.(); } });
  const meterEl = h('div.meter');
  const side = h('div.stack');
  const titleEl = h('h3');
  const select = h('select.select', { onchange: () => { topic = COMPOSITION.find((t) => t.id === select.value); load(); onChange?.(); } }, COMPOSITION.map((t) => h('option', { value: t.id }, `${t.topic} · ${t.en}`)));
  const fb = h('div');
  const grade = selfGrade(10, () => onChange?.(), 'Mark /10:');
  const bonus = selfGrade(2, () => onChange?.(), 'Hanzi bonus (+0–2):');

  function meter() {
    const s = compositionStats(textarea.value);
    meterEl.replaceChildren(
      h(`div${s.total >= 100 ? '.ok' : ''}`, h('b', `${s.total}`), h('span.small.muted', s.total >= 100 ? 'words ✓ 100+' : `words · ${100 - s.total} to go`)),
      h('div', h('b', `${s.hanzi}`), h('span.small.muted', 'Hanzi characters')),
      h('div', h('b', `${s.sylls}`), h('span.small.muted', 'pinyin syllables')),
      h(`div${s.pct >= 20 ? '.ok' : ''}`, h('b', `${s.pct}%`), h('span.small.muted', s.pct >= 20 ? 'Hanzi ✓ bonus eligible' : 'Hanzi · need 20% for bonus')),
    );
  }

  function insert(text) {
    const { selectionStart: a, selectionEnd: b, value } = textarea;
    textarea.value = value.slice(0, a) + text + value.slice(b);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = a + text.length;
    textarea.dispatchEvent(new Event('input'));
  }

  function load() {
    select.value = topic.id;
    titleEl.replaceChildren(`Write a composition introducing “${topic.topic}” `, h('span.muted', `(${topic.en})`));
    textarea.value = store.get(draftKey(), '');
    meter();
    side.replaceChildren(
      h('div.card.flat', h('h3', 'Outline'), h('ol.small', { style: { paddingLeft: '18px', margin: 0 } }, topic.outline.map((o) => h('li', o)))),
      h('div.card.flat', h('h3', 'Useful sentences ', h('span.small.muted', '(tap to insert)')), topic.phrases.map((p) => h('div.phrase', { onclick: () => insert(p.h) }, h('div', zh(p.h, p.p, p.e))))),
      h('details.card.flat', h('summary', 'Model composition'), h('div.row', speakBtn(topic.model.h, 'Listen to the model')), h('p.zh-line', { style: { marginTop: '10px' } }, h('span.h', { lang: 'zh-CN', style: { lineHeight: 2 } }, topic.model.h), h('span.p', { style: { marginTop: '8px' } }, topic.model.p), h('span.e', { style: { marginTop: '8px' } }, topic.model.e))),
    );
  }

  const el = h(
    'div.comp-editor',
    h('div.row.between', { style: { marginBottom: '10px' } }, titleEl, compact ? null : select),
    h('div.grid', { style: { gridTemplateColumns: compact ? '1fr' : 'minmax(0,1.4fr) minmax(0,1fr)', alignItems: 'start' } },
      h('div', textarea, meterEl, fb),
      side,
    ),
  );
  load();

  return {
    el,
    selfGraded: true,
    check() {
      textarea.readOnly = true;
      const s = compositionStats(textarea.value);
      fb.replaceChildren(
        feedback('info',
          h('b', 'Self-marking rubric'),
          h('ul.small', { style: { margin: '6px 0', paddingLeft: '18px' } }, RUBRIC.map(([k, v]) => h('li', h('b', `${k}: `), v))),
          h('div.small', s.total < 100 ? `⚠︎ Only ${s.total} words — under 100 loses marks.` : `✓ ${s.total} words.`),
          h('div.small', s.pct >= 20 ? `✓ ${s.pct}% Hanzi — eligible for up to +2.` : `${s.pct}% Hanzi — no bonus (need ≥20%).`),
          grade,
          s.pct >= 20 ? bonus : null,
        ),
      );
    },
    result() {
      const s = compositionStats(textarea.value);
      return { score: (grade.value() ?? 0), bonus: s.pct >= 20 ? bonus.value() ?? 0 : 0, max: 10, pending: grade.value() == null ? 1 : 0 };
    },
  };
}

export function compositionTips() {
  return h('div.card.flat', h('h3', 'How to score full marks'), h('ul.small', { style: { paddingLeft: '18px', margin: 0 } }, COMPOSITION_TIPS.map((t) => h('li', { style: { marginBottom: '4px' } }, t))));
}
