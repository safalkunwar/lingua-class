import { grammarCategories } from "./categories";
import { verbSubcategories } from "./verbs";
import { tenseSubcategories } from "./tenses";
import { nounsArticlesSubcategories } from "./nouns-articles";
import { pronounsSubcategories } from "./pronouns";
import {
  actionVerbsFoundationLesson,
  helpingVerbsLesson,
  linkingVerbsLesson,
  modalVerbsLesson,
  transitiveVerbsLesson,
  intransitiveVerbsLesson,
  regularVerbsLesson,
  irregularVerbsLesson,
  stateVerbsLesson,
} from "./verbs";
import {
  presentSimpleLesson,
  presentContinuousLesson,
  pastSimpleLesson,
  futureWillLesson,
  futureGoingToLesson,
  presentPerfectLesson,
  pastContinuousLesson,
  pastPerfectLesson,
  futureContinuousLesson,
  presentPerfectContinuousLesson,
  pastPerfectContinuousLesson,
  futurePerfectLesson,
  futurePerfectContinuousLesson,
  tenseMasterChallenge,
} from "./tenses";
import {
  countableUncountableLesson,
  pluralFormsLesson,
  properNounsLesson,
  articleALesson,
  articleTheLesson,
  zeroArticleLesson,
  articleExceptionsLesson,
  nounPhrasesLesson,
} from "./nouns-articles";
import {
  subjectObjectLesson,
  possessiveLesson,
  reflexiveLesson,
  relativeLesson,
  demonstrativeLesson,
  indefiniteLesson,
} from "./pronouns";
import {
  GrammarCategory,
  GrammarSubcategory,
  GrammarLesson,
} from "@/types/grammar";

// Subcategory registry map
const subcategoryRegistry: Record<string, GrammarSubcategory[]> = {
  verbs: verbSubcategories,
  tenses: tenseSubcategories,
  "nouns-articles": nounsArticlesSubcategories,
  "pronouns": pronounsSubcategories,
};

// Lesson registry map
const lessonRegistry: Record<string, GrammarLesson> = {
  // Verbs lessons
  "action-verbs-foundation": actionVerbsFoundationLesson,
  "helping-verbs-foundation": helpingVerbsLesson,
  "linking-verbs-foundation": linkingVerbsLesson,
  "modal-verbs-foundation": modalVerbsLesson,
  "transitive-verbs-foundation": transitiveVerbsLesson,
  "intransitive-verbs-foundation": intransitiveVerbsLesson,
  "regular-verbs-foundation": regularVerbsLesson,
  "irregular-verbs-foundation": irregularVerbsLesson,
  "state-verbs-foundation": stateVerbsLesson,

  // Tenses lessons
  "present-simple-foundation": presentSimpleLesson,
  "present-continuous-foundation": presentContinuousLesson,
  "past-simple-foundation": pastSimpleLesson,
  "future-will-foundation": futureWillLesson,
  "future-going-to-foundation": futureGoingToLesson,
  "present-perfect-foundation": presentPerfectLesson,
  "past-continuous-foundation": pastContinuousLesson,
  "past-perfect-foundation": pastPerfectLesson,
  "future-continuous-foundation": futureContinuousLesson,
  "present-perfect-continuous-foundation": presentPerfectContinuousLesson,
  "past-perfect-continuous-foundation": pastPerfectContinuousLesson,
  "future-perfect-foundation": futurePerfectLesson,
  "future-perfect-continuous-foundation": futurePerfectContinuousLesson,
  "tense-master-challenge-final": tenseMasterChallenge,

  // Nouns & Articles lessons
  "countable-uncountable-foundation": countableUncountableLesson,
  "plural-forms-foundation": pluralFormsLesson,
  "proper-nouns-foundation": properNounsLesson,
  "article-a-an-foundation": articleALesson,
  "article-the-foundation": articleTheLesson,
  "zero-article-foundation": zeroArticleLesson,
  "article-exceptions-foundation": articleExceptionsLesson,
  "noun-phrases-foundation": nounPhrasesLesson,

  // Pronouns lessons
  "subject-object-foundation": subjectObjectLesson,
  "possessive-foundation": possessiveLesson,
  "reflexive-foundation": reflexiveLesson,
  "relative-foundation": relativeLesson,
  "demonstrative-foundation": demonstrativeLesson,
  "indefinite-foundation": indefiniteLesson,
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

export {
  grammarCategories,
  verbSubcategories,
  tenseSubcategories,
  nounsArticlesSubcategories,
  pronounsSubcategories,
  actionVerbsFoundationLesson,
  helpingVerbsLesson,
  linkingVerbsLesson,
  modalVerbsLesson,
  transitiveVerbsLesson,
  intransitiveVerbsLesson,
  regularVerbsLesson,
  irregularVerbsLesson,
  stateVerbsLesson,
  presentSimpleLesson,
  presentContinuousLesson,
  pastSimpleLesson,
  futureWillLesson,
  futureGoingToLesson,
  presentPerfectLesson,
  pastContinuousLesson,
  pastPerfectLesson,
  futureContinuousLesson,
  presentPerfectContinuousLesson,
  pastPerfectContinuousLesson,
  futurePerfectLesson,
  futurePerfectContinuousLesson,
  tenseMasterChallenge,
  countableUncountableLesson,
  pluralFormsLesson,
  properNounsLesson,
  articleALesson,
  articleTheLesson,
  zeroArticleLesson,
  articleExceptionsLesson,
  nounPhrasesLesson,
  subjectObjectLesson,
  possessiveLesson,
  reflexiveLesson,
  relativeLesson,
  demonstrativeLesson,
  indefiniteLesson,
};







