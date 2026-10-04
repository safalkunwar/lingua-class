"use client";

import Link from "next/link";
import { GrammarCategory } from "@/types/grammar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { useGrammarStore } from "@/stores/grammar-store";

interface GrammarCategoryCardProps {
  category: GrammarCategory;
}

export function GrammarCategoryCard({ category }: GrammarCategoryCardProps) {
  const { completedLessons } = useGrammarStore();

  // Calculate actual stored progress for this category
  const categoryCompletedCount = Object.values(completedLessons).filter(
    (item) => item.categoryId === category.id
  ).length;

  const totalLessons = category.totalLessons || 12;
  const progressPercent = Math.min(
    100,
    Math.round((categoryCompletedCount / totalLessons) * 100)
  );

  return (
    <div className="group block focus:outline-none h-full">
      <Card className="h-full p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-indigo-400/60 dark:hover:border-indigo-500/50 flex flex-col justify-between relative overflow-hidden bg-card border">
        {/* Top Header: Icon & Category Name */}
        <div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <span
                className="text-3xl sm:text-4xl select-none shrink-0"
                role="img"
                aria-label={category.name}
              >
                {category.icon}
              </span>
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {category.name}
                </h3>
                <span className="text-xs text-muted-foreground font-medium">
                  {category.nameZh}
                </span>
              </div>
            </div>
          </div>

          {/* Short Explanation */}
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            &ldquo;{category.shortExplanation}&rdquo;
          </p>

          {/* Metadata Row: Difficulty & Total Lessons */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pb-3 mb-3 border-b border-border/50">
            <span className="font-medium text-foreground">
              {category.difficulty}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              {category.totalLessons} lessons
            </span>
          </div>

          {/* Progress Bar & Percentage */}
          <div className="space-y-1.5 mb-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground font-medium">Progress</span>
              <span className="font-mono font-semibold text-foreground">
                {progressPercent}%
              </span>
            </div>
            <Progress value={progressPercent} className="h-1.5 w-full" />
          </div>
        </div>

        {/* CTA Button: Explore {Category} → */}
        <Link href={`/grammar/${category.id}`} className="mt-auto">
          <div className="w-full py-2.5 px-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-semibold text-xs sm:text-sm flex items-center justify-between group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <span>Explore {category.name}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </Card>
    </div>
  );
}
