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
  pinyin?: string;
  partOfSpeech: string;
  definitionEn?: string;
  definitionZh?: string;
  exampleEn?: string;
  exampleZh?: string;
  register?: RegisterLevel;
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
  explanationZh?: string;
  examples: string[];
  examplesZh?: string[];
  miniExercise?: {
    question: string;
    questionZh?: string;
    options?: string[];
    correct?: string;
  };
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

export type Difficulty = "beginner" | "elementary" | "intermediate" | "upper-intermediate" | "advanced";

export interface LearningObjective {
  objective: string;
  objectiveZh: string;
  completed?: boolean;
}

export interface SentencePattern {
  pattern: string;
  meaning: string;
  meaningZh: string;
  usage: string;
  variations: string[];
  examples: { situation: string; sentence: string }[];
}

export interface CulturalNote {
  title: string;
  content: string;
  contentZh: string;
  icon?: string;
}

export interface PracticeActivity {
  id: string;
  type: "fill-blank" | "rearrange" | "match" | "listening" | "translation" | "shadowing" | "role-play" | "speaking" | "discussion";
  title: string;
  titleZh: string;
  instructions: string;
  instructionsZh: string;
  content: string;
  contentZh?: string;
  options?: string[];
  correctAnswer?: string | number;
  hints?: string[];
}

export interface LessonSection {
  title: string;
  titleZh: string;
  icon: string;
}

export interface ConversationTopic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  color: string;
  level: string;
  cefr?: string;
  difficulty?: Difficulty;
  estimatedTime: string;
  learningObjectives?: LearningObjective[];
  objectives?: LearningObjective[];
  registerMarkers?: RegisterMarker[];
  warmUp?: {
    title: string;
    content: string;
    contentZh: string;
  };
  vocabulary?: VocabWord[];
  vocabularySection?: {
    title: string;
    words: VocabWord[];
  };
  dailyExpressions?: {
    title: string;
    items: DailyExpression[];
  };
  nativeChunks?: NativeChunk[];
  conversation: ConversationLine[];
  chineseTranslation: ChineseLine[];
  grammarInContext?: GrammarPoint[];
  grammarFocus?: {
    title: string;
    explanation: string;
    explanationZh: string;
    examples: string[];
    examplesZh?: string[];
    miniExercise?: {
      question: string;
      questionZh: string;
      options?: string[];
      correct?: string;
    };
  }[];
  pronunciation?: PronunciationTip[];
  pronunciationTips?: {
    tip: string;
    example: string;
    exampleZh?: string;
  }[];
  shadowing?: ShadowingLine[];
  shadowingPractice?: string[];
  speakingPractice?: SpeakingPractice;
  rolePlay?: RolePlay;
  rolePlayPractice?: {
    scenario: string;
    scenarioZh?: string;
    prompts: string[];
    partnerLines?: string[];
  }[];
  homework?: Homework;
  quiz?: QuizItem[];
  review?: ReviewItem[];
  humorNotes?: HumorNote[];
  usefulExpressions?: {
    expression: string;
    meaning: string;
    meaningZh?: string;
    usage: string;
    formality?: string;
    commonMistakes?: { mistake: string; correction: string; explanation: string; explanationZh?: string }[];
    alternatives?: string[];
  }[];
  commonMistakes?: {
    mistake: string;
    correction: string;
    explanation: string;
    explanationZh?: string;
  }[];
  vocabularyExpansion?: {
    word: string;
    synonyms: string[];
    antonyms: string[];
    example: string;
  }[];
  speakingChallenge?: {
    instruction: string;
    instructionZh?: string;
    hints: string[];
    hintsZh?: string[];
  };
  vocabularyPreview?: {
    word: string;
    phonetic: string;
    chinese: string;
    partOfSpeech: string;
  }[];
  collocationsAndChunks?: {
    chunk: string;
    meaning: string;
    meaningZh: string;
    example: string;
    exampleZh?: string;
  }[];
  sentencePatterns?: SentencePattern[];
  culturalNotes?: CulturalNote[];
  practiceActivities?: PracticeActivity[];
  lessonSections?: LessonSection[];
}

export type SlangLevel = "safe" | "internet" | "street" | "rough";

export interface SlangItem {
  id: string;
  word: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  example: string;
  exampleZh: string;
  whoSaysIt: string;
  ageGroup: string;
  region: string;
  isOffensive: boolean;
  offensiveLevel: number;
  safeAlternatives: string[];
  conversation: {
    speaker: string;
    line: string;
  }[];
  chineseTranslation: {
    speaker: string;
    line: string;
  }[];
  culturalNotes: string;
  warning?: string;
}

export interface SlangLevelData {
  level: SlangLevel;
  title: string;
  description: string;
  emoji: string;
  color: string;
  items: SlangItem[];
}
