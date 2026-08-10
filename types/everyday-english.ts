export interface PatternEntry {
  id: string;
  term: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  category: string;
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  examples: { en: string; zh: string }[];
  commonMistakes: { mistake: string; correction: string }[];
  relatedTerms: string[];
  register: "neutral" | "casual" | "formal";
  audioAvailable: boolean;
}

export type ExerciseType =
  | "fill-blank"
  | "error-correction"
  | "translation"
  | "sentence-builder"
  | "listening"
  | "speaking";

export interface PracticeExercise {
  id: string;
  type: ExerciseType;
  question: string;
  questionZh: string;
  options?: string[];
  correctAnswer: string | number;
  hint: string;
  hintZh: string;
}

export interface TeacherPanel {
  simpleExplanation: string;
  chineseExplanation: string;
  learnerDifficulty: string;
  teachingTip: string;
  drills: string[];
}

export interface EverydayEnglishSection {
  id: string;
  title: string;
  titleZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  difficulty: "beginner" | "elementary" | "intermediate" | "upper-intermediate" | "advanced";
  patterns: PatternEntry[];
  exercises: PracticeExercise[];
  teacherPanel?: TeacherPanel;
}
