import { grammarCategories } from "@/data/grammar/categories";
import { verbSubcategories } from "@/data/grammar/verbs";
import { GrammarCategory, GrammarSubcategory } from "@/types/grammar";
import { useGrammarStore, RecommendedItem } from "@/stores/grammar-store";

export interface SearchResultItem {
  id: string;
  title: string;
  titleZh: string;
  type: "category" | "subcategory" | "concept";
  subtitle: string;
  href: string;
  badge: string;
}

export function searchGrammar(query: string): SearchResultItem[] {
  if (!query || !query.trim()) return [];
  const q = query.trim().toLowerCase();
  const results: SearchResultItem[] = [];

  // Special keyword matching expansions as requested:
  // e.g. "past" -> Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous
  if (q.includes("past")) {
    results.push(
      {
        id: "past-simple",
        title: "Past Simple",
        titleZh: "一般过去时",
        type: "concept",
        subtitle: "Completed actions at a definite past time (walked, ate, saw)",
        href: "/grammar/tenses",
        badge: "Tenses",
      },
      {
        id: "past-continuous",
        title: "Past Continuous",
        titleZh: "过去进行时",
        type: "concept",
        subtitle: "Actions in progress at a specific past moment (was walking)",
        href: "/grammar/tenses",
        badge: "Tenses",
      },
      {
        id: "past-perfect",
        title: "Past Perfect",
        titleZh: "过去完成时",
        type: "concept",
        subtitle: "The 'past of the past' (had finished before another action)",
        href: "/grammar/tenses",
        badge: "Tenses",
      },
      {
        id: "past-perfect-continuous",
        title: "Past Perfect Continuous",
        titleZh: "过去完成进行时",
        type: "concept",
        subtitle: "Ongoing past action leading up to another past point",
        href: "/grammar/tenses",
        badge: "Tenses",
      }
    );
  }

  // e.g. "can" -> Modal Verbs, Can vs Could, Ability, Permission, Possibility
  if (q.includes("can") || q.includes("could")) {
    results.push(
      {
        id: "modal-verbs-card",
        title: "Modal Verbs",
        titleZh: "情态动词",
        type: "subcategory",
        subtitle: "Can, Could, Should, Must — express certainty and attitude",
        href: "/grammar/verbs/modal-verbs",
        badge: "Verbs",
      },
      {
        id: "can-vs-could",
        title: "Can vs Could",
        titleZh: "Can 与 Could 礼貌对比",
        type: "concept",
        subtitle: "Present ability vs past ability & formal polite requests",
        href: "/grammar/verbs/modal-verbs",
        badge: "Modals",
      },
      {
        id: "modal-ability",
        title: "Ability: Can / Be Able To",
        titleZh: "能力表达：Can 与 Be Able To",
        type: "concept",
        subtitle: "Physical, learned, and circumstantial abilities",
        href: "/grammar/modals",
        badge: "Modals",
      },
      {
        id: "modal-permission",
        title: "Permission: Can, May, Could",
        titleZh: "请求许可与授权",
        type: "concept",
        subtitle: "Asking for and granting permission naturally",
        href: "/grammar/modals",
        badge: "Modals",
      },
      {
        id: "modal-possibility",
        title: "Possibility: May, Might, Could",
        titleZh: "可能性推测",
        type: "concept",
        subtitle: "Nuances of chance from 30% to 90% certainty",
        href: "/grammar/modals",
        badge: "Modals",
      }
    );
  }

  // Check categories
  for (const cat of grammarCategories) {
    const matchesName = cat.name.toLowerCase().includes(q) || cat.nameZh.includes(q);
    const matchesDesc = cat.shortExplanation.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
    const matchesKeywords = cat.keywords?.some((k) => k.toLowerCase().includes(q));

    if (matchesName || matchesDesc || matchesKeywords) {
      if (!results.some((r) => r.id === cat.id)) {
        results.push({
          id: cat.id,
          title: cat.name,
          titleZh: cat.nameZh,
          type: "category",
          subtitle: cat.shortExplanation,
          href: `/grammar/${cat.id}`,
          badge: cat.difficulty,
        });
      }
    }
  }

  // Check verb subcategories
  for (const sub of verbSubcategories) {
    const matchesName = sub.name.toLowerCase().includes(q) || sub.nameZh.includes(q);
    const matchesMeaning = sub.meaning.toLowerCase().includes(q);
    const matchesExamples = sub.examples.some((ex) => ex.toLowerCase().includes(q));

    if (matchesName || matchesMeaning || matchesExamples) {
      if (!results.some((r) => r.id === sub.id)) {
        results.push({
          id: sub.id,
          title: sub.name,
          titleZh: sub.nameZh,
          type: "subcategory",
          subtitle: sub.meaning,
          href: `/grammar/${sub.categoryId}/${sub.id}`,
          badge: sub.difficulty,
        });
      }
    }
  }

  return results;
}

export function getRecommendedLesson(
  completedLessons: Record<string, any>,
  lastLesson: any,
  strugglingTopics: any[]
): RecommendedItem {
  // 1. If user recently struggled with a topic (quiz < 70% or recorded error)
  if (strugglingTopics && strugglingTopics.length > 0) {
    const struggle = strugglingTopics[0];
    return {
      type: "Review Weak Areas",
      title: struggle.lessonTitle || "Subject–Verb Agreement",
      titleZh: "攻克薄弱环节",
      categoryId: struggle.categoryId || "verbs",
      subcategoryId: struggle.subcategoryId || "action-verbs",
      lessonId: struggle.lessonId || "action-verbs-foundation",
      reason: struggle.reason || "You recently struggled with third-person singular agreements.",
      reasonZh: "基于近期练习错题推荐：针对性补强薄弱点。",
      level: "A1",
    };
  }

  // 2. If user has a last active lesson in progress
  if (lastLesson) {
    return {
      type: "Continue Learning",
      title: lastLesson.lessonTitle || "Action Verbs: Beginner Foundation",
      titleZh: "继续学习",
      categoryId: lastLesson.categoryId,
      subcategoryId: lastLesson.subcategoryId,
      lessonId: lastLesson.lessonId,
      reason: `Resume your study where you left off at Slide ${lastLesson.slideIndex + 1}.`,
      reasonZh: "从上次学习进度继续，稳扎稳打完成本单元。",
      level: "A1",
    };
  }

  // 3. If user completed action-verbs-foundation, recommend next
  if (completedLessons["action-verbs-foundation"]) {
    return {
      type: "Continue Learning",
      title: "Dynamic Actions & Subject Harmony",
      titleZh: "动态行为与主谓一致进阶",
      categoryId: "verbs",
      subcategoryId: "action-verbs",
      lessonId: "action-verbs-harmony",
      reason: "Build upon your action verb foundation with third-person agreements.",
      reasonZh: "已掌握入门基础，下一步进阶第三人称与动宾搭配。",
      level: "B1",
    };
  }

  // 4. Default: "Start Here"
  return {
    type: "Start Here",
    title: "Action Verbs: Beginner Foundation",
    titleZh: "行为动词：入门基础与句型构建",
    categoryId: "verbs",
    subcategoryId: "action-verbs",
    lessonId: "action-verbs-foundation",
    reason: "The foundational engine of all English sentences. Perfect for launching your grammar mastery.",
    reasonZh: "所有英语句子的核心引擎。从最基础且高频的动作动词开启语法之旅。",
    level: "A1",
  };
}
