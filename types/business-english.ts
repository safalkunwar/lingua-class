export type BusinessLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type BusinessCategoryId =
  | "workplace"
  | "email"
  | "meetings"
  | "phone-calls"
  | "presentations"
  | "sales"
  | "negotiation"
  | "interviews"
  | "small-talk"
  | "chat"
  | "vocabulary"
  | "natural"
  | "roleplay"
  | "idioms";

export interface BusinessCategory {
  id: BusinessCategoryId;
  title: string;
  titleZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  color: string;
  icon: string;
  lessonCount?: number;
}

export interface BusinessKeyExpression {
  en: string;
  zh: string;
  formality: "formal" | "neutral" | "casual";
  note?: string;
}

export interface BusinessVocabEntry {
  id: string;
  word: string;
  partOfSpeech: string;
  chinese: string;
  pronunciation: string;
  meaning: string;
  businessMeaning: string;
  everydayMeaning: string;
  example: string;
  exampleZh: string;
  collocations: string[];
  synonyms: string[];
  antonyms: string[];
  formalVersion?: string;
  casualVersion?: string;
  commonMistake?: { mistake: string; correction: string };
  category: string;
  level: BusinessLevel;
}

export interface BusinessLesson {
  id: string;
  categoryId: BusinessCategoryId;
  title: string;
  titleZh: string;
  level: BusinessLevel;
  situation: string;
  situationZh: string;
  objective: string;
  objectiveZh: string;
  scenario: string;
  scenarioZh: string;
  keyExpressions: BusinessKeyExpression[];
  vocabulary: BusinessVocabEntry[];
  examples: { en: string; zh: string; note?: string }[];
  conversation?: { speaker: string; line: string; zh?: string }[];
  commonMistakes?: { mistake: string; correction: string; explanation: string; explanationZh: string }[];
  culturalNotes?: { title: string; content: string; contentZh: string }[];
  practice: {
    type: "multiple-choice" | "fill-blank" | "roleplay" | "speaking";
    question: string;
    questionZh: string;
    options?: { en: string; zh: string }[];
    correct?: string | number;
    partnerLine?: string;
  }[];
  roleplay?: {
    roles: string[];
    scenario: string;
    scenarioZh: string;
    objectives: string[];
    usefulPhrases: string[];
    partnerLines: string[];
  };
  teacherPanel?: {
    objectives: string[];
    warmUp: string;
    warmUpZh: string;
    drill: string;
    drillZh: string;
    discussionQuestions: string[];
    discussionQuestionsZh: string[];
    homework: string;
    homeworkZh: string;
    extension: string;
    extensionZh: string;
  };
}

export interface BusinessIdiom {
  id: string;
  idiom: string;
  chinese: string;
  literalMeaning: string;
  actualMeaning: string;
  actualMeaningZh: string;
  example: string;
  exampleZh: string;
  businessExample: string;
  businessExampleZh: string;
  related: string[];
  opposite: string[];
}

export interface CorporateDecoderItem {
  id: string;
  phrase: string;
  literalZh: string;
  businessMeaning: string;
  businessMeaningZh: string;
  tone: "neutral" | "polite" | "passive-aggressive" | "urgent" | "funny";
  context: string;
  contextZh: string;
}

export interface BusinessEmailTemplate {
  id: string;
  category: string;
  categoryZh: string;
  situation: string;
  situationZh: string;
  tooDirect: { en: string; zh: string };
  better: { en: string; zh: string };
  professional: { en: string; zh: string };
  explanation: string;
  explanationZh: string;
  template: string;
  templateZh: string;
}

export interface BusinessEnglishData {
  categories: BusinessCategory[];
  lessons: BusinessLesson[];
  vocabulary: BusinessVocabEntry[];
  idioms: BusinessIdiom[];
  corporateDecoder: CorporateDecoderItem[];
  emailTemplates: BusinessEmailTemplate[];
}
