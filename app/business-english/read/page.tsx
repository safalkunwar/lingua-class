"use client";

import React from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { businessEnglishData } from "@/data/business-english";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Volume2, ChevronLeft, Search } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function BusinessEnglishReadModePage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const categories = useMemo(() => {
    const cats = new Set(businessEnglishData.lessons.map((l) => l.categoryId));
    return Array.from(cats);
  }, []);

  const filtered = useMemo(() => {
    return businessEnglishData.lessons.filter((l) => {
      const matchesSearch =
        l.title.toLowerCase().includes(search.toLowerCase()) ||
        l.titleZh.includes(search) ||
        l.situation.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "all" || l.categoryId === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [search, categoryFilter]);

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link href="/business-english">
              <Button variant="ghost">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Business English
              </Button>
            </Link>
            <Badge variant="outline" className="text-sm">Read Mode — All Lessons Visible</Badge>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">💼 Business English</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse all lessons with full details. Click the speaker icon to hear pronunciation.
            </p>
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex gap-2 flex-wrap justify-center">
                <Button
                  onClick={() => setCategoryFilter("all")}
                  variant={categoryFilter === "all" ? "default" : "outline"}
                  size="sm"
                >
                  All
                </Button>
                {categories.map((catId) => {
                  const cat = businessEnglishData.categories.find((c) => c.id === catId);
                  return (
                    <Button
                      key={catId}
                      onClick={() => setCategoryFilter(catId)}
                      variant={categoryFilter === catId ? "default" : "outline"}
                      size="sm"
                    >
                      {cat?.emoji} {cat?.title}
                    </Button>
                  );
                })}
              </div>
              <div className="sm:max-w-md w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search lessons..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {filtered.map((lesson) => (
              <Card key={lesson.id} className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{lesson.title}</h3>
                      <Badge variant="secondary">{lesson.level}</Badge>
                    </div>
                    <p className="text-base text-indigo-600 dark:text-indigo-400">{lesson.titleZh}</p>
                  </div>
                </div>

                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg mb-4">
                  <p className="text-xs font-medium text-indigo-900 dark:text-indigo-100 mb-1">Situation</p>
                  <p className="text-sm mb-1">{lesson.situation}</p>
                  <p className="text-xs text-muted-foreground">{lesson.situationZh}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Key Expressions</p>
                  <div className="space-y-2">
                    {lesson.keyExpressions.map((expr, idx) => (
                      <div key={idx} className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm">&ldquo;{expr.en}&rdquo;</p>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400">{expr.zh}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() => speakEnglish(expr.en)}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Examples</p>
                  <div className="space-y-2">
                    {lesson.examples.map((ex, idx) => (
                      <div key={idx} className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm">&ldquo;{ex.en}&rdquo;</p>
                          <p className="text-xs text-muted-foreground">{ex.zh}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() => speakEnglish(ex.en)}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Common Mistakes</p>
                    <div className="space-y-2">
                      {lesson.commonMistakes.map((mistake, idx) => (
                        <div key={idx} className="p-2 bg-red-50 dark:bg-red-950/20 rounded text-sm">
                          <p className="text-red-700 dark:text-red-300">❌ {mistake.mistake}</p>
                          <p className="text-green-700 dark:text-green-300">✅ {mistake.correction}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Practice</p>
                  <div className="space-y-2">
                    {lesson.practice.map((exercise, idx) => (
                      <div key={idx} className="p-2 bg-muted/30 rounded text-sm">
                        <p>{exercise.question}</p>
                        <p className="text-xs text-muted-foreground">{exercise.questionZh}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="pt-8 border-t mt-8">
            <Link href="/business-english">
              <Button variant="ghost">← Back to Business English</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
