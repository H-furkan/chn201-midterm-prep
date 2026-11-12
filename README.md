# 中文 CHN201 · Midterm Prep

A study website for the CHN201 midterm. It is built from the class slides, the Wordwall flashcards, the sample midterm paper and the oral-exam Q&A sheet.

**Live site:** https://h-furkan.github.io/chn201-midterm-prep/

## What's inside

| Section | What it does |
|---|---|
| **Vocabulary** | Every exam word in one searchable list, with pinyin, English and audio. |
| **Flashcards** | Spaced repetition with four modes: 汉字→meaning, English→汉字, pinyin→汉字 and listening. When nothing is due, you can keep practising random cards. |
| **Grammar** | 35 grammar points, each with a formula, audio examples, common mistakes and a mini quiz. There is also a mixed quiz. |
| **Handwriting** | Write characters stroke by stroke on a 田字格 grid. Wrong strokes are rejected. A test mode hides the outline. |
| **Written drills** | One drill for each of the 9 parts of the written paper, in the sample exam's format. In parts 1 and 2 you drag answers from the bank into the blanks (or tap one, then tap a blank). Every set is random. |
| **Composition** | Editor with a live word count and Hanzi percentage (the +2 bonus needs ≥20% Hanzi), outlines, phrases and model essays. |
| **Oral practice** | Part 1: English → say it in Chinese, with an optional voice check. Part 2: hear a question once, answer, then reveal. Covers all 32 sheet questions plus extras. Part 3: two topic talks with frames, model talks, a timer and a recorder. |
| **Mock exam** | A full 100-point paper with a 120-minute timer. Objective parts are marked automatically and the rest are self-marked. Scores are saved to a history. |

Progress is saved in your browser's `localStorage`. There are no accounts. Go to **Settings** to export or import it.

Keyboard: **P** shows or hides pinyin. In flashcards, **Space** flips the card and **1–4** grades it.

## Running locally

The site is plain HTML, CSS and JavaScript (ES modules) with no build step. Serve the folder over HTTP:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing content

All content is in `data/`:

- `vocab.js`: words
- `grammar.js`: grammar points and quizzes
- `written.js`: question banks for written parts 2–8
- `oral.js`: oral parts 1–3, including the Q&A sheet
- `composition.js`: composition topics, models and tips

The design follows a Chinese exercise book: Hanzi in Kaiti (LXGW WenKai) inside 田字格 grids, blue pen for your answers, red pen for marking, and a blackboard dark mode.

Audio is pre-recorded with a natural Mandarin neural voice (`zh-CN-XiaoxiaoNeural` via edge-tts) and stored in `audio/`. Anything without a recording falls back to the browser's voice. After editing content, regenerate the audio: run `bun tools/collect_strings.js`, then `python3 tools/gen_audio.py` (needs `pip install edge-tts`). Existing files are skipped. Handwriting uses [Hanzi Writer](https://hanziwriter.org) (MIT).

*These are practice materials made by students. They are not the real exam.*
