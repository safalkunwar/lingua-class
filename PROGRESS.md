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
- 229 words across 28 topics
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
4. Shopping (8 words)
5. Friends & Social Life (8 words)
6. Restaurants & Food (8 words)
7. Airport (8 words)
8. Education (8 words)
9. Health (8 words)
10. Weather (7 words)
11. Technology (8 words)
12. PTE IELTS Academic (6 words)
13. Friends (6 words)
14. Home & House (8 words)
15. Nature & Outdoors (8 words)
16. Language & Communication (8 words)
17. Science & Technology (8 words)
18. Arts & Culture (8 words)
19. Business & Career (8 words)
20. Personal Growth & Mindfulness (8 words)
21. Culture & Travel Deep Dive (6 words)
22. Digital Life & Internet (8 words)
23. Animals & Nature (6 words)
24. Food & Drink (8 words)
25. Travel & Transport (6 words)
26. Health & Wellness (6 words)
27. Professional Skills (6 words)
28. Advanced Communication (6 words)

#### 2. Conversations Module (Completed)
- **Route:** `/conversations`
- **Data:** `data/conversations.ts`
- **Types:** `types/conversations.ts`
- **Pages:** `app/conversations/page.tsx`, `app/conversations/[id]/page.tsx`
- **Status:** Production ready — 39 topics

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
12. Greeting People (A1, 10 min)
13. Asking for Directions (A1, 12 min)
14. Ordering Food at a Restaurant (A1, 12 min)
15. Shopping Basics (A1, 10 min)
16. Daily Small Talk (A1, 10 min)
17. At the Coffee Shop (A1, 10 min)
18. Making Phone Calls (A1, 10 min)
19. At the Bank (A1, 12 min)
20. Visiting a Doctor (A1, 12 min)
21. Making Appointments (A1, 10 min)
22. At the Hotel (A1, 12 min)
23. At the Post Office (A1, 10 min)
24. At the Gym (A1, 10 min)
25. At the Supermarket (A1, 10 min)
26. Taking Public Transport (A1, 10 min)
27. Internet and Social Media (A1, 10 min)
28. Asking for Help (A1, 10 min)
29. Talking About Weather (A1, 10 min)
30. Meeting New Neighbors (A1, 10 min)
31. At the Laundromat (A1, 10 min)
32. At the Pet Store (A1, 10 min)
33. At the Library (A1, 10 min)
34. At the Pharmacy (A1, 10 min)
35. Taking a Taxi (A1, 10 min)
36. At the Hair Salon (A1, 10 min)
37. Coffee Shop Meeting (A1, 10 min)

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

**Added beginner-level daily conversations (A1 level):**
- Greeting People: basic greetings, introductions, farewells
- Asking for Directions: asking and understanding directions
- Ordering Food at a Restaurant: ordering, asking for bill, paying
- Shopping Basics: buying clothes, asking prices, payment
- Daily Small Talk: weather, weekend plans, hobbies

#### 3. Other Existing Modules
- Speaking module (IELTS Speaking Part 1)
- Vocabulary module with flashcards and quiz
- Listening module
- Reading module
- Writing module
- Image Guessing Game module (`/image-guessing`)
  - Playful ESL activity inspired by Hot Seat and action games
  - Categories: Animals and Actions, Daily Actions, Playful Scenes, Food and Cooking, Weather and Seasons
  - 50 total guessing prompts with emoji visuals
  - Hints, acceptable alternatives, score tracking
  - A1/A2 leveled for Chinese beginners
- Student/Teacher dashboards

### Technical Notes
- Next.js 16 with App Router
- TypeScript strict mode
- Tailwind CSS for styling
- Framer Motion for animations
- ShadCN UI components
- Repository: https://github.com/safalkunwar/lingu
