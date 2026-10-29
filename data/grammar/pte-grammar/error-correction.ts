import { GrammarLesson } from '@/types/grammar';

export const pteErrorCorrectionLesson: GrammarLesson = {
  id: 'pte-error-correction-foundation',
  subcategoryId: 'pte-error-correction',
  categoryId: 'pte-grammar',
  title: 'PTE Error Identification & Correction',
  titleZh: 'PTE ???????',
  level: 'B2',
  estimatedMinutes: 40,
  lessonIndex: 4,
  totalLessonsInSubcategory: 4,
  description: 'Spot and fix common grammar errors tested in PTE.',
  descriptionZh: '?????PTE???????',
  objectives: ['Identify and correct errors'],
  prerequisites: [],
  slides: [
    {
      id: '1',
      slideNumber: 1,
      type: 'EXPLANATION',
      title: 'Error Correction',
      content: 'Practice subject-verb agreement, articles, tenses, and more.',
    },
  ],
};
