export type RegisterLevel = "formal" | "neutral" | "casual" | "slang" | "very-informal" | "rude" | "vulgar";

export interface RegisterMarker {
  level: RegisterLevel;
  label: string;
  color: string;
  description: string;
}

export interface VocabWord {
  word: string;
  phonetic: string;
  chinese: string;
  pinyin: string;
  partOfSpeech: string;
  definitionEn: string;
  definitionZh: string;
  exampleEn: string;
  exampleZh: string;
  register: RegisterLevel;
}

export interface DailyExpression {
  id: string;
  expression: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  whenToUse: string;
  whenNotToUse: string;
  nativeFrequency: string;
  commonMistakes: { mistake: string; correction: string }[];
  pronunciation: string;
  funnyExample: string;
  memoryTrick: string;
  relatedExpressions: string[];
  collocations: string[];
  miniQuiz: { question: string; options: string[]; correct: number }[];
  register: RegisterLevel;
}

export interface NativeChunk {
  chunk: string;
  meaning: string;
  example: string;
  register: RegisterLevel;
  context: string;
}

export interface ConversationLine {
  speaker: string;
  line: string;
  register?: RegisterLevel;
  note?: string;
}

export interface ChineseLine {
  speaker: string;
  line: string;
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: string[];
}

export interface PronunciationTip {
  tip: string;
  example: string;
  reduction?: string;
}

export interface ShadowingLine {
  line: string;
  emphasis: string;
}

export interface SpeakingPractice {
  instruction: string;
  hints: string[];
  followUpQuestions: string[];
}

export interface RolePlay {
  scenario: string;
  prompts: string[];
  partnerLines?: string[];
}

export interface Homework {
  task: string;
  description: string;
  dueText: string;
}

export interface QuizItem {
  id: string;
  question: string;
  questionZh: string;
  options: { label: string; labelZh: string; correct: boolean }[];
  explanation: string;
  explanationZh: string;
}

export interface ReviewItem {
  key: string;
  prompt: string;
  answer: string;
}

export interface HumorNote {
  context: string;
  punchline: string;
  explanation: string;
}

export interface ConversationTopic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  color: string;
  level: string;
  estimatedTime: string;
  registerMarkers: RegisterMarker[];
  warmUp: {
    title: string;
    content: string;
    contentZh: string;
  };
  vocabulary: VocabWord[];
  dailyExpressions: {
    title: string;
    items: DailyExpression[];
  };
  nativeChunks: NativeChunk[];
  conversation: ConversationLine[];
  chineseTranslation: ChineseLine[];
  grammarInContext: GrammarPoint[];
  pronunciation: PronunciationTip[];
  shadowing: ShadowingLine[];
  speakingPractice: SpeakingPractice;
  rolePlay: RolePlay;
  homework: Homework;
  quiz: QuizItem[];
  review: ReviewItem[];
  humorNotes: HumorNote[];
  usefulExpressions?: {
    expression: string;
    meaning: string;
    usage: string;
  }[];
  commonMistakes?: {
    mistake: string;
    correction: string;
    explanation: string;
  }[];
  vocabularyExpansion?: {
    word: string;
    synonyms: string[];
    antonyms: string[];
    example: string;
  }[];
  speakingChallenge?: {
    instruction: string;
    hints: string[];
  };
}
