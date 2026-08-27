export type ReadingLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type ReadingCategory =
  | "deep-reading"
  | "ideas-human-nature"
  | "life-society"
  | "professional-business"
  | "literature-inspired"
  | "modern-issues"
  | "science-psychology";

export type QuestionType =
  | "main-idea"
  | "detail"
  | "inference"
  | "vocabulary-in-context"
  | "reference"
  | "authors-purpose"
  | "tone"
  | "paraphrase"
  | "true-false-not-given"
  | "sentence-ordering"
  | "vocabulary-matching"
  | "summary"
  | "critical-thinking"
  | "read-between-lines";

export interface VocabItem {
  word: string;
  meaning: string;
  chinese: string;
  partOfSpeech: string;
  example: string;
  exampleChinese: string;
  collocations: string[];
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  example: string;
  chineseExplanation: string;
}

export interface CollocationGroup {
  phrase: string;
  meaning: string;
  chinese: string;
  example: string;
}

export interface ReadingQuestion {
  id: string;
  type: QuestionType;
  question: string;
  chinese?: string;
  options?: string[];
  correctAnswer?: string | number;
  explanation: string;
  chineseExplanation?: string;
}

export interface SentenceBreakdown {
  sentence: string;
  subject?: string;
  verb?: string;
  object?: string;
  timeExpression?: string;
  chineseExplanation: string;
  note?: string;
}

export interface AuthorChoice {
  phrase: string;
  alternative: string;
  explanation: string;
  technique: string;
}

export interface ReadingStrategy {
  title: string;
  description: string;
  tip: string;
}

export interface ReadingTips {
  tip1: string;
  tip2: string;
  tip3: string;
  tip4: string;
  tip5: string;
  tip6: string;
  tip7: string;
}

export interface SpeakingPrompt {
  title: string;
  prompt: string;
  usefulExpressions: string[];
}

export interface WritingPrompt {
  title: string;
  prompt: string;
  wordCount: string;
}

export interface TeacherGuide {
  objective: string;
  warmUp: string[];
  keyVocabulary: string[];
  grammarFocus: string[];
  readingStrategy: string;
  discussionQuestions: string[];
  debateQuestion: string;
  speakingExtension: string;
  writingExtension: string;
  lessonPlan: { time: string; activity: string }[];
}

export interface ReadingPassage {
  id: string;
  title: string;
  author?: string;
  source?: string;
  category: ReadingCategory;
  level: ReadingLevel;
  theme: string;
  estimatedMinutes: number;
  wordCount: number;
  passage: string;
  translation: string;
  vocabulary: VocabItem[];
  collocations: CollocationGroup[];
  grammarPoints: GrammarPoint[];
  questions: ReadingQuestion[];
  discussionQuestions: string[];
  writingPrompt: WritingPrompt;
  speakingPrompt: SpeakingPrompt;
  authorChoices: AuthorChoice[];
  sentenceBreakdowns: SentenceBreakdown[];
  readingStrategies: ReadingStrategy[];
  tips: ReadingTips;
  teacherGuide: TeacherGuide;
  tags: string[];
}

export interface CategoryInfo {
  id: ReadingCategory;
  title: string;
  description: string;
  emoji: string;
}

export interface LevelInfo {
  level: ReadingLevel;
  label: string;
  description: string;
  color: string;
}
