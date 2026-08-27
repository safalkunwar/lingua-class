export interface TranslationTrap {
  literal: string;
  natural: string;
  explanation: string;
}

export interface ChunkItem {
  chunk: string;
  meaning: string;
  chinese: string;
  example: string;
}

export interface DecoderChoice {
  id: string;
  text: string;
  textZh: string;
  xp: number;
  isCorrect?: boolean;
  feedback?: string;
  feedbackZh?: string;
}

export interface DecoderStep {
  id: string;
  type: "situation" | "decode" | "translation-trap" | "chunk" | "listen" | "pragmatic" | "response" | "challenge";
  title?: string;
  titleZh?: string;
  situation?: string;
  situationZh?: string;
  sentence?: string;
  sentenceZh?: string;
  chunks?: ChunkItem[];
  translationTrap?: TranslationTrap;
  choices?: DecoderChoice[];
  audioText?: string;
  meaningOptions?: { text: string; textZh: string; isCorrect?: boolean }[];
  reactionOptions?: { text: string; textZh: string; tone?: string }[];
  challengePrompt?: string;
  challengePromptZh?: string;
  rescueOptions?: string[];
  xpReward: number;
}

export interface EnglishDecoderCase {
  id: string;
  title: string;
  titleZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  situation: string;
  situationZh: string;
  difficulty: string;
  xpReward: number;
  theme: string;
  steps: DecoderStep[];
}
