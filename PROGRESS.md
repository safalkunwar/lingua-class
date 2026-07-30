# Lingua Class Progress

## Date: 2026-07-29

### Completed Features

#### 1. Word Book Module
- **Route:** `/word-book`
- **Data:** `data/word-book.ts`
- **Types:** `types/curriculum.ts` (WordBookItem, WordBookTopic)
- **Page:** `app/word-book/page.tsx`
- **Status:** Production ready

**Features:**
- 160 words across 30 topics
- C1 Professional Skills (6 words)
- C2 Advanced Communication (6 words)
- Level filters updated to support A1, A2, B1, B2, C1, C2
- Presentation-style UI with slide view and grid view
- Fullscreen presentation mode for teachers
- Search by English, Chinese, or pinyin
- Level filter (All, A1, A2, B1, B2, C1, C2)
- Topic tabs navigation
- Modal detail view with Previous/Next navigation
- Responsive design with animations

**Topics included:**
1. Daily Life (15 words)
2. Travel (9 words)
3. Work & Business (6 words)
4. Shopping (5 words)
5. Friends & Social Life (4 words)
6. Restaurants & Food (5 words)
7. Airport (5 words)
8. Education (4 words)
9. Health (4 words)
10. Weather (4 words)
11. Technology (4 words)
12. PTE IELTS Academic (6 words)
13. Home & House (8 words)
14. Nature & Outdoors (5 words)
15. Language & Communication (4 words)
16. Science & Technology (4 words)
17. Arts & Culture (4 words)
18. Personal Growth & Mindfulness (4 words)
19. Culture & Travel Deep Dive (4 words)
20. Digital Life & Internet (4 words)
21. Animals & Nature (6 words)
22. Food & Drink (8 words)
23. Travel & Transport (6 words)
24. Health & Wellness (6 words)
25. Professional Skills (6 words)
26. Advanced Communication (6 words)

#### 2. Conversations Module (Completed)
- **Route:** `/conversations`
- **Data:** `data/conversations.ts`
- **Types:** `types/conversations.ts`
- **Pages:** `app/conversations/page.tsx`, `app/conversations/[id]/page.tsx`
- **Status:** Production ready — 11 topics

**Topics included:**
1. Meeting Someone for the First Time (A2, 15 min)
2. Ordering Food at a Restaurant (A2, 12 min)
3. Buying Coffee (A1, 10 min)
4. Going Shopping (A2, 12 min)
5. Taking a Taxi / Uber (A2, 10 min)
6. At the Airport (A2, 12 min)
7. Weekend Plans (A2, 10 min)
8. Making and Cancelling Plans (B1, 10 min)
9. Talking About Family (A2, 10 min)
10. At the Gym (B1, 10 min)
11. Small Talk with Coworkers (B1, 10 min)

**Each topic includes:**
- Vocabulary Preview
- Natural Conversation (with Chinese Translation)
- Useful Expressions
- Grammar Focus
- Collocations & Chunks
- Pronunciation Tips
- Common Mistakes
- Role-play Practice
- Vocabulary Expansion
- Shadowing Practice
- Speaking Challenge

**Note:** Data file previously contained malformed/duplicate entries; cleaned to 11 valid unique topics.

#### 3. Other Existing Modules
- Speaking module (IELTS Speaking Part 1)
- Vocabulary module with flashcards and quiz
- Listening module
- Reading module
- Writing module
- Student/Teacher dashboards

### Technical Notes
- Next.js 16 with App Router
- TypeScript strict mode
- Tailwind CSS for styling
- Framer Motion for animations
- ShadCN UI components
- Repository: https://github.com/safalkunwar/lingu
