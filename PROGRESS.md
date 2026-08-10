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
- `ba6db8f` fix: resolve TypeScript errors in conversations and speech hook
- `b005040` fix: responsive layout and overflow cleanup in conversation pages
- `e2152cb` feat: improve Chinese voice detection and caching in speech synthesis
- `c6a2fce` feat: enhance presentation mode completion screen with stats
- `e2a6b70` feat: lazy-load heavy conversation components with next/dynamic
- `8b6df76` feat: add Everyday English Toolkit with 13 sections
- `783b333` feat: implement listening and speaking exercise types
- `569f7bf` feat: add more patterns and listening/speaking exercises to Everyday English
- `2600b39` feat: add more multiplier patterns to Everyday English
- `4fd2c52` feat: add more time-dates, scheduling, and measurement patterns
- `95c26e2` feat: add more comparison patterns to Everyday English
- `57c2bcd` feat: add more word patterns to Everyday English
- `c4e0d7e` feat: add more native expressions and common mistakes patterns
- `a908257` feat: add more approximation patterns to Everyday English
- `3b47d39` feat: add more everyday grammar patterns
- `4b29c43` feat: expand Everyday English content with more patterns and exercises

**Merges:**
- Merged `data/slang-academy.ts` into `data/slang-module.ts` as `levels` property
- `slang-academy.ts` now re-exports academy data but imports types from central `types/slang-module.ts`
- `app/slang-academy/page.tsx` now imports from `@/data/slang-module` instead of `@/data/slang-academy`
- `data/rough-english.ts` now imports `SlangItem` from `@/types/slang-module`
- Single source of truth for all slang content in `data/slang-module.ts`

**Conversation Module Improvements:**
- Fixed missing Chinese translations in DialogueBubble component
- Added `topicId` and `chineseLine` props to DialogueBubble
- Added Next/Previous conversation navigation buttons at bottom of conversation page
- Added progress bar to PresentationMode
- Added click-anywhere-to-advance in PresentationMode
- Added completion screen when reaching end of conversation
- Improved keyboard accessibility in PresentationMode
- Resolved TypeScript errors in conversations components and speech hook
- Fixed completion screen layout in PresentationMode (moved inside scrollable area)
- Added bottom padding to conversation page for StickyToolbar
- Added `break-words` to DialogueBlock text for overflow safety
- Enhanced completion screen with vocabulary, grammar, and mastery stats
- Lazy-loaded LessonLayout, PresentationMode, and StickyToolbar with next/dynamic

**Speech Synthesis Improvements:**
- Added voice cache keyed by language for faster lookups
- Improved Chinese voice detection with provider preference
- Better fallback handling when voices are not yet loaded

**Everyday English Toolkit:**
- Created new major learning area with 13 subsections
- Added types in `types/everyday-english.ts`
- Added comprehensive content in `data/everyday-english.ts`
- Created components: PatternCard, PracticeExercise, TeacherModePanel, SectionView
- Created pages: hub, section view, pattern detail
- Added sidebar navigation link
- Sections: Numbers & Quantity, Multipliers, Frequency, Time & Dates, Scheduling, Approximation, Measurements, Comparisons, Common Word Patterns, Everyday Grammar, Native Expressions, Common Mistakes, Practice Lab
- Implemented listening exercises with audio playback and multiple choice
- Implemented speaking exercises with speech recognition
- Added more patterns to Numbers & Quantity: a couple of, several, loads of, hundreds of
- Added more patterns to Multipliers: fivefold, tenfold, multiple
- Added more patterns to Time & Dates: quarter, century, millennium
- Added more patterns to Scheduling: weekly, monthly, yearly, annually
- Added more patterns to Measurements: a bottle of, a slice of, a bunch of
- Added more patterns to Comparisons: comparative adjectives, superlative adjectives
- Added more patterns to Word Patterns: a little, a range of, a series of
- Added more patterns to Native Expressions: right now, later on
- Added more patterns to Common Mistakes: half vs a half, a number of vs the number of
- Added more patterns to Approximation: nearly, almost, more or less
- Added more patterns to Everyday Grammar: a dozen, a third of, a quarter of
- Added more exercises to Practice Lab: listening, speaking, fill-in-blank

**Pending Work:**
- Implement search indexing for better performance
- Add spaced repetition integration
