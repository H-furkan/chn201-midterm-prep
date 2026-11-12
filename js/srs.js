// Leitner-style spaced repetition tuned for a one-week cram: intervals are short.
import { store } from './util.js';

const MIN = 60 * 1000;
// box -> wait before next review
const INTERVAL = [1 * MIN, 10 * MIN, 60 * MIN, 8 * 60 * MIN, 24 * 60 * MIN, 3 * 24 * 60 * MIN, 7 * 24 * 60 * MIN];
export const MAX_BOX = INTERVAL.length - 1;

const KEY = 'srs';
export const srsAll = () => store.get(KEY, {});
export const srsOf = (id) => srsAll()[id] || null;

/** grade: 0 again, 1 hard, 2 good, 3 easy */
export function grade(id, g) {
  return store.update(KEY, {}, (all) => {
    const cur = all[id] || { box: 0, right: 0, wrong: 0 };
    let box = cur.box;
    if (g === 0) box = 0;
    else if (g === 1) box = Math.max(1, box);
    else if (g === 2) box = Math.min(MAX_BOX, box + 1);
    else box = Math.min(MAX_BOX, box + 2);
    all[id] = {
      box,
      due: Date.now() + INTERVAL[box],
      right: cur.right + (g > 0 ? 1 : 0),
      wrong: cur.wrong + (g === 0 ? 1 : 0),
      last: Date.now(),
    };
    return all;
  })[id];
}

/** Known/learning/new counts for a word list. */
export function mastery(words) {
  const all = srsAll();
  let known = 0;
  let learning = 0;
  for (const w of words) {
    const s = all[w.id];
    if (!s) continue;
    if (s.box >= 4) known++;
    else learning++;
  }
  return { known, learning, fresh: words.length - known - learning, total: words.length };
}

/** Due cards first (oldest due first), then unseen cards in lesson order. */
export function queue(words, { includeNew = true, limit = 20 } = {}) {
  const all = srsAll();
  const now = Date.now();
  const due = words.filter((w) => all[w.id] && all[w.id].due <= now).sort((a, b) => all[a.id].due - all[b.id].due);
  const fresh = includeNew ? words.filter((w) => !all[w.id]) : [];
  return [...due, ...fresh].slice(0, limit);
}

export function nextDueIn(words) {
  const all = srsAll();
  const dues = words.map((w) => all[w.id]?.due).filter(Boolean);
  if (!dues.length) return null;
  return Math.max(0, Math.min(...dues) - Date.now());
}
