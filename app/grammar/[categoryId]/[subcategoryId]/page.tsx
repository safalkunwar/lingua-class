"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { getGrammarCategory, getGrammarSubcategory } from "@/data/grammar";
import { GrammarBreadcrumb } from "@/components/grammar/GrammarBreadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PlayCircle,
  Clock,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  ListOrdered,
  Sparkles,
  Compass,
} from "lucide-react";
import { useGrammarStore } from "@/stores/grammar-store";

interface SubcategoryPageProps {
  params: Promise<{ categoryId: string; subcategoryId: string }>;
}

const DEFAULT_OBJECTIVES = [
  "identify action verbs",
  "use them in sentences",
  "distinguish action verbs from state verbs",
  "use them in real conversations",
  "practise from beginner to advanced",
];

const DEFAULT_OVERVIEW_STAGES = [
  { number: 1, title: "What is an action verb?", titleZh: "什么是行为动词？" },
  { number: 2, title: "Action vs state", titleZh: "动作 vs 状态辨析" },
  { number: 3, title: "Verb position", titleZh: "动词在句子中的位置" },
  { number: 4, title: "Verb forms", titleZh: "动词形式与单三变化" },
  { number: 5, title: "Everyday examples", titleZh: "日常生活高频例句" },
  { number: 6, title: "Common mistakes", titleZh: "中国学习者常见错误" },
  { number: 7, title: "Real conversation", titleZh: "真实办公室场景对话" },
  { number: 8, title: "Practice", titleZh: "渐进式互动答题练习" },
  { number: 9, title: "Challenge", titleZh: "高难度综合应变挑战" },
  { number: 10, title: "Review", titleZh: "核心回顾与通关大考" },
];

export default function GrammarSubcategoryPage({ params }: SubcategoryPageProps) {
  const resolvedParams = React.use(params);
  const { categoryId, subcategoryId } = resolvedParams;

  const category = getGrammarCategory(categoryId);
  const subcategory = getGrammarSubcategory(categoryId, subcategoryId);

  if (!category || !subcategory) {
    notFound();
  }

  const primaryLesson = subcategory.lessons[0];
  const learningObjectives = subcategory.learningObjectives || DEFAULT_OBJECTIVES;
  const overviewStages = subcategory.overviewStages || DEFAULT_OVERVIEW_STAGES;

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full space-y-6 sm:space-y-8">
        {/* Breadcrumb Navigation */}
        <GrammarBreadcrumb
          items={[
            {
              label: category.name,
              labelZh: category.nameZh,
              href: `/grammar/${category.id}`,
            },
            {
              label: subcategory.name,
              labelZh: subcategory.nameZh,
            },
          ]}
        />

        {/* Orientation Header */}
        <div className="border-b border-border/60 pb-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl" role="img" aria-label={subcategory.name}>
                {subcategory.icon}
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
                  <span>{subcategory.name}</span>
                  <span className="text-xs font-normal text-muted-foreground px-2 py-0.5 rounded bg-muted">
                    {subcategory.nameZh}
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-foreground/90 mt-1 font-medium">
                  &ldquo;{subcategory.meaning || subcategory.shortIntro}&rdquo;
                </p>
                {subcategory.shortIntroZh && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {subcategory.shortIntroZh}
                  </p>
                )}
              </div>
            </div>

            <Link href={`/grammar/${category.id}`} className="hidden sm:block shrink-0">
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to {category.name}
              </Button>
            </Link>
          </div>
        </div>

        {/* ORIENTATION BLOCK: WHAT YOU WILL LEARN */}
        <Card className="p-6 sm:p-7 border bg-card shadow-sm space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                What you will learn:
              </h2>
            </div>

            <ul className="space-y-2.5 text-sm sm:text-base text-foreground/90 pl-1">
              {learningObjectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                  <span className="leading-snug">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* START LESSON HERO CTA */}
          <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground space-y-0.5">
              <p className="font-medium text-foreground">
                Ready for the step-by-step presentation?
              </p>
              <p>
                Structured into clear slides with pronunciation audio, Chinese toggle, and interactive challenges.
              </p>
            </div>

            {primaryLesson && (
              <Link
                href={`/grammar/${categoryId}/${subcategoryId}/${primaryLesson.id}`}
                className="shrink-0"
              >
                <Button className="w-full sm:w-auto h-11 px-7 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white gap-2 shadow-xs">
                  <PlayCircle className="w-5 h-5" />
                  START LESSON
                </Button>
              </Link>
            )}
          </div>
        </Card>

        {/* LESSON OVERVIEW (ROADMAP ROAD-MAP ORIENTATION) */}
        <Card className="p-6 sm:p-7 border bg-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border/50">
            <div className="flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-bold text-base sm:text-lg text-foreground">
                Lesson Overview
              </h3>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {overviewStages.length} Milestones
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            This roadmap outlines the journey you will take in this lesson. No unexpected walls of text:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {overviewStages.map((stage) => (
              <div
                key={stage.number}
                className="p-3 rounded-lg border bg-muted/20 flex items-center gap-3 text-xs sm:text-sm"
              >
                <span className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 border border-indigo-200/50">
                  {stage.number}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{stage.title}</p>
                  {stage.titleZh && (
                    <p className="text-[11px] text-muted-foreground">{stage.titleZh}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Multiple Level Modules (Beginner, Intermediate, Advanced) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-foreground">
              All Available Level Modules
            </h3>
            <span className="text-xs text-muted-foreground">
              {subcategory.lessons.length} {subcategory.lessons.length === 1 ? "Module" : "Modules"}
            </span>
          </div>

          <div className="space-y-3">
            {subcategory.lessons.map((lesson) => (
              <Card
                key={lesson.id}
                className="p-4 border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-indigo-400/50 transition-colors"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-bold font-mono bg-muted text-foreground">
                      {lesson.level}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">
                      {lesson.title}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{lesson.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" /> ~{lesson.estimatedMinutes} mins
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <BookOpen className="w-3.5 h-3.5" /> {lesson.slideCount} Slides
                    </span>
                  </div>
                </div>

                <Link
                  href={`/grammar/${categoryId}/${subcategoryId}/${lesson.id}`}
                  className="shrink-0"
                >
                  <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs h-9 gap-1.5">
                    <PlayCircle className="w-3.5 h-3.5 text-indigo-600" />
                    Open Lesson
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
