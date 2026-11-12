"""Pre-generate natural Mandarin audio (Microsoft neural voice via edge-tts) for every
Chinese string the site speaks. Writes audio/<hash>.mp3 and audio/manifest.json
({text: file}). Already-generated files are skipped, so re-running only adds new strings.

Usage:
  1. Export the strings (see tools/collect_strings.js, run with Bun):  bun tools/collect_strings.js
  2. pip install edge-tts && python3 tools/gen_audio.py
"""
import asyncio, hashlib, json, os, re, sys

import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'audio')
VOICE = 'zh-CN-XiaoxiaoNeural'
RATE = '-10%'  # a little slower than conversational speed, for learners


def spoken(text: str) -> str:
    # Sentence frames contain ___ blanks; read them as a short pause.
    return re.sub(r'_{2,}', '……', text)


def name(text: str) -> str:
    return hashlib.sha1(f'{VOICE}|{RATE}|{text}'.encode()).hexdigest()[:12] + '.mp3'


async def synth(text: str, sem: asyncio.Semaphore) -> None:
    path = os.path.join(OUT, name(text))
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(spoken(text), VOICE, rate=RATE).save(path)
                return
            except Exception as e:  # network hiccups: retry with backoff
                if attempt == 3:
                    print('FAILED', text, e, file=sys.stderr)
                await asyncio.sleep(1.5 * (attempt + 1))


async def main() -> None:
    texts = json.load(open(sys.argv[1] if len(sys.argv) > 1 else '/tmp/tts_strings.json'))
    os.makedirs(OUT, exist_ok=True)
    sem = asyncio.Semaphore(8)
    await asyncio.gather(*(synth(t, sem) for t in texts))
    manifest = {t: name(t) for t in texts if os.path.exists(os.path.join(OUT, name(t)))}
    json.dump(manifest, open(os.path.join(OUT, 'manifest.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
    print(f'{len(manifest)}/{len(texts)} strings have audio')


asyncio.run(main())
