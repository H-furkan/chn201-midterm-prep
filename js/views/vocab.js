import { h, speakBtn, speak, speakSequence, stopSpeaking } from '../util.js';
import { pageHead } from '../components.js';
import { srsAll, MAX_BOX } from '../srs.js';
import { VOCAB } from '../../data/vocab.js';

const plain = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s']/g, '').toLowerCase();

export function render(root) {
  let q = '';
  let playing = false;
  const list = h('div.vocab-grid');
  const count = h('span.small.muted');
  const search = h('input.input', { type: 'search', placeholder: 'Search 汉字, pinyin or English…', oninput: (e) => { q = e.target.value.trim(); draw(); } });
  const playBtn = h('button.btn.sm', { type: 'button', onclick: playAll }, '▶ Play all');

  function filtered() {
    const pq = plain(q);
    return VOCAB.filter((w) => !q || w.h.includes(q) || plain(w.p).includes(pq) || w.e.toLowerCase().includes(q.toLowerCase()));
  }

  function lvl(id, all) {
    const box = all[id]?.box ?? -1;
    return h('span.lvl', { title: box < 0 ? 'New' : `Level ${box}/${MAX_BOX}` }, Array.from({ length: 4 }, (_, i) => h(`i${box >= (i + 1) * 1.5 ? '.on' : ''}`)));
  }

  function draw() {
    const words = filtered();
    const all = srsAll();
    count.textContent = `${words.length} words`;
    list.replaceChildren(
      ...(words.length
        ? words.map((w) => h('div.vcard', { onclick: () => speak(w.h), title: 'Click to hear' }, speakBtn(w.h), h('span.vh', { lang: 'zh-CN' }, w.h), h('span.vp', w.p), h('span.ve', w.e), h('span.vpos', w.pos), lvl(w.id, all)))
        : [h('div.empty', 'No words match your search.')]),
    );
  }

  async function playAll() {
    if (playing) { playing = false; stopSpeaking(); return; }
    playing = true;
    playBtn.textContent = '■ Stop';
    await speakSequence(filtered().map((w) => w.h), 450);
    playing = false;
    playBtn.textContent = '▶ Play all';
  }

  root.append(
    pageHead('Vocabulary · 生词', 'Every word for the exam', 'All words from the slides, flashcards, Q&A sheet and sample paper in one list. Click a card to hear it. Press P to hide pinyin and test yourself.'),
    h('div.toolbar', search, playBtn, h('a.btn.sm.primary', { href: '#/flashcards' }, 'Flashcards →'), h('span.spacer'), count),
    list,
  );
  draw();
  return () => { playing = false; };
}
