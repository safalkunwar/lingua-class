import { grammarCategories } from "./categories";
import { verbSubcategories } from "./verbs";
import { actionVerbsFoundationLesson } from "./verbs/action-verbs";
import {
  GrammarCategory,
  GrammarSubcategory,
  GrammarLesson,
} from "@/types/grammar";

// Subcategory registry map
const subcategoryRegistry: Record<string, GrammarSubcategory[]> = {
  verbs: verbSubcategories,
};

// Lesson registry map
const lessonRegistry: Record<string, GrammarLesson> = {
  "action-verbs-foundation": actionVerbsFoundationLesson,
};

export function getAllGrammarCategories(): GrammarCategory[] {
  return grammarCategories;
}

export function getGrammarCategory(categoryId: string): GrammarCategory | undefined {
  return grammarCategories.find((cat) => cat.id === categoryId);
}

export function getSubcategoriesForCategory(categoryId: string): GrammarSubcategory[] {
  return subcategoryRegistry[categoryId] || [];
}

export function getGrammarSubcategory(
  categoryId: string,
  subcategoryId: string
): GrammarSubcategory | undefined {
  const subs = getSubcategoriesForCategory(categoryId);
  return subs.find((sub) => sub.id === subcategoryId);
}

export function getGrammarLesson(lessonId: string): GrammarLesson | undefined {
  return lessonRegistry[lessonId];
}

export { grammarCategories, verbSubcategories, actionVerbsFoundationLesson };
