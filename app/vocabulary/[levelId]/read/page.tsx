"use client";

import React from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { curriculum } from "@/data/curriculum";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Volume2, ChevronLeft, Search } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState, useMemo } from "react";

export default function VocabularyReadModePage() {
  const params = useParams<{ levelId: string }>();
  const level = curriculum.find((l) => l.id === params.levelId);

  const [search, setSearch] = useState("");
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  if (!level) {
    notFound();
  }

  const filteredWords = useMemo(() => {
    if (!search) return level.items;
    const s = search.toLowerCase();
    return level.items.filter(
      (w) =>
        w.word.toLowerCase().includes(s) ||
        w.chinese.includes(s) ||
        w.pinyin.toLowerCase().includes(s)
    );
  }, [level, search]);

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link href={`/vocabulary/${level.id}`}>
              <Button variant="ghost">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Flashcards
              </Button>
            </Link>
            <Badge variant="outline" className="text-sm">Read Mode — All Words Visible</Badge>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{level.title}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse all {level.items.length} words with full details. Click the speaker icon to hear pronunciation.
            </p>
          </div>

          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search English, Chinese, or pinyin..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredWords.map((word, idx) => (
              <Card key={word.word + idx} className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{word.emoji}</span>
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
                      <p className="text-lg text-indigo-600 dark:text-indigo-400">{word.chinese}</p>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => speakChinese(word.chinese)}
                        className="h-8 w-8"
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">{word.pinyin}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Badge variant="secondary">{word.level}</Badge>
                    <Badge variant="outline">{word.partOfSpeech}</Badge>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Definition</p>
                    <p className="text-sm mb-1">{word.definitionEn}</p>
                    <p className="text-xs text-muted-foreground">{word.definitionZh}</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">Example</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm italic">&ldquo;{word.exampleEn}&rdquo;</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 shrink-0"
                        onClick={() => speakEnglish(word.exampleEn)}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{word.exampleZh}</p>
                  </div>
                </div>

                {word.synonyms.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Synonyms</p>
                    <p className="text-sm">{word.synonyms.join(", ")}</p>
                  </div>
                )}

                {word.antonyms.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Antonyms</p>
                    <p className="text-sm">{word.antonyms.join(", ")}</p>
                  </div>
                )}

                {(word.comparative || word.superlative) && (
                  <div className="mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Forms</p>
                    <p className="text-sm">
                      {word.comparative && `Comparative: ${word.comparative}`}
                      {word.comparative && word.superlative && " | "}
                      {word.superlative && `Superlative: ${word.superlative}`}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="pt-8 border-t mt-8">
            <Link href={`/vocabulary/${level.id}`}>
              <Button variant="ghost">← Back to Flashcards</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
