"use client";

import Link from "next/link";
import { GrammarSubcategory } from "@/types/grammar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen } from "lucide-react";
import { useGrammarStore } from "@/stores/grammar-store";

interface GrammarSubcategoryCardProps {
  subcategory: GrammarSubcategory;
}

export function GrammarSubcategoryCard({ subcategory }: GrammarSubcategoryCardProps) {
  const { completedLessons } = useGrammarStore();

  // Actual stored progress for this subcategory
  const completedCount = subcategory.lessons.filter(
    (l) => completedLessons[l.id]
  ).length;
  const totalCount = subcategory.lessons.length || 1;
  const progressPercent = Math.min(100, Math.round((completedCount / totalCount) * 100));

  return (
    <Card className="h-full p-5 border transition-all duration-200 hover:shadow-md hover:border-indigo-400/60 flex flex-col justify-between bg-card group">
      <div>
        {/* Header: Subcategory Title & Icon */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl" role="img" aria-label={subcategory.name}>
              {subcategory.icon}
            </span>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-foreground uppercase tracking-wide group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {subcategory.name}
              </h4>
              <span className="text-xs text-muted-foreground">{subcategory.nameZh}</span>
            </div>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted/60 text-muted-foreground">
            {subcategory.difficulty}
          </span>
        </div>

        {/* What it means */}
        <p className="text-xs sm:text-sm text-foreground/90 my-3 leading-relaxed">
          &ldquo;{subcategory.meaning || subcategory.shortIntro}&rdquo;
        </p>

        {/* Tiny Examples: run, eat, study, play */}
        {subcategory.examples && subcategory.examples.length > 0 && (
          <div className="my-3.5">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
              Examples:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {subcategory.examples.slice(0, 4).map((ex, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-muted text-xs font-mono font-medium text-foreground border border-border/50"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Progress */}
        <div className="space-y-1.5 my-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-mono font-medium text-foreground">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-1.5 w-full" />
        </div>
      </div>

      {/* Button: Explore → */}
      <div className="pt-3 border-t border-border/40 mt-2">
        <Link href={`/grammar/${subcategory.categoryId}/${subcategory.id}`}>
          <div className="w-full py-2 px-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-semibold text-xs flex items-center justify-between group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
    </Card>
  );
}
