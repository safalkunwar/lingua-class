"use client";

import React from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { businessEnglishData } from "@/data/business-english";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Volume2, ChevronLeft, Search, BookOpen } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function BusinessVocabularyPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const categories = useMemo(() => {
    const cats = new Set(businessEnglishData.vocabulary.map((v) => v.category));
    return Array.from(cats);
  }, []);

  const filtered = useMemo(() => {
    return businessEnglishData.vocabulary.filter((v) => {
      const matchesSearch =
        v.word.toLowerCase().includes(search.toLowerCase()) ||
        v.chinese.includes(search) ||
        v.meaning.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "all" || v.category === categoryFilter;
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
              <div className="flex gap-2">
                <Badge variant="outline" className="text-sm">{filtered.length} words</Badge>
                <Link href="/business-english/read">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Mode
                  </Button>
                </Link>
              </div>
            </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">🧠 Business Vocabulary</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential professional terminology with definitions, examples, collocations, and common mistakes.
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
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    variant={categoryFilter === cat ? "default" : "outline"}
                    size="sm"
                    className="capitalize"
                  >
                    {cat.replace("-", " ")}
                  </Button>
                ))}
              </div>
              <div className="sm:max-w-md w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search vocabulary..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((word) => (
              <Card key={word.id} className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{word.word}</h3>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => speakEnglish(word.word)}
                        className="h-8 w-8"
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-base text-indigo-600 dark:text-indigo-400">{word.chinese}</p>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => speakChinese(word.chinese)}
                        className="h-8 w-8"
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{word.partOfSpeech} | {word.pronunciation}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Badge variant="secondary">{word.level}</Badge>
                    <Badge variant="outline" className="capitalize">{word.category}</Badge>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Meaning</p>
                    <p className="text-sm mb-1">{word.meaning}</p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400">{word.chinese}</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">Business Example</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm italic">&ldquo;{word.example}&rdquo;</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 shrink-0"
                        onClick={() => speakEnglish(word.example)}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{word.exampleZh}</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 mb-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Business Meaning</p>
                    <p className="text-sm">{word.businessMeaning}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Everyday Meaning</p>
                    <p className="text-sm">{word.everydayMeaning}</p>
                  </div>
                </div>

                {word.collocations.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Collocations</p>
                    <div className="flex flex-wrap gap-1">
                      {word.collocations.map((col, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{col}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid gap-3 sm:grid-cols-2 mb-3">
                  {word.synonyms.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Synonyms</p>
                      <p className="text-sm">{word.synonyms.join(", ")}</p>
                    </div>
                  )}
                  {word.antonyms.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Antonyms</p>
                      <p className="text-sm">{word.antonyms.join(", ")}</p>
                    </div>
                  )}
                </div>

                {(word.formalVersion || word.casualVersion) && (
                  <div className="mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Formality</p>
                    <div className="flex flex-wrap gap-2">
                      {word.formalVersion && (
                        <Badge variant="default" className="text-xs">Formal: {word.formalVersion}</Badge>
                      )}
                      {word.casualVersion && (
                        <Badge variant="outline" className="text-xs">Casual: {word.casualVersion}</Badge>
                      )}
                    </div>
                  </div>
                )}

                {word.commonMistake && (
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 rounded-lg">
                    <p className="text-xs font-medium text-red-900 dark:text-red-100 mb-1">Common Mistake</p>
                    <p className="text-sm text-red-800 dark:text-red-200">❌ {word.commonMistake.mistake}</p>
                    <p className="text-sm text-green-800 dark:text-green-200">✅ {word.commonMistake.correction}</p>
                  </div>
                )}
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
