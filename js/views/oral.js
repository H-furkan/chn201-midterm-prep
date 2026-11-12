import { h, zh, speak, speakSequence, speakBtn, shuffle, norm, logResult, fmtTime, settings, store, stopSpeaking } from '../util.js';
import { pageHead, lessonChips, byLessons, bar, feedback } from '../components.js';
import { recorder, recognizeOnce, canRecognize } from '../media.js';
import { PART1, PART2, PART3 } from '../../data/oral.js';

export function render(root, { args }) {
  const n = Number(args[0]);
  if (n === 1) return part1(root);
  if (n === 2) return part2(root);
  if (n === 3) return part3(root);
  return hub(root);
}

function hub(root) {
  const tiles = [
    ['1', '说', 'Part 1 · Say it in Chinese', `English word or sentence → say the Chinese. ${PART1.length} prompts, including the 5 from the sample.`],
    ['2', '听', 'Part 2 · Listen & answer', `The examiner reads a question once; you answer. All 32 Q&As from the sheet + ${PART2.filter((x) => x.src !== 'sheet').length} extra.`],
    ['3', '讲', 'Part 3 · Topic talk', 'One of two topics at random: “My day” or “Me 10 years ago, now and in 10 years”.'],
  ];
  root.append(
    pageHead('Oral exam · 口试', 'Practise speaking out loud', 'Use headphones and speak every answer aloud — the site reads questions with a Mandarin voice, and you can record yourself to compare with the model.'),
    h('div.grid.g3', tiles.map(([k, c, t, d]) => h('a.tile', { href: `#/oral/${k}` }, h('span.tc', c), h('span.tt', t), h('span.td', d)))),
    h('div.card', { style: { marginTop: '18px' } },
      h('h3', 'Tips for the oral exam'),
      h('ul.small', { style: { paddingLeft: '18px', margin: 0 } },
        h('li', 'Answer in full sentences: repeat the question’s structure (你几点起床？→ 我早上七点起床。).'),
        h('li', 'Tones matter — listen to each model and shadow it (repeat right after the voice).'),
        h('li', 'If you didn’t catch the question, say: 老师，请再说一遍。(Lǎoshī, qǐng zài shuō yí biàn.) — “Please say it again.”'),
        h('li', 'For Part 3, memorise a talk of 8–12 sentences and practise it with the timer until it flows.'),
      ),
    ),
  );
}

// ------------------------------------------------------------------ Part 1
function part1(root) {
  let deck = [];
  let i = 0;
  let right = 0;
  const stage = h('div');
  const prog = h('div');
  const sizeSel = h('select.select', { onchange: start }, [5, 10, 20, 40].map((n) => h('option', { value: n, selected: n === 10 }, `${n} prompts${n === 5 ? ' (exam length)' : ''}`)));

  function start() {
    deck = shuffle(byLessons(PART1, 5)).slice(0, Number(sizeSel.value));
    i = 0;
    right = 0;
    draw();
  }

  function draw() {
    prog.replaceChildren(h('div.row.between.small.muted', h('span', `Prompt ${Math.min(i + 1, deck.length)} / ${deck.length}`), h('span', `✓ ${right}`)), bar((i / deck.length) * 100));
    if (i >= deck.length) {
      logResult('oral1', right, deck.length);
      stage.replaceChildren(h('div.card.empty', h('h2', `${right} / ${deck.length}`), h('p', right === deck.length ? '太棒了！Perfect.' : 'Practise the ones you missed and try again.'), h('button.btn.primary', { type: 'button', onclick: start }, 'Again')));
      return;
    }
    const it = deck[i];
    const reveal = h('div.reveal');
    const heard = h('div');
    const actions = h('div.row', { style: { justifyContent: 'center', marginTop: '18px' } });
    const showAnswer = () => {
      reveal.replaceChildren(h('span.h', { lang: 'zh-CN' }, it.h), h('span.p.keep', it.p), it.alt?.length ? h('div.small.muted', `Also OK: ${it.alt.join(' / ')}`) : null);
      speak(it.h);
      actions.replaceChildren(
        speakBtn(it.h),
        h('button.btn', { type: 'button', style: { borderColor: 'var(--bad)', color: 'var(--bad)' }, onclick: () => { deck.push(it); i++; draw(); } }, '✗ Missed'),
        h('button.btn.jade', { type: 'button', onclick: () => { right++; i++; draw(); } }, '✓ I said it'),
      );
    };
    const micBtn = canRecognize()
      ? h('button.btn', { type: 'button', onclick: async (e) => {
          e.target.disabled = true;
          e.target.textContent = '🎙 Listening…';
          const said = await recognizeOnce();
          e.target.disabled = false;
          e.target.textContent = '🎙 Try again';
          const ok = [it.h, ...(it.alt || [])].some((a) => norm(said).includes(norm(a)) || norm(a).includes(norm(said)) && norm(said).length >= norm(a).length - 1);
          heard.replaceChildren(feedback(said ? (ok ? 'good' : 'bad') : 'info', said ? `Heard: “${said}” ${ok ? '✓' : ''}` : 'Didn’t catch that — try again or reveal.'));
        } }, '🎙 Answer by voice')
      : null;
    actions.replaceChildren(micBtn, h('button.btn.primary', { type: 'button', onclick: showAnswer }, 'Reveal answer'));
    stage.replaceChildren(h('div.card.prompt-card', h('div.small.muted', 'Say this in Chinese:'), h('div.en-big', it.en), reveal, heard, actions));
  }

  root.append(
    pageHead('Oral Part 1', 'Say it in Chinese', 'You see an English word or sentence — say it in Chinese out loud, then reveal and compare. Mark yourself honestly; missed prompts come back at the end.', [['Oral', '#/oral'], ['Part 1']]),
    h('div.toolbar', sizeSel, h('span.spacer'), canRecognize() ? h('span.small.muted', 'Voice check works best in Chrome') : null),
    h('div.toolbar', lessonChips(start)),
    h('div', { style: { maxWidth: '640px', margin: '0 auto' } }, prog, h('div', { style: { marginTop: '12px' } }, stage)),
  );
  start();
}

// ------------------------------------------------------------------ Part 2
function part2(root) {
  let mode = 'exam';
  const body = h('div');
  const tabs = h('div.chips');
  const drawTabs = () => tabs.replaceChildren(
    h(`button.chip${mode === 'exam' ? '.on' : ''}`, { type: 'button', onclick: () => { mode = 'exam'; drawTabs(); exam(); } }, '🎧 Exam simulation'),
    h(`button.chip${mode === 'study' ? '.on' : ''}`, { type: 'button', onclick: () => { mode = 'study'; drawTabs(); study(); } }, '📖 Study all Q&As'),
  );

  function study() {
    let src = 'all';
    let q = '';
    const list = h('div.stack');
    const draw = () => {
      const items = PART2.filter((x) => src === 'all' || (src === 'sheet' ? x.src === 'sheet' : x.src !== 'sheet')).filter((x) => !q || x.turns.some((t) => t.h.includes(q) || t.e.toLowerCase().includes(q.toLowerCase())));
      list.replaceChildren(...items.map((x) =>
        h('div.card.flat',
          h('div.row.between', { style: { marginBottom: '10px' } }, h('span.tag' + (x.src === 'sheet' ? '.accent' : ''), x.src === 'sheet' ? `Sheet #${x.n}` : `Extra #${x.n}`), h('button.btn.sm.ghost', { type: 'button', onclick: () => playDialog(x) }, '▶ Play dialogue')),
          h('div.dialog', x.turns.map((t) => h(`div.bubble.${t.s}`, h('span.who', t.s), speakBtn(t.h), zh(t.h, t.p, t.e)))),
          x.tip ? h('div.small.muted', { style: { marginTop: '8px' } }, '💡 ', x.tip) : null,
        ),
      ));
    };
    const srcSel = h('select.select', { onchange: (e) => { src = e.target.value; draw(); } }, h('option', { value: 'all' }, 'All'), h('option', { value: 'sheet' }, 'Q&A sheet (1–32)'), h('option', { value: 'extra' }, 'Extra practice'));
    body.replaceChildren(h('div.toolbar', srcSel, h('input.input', { type: 'search', placeholder: 'Search…', oninput: (e) => { q = e.target.value.trim(); draw(); } })), list);
    draw();
  }

  function playDialog(x) {
    return speakSequence(x.turns.map((t) => t.h), 350);
  }

  function exam() {
    const sizeSel = h('select.select', { onchange: () => go() }, [5, 10, 32].map((n) => h('option', { value: n }, n === 32 ? 'All 32 sheet questions' : `${n} questions`)));
    const onlySheet = h('input', { type: 'checkbox', checked: store.get('oral2Sheet', true), onchange: (e) => { store.set('oral2Sheet', e.target.checked); go(); } });
    const stage = h('div');
    let deck = [];
    let i = 0;
    let right = 0;

    function go() {
      const pool = onlySheet.checked ? PART2.filter((x) => x.src === 'sheet') : PART2;
      deck = shuffle(pool).slice(0, Number(sizeSel.value));
      i = 0;
      right = 0;
      step();
    }

    function step() {
      if (i >= deck.length) {
        logResult('oral2', right, deck.length);
        stage.replaceChildren(h('div.card.empty', h('h2', `${right} / ${deck.length}`), h('p', 'answered well'), h('button.btn.primary', { type: 'button', onclick: go }, 'New round')));
        return;
      }
      const x = deck[i];
      // Each A turn is a question the student answers (B).
      const pairs = [];
      for (let k = 0; k < x.turns.length; k += 2) pairs.push([x.turns[k], x.turns[k + 1]]);
      let pi = 0;
      const shown = h('div.dialog');
      const ctrl = h('div.row', { style: { justifyContent: 'center', marginTop: '16px' } });
      const orb = h('button.listen-orb', { type: 'button', 'aria-label': 'Play question' }, '▶');
      let plays = 0;
      const playsNote = h('div.small.muted.center');
      orb.addEventListener('click', async () => {
        plays++;
        orb.classList.add('playing');
        await speak(pairs[pi][0].h);
        orb.classList.remove('playing');
        playsNote.textContent = plays > 1 ? `Played ${plays}× — in the exam it is read once.` : 'Now answer out loud, then reveal.';
      });
      const rec = recorder({ maxSec: 60 });

      function askCurrent() {
        plays = 0;
        playsNote.textContent = 'Press play and listen carefully — no text in the exam!';
        ctrl.replaceChildren(h('button.btn.primary', { type: 'button', onclick: revealCurrent }, 'Reveal'));
        setTimeout(() => orb.click(), 300);
      }
      function revealCurrent() {
        const [qa, an] = pairs[pi];
        shown.append(h('div.bubble.A', h('span.who', 'A'), speakBtn(qa.h), zh(qa.h, qa.p, qa.e)));
        if (an) shown.append(h('div.bubble.B', h('span.who', 'B'), speakBtn(an.h), zh(an.h, an.p, an.e)));
        pi++;
        if (pi < pairs.length) {
          ctrl.replaceChildren(h('button.btn.primary', { type: 'button', onclick: askCurrent }, 'Next question in this dialogue →'));
        } else {
          ctrl.replaceChildren(
            h('button.btn', { type: 'button', style: { borderColor: 'var(--bad)', color: 'var(--bad)' }, onclick: () => { i++; step(); } }, '✗ Need practice'),
            h('button.btn.jade', { type: 'button', onclick: () => { right++; i++; step(); } }, '✓ Answered well'),
          );
        }
      }

      stage.replaceChildren(
        h('div.card',
          h('div.row.between', h('span.tag', `Question ${i + 1} / ${deck.length}`), h('span.small.muted', `✓ ${right}`)),
          bar((i / deck.length) * 100),
          h('div', { style: { marginTop: '18px' } }, orb, playsNote),
          h('div', { style: { margin: '10px auto', maxWidth: '360px' } }, rec),
          shown,
          ctrl,
          x.tip ? h('details.small', { style: { marginTop: '12px' } }, h('summary', 'Hint'), x.tip) : null,
        ),
      );
      askCurrent();
    }

    body.replaceChildren(
      h('div.toolbar', sizeSel, h('label.row.small', onlySheet, ' Only the 32 sheet questions')),
      h('div', { style: { maxWidth: '680px', margin: '0 auto' } }, stage),
    );
    go();
  }

  root.append(
    pageHead('Oral Part 2', 'Listen & answer', 'In the exam the teacher reads each question once and you answer immediately. Simulate it here: listen without text, answer aloud, then reveal the model answer.', [['Oral', '#/oral'], ['Part 2']]),
    h('div.toolbar', tabs),
    body,
  );
  drawTabs();
  exam();
}

// ------------------------------------------------------------------ Part 3
function part3(root) {
  let topic = PART3[0];
  let level = 0;
  const body = h('div');
  const tabs = h('div.chips');
  let timerIv = null;

  function drawTabs() {
    tabs.replaceChildren(...PART3.map((t) => h(`button.chip${t === topic ? '.on' : ''}`, { type: 'button', onclick: () => { topic = t; level = 0; drawTabs(); draw(); } }, h('span.hz', t.h))),
      h('button.chip', { type: 'button', title: 'Pick a topic at random, like in the exam', onclick: () => { topic = PART3[Math.floor(Math.random() * PART3.length)]; drawTabs(); draw(); } }, '🎲 Random (exam style)'));
  }

  function draw() {
    clearInterval(timerIv);
    const t = topic;
    const model = t.models[level];
    const modelBox = h('div');
    const drawModel = () => {
      const m = t.models[level];
      modelBox.replaceChildren(
        h('div.row', { style: { marginBottom: '10px' } }, ...t.models.map((mm, k) => h(`button.chip${k === level ? '.on' : ''}`, { type: 'button', onclick: () => { level = k; drawModel(); } }, mm.level)), h('span.spacer'), speakBtn(m.h, 'Listen to the model talk')),
        h('div.passage', h('div.h', { lang: 'zh-CN' }, m.h), h('div.p', m.p)),
        h('details', { style: { marginTop: '8px' } }, h('summary.small', 'English translation'), h('p.small', m.e)),
      );
    };
    drawModel();

    let left = 120;
    const timer = h('span.timer', fmtTime(left));
    const timerBtn = h('button.btn', { type: 'button', onclick: () => {
      if (timerIv) { clearInterval(timerIv); timerIv = null; timerBtn.textContent = '⏱ Start 2-min timer'; return; }
      left = 120;
      timerBtn.textContent = '⏸ Stop';
      timerIv = setInterval(() => { left--; timer.textContent = fmtTime(Math.max(0, left)); timer.classList.toggle('warn', left <= 15); if (left <= 0) { clearInterval(timerIv); timerIv = null; timerBtn.textContent = '⏱ Start 2-min timer'; } }, 1000);
    } }, '⏱ Start 2-min timer');

    body.replaceChildren(
      h('div.card', h('div.row', speakBtn(t.h), h('div', h('h2.hz', { style: { margin: 0 } }, t.h), h('div.p.small.muted', t.p), h('div.muted', t.en)))),
      h('div.grid.g2', { style: { marginTop: '16px', alignItems: 'start' } },
        h('div.stack',
          h('div.card', h('h3', 'Sentence frames'), t.frames.map((f) => h('div.ex', zh(f.h, f.p, f.e, { speak: true })))),
          h('div.card', h('h3', 'Key words'), h('div.chips', t.vocab.map((v) => h('button.tok', { type: 'button', lang: 'zh-CN', onclick: () => speak(v) }, v)))),
        ),
        h('div.stack',
          h('div.card', h('h3', 'Model talk'), modelBox),
          h('div.card', h('h3', 'Your turn'), h('p.small.muted', 'Start the timer, give your talk out loud (aim for 1–2 minutes), and record it to check your tones.'), h('div.row', timerBtn, timer), h('div', { style: { marginTop: '10px' } }, recorder({ maxSec: 240 }))),
          t.tips?.length ? h('div.card', h('h3', 'Tips'), h('ul.small', { style: { paddingLeft: '18px', margin: 0 } }, t.tips.map((x) => h('li', x)))) : null,
        ),
      ),
    );
  }

  root.append(
    pageHead('Oral Part 3', 'Topic talk', 'You get one of these two topics at random. Prepare both: learn the frames, memorise a model, then practise with the timer.', [['Oral', '#/oral'], ['Part 3']]),
    h('div.toolbar', tabs),
    body,
  );
  drawTabs();
  draw();
  return () => { clearInterval(timerIv); stopSpeaking(); };
}
