import { GrammarSubcategory, GrammarLessonSummary } from '@/types/grammar';
import { timePrepositionsLesson } from './time-prepositions';
import { placePrepositionsLesson } from './place-prepositions';
import { directionPrepositionsLesson } from './direction-prepositions';
import { prepositionalPhrasesLesson } from './prepositional-phrases';

export const prepositionsSubcategories: GrammarSubcategory[] = [
  {
    id: 'time-prepositions',
    categoryId: 'prepositions',
    name: 'Time Prepositions',
    nameZh: '????',
    icon: '?',
    meaning: 'Prepositions for time',
    shortIntro: 'Learn in, on, at for time expressions.',
    shortIntroZh: '?????????in?on?at?',
    examples: ['in June', 'on Monday', 'at 5 PM'],
    examplesZh: ['???', '???', '???5?'],
    levelRange: 'Beginner ? Intermediate',
    difficulty: 'Beginner',
    lessons: [
      {
        id: 'time-prepositions-foundation',
        subcategoryId: 'time-prepositions',
        categoryId: 'prepositions',
        title: 'Time Prepositions: In, On, At',
        titleZh: '????:in?on?at',
        level: 'A2',
        estimatedMinutes: 40,
        slideCount: 30,
        description: 'Master time prepositions.',
        descriptionZh: '???????',
      },
    ],
  },
  {
    id: 'place-prepositions',
    categoryId: 'prepositions',
    name: 'Place Prepositions',
    nameZh: '????',
    icon: '??',
    meaning: 'Prepositions for location',
    shortIntro: 'Learn prepositions showing location.',
    shortIntroZh: '??????????',
    examples: ['in the room', 'on the table', 'at home'],
    examplesZh: ['????', '????', '??'],
    levelRange: 'Beginner ? Intermediate',
    difficulty: 'Beginner',
    lessons: [
      {
        id: 'place-prepositions-foundation',
        subcategoryId: 'place-prepositions',
        categoryId: 'prepositions',
        title: 'Place Prepositions: Location',
        titleZh: '????:??',
        level: 'A2',
        estimatedMinutes: 40,
        slideCount: 30,
        description: 'Master place prepositions.',
        descriptionZh: '???????',
      },
    ],
  },
];

export const allPrepositionLessons: GrammarLessonSummary[] = [
  timePrepositionsLesson,
  placePrepositionsLesson,
  directionPrepositionsLesson,
  prepositionalPhrasesLesson,
];
export {
  timePrepositionsLesson,
  placePrepositionsLesson,
  directionPrepositionsLesson,
  prepositionalPhrasesLesson,
};
