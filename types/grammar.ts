export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface GrammarCategory {
  id: string;
  name: string;
  nameZh: string;
  icon: string;
  shortExplanation: string;
  description: string;
  descriptionZh: string;
  questionPrompt: string;
  questionPromptZh: string;
  difficulty: string;
  totalLessons: number;
  colorTheme: string;
  subcategoriesCount: number;
  featured?: boolean;
  tags: string[];
  keywords: string[];
}

export interface GrammarSubcategory {
  id: string;
  categoryId: string;
  name: string;
  nameZh: string;
  icon: string;
  meaning: string;
  shortIntro: string;
  shortIntroZh: string;
  examples: string[];
  examplesZh?: string[];
  levelRange: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  lessons: GrammarLessonSummary[];
  learningObjectives?: string[];
  overviewStages?: { number: number; title: string; titleZh?: string }[];
}

export interface GrammarLessonSummary {
  id: string;
  subcategoryId: string;
  categoryId: string;
  title: string;
  titleZh: string;
  level: CEFRLevel;
  estimatedMinutes: number;
  slideCount: number;
  description: string;
  descriptionZh: string;
}

export type GrammarSlideType =
  // 24 Standard Core Slide Types
  | "TITLE"
  | "EXPLANATION"
  | "RULE"
  | "EXAMPLE"
  | "COMPARISON"
  | "VISUAL_DIAGRAM"
  | "TABLE"
  | "COMMON_MISTAKE"
  | "REAL_LIFE_SCENARIO"
  | "CONVERSATION"
  | "VOCABULARY"
  | "MINI_QUIZ"
  | "FILL_IN_THE_BLANK"
  | "MULTIPLE_CHOICE"
  | "MATCHING"
  | "REORDER"
  | "ERROR_CORRECTION"
  | "SPEAKING_DRILL"
  | "LISTENING_DRILL"
  | "CHALLENGE"
  | "REVIEW"
  | "SUMMARY"
  | "TEACHER_NOTE"
  | "HOMEWORK"
  // Legacy aliases for backward compatibility
  | "introduction"
  | "what_you_need_to_know"
  | "simple_explanation"
  | "visual_model"
  | "core_rule"
  | "examples"
  | "common_mistakes"
  | "comparison"
  | "real_life_use"
  | "guided_practice"
  | "independent_practice"
  | "challenge"
  | "real_scenario"
  | "review"
  | "master_test";

export interface InteractiveSentencePart {
  text: string;
  role: "subject" | "verb" | "object" | "modifier" | "complement" | "time" | "other";
  explanation: string;
  explanationZh: string;
  colorClass?: string;
}

export interface GrammarExample {
  en: string;
  zh: string;
  breakdown?: string;
  highlight?: string;
  pinyin?: string;
  audioText?: string;
  explanation?: string;
  explanationZh?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  parts?: InteractiveSentencePart[];
}

export interface GrammarMistake {
  wrong: string;
  right: string;
  explanation: string;
  explanationZh: string;
  why: string;
}

export interface GrammarComparison {
  conceptA: string;
  conceptB: string;
  difference: string;
  differenceZh: string;
  exampleA: string;
  exampleB: string;
}

export interface GrammarQuestion {
  question: string;
  questionZh?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  explanationZh: string;
  xpReward: number;
}

export interface GrammarScenarioDialogueLine {
  speaker: string;
  speakerZh?: string;
  avatar?: string;
  en: string;
  zh: string;
  isTargetGrammar?: boolean;
}

export interface GrammarScenario {
  context: string;
  contextZh: string;
  dialogue: GrammarScenarioDialogueLine[];
  task: string;
  taskZh: string;
}

export interface GrammarReview {
  keyTakeaway: string;
  keyTakeawayZh: string;
  ruleSummary: string;
}

export interface TeacherTimingSchedule {
  phase: string;
  duration: string; // e.g. "0–5 min"
  activity: string;
  activityZh?: string;
}

export interface GrammarTeacherGuide {
  teachingObjective: string;
  whatToExplain?: string[];
  questionsToAsk?: string[];
  commonConfusion?: string[];
  extraExamples?: string[];
  followUpQuestions?: string[];
  speakingActivity?: string;
  homework?: string;
  timingSchedule?: TeacherTimingSchedule[];
  // Legacy aliases
  conceptCheckQuestions?: string[];
  commonStumblingBlock?: string;
  boardWorkTip?: string;
  classroomDrill?: string[];
}

export interface VisualDiagramItem {
  label: string;
  labelZh?: string;
  sublabel?: string;
  sublabelZh?: string;
  color?: string;
  icon?: string;
}

export interface GrammarVisualDiagram {
  type: "svo" | "timeline" | "concept_branch" | "flowchart" | "custom";
  title?: string;
  titleZh?: string;
  items?: VisualDiagramItem[];
  formula?: string;
  formulaZh?: string;
  branches?: Array<{
    title: string;
    titleZh?: string;
    meaning: string;
    meaningZh?: string;
    examples: string[];
  }>;
  timeline?: {
    past: string;
    now: string;
    future: string;
    highlight: "past" | "now" | "future" | "span";
  };
}

export interface GrammarTable {
  headers: string[];
  headersZh?: string[];
  rows: Array<{
    cells: string[];
    highlight?: boolean;
  }>;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
  leftZh?: string;
  rightZh?: string;
}

export interface ReorderSentence {
  segments: string[];
  correctOrder: string[];
  translationZh: string;
  audioText?: string;
}

export interface ErrorCorrectionItem {
  sentence: string;
  errorWord: string;
  correctWord: string;
  options: string[];
  explanation: string;
  explanationZh: string;
}

export interface SpeakingDrillItem {
  prompt: string;
  targetSentence: string;
  targetSentenceZh: string;
  phonetic?: string;
  keyStress?: string;
  tips: string;
}

export interface ListeningDrillItem {
  audioSentence: string;
  question: string;
  questionZh: string;
  options: string[];
  correctIndex: number;
  transcript: string;
}

export interface VocabularyItem {
  word: string;
  wordZh: string;
  partOfSpeech: string;
  definition: string;
  exampleSentence: string;
  exampleSentenceZh: string;
}

export interface HomeworkTask {
  type: "writing" | "speaking" | "quiz" | "reflection";
  instruction: string;
  instructionZh: string;
  sampleAnswer?: string;
}

export interface HomeworkAssignment {
  title: string;
  titleZh: string;
  tasks: HomeworkTask[];
}

export interface GrammarSlide {
  id: string;
  slideNumber: number;
  type: GrammarSlideType;
  sectionTitle?: string;
  sectionTitleZh?: string;
  badge?: string;
  title: string;
  titleZh?: string;
  content: string;
  contentZh?: string;
  keyPoints?: string[];

  // Optional Rich Media & Visuals
  diagram?: GrammarVisualDiagram;
  table?: GrammarTable;
  examples?: GrammarExample[];
  mistakes?: GrammarMistake[];
  comparisons?: GrammarComparison[];
  vocabulary?: VocabularyItem[];

  // Optional Practice & Drill Content
  question?: GrammarQuestion; // for MINI_QUIZ, MULTIPLE_CHOICE, FILL_IN_THE_BLANK
  matchingPairs?: MatchingPair[];
  reorder?: ReorderSentence;
  errorCorrection?: ErrorCorrectionItem;
  speakingDrill?: SpeakingDrillItem;
  listeningDrill?: ListeningDrillItem;

  // Contextual Scenarios & Homework
  scenario?: GrammarScenario;
  reviewPoints?: GrammarReview[];
  homework?: HomeworkAssignment;

  // Metadata & Teacher Instruction
  teacherGuide?: GrammarTeacherGuide;
  teacherNote?: string;
  audioText?: string;
  hint?: string;
  hintZh?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

export interface GrammarLesson {
  id: string;
  subcategoryId: string;
  categoryId: string;
  title: string;
  titleZh: string;
  subtitle?: string;
  level: CEFRLevel;
  estimatedMinutes: number;
  lessonIndex: number; // e.g. 1
  totalLessonsInSubcategory: number; // e.g. 8
  description: string;
  descriptionZh: string;
  objectives: string[];
  prerequisites?: string[];
  slides: GrammarSlide[];
  teacherGuide?: GrammarTeacherGuide;
  homework?: HomeworkAssignment;
  relatedLessons?: string[];
  nextLesson?: {
    id: string;
    title: string;
    href: string;
  };
  // Legacy aliases
  learningOutcomes?: string[];
  learningOutcomesZh?: string[];
}
