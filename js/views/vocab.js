import { h, settings, saveSettings, speakBtn, speak, store } from '../util.js';
import { pageHead, lessonChips } from '../components.js';
import { srsAll, MAX_BOX } from '../srs.js';
import { VOCAB, LESSONS, lessonById } from '../../data/vocab.js';

const plain = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s']/g, '').toLowerCase();

export function render(root, { params }) {
  if (params.l && lessonById[params.l]) saveSettings({ lessons: [params.l] });
  let q = '';
  let mode = store.get('vocabMode', 'cards');
  const list = h('div');
  const count = h('span.small.muted');
  const search = h('input.input', { type: 'search', placeholder: 'Search 汉字, pinyin or English…', oninput: (e) => { q = e.target.value.trim(); draw(); } });
  const modeBtn = h('button.btn.sm', { type: 'button', onclick: () => { mode = mode === 'cards' ? 'table' : 'cards'; store.set('vocabMode', mode); draw(); } });

  function filtered() {
    const sel = new Set(settings().lessons);
    const pq = plain(q);
    return VOCAB.filter((w) => sel.has(w.l)).filter((w) => !q || w.h.includes(q) || plain(w.p).includes(pq) || w.e.toLowerCase().includes(q.toLowerCase()));
  }

  function lvl(id, all) {
    const box = all[id]?.box ?? -1;
    return h('span.lvl', { title: box < 0 ? 'New' : `Level ${box}/${MAX_BOX}` }, Array.from({ length: 4 }, (_, i) => h(`i${box >= (i + 1) * 1.5 ? '.on' : ''}`)));
  }

  function draw() {
    const words = filtered();
    const all = srsAll();
    count.textContent = `${words.length} words`;
    modeBtn.textContent = mode === 'cards' ? '☰ Table' : '▦ Cards';
    if (!words.length) {
      list.replaceChildren(h('div.empty', 'No words match. Try another lesson or search.'));
      return;
    }
    const groups = LESSONS.map((l) => [l, words.filter((w) => w.l === l.id)]).filter(([, ws]) => ws.length);
    list.replaceChildren(
      ...groups.map(([l, ws]) =>
        h('section', { style: { marginBottom: '26px' } },
          h('div.row', { style: { marginBottom: '10px' } }, h('span.tag', l.short), h('h3', { style: { margin: 0 } }, h('span.hz', l.title), h('span.muted', { style: { fontWeight: 500 } }, ` · ${l.en}`)), h('span.spacer'), h('button.btn.sm.ghost', { type: 'button', onclick: () => playAll(ws) }, '▶ Play all')),
          mode === 'cards'
            ? h('div.vocab-grid', ws.map((w) => h('div.vcard', { onclick: () => speak(w.h), title: 'Click to hear' }, speakBtn(w.h), h('span.vh', { lang: 'zh-CN' }, w.h), h('span.vp', w.p), h('span.ve', w.e), h('span.vpos', w.pos), lvl(w.id, all))))
            : h('div.card.flat', { style: { padding: '6px 12px' } }, h('table.vtable', h('thead', h('tr', h('th', ''), h('th', 'Hanzi'), h('th', 'Pinyin'), h('th', 'English'), h('th', ''))), h('tbody', ws.map((w) => h('tr', h('td', speakBtn(w.h)), h('td.hz', { lang: 'zh-CN' }, w.h), h('td', h('span.p.keep', { style: { color: 'var(--accent)', fontWeight: 600 } }, w.p)), h('td', w.e), h('td.small.muted', w.pos)))))),
        ),
      ),
    );
  }

  let playing = false;
  async function playAll(ws) {
    if (playing) { playing = false; speechSynthesis.cancel(); return; }
    playing = true;
    for (const w of ws) {
      if (!playing) break;
      await speak(w.h);
      await new Promise((r) => setTimeout(r, 450));
    }
    playing = false;
  }

  root.append(
    pageHead('Vocabulary · 生词', 'All the words you need', 'Lessons 11–15 follow your teacher’s Wordwall flashcards and slides; lesson 10 comes from the oral Q&A sheet; “L1–9” and “Extra” cover review words that appear in the sample paper. Click any card to hear it. Press P to hide pinyin and test yourself.'),
    h('div.toolbar', search, modeBtn, h('a.btn.sm.primary', { href: '#/flashcards' }, 'Flashcards →'), h('span.spacer'), count),
    h('div.toolbar', lessonChips(draw)),
    list,
  );
  draw();
  return () => { playing = false; };
}
