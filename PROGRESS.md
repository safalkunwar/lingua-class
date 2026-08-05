# Lingua Class - Progress Tracker

## Session Log

### 2026-08-05 Session

**Content Added:**
- `data/rough-english.ts`: Added 10 new vulgar expressions (rough-28 through rough-37)
  - Holy shit, Fuck off, Bullshit, Asshole, Son of a bitch, Goddammit, Cunt, Motherfucker, Bastard, Piss off
- `data/slang-academy.ts`: Added new `text-speak` category with 50 common short forms
  - IDK, OMG, LOL, BRB, BTW, TBH, IDC, SMH, TTYL, NP, THX, PLS, ASAP, FYI, GTG, BFF, ROFL, LMAO, STFU, WTF, TL;DR, AMA, FOMO, YOLO, BAE, FAM, IRL, NVM, OFC, OP, TMI, WTH, WYD, WBY, HBU, JK, SMFH, TFW, YW, TY, G2G, CU, GN, GB, HMU, K, KK, RN, IMO, ICYMI
- `data/slang-module.ts`: Added 6th lesson "Slang in Media & Entertainment" with 8 terms
- `data/daily-expressions.ts`: Added 5 new daily expressions
- `data/dialogues.ts`: Added 3 new dialogue scenarios
- `data/word-book.ts`: Added 2 advanced C2 vocabulary entries

**Lint Cleanup:**
- Removed unused imports/vars across 22+ files in app/ and components/
- Fixed all ESLint errors in conversation components
- Replaced unsafe Math.random() in render with state-based shuffle
- Added exampleZh to PronunciationTip type
- Replaced any types in hooks/use-speech-recognition.ts
- Suppressed img warnings in vocabulary components
- Added gen.cjs to ESLint ignore list
- **Current status: 0 errors, 3 warnings** (all no-img-element in app/image-guessing/page.tsx)

**Type Safety:**
- Updated SlangLevel type to include "text-speak" in both data/slang-academy.ts and types/conversations.ts

**Commits:**
- `149eb95` feat: add holy shit and fuck off to rough english
- `f8b5bee` feat: add more vulgar expressions to rough english
- `61c7261` feat: add more vulgar expressions to rough english
- `8560010` feat: add text-speak short forms category to slang academy

**Merges:**
- Merged `data/slang-academy.ts` into `data/slang-module.ts` as `levels` property
- `slang-academy.ts` now re-exports academy data but imports types from central `types/slang-module.ts`
- `app/slang-academy/page.tsx` now imports from `@/data/slang-module` instead of `@/data/slang-academy`
- `data/rough-english.ts` now imports `SlangItem` from `@/types/slang-module`
- Single source of truth for all slang content in `data/slang-module.ts`

**Pending Work:**
- Resolve remaining TypeScript errors in conversations components
- Consider replacing <img> with next/image for better optimization
