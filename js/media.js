// Microphone helpers: record-yourself (MediaRecorder) and optional Mandarin speech recognition.
import { h, toast, fmtTime } from './util.js';

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export const canRecognize = () => !!SR;

/** Listen once in zh-CN; resolves with the transcript ('' on failure). */
export function recognizeOnce() {
  return new Promise((resolve) => {
    if (!SR) return resolve('');
    const r = new SR();
    r.lang = 'zh-CN';
    r.interimResults = false;
    r.maxAlternatives = 3;
    let said = '';
    r.onresult = (e) => { said = [...e.results[0]].map((a) => a.transcript).join(' / '); };
    r.onerror = (e) => { if (e.error === 'not-allowed') toast('Microphone permission denied'); };
    r.onend = () => resolve(said);
    try { r.start(); } catch { resolve(''); }
  });
}

/** A record/stop/play widget. Returns an element with a .stop() method. */
export function recorder({ maxSec = 180 } = {}) {
  let rec = null;
  let chunks = [];
  let stream = null;
  let t0 = 0;
  let tick = null;
  const audio = h('audio', { controls: true, style: { display: 'none', width: '100%', marginTop: '8px' } });
  const time = h('span.small.muted', '');
  const btn = h('button.btn', { type: 'button', onclick: toggle }, '🎙 Record yourself');
  const wrap = h('div', h('div.row', btn, time), audio);

  async function toggle() {
    if (rec && rec.state === 'recording') return stop();
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) return toast('Recording is not supported in this browser');
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      return toast('Microphone permission denied');
    }
    chunks = [];
    rec = new MediaRecorder(stream);
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    rec.onstop = () => {
      audio.src = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
      audio.style.display = 'block';
      stream.getTracks().forEach((t) => t.stop());
    };
    rec.start();
    t0 = Date.now();
    btn.replaceChildren(h('span.rec-dot'), ' Stop');
    tick = setInterval(() => {
      const s = (Date.now() - t0) / 1000;
      time.textContent = fmtTime(s);
      if (s >= maxSec) stop();
    }, 250);
  }

  function stop() {
    clearInterval(tick);
    if (rec && rec.state === 'recording') rec.stop();
    btn.textContent = '🎙 Record again';
  }
  wrap.stop = stop;
  return wrap;
}
