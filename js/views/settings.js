import { h, settings, saveSettings, speak, toast, hasZhVoice, canSpeak } from '../util.js';
import { pageHead } from '../components.js';

const KEYS = () => Object.keys(localStorage).filter((k) => k.startsWith('chn201:'));

export function render(root) {
  const s = settings();
  const rateOut = h('b', `${s.rate.toFixed(2)}×`);
  const voiceNote = !canSpeak()
    ? 'This browser cannot speak. Use Chrome, Safari or Edge.'
    : hasZhVoice()
      ? 'A Mandarin voice is available ✓'
      : 'No Mandarin voice found. On Windows: Settings → Time & Language → Speech → add Chinese (Simplified). On Android: install Google TTS Chinese voice.';

  const file = h('input', { type: 'file', accept: 'application/json', style: { display: 'none' }, onchange: importData });

  function exportData() {
    const data = Object.fromEntries(KEYS().map((k) => [k, localStorage.getItem(k)]));
    const a = h('a', { href: URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' })), download: `chn201-progress-${new Date().toISOString().slice(0, 10)}.json` });
    a.click();
  }

  async function importData() {
    try {
      const data = JSON.parse(await file.files[0].text());
      for (const [k, v] of Object.entries(data)) if (k.startsWith('chn201:')) localStorage.setItem(k, v);
      toast('Progress imported');
      setTimeout(() => location.reload(), 600);
    } catch {
      toast('That file is not a valid progress export');
    }
  }

  root.append(
    pageHead('Settings · 设置', 'Settings & your data', 'Everything is stored only in this browser (no account). Export your progress to move it to another device.'),
    h('div.grid.g2', { style: { alignItems: 'start' } },
      h('div.card.stack',
        h('h3', 'Display'),
        h('label.row.between', 'Theme', h('select.select', { onchange: (e) => { saveSettings({ theme: e.target.value }); location.reload(); } }, ['auto', 'light', 'dark'].map((t) => h('option', { value: t, selected: s.theme === t }, t[0].toUpperCase() + t.slice(1))))),
        h('label.row.between', 'Show pinyin (shortcut: P)', h('input', { type: 'checkbox', checked: s.pinyin, onchange: (e) => { saveSettings({ pinyin: e.target.checked }); document.documentElement.classList.toggle('hide-pinyin', !e.target.checked); } })),
        h('hr.hr'),
        h('h3', 'Voice'),
        h('p.small.muted', voiceNote),
        h('label.stack', h('span.row.between', 'Speaking speed', rateOut), h('input', { type: 'range', min: 0.5, max: 1.2, step: 0.05, value: s.rate, style: { width: '100%' }, oninput: (e) => { saveSettings({ rate: Number(e.target.value) }); rateOut.textContent = `${Number(e.target.value).toFixed(2)}×`; } })),
        h('button.btn', { type: 'button', onclick: () => speak('你好！我是你的中文老师。明天考试，加油！') }, '▶ Test voice'),
      ),
      h('div.card.stack',
        h('h3', 'Progress data'),
        h('p.small.muted', `${KEYS().length} saved items (flashcard levels, drill scores, mock history, drafts).`),
        h('div.row', h('button.btn', { type: 'button', onclick: exportData }, '⬇ Export progress'), h('button.btn', { type: 'button', onclick: () => file.click() }, '⬆ Import progress'), file),
        h('button.btn', { type: 'button', style: { borderColor: 'var(--bad)', color: 'var(--bad)' }, onclick: () => { if (confirm('Delete ALL progress on this device?')) { KEYS().forEach((k) => localStorage.removeItem(k)); location.reload(); } } }, 'Reset all progress'),
        h('hr.hr'),
        h('h3', 'About'),
        h('p.small', 'Built for CHN201 (METU Modern Languages, HSK Standard Course 1, lessons 10–15) from the class slides, Wordwall flashcards, the sample midterm and the oral Q&A sheet. All exercises are generated for practice — they are not the real exam.'),
        h('p.small.muted', 'Stroke data: Hanzi Writer (MIT) / Make Me a Hanzi. Speech: your browser’s built-in voices.'),
      ),
    ),
  );
}
