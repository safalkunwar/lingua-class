"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { StudentSidebar } from "@/components/layout/sidebar";
import { grammarCategories } from "@/data/grammar/categories";
import { GrammarCategoryCard } from "@/components/grammar/GrammarCategoryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  BookOpen,
  Trophy,
  ArrowRight,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useGrammarStore } from "@/stores/grammar-store";
import { useLearningStore } from "@/stores/learning-store";
import { searchGrammar, getRecommendedLesson } from "@/lib/grammar-helpers";
import { cn } from "@/lib/utils";

const FILTER_TABS = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
  "PTE",
  "Speaking",
  "Writing",
  "Reading",
  "Everyday English",
];

export default function GrammarAcademyPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const { completedLessons, lastLesson, strugglingTopics } = useGrammarStore();
  const { totalXp, streak } = useLearningStore();

  // Actual stored stats
  const completedLessonsCount = Object.keys(completedLessons).length;
  // Total curriculum baseline across all 18 categories
  const totalCurriculumLessons = 135;
  const overallProgressPercent = Math.min(
    100,
    Math.round((completedLessonsCount / totalCurriculumLessons) * 100)
  );

  // Dynamic user level calculation based on actual completed lessons
  const currentLevel = useMemo(() => {
    if (completedLessonsCount >= 20) return "B2 Upper Intermediate";
    if (completedLessonsCount >= 10) return "B1 Intermediate";
    if (completedLessonsCount >= 3) return "A2 Elementary";
    return "A1 Beginner";
  }, [completedLessonsCount]);

  // Actual stored recommendation
  const recommendation = useMemo(() => {
    return getRecommendedLesson(completedLessons, lastLesson, strugglingTopics);
  }, [completedLessons, lastLesson, strugglingTopics]);

  // Search Results
  const searchResults = useMemo(() => {
    return searchGrammar(search);
  }, [search]);

  // Filtered Categories
  const filteredCategories = useMemo(() => {
    return grammarCategories.filter((cat) => {
      // Filter tab
      if (activeFilter !== "All") {
        const matchesTag = cat.tags?.includes(activeFilter);
        if (!matchesTag) return false;
      }
      return true;
    });
  }, [activeFilter]);

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6 sm:space-y-8">
        {/* Main Header */}
        <div className="border-b border-border/60 pb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">📐</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Grammar Academy
            </span>
            <span className="text-xs text-muted-foreground">• 系统学习英语语法</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Grammar Academy
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-1 font-medium">
            &ldquo;Build your English from the inside out.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/80 mt-1">
            Grammar is a visual map of interconnected tools, not an endless list of disconnected rules.
          </p>
        </div>

        {/* Dashboard Stats & Recommended Next Lesson */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Progress Overview Card */}
          <Card className="p-5 border bg-card flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span className="font-semibold uppercase tracking-wider">Overall Grammar Progress</span>
                <span className="font-mono font-bold text-foreground text-sm">
                  {overallProgressPercent}%
                </span>
              </div>
              <Progress value={overallProgressPercent} className="h-2 w-full mb-4" />

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/40 text-xs">
                <div>
                  <span className="text-muted-foreground block">Lessons Completed</span>
                  <span className="text-base sm:text-lg font-bold text-foreground font-mono">
                    {completedLessonsCount}
                  </span>
                  <span className="text-muted-foreground text-[11px] block">/ {totalCurriculumLessons} total</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Current Level</span>
                  <span className="text-base sm:text-lg font-bold text-foreground">
                    {currentLevel.split(" ")[0]}
                  </span>
                  <span className="text-muted-foreground text-[11px] block truncate">
                    {currentLevel.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/40">
              <span className="flex items-center gap-1 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> {totalXp} XP
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Flame className="w-3.5 h-3.5 text-orange-500" /> {streak} Day Streak
              </span>
            </div>
          </Card>

          {/* Recommended Learning Card */}
          <Card className="p-5 border bg-indigo-50/40 dark:bg-indigo-950/20 border-indigo-200/60 dark:border-indigo-900/40 lg:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {recommendation.type === "Review Weak Areas" ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                      <AlertTriangle className="w-3 h-3" />
                      Review Weak Areas
                    </span>
                  ) : recommendation.type === "Continue Learning" ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                      <RotateCcw className="w-3 h-3" />
                      Continue Learning
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      <Play className="w-3 h-3" />
                      Start Here
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground font-mono">
                    Level {recommendation.level}
                  </span>
                </div>

                <span className="text-xs text-muted-foreground hidden sm:inline">
                  Personalized Path
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">
                {recommendation.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/90 mt-1 leading-relaxed">
                <strong className="text-foreground font-semibold">Recommended because: </strong>
                &ldquo;{recommendation.reason}&rdquo;
              </p>
              {recommendation.reasonZh && (
                <p className="text-xs text-muted-foreground mt-0.5">{recommendation.reasonZh}</p>
              )}
            </div>

            <div className="pt-2">
              <Link
                href={`/grammar/${recommendation.categoryId}/${recommendation.subcategoryId}/${recommendation.lessonId}`}
              >
                <Button className="w-full sm:w-auto gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm h-9 px-4">
                  <span>
                    {recommendation.type === "Review Weak Areas"
                      ? "Review & Retest Now"
                      : recommendation.type === "Continue Learning"
                      ? "Resume Lesson"
                      : "Start Recommended Lesson"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Search Bar with Live Concept Expansion */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search grammar topics, rules, or keywords (e.g. "past", "can", "verbs", "tenses", "agreement")...'
              className="pl-10 h-11 text-sm bg-card border shadow-2xs"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground px-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Deep Search Results Drawer */}
          {search.trim().length > 0 && (
            <Card className="p-4 border bg-card shadow-sm space-y-2.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/40 pb-2">
                <span>
                  Search results for &ldquo;<span className="text-foreground font-semibold">{search}</span>&rdquo;
                </span>
                <span>{searchResults.length} matching topics found</span>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {searchResults.map((item) => (
                    <Link key={item.id} href={item.href} className="block group">
                      <div className="p-3 rounded-lg border bg-muted/20 hover:bg-muted/50 transition-colors flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground">({item.titleZh})</span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-card border shrink-0 text-muted-foreground">
                          {item.badge}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-xs text-muted-foreground">
                  No direct grammar rules matched &ldquo;{search}&rdquo;. Try typing &ldquo;past&rdquo;, &ldquo;can&rdquo;, or &ldquo;verbs&rdquo;.
                </div>
              )}
            </Card>
          )}
        </div>

        {/* Filter Navigation Tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <span>Grammar Concept Library</span>
              <span className="text-xs font-normal text-muted-foreground">
                ({filteredCategories.length} Categories)
              </span>
            </h2>

            <div className="text-xs text-muted-foreground hidden sm:block">
              Click any category card to drill down into types
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-border/40">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all",
                    isActive
                      ? "bg-indigo-600 text-white shadow-xs font-semibold"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 18 Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {filteredCategories.map((category) => (
              <GrammarCategoryCard key={category.id} category={category} />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 border border-dashed rounded-xl p-8 bg-card">
              <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold text-foreground">
                No categories found under filter &quot;{activeFilter}&quot;
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveFilter("All")}
                className="mt-3 text-xs"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
