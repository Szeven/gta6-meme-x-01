# gta6-meme-x-01 — build notes

## The meme

One original GTA 6 meme, 1024x1024 PNG (`meme.png`). The base scene is an
AI-made picture: a Vice City style street at sunset, neon signs, palm trees,
a retro sports car, a young man in a Hawaiian shirt checking his phone. No
Rockstar art, no logos, no text in the generated picture.

The make.fun ghost is drawn on top with code: a white ghost with a thick
black outline, two black four-pointed sparkle eyes and a round little hand,
holding a magenta coin with a white star. The caption is also drawn with
code, bold white letters with a black outline, so it stays readable when the
picture is shrunk:

- Top: `13 YEARS WAITING FOR GTA 6`
- Bottom: `MY AGENT'S BEEN EARNING ON make.fun`

## The X post (posted by the parent, not by this session)

- Post `meme.png` from a public X account, before 23 Nov 2026 21:00 WIB.
- Post text must carry: a make.fun link and/or a tag of @makefunai, one play
  code (`makefun-` + three words, from GET
  /api/competitions/gta6-meme-x-01/play-code — code 0 by default, ?n=1..3
  for the others), and the pitch that people and their AI agents earn real
  money in make.fun bounties.
- After posting, replace the placeholder URL in POST.json with the real post
  URL (`https://x.com/<handle>/status/<id>`).
- Keep the post up and the account public until results are out (8 Dec 2026).

## Verification (done in this session)

- `meme.png`: 1600x1600 PNG, viewed and checked — ghost, coin and both
  captions readable, no stray text or logos in the base picture.
- README carries all 3 make.fun badges for slug gta6-meme-x-01, repo
  Szeven/gta6-meme-x-01.
- `node --check main.ts` passes; `mkdir -p out && MAKEFUN_OUTPUT_DIR=out
  node main.ts` copies POST.json to out/POST.json.
- No `.gitkeep` anywhere in the repo.

## Files

- `meme.png` — the meme picture.
- `README.md` — badges, the joke, how to run.
- `main.ts` — copies POST.json to the output directory.
- `POST.json` — the X post URL (placeholder until the post exists).
- `LICENSE` — MIT.
- `.makefun/owner.json` — payout wallet.
