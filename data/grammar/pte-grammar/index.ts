import { GrammarSubcategory, GrammarLessonSummary } from '@/types/grammar';
import { pteCollocationsLesson } from './collocations';
import { pteSentenceStructureLesson } from './sentence-structure';
import { pteFillInBlanksLesson } from './fill-in-blanks';
import { pteErrorCorrectionLesson } from './error-correction';

export const pteGrammarSubcategories: GrammarSubcategory[] = [
  {
    id: 'pte-collocations',
    categoryId: 'pte-grammar',
    name: 'Collocations & Word Choice',
    nameZh: '?????',
    icon: '??',
    meaning: 'High-frequency PTE collocations',
    shortIntro: 'Master verb-noun and adjective-noun collocations for Read Aloud and Reading tasks.',
    shortIntroZh: '??PTE??????????????',
    examples: ['make a decision', 'take into account', 'strong evidence'],
    examplesZh: ['???', '???', '????'],
    levelRange: 'B2 ? C1',
    difficulty: 'Intermediate',
    lessons: [
      {
        id: 'pte-collocations-foundation',
        subcategoryId: 'pte-collocations',
        categoryId: 'pte-grammar',
        title: 'PTE Collocations & Word Choice',
        titleZh: 'PTE ?????????',
        level: 'B2',
        estimatedMinutes: 45,
        slideCount: 30,
        description: 'High-frequency collocations for PTE Read Aloud and Reading.',
        descriptionZh: 'PTE???????',
      },
    ],
  },
  {
    id: 'pte-sentence-structure',
    categoryId: 'pte-grammar',
    name: 'Sentence Structure',
    nameZh: '????',
    icon: '??',
    meaning: 'Complex sentence patterns for PTE',
    shortIntro: 'Master relative clauses, connectors, and parallelism for Write from Dictation.',
    shortIntroZh: '???????????????,??????????',
    examples: ['not only... but also', 'however', 'in contrast'],
    examplesZh: ['??...??...', '??', '??'],
    levelRange: 'B2 ? C1',
    difficulty: 'Intermediate',
    lessons: [
      {
        id: 'pte-sentence-structure-foundation',
        subcategoryId: 'pte-sentence-structure',
        categoryId: 'pte-grammar',
        title: 'PTE Sentence Structure & Grammar Patterns',
        titleZh: 'PTE ?????????',
        level: 'B2',
        estimatedMinutes: 50,
        slideCount: 30,
        description: 'Master complex sentence structures for PTE Writing and Speaking.',
        descriptionZh: '??PTE??????????',
      },
    ],
  },
  {
    id: 'pte-fill-in-blanks',
    categoryId: 'pte-grammar',
    name: 'Reading Fill in the Blanks',
    nameZh: '????',
    icon: '??',
    meaning: 'Grammar strategies for reading blanks',
    shortIntro: 'Use grammar, word forms, and context clues to choose correct answers.',
    shortIntroZh: '????????????????????',
    examples: ['word forms', 'articles', 'prepositions'],
    examplesZh: ['????', '??', '??'],
    levelRange: 'B2 ? C1',
    difficulty: 'Intermediate',
    lessons: [
      {
        id: 'pte-fill-in-blanks-foundation',
        subcategoryId: 'pte-fill-in-blanks',
        categoryId: 'pte-grammar',
        title: 'PTE Reading Fill in the Blanks',
        titleZh: 'PTE ????????',
        level: 'B2',
        estimatedMinutes: 45,
        slideCount: 30,
        description: 'Grammar-based strategies for Reading & Writing: Fill in the Blanks.',
        descriptionZh: '?????????????',
      },
    ],
  },
  {
    id: 'pte-error-correction',
    categoryId: 'pte-grammar',
    name: 'Error Identification & Correction',
    nameZh: '???????',
    icon: '??',
    meaning: 'Spot common PTE errors',
    shortIntro: 'Identify and correct subject-verb agreement, articles, tenses, and word forms.',
    shortIntroZh: '????????????????????????',
    examples: ['subject-verb agreement', 'articles', 'tenses'],
    examplesZh: ['????', '??', '??'],
    levelRange: 'B2 ? C1',
    difficulty: 'Intermediate',
    lessons: [
      {
        id: 'pte-error-correction-foundation',
        subcategoryId: 'pte-error-correction',
        categoryId: 'pte-grammar',
        title: 'PTE Error Identification & Correction',
        titleZh: 'PTE ???????',
        level: 'B2',
        estimatedMinutes: 50,
        slideCount: 30,
        description: 'Spot and fix high-frequency grammar errors tested in PTE.',
        descriptionZh: '?????PTE???????',
      },
    ],
  },
];

export const allPteGrammarLessons: GrammarLessonSummary[] = [
  pteCollocationsLesson,
  pteSentenceStructureLesson,
  pteFillInBlanksLesson,
  pteErrorCorrectionLesson,
];

export {
  pteCollocationsLesson,
  pteSentenceStructureLesson,
  pteFillInBlanksLesson,
  pteErrorCorrectionLesson,
};
