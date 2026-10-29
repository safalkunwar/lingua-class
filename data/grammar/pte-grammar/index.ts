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
    shortIntro: 'Master collocations for better accuracy in Reading and Speaking tasks.',
    shortIntroZh: '??PTE????,???????????',
    examples: ['make a decision', 'take into account', 'strongly believe'],
    examplesZh: ['???', '???', '??'],
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
        estimatedMinutes: 40,
        slideCount: 30,
        description: 'High-frequency collocations for PTE tasks.',
        descriptionZh: 'PTE ???????',
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
    shortIntro: 'Learn structures for Write from Dictation and essays.',
    shortIntroZh: '?????????????????',
    examples: ['not only... but also', 'it is worth noting that'],
    examplesZh: ['??...??...', '??????...'],
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
        estimatedMinutes: 40,
        slideCount: 30,
        description: 'Master complex sentence structures for PTE.',
        descriptionZh: '??PTE?????',
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
    shortIntro: 'Apply grammar and collocations to select correct words.',
    shortIntroZh: '??????????????',
    examples: ['articles', 'verb forms', 'linkers'],
    examplesZh: ['??', '????', '???'],
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
        estimatedMinutes: 40,
        slideCount: 30,
        description: 'Grammar-based strategies for fill in the blanks.',
        descriptionZh: '????????',
      },
    ],
  },
  {
    id: 'pte-error-correction',
    categoryId: 'pte-grammar',
    name: 'Error Identification',
    nameZh: '????',
    icon: '??',
    meaning: 'Spot common PTE errors',
    shortIntro: 'Identify and correct high-frequency grammar mistakes.',
    shortIntroZh: '?????PTE???????',
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
        estimatedMinutes: 40,
        slideCount: 30,
        description: 'Spot and fix common grammar errors tested in PTE.',
        descriptionZh: '????????????',
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
