import { GrammarSubcategory, GrammarLessonSummary } from '@/types/grammar';
import { indefiniteArticlesLesson } from './indefinite-articles';
import { definiteArticleLesson } from './definite-article';
import { zeroArticleLesson } from './zero-article';

export const articlesSubcategories: GrammarSubcategory[] = [
  {
    id: 'indefinite-articles',
    categoryId: 'articles',
    name: 'Indefinite Articles: a / an',
    nameZh: '????:a / an',
    icon: '??',
    meaning: 'Use for non-specific singular countable nouns',
    shortIntro: 'Learn when to use a or an based on pronunciation.',
    shortIntroZh: '????????a?an?',
    examples: ['a book', 'an apple', 'a university'],
    examplesZh: ['???', '????', '????'],
    levelRange: 'Beginner',
    difficulty: 'Beginner',
    lessons: [
      {
        id: 'indefinite-articles-foundation',
        subcategoryId: 'indefinite-articles',
        categoryId: 'articles',
        title: 'Indefinite Articles: a / an',
        titleZh: '????:a / an',
        level: 'A1',
        estimatedMinutes: 40,
        slideCount: 25,
        description: 'Master the use of a and an.',
        descriptionZh: '??a?an????',
      },
    ],
  },
  {
    id: 'definite-article',
    categoryId: 'articles',
    name: 'Definite Article: the',
    nameZh: '???:the',
    icon: '??',
    meaning: 'Use for specific or known nouns',
    shortIntro: 'Learn when the refers to something specific.',
    shortIntroZh: '??the?????????',
    examples: ['the sun', 'the book I read'],
    examplesZh: ['??', '??????'],
    levelRange: 'Beginner',
    difficulty: 'Beginner',
    lessons: [
      {
        id: 'definite-article-foundation',
        subcategoryId: 'definite-article',
        categoryId: 'articles',
        title: 'Definite Article: the',
        titleZh: '???:the',
        level: 'A1',
        estimatedMinutes: 40,
        slideCount: 25,
        description: 'Master the use of the.',
        descriptionZh: '??the????',
      },
    ],
  },
  {
    id: 'zero-article',
    categoryId: 'articles',
    name: 'Zero Article',
    nameZh: '???',
    icon: '??',
    meaning: 'No article in certain contexts',
    shortIntro: 'Learn when to omit articles.',
    shortIntroZh: '?????????',
    examples: ['I like coffee.', 'Dogs are loyal.'],
    examplesZh: ['??????', '?????'],
    levelRange: 'Beginner',
    difficulty: 'Beginner',
    lessons: [
      {
        id: 'zero-article-foundation',
        subcategoryId: 'zero-article',
        categoryId: 'articles',
        title: 'Zero Article',
        titleZh: '???',
        level: 'A2',
        estimatedMinutes: 35,
        slideCount: 20,
        description: 'Master zero article rules.',
        descriptionZh: '????????',
      },
    ],
  },
];

export const allArticleLessons: GrammarLessonSummary[] = [
  indefiniteArticlesLesson,
  definiteArticleLesson,
  zeroArticleLesson,
];

export {
  indefiniteArticlesLesson,
  definiteArticleLesson,
  zeroArticleLesson,
};
