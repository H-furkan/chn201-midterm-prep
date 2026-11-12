// Builders for the nine written-exam parts. Each builder returns
// { el, check(), result() -> { score, max, pending } } so the same parts power
// the per-part drills and the full mock exam.
import { h, shuffle, sample, LETTERS, norm, hasHanzi, toneVariants, speakBtn, zh } from './util.js';
import { feedback, selfGrade, writePad } from './components.js';
import { VOCAB } from '../data/vocab.js';
import { FILL, REORDER, MATCH, READING, ANSWER, PICTURE, CHARS } from '../data/written.js';

export const PARTS = [
  { n: 1, zh: '看词语，选拼音', en: 'Hanzi → pinyin', desc: 'Pick the correct pinyin (tones count!).', pts: 10, each: 1, count: 10 },
  { n: 2, zh: '选词填空', en: 'Fill in the blanks', desc: 'Choose words from the bank (A–K) to complete each sentence.', pts: 10, each: 1, count: 10 },
  { n: 3, zh: '排词成句', en: 'Build the sentence', desc: 'Put the pieces in the right order. Answer in Hanzi.', pts: 20, each: 2, count: 10 },
  { n: 4, zh: '匹配', en: 'Match Q & A', desc: 'Match each question with its answer.', pts: 10, each: 1, count: 10 },
  { n: 5, zh: '阅读', en: 'Reading', desc: 'Read the passages: choose A/B, or judge true (√) / false (×).', pts: 10, each: 1, count: 10 },
  { n: 6, zh: '回答问题', en: 'Answer questions', desc: 'Answer in Hanzi (or pinyin). Model answers + self-marking.', pts: 10, each: 2, count: 5 },
  { n: 7, zh: '看图写句子', en: 'Picture + word → sentence', desc: 'Write a sentence about the picture using the given word.', pts: 10, each: 2, count: 5 },
  { n: 8, zh: '根据拼音写汉字', en: 'Write the Hanzi', desc: 'Write the character for the pinyin in the sentence.', pts: 10, each: 1, count: 10 },
  { n: 9, zh: '作文', en: 'Composition', desc: '100+ words. ≥20% Hanzi earns up to +2 bonus.', pts: 10, each: 10, count: 1 },
];

const sum = (arr, f) => arr.reduce((n, x) => n + f(x), 0);

function qRow(i, ...body) {
  return h('div.q', h('div.q-head', h('span.q-num', String(i + 1)), h('div.q-body', ...body)));
}

// ---------------------------------------------------------------- Part 1
export function genPart1(n = 10) {
  const pool = VOCAB.filter((w) => /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(w.p));
  const uniq = [];
  const seen = new Set();
  for (const w of shuffle(pool)) {
    if (seen.has(w.h)) continue;
    seen.add(w.h);
    uniq.push(w);
    if (uniq.length === n) break;
  }
  return uniq.map((w) => {
    const syl = w.p.split(/\s+/).length;
    const tones = toneVariants(w.p, 2);
    const others = shuffle(VOCAB.filter((x) => x.p !== w.p && x.p.split(/\s+/).length === syl && !tones.includes(x.p))).slice(0, 3 - tones.length);
    const options = shuffle([w.p, ...tones, ...others.map((o) => o.p)].slice(0, 4));
    return { w, options, answer: options.indexOf(w.p) };
  });
}

export function makePart1(items, { onChange } = {}) {
  const picks = items.map(() => null);
  const rows = items.map((it, i) => {
    const btns = it.options.map((o, j) =>
      h('button.opt', { type: 'button', onclick: () => { picks[i] = j; btns.forEach((b, k) => b.classList.toggle('sel', k === j)); onChange?.(); } }, h('span.ol', LETTERS[j]), o),
    );
    const fb = h('div');
    const row = qRow(i, h('div.row', h('span.hz-big', { lang: 'zh-CN', style: { fontSize: '2rem' } }, it.w.h)), h('div.opts.cols', btns), fb);
    return { row, btns, fb };
  });
  return {
    el: h('div', rows.map((r) => r.row)),
    check() {
      rows.forEach((r, i) => {
        r.btns.forEach((b, k) => { b.disabled = true; b.classList.toggle('correct', k === items[i].answer); b.classList.toggle('wrong', k === picks[i] && k !== items[i].answer); });
        r.fb.replaceChildren(h('div.row.small', { style: { marginTop: '8px' } }, speakBtn(items[i].w.h), h('span', h('b.hz', items[i].w.h), ` ${items[i].w.p} — ${items[i].w.e}`)));
      });
    },
    result: () => ({ score: items.filter((it, i) => picks[i] === it.answer).length, max: items.length }),
  };
}

// ---------------------------------------------------------------- Part 2
export function genPart2(n = 10) {
  const pool = shuffle(FILL);
  const chosen = [];
  const used = new Set();
  for (const it of pool) {
    if (chosen.length === n) break;
    if (used.has(it.a)) continue;
    const conflicts = [it.a, ...(it.ok || [])];
    // an item is unsafe if any already-chosen answer would also fit it, or its answer fits a chosen item
    if (conflicts.some((c) => used.has(c) && c !== it.a)) continue;
    if (chosen.some((c) => (c.ok || []).includes(it.a))) continue;
    chosen.push(it);
    used.add(it.a);
  }
  const distractor = shuffle(FILL.map((f) => f.a)).find((a) => !used.has(a) && !chosen.some((c) => (c.ok || []).includes(a)));
  const bank = shuffle([...chosen.map((c) => c.a), ...(distractor ? [distractor] : [])]);
  return { items: shuffle(chosen), bank };
}

export function makePart2({ items, bank }, { onChange } = {}) {
  const bankEl = h('div.bank', bank.map((w, i) => h('span.tok', h('span.tl', LETTERS[i]), w)));
  const rows = items.map((it, i) => {
    const sel = h('select.blank-select', { 'aria-label': `Blank ${i + 1}`, onchange: () => onChange?.() }, h('option', { value: '' }, '（  ）'), bank.map((w, j) => h('option', { value: w }, `${LETTERS[j]}. ${w}`)));
    const [before, after = ''] = it.s.split(/（\s*）|\(\s*\)/);
    const fb = h('div');
    const row = qRow(i, h('div.zh-line', h('span.h', { lang: 'zh-CN' }, before, ' ', sel, ' ', after)), fb);
    return { sel, fb, row };
  });
  return {
    el: h('div', h('p.small.muted', 'Word bank:'), bankEl, rows.map((r) => r.row)),
    check() {
      rows.forEach((r, i) => {
        const it = items[i];
        const ok = r.sel.value === it.a;
        r.sel.disabled = true;
        r.sel.classList.add(ok ? 'correct' : 'wrong');
        r.fb.replaceChildren(feedback(ok ? 'good' : 'bad', ok ? '✓ ' : `✗ Answer: ${LETTERS[bank.indexOf(it.a)]}. ${it.a} · `, zh(it.s.replace(/（\s*）|\(\s*\)/, `（${it.a}）`), it.p, it.e)));
      });
    },
    result: () => ({ score: rows.filter((r, i) => r.sel.value === items[i].a).length, max: items.length }),
  };
}

// ---------------------------------------------------------------- Part 3
export function genPart3(n = 10) {
  return sample(REORDER, n);
}

export function makePart3(items, { onChange } = {}) {
  const rows = items.map((it, i) => {
    const pieces = shuffle(it.parts).map((t, j) => ({ t, letter: LETTERS[j] }));
    const order = [];
    const line = h('div.answer-line', { 'aria-label': 'Your sentence' });
    const toks = pieces.map((pc, j) => h('button.tok', { type: 'button', onclick: () => add(j) }, h('span.tl', pc.letter), pc.t));
    const fb = h('div');
    function draw() {
      toks.forEach((t, j) => t.classList.toggle('used', order.includes(j)));
      line.replaceChildren(...order.map((j, k) => h('button.tok', { type: 'button', onclick: () => { order.splice(k, 1); draw(); onChange?.(); } }, pieces[j].t)));
    }
    function add(j) {
      if (order.includes(j)) return;
      order.push(j);
      draw();
      onChange?.();
    }
    const row = qRow(i, h('div.bank', toks), line, fb);
    return { row, line, toks, fb, value: () => order.map((j) => pieces[j].t).join(''), full: () => order.length === pieces.length };
  });
  const isRight = (r, it) => r.full() && it.answers.some((a) => norm(a) === norm(r.value()));
  return {
    el: h('div', rows.map((r) => r.row)),
    check() {
      rows.forEach((r, i) => {
        const it = items[i];
        const ok = isRight(r, it);
        r.line.classList.add(ok ? 'correct' : 'wrong');
        r.line.querySelectorAll('button').forEach((b) => (b.disabled = true));
        r.toks.forEach((b) => (b.disabled = true));
        r.fb.replaceChildren(feedback(ok ? 'good' : 'bad', ok ? '✓ +2 ' : '✗ ', zh(it.answers[0] + '。', it.p, it.e), it.answers.length > 1 ? h('div.small', 'Also correct: ', it.answers.slice(1).join(' / ')) : null));
      });
    },
    result: () => ({ score: 2 * rows.filter((r, i) => isRight(r, items[i])).length, max: 2 * items.length }),
  };
}

// ---------------------------------------------------------------- Part 4
export function genPart4(n = 10) {
  const pool = shuffle(MATCH);
  const picked = [];
  const seenA = new Set();
  for (const m of pool) {
    if (seenA.has(norm(m.a)) || seenA.has(norm(m.q))) continue;
    seenA.add(norm(m.a));
    seenA.add(norm(m.q));
    picked.push(m);
    if (picked.length === n) break;
  }
  const groups = [];
  for (let i = 0; i < picked.length; i += 5) groups.push(picked.slice(i, i + 5));
  return groups;
}

export function makePart4(groups, { onChange } = {}) {
  const all = [];
  const el = h('div');
  groups.forEach((g, gi) => {
    const answers = shuffle(g.map((_, i) => i));
    const qs = g.map((m, i) => h('div.match-q', h('b', LETTERS[i]), h('div', zh(m.q, m.qp))));
    const rows = answers.map((qi, k) => {
      const sel = h('select.blank-select', { onchange: () => onChange?.() }, h('option', { value: '' }, '（ ）'), g.map((_, i) => h('option', { value: String(i) }, LETTERS[i])));
      const fb = h('div');
      all.push({ sel, fb, qi, m: g[qi] });
      return h('div.match-a', sel, h('div', h('span.al', `${gi * 5 + k + 1}. `), zh(g[qi].a, g[qi].ap), fb));
    });
    el.append(h('div.grid.g2', { style: { marginBottom: '18px' } }, h('div.stack', h('div.small.muted', 'Questions'), qs), h('div.stack', h('div.small.muted', 'Answers — write the letter of the question'), rows)));
  });
  return {
    el,
    check() {
      for (const r of all) {
        const ok = r.sel.value === String(r.qi);
        r.sel.disabled = true;
        r.sel.classList.add(ok ? 'correct' : 'wrong');
        r.fb.replaceChildren(h('div.small.muted', ok ? '✓ ' : `✗ ${LETTERS[r.qi]} · `, r.m.e));
      }
    },
    result: () => ({ score: all.filter((r) => r.sel.value === String(r.qi)).length, max: all.length }),
  };
}

// ---------------------------------------------------------------- Part 5
export function genPart5() {
  const mc = shuffle(READING.filter((r) => r.mc?.length))[0];
  const tf = shuffle(READING.filter((r) => r.tf?.length))[0];
  return [mc, tf].filter(Boolean);
}

export function makePart5(passages, { onChange } = {}) {
  const qs = [];
  const el = h('div');
  passages.forEach((ps, pi) => {
    const tr = h('details', h('summary.small', 'Show English translation'), h('p.small', ps.e));
    el.append(h('h3', { style: { marginTop: pi ? '22px' : 0 } }, `${LETTERS[pi]}. ${ps.title}`), h('div.passage', h('div.h', { lang: 'zh-CN' }, ps.h), h('div.p', ps.p), speakRow(ps.h)), tr);
    const list = h('div');
    (ps.mc || []).forEach((q) => {
      let pick = null;
      const btns = q.options.map((o, j) => h('button.opt', { type: 'button', onclick: () => { pick = j; btns.forEach((b, k) => b.classList.toggle('sel', k === j)); onChange?.(); } }, h('span.ol', LETTERS[j]), h('span.hz', o)));
      const fb = h('div');
      qs.push({ ok: () => pick === q.answer, mark: () => { btns.forEach((b, k) => { b.disabled = true; b.classList.toggle('correct', k === q.answer); b.classList.toggle('wrong', k === pick && k !== q.answer); }); } });
      list.append(qRow(qs.length - 1, zh(q.q, q.qp), h('div.opts.cols', btns), fb));
    });
    (ps.tf || []).forEach((q) => {
      let pick = null;
      const btns = [true, false].map((v) => h('button.opt', { type: 'button', style: { justifyContent: 'center' }, onclick: () => { pick = v; btns.forEach((b) => b.classList.toggle('sel', b.dataset.v === String(v))); onChange?.(); }, dataset: { v: String(v) } }, v ? '√ True' : '× False'));
      qs.push({ ok: () => pick === q.answer, mark: () => btns.forEach((b) => { b.disabled = true; const v = b.dataset.v === 'true'; b.classList.toggle('correct', v === q.answer); b.classList.toggle('wrong', v === pick && v !== q.answer); }) });
      list.append(qRow(qs.length - 1, zh(q.q, q.qp), h('div.opts.cols', { style: { maxWidth: '360px' } }, btns)));
    });
    el.append(list);
  });
  return {
    el,
    check() { qs.forEach((q) => q.mark()); },
    result: () => ({ score: qs.filter((q) => q.ok()).length, max: qs.length }),
  };
}

function speakRow(text) {
  return h('div.row', { style: { marginTop: '8px' } }, speakBtn(text, 'Listen to the passage'), h('span.small.muted', 'Listen'));
}

// ---------------------------------------------------------------- Part 6
export function genPart6(n = 5) {
  return sample(ANSWER, n);
}

export function makePart6(items, { onChange } = {}) {
  const rows = items.map((it, i) => {
    const input = h('textarea.input', { rows: 2, placeholder: '用汉字回答… (answer in Hanzi)', lang: 'zh-CN', style: { minHeight: '64px' }, oninput: () => onChange?.() });
    const fb = h('div');
    const grade = selfGrade(2, () => onChange?.());
    return { row: qRow(i, h('div.row', speakBtn(it.q), zh(it.q, it.qp)), input, fb), input, fb, grade, it };
  });
  return {
    el: h('div', rows.map((r) => r.row)),
    selfGraded: true,
    check() {
      for (const r of rows) {
        r.input.readOnly = true;
        const warn = r.input.value.trim() && !hasHanzi(r.input.value) ? h('div.small', '⚠︎ Your answer has no Hanzi — write the characters you know in the exam.') : null;
        r.fb.replaceChildren(feedback('info', h('div.small.muted', `Model answers · ${r.it.e}`), r.it.models.map((m) => h('div', { style: { marginTop: '6px' } }, zh(m.h, m.p, m.e, { speak: true }))), warn, r.grade));
      }
    },
    result: () => ({ score: sum(rows, (r) => r.grade.value() ?? 0), max: 2 * rows.length, pending: rows.filter((r) => r.grade.value() == null).length }),
  };
}

// ---------------------------------------------------------------- Part 7
export function genPart7(n = 5) {
  return sample(PICTURE, n);
}

export function makePart7(items, { onChange } = {}) {
  const rows = items.map((it, i) => {
    const input = h('textarea.input', { rows: 2, placeholder: `Use “${it.word}” in your sentence…`, lang: 'zh-CN', style: { minHeight: '64px' }, oninput: () => onChange?.() });
    const fb = h('div');
    const grade = selfGrade(2, () => onChange?.());
    const pic = h('div.scene', { role: 'img', 'aria-label': it.sceneEn }, it.scene);
    return { row: qRow(i, h('div.grid.g2', { style: { alignItems: 'center' } }, h('div', pic, h('div.small.muted.center', it.sceneEn)), h('div.stack', h('span.given-word', h('span.hz', it.word), h('span.p', it.wp)), input)), fb), input, fb, grade, it };
  });
  return {
    el: h('div', rows.map((r) => r.row)),
    selfGraded: true,
    check() {
      for (const r of rows) {
        r.input.readOnly = true;
        const v = r.input.value;
        const notes = [];
        if (v.trim() && !v.includes(r.it.word)) notes.push(`⚠︎ You must use the word “${r.it.word}”.`);
        if (v.trim() && !hasHanzi(v)) notes.push('⚠︎ Write it in Hanzi.');
        r.fb.replaceChildren(feedback('info', h('div.small.muted', 'Model sentences'), r.it.models.map((m) => h('div', { style: { marginTop: '6px' } }, zh(m.h, m.p, m.e, { speak: true }))), notes.map((n) => h('div.small', n)), r.grade));
      }
    },
    result: () => ({ score: sum(rows, (r) => r.grade.value() ?? 0), max: 2 * rows.length, pending: rows.filter((r) => r.grade.value() == null).length }),
  };
}

// ---------------------------------------------------------------- Part 8
export function genPart8(n = 10) {
  const pool = shuffle(CHARS);
  const out = [];
  const seen = new Set();
  for (const c of pool) {
    if (seen.has(c.a)) continue;
    seen.add(c.a);
    out.push(c);
    if (out.length === n) break;
  }
  return out;
}

export function makePart8(items, { onChange } = {}) {
  const rows = items.map((it, i) => {
    const input = h('input.input', { type: 'text', lang: 'zh-CN', placeholder: '汉字', autocomplete: 'off', style: { width: '110px', display: 'inline-block', padding: '6px 10px', fontSize: '1.2rem', textAlign: 'center' }, oninput: () => onChange?.() });
    const m = it.s.match(/^(.*?)[（(]\s*([^）)]+?)\s*[）)](.*)$/);
    const sentence = m
      ? h('span.zh-line', h('span.h', { lang: 'zh-CN' }, m[1], h('span', { style: { color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontSize: '.9em', margin: '0 4px' } }, `（${m[2]}）`), m[3]))
      : h('span.zh-line', h('span.h', it.s));
    const fb = h('div');
    const padSlot = h('div');
    let selfOk = null;
    const hw = h('button.btn.sm.ghost', { type: 'button', onclick: () => { padSlot.childElementCount ? padSlot.replaceChildren() : padSlot.replaceChildren(writePad(it.a, { size: 150 })); } }, '✍︎ Practise writing');
    return { row: qRow(i, sentence, h('div.row', { style: { marginTop: '8px' } }, input, hw), padSlot, fb), input, fb, it, ok: () => norm(input.value) === norm(it.a) || selfOk === true, setSelf: (v) => (selfOk = v) };
  });
  return {
    el: h('div', h('p.small.muted', 'Type with a Chinese keyboard — or write on paper, then mark yourself after checking.'), rows.map((r) => r.row)),
    check() {
      for (const r of rows) {
        r.input.readOnly = true;
        const typed = norm(r.input.value) === norm(r.it.a);
        const fbBody = [h('b.hz-big', { style: { fontSize: '1.6rem' } }, r.it.a), ` ${r.it.p} · ${r.it.e}`];
        if (typed) r.fb.replaceChildren(feedback('good', '✓ ', ...fbBody));
        else {
          const g = selfGrade(1, (v) => { r.setSelf(v === 1); onChange?.(); }, 'Wrote it on paper? Mark it:');
          r.fb.replaceChildren(feedback(r.input.value.trim() ? 'bad' : 'info', r.input.value.trim() ? '✗ ' : '', ...fbBody, r.input.value.trim() ? null : g));
        }
      }
    },
    result: () => ({ score: rows.filter((r) => r.ok()).length, max: rows.length }),
  };
}

// ---------------------------------------------------------------- registry
export const BUILDERS = {
  1: { gen: () => genPart1(), make: makePart1 },
  2: { gen: () => genPart2(), make: makePart2 },
  3: { gen: () => genPart3(), make: makePart3 },
  4: { gen: () => genPart4(), make: makePart4 },
  5: { gen: () => genPart5(), make: makePart5 },
  6: { gen: () => genPart6(), make: makePart6 },
  7: { gen: () => genPart7(), make: makePart7 },
  8: { gen: () => genPart8(), make: makePart8 },
};
