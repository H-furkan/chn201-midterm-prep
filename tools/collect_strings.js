// Collect every Chinese string the site speaks aloud -> /tmp/tts_strings.json
// Run with Bun from the repo root:  bun tools/collect_strings.js
// Then generate audio:              python3 tools/gen_audio.py /tmp/tts_strings.json
import { VOCAB } from '../data/vocab.js';
import { GRAMMAR } from '../data/grammar.js';
import { READING, ANSWER, PICTURE } from '../data/written.js';
import { PART1, PART2, PART3 } from '../data/oral.js';
import { COMPOSITION } from '../data/composition.js';

const set = new Set();
const add = (s) => typeof s === 'string' && /[\u4e00-\u9fff]/.test(s) && set.add(s);

VOCAB.forEach((w) => { add(w.h); [...w.h].forEach(add); }); // single characters: handwriting page
GRAMMAR.forEach((g) => { g.examples.forEach((e) => add(e.h)); if (g.negative) add(g.negative.h); });
READING.forEach((r) => add(r.h));
ANSWER.forEach((a) => { add(a.q); a.models.forEach((m) => add(m.h)); });
PICTURE.forEach((p) => p.models.forEach((m) => add(m.h)));
PART1.forEach((p) => add(p.h));
PART2.forEach((p) => p.turns.forEach((t) => add(t.h)));
PART3.forEach((t) => { add(t.h); t.frames.forEach((f) => add(f.h)); t.vocab.forEach(add); t.models.forEach((m) => add(m.h)); });
COMPOSITION.forEach((c) => add(c.model.h));
add('你好！我是你的中文老师。明天考试，加油！'); // settings "Test voice"

await Bun.write('/tmp/tts_strings.json', JSON.stringify([...set]));
console.log(`${set.size} strings -> /tmp/tts_strings.json`);
