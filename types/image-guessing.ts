export interface ImageGuessItem {
  id: string;
  emoji: string;
  answer: string;
  hint: string;
  category: "animals" | "actions" | "daily-life";
  level: "A1" | "A2";
  alternatives?: string[];
}

export interface ImageGuessCategory {
  id: string;
  title: string;
  description: string;
  emoji: string;
  items: ImageGuessItem[];
}
