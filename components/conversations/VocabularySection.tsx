"use client";

import { useState } from "react";
import { VocabWord } from "@/types/conversations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface VocabularySectionProps {
  words: VocabWord[];
  title?: string;
  onPlayAudio?: (text: string) => void;
  onCopy?: (text: string) => void;
}

const REGISTER_COLORS: Record<string, string> = {
  formal: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300",
  neutral: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950/30 dark:text-gray-300",
  casual: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-300",
  slang: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-300",
  "very-informal": "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300",
  rude: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300",
  vulgar: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300",
};

export function VocabularySection({ words, title = "Vocabulary", onPlayAudio, onCopy }: VocabularySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayWords = isExpanded ? words : words.slice(0, 5);

  return (
    <section className="py-8 sm:py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
          <span>📚</span> {title}
        </h2>
        <Badge variant="secondary" className="text-sm">
          {words.length} words
        </Badge>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {displayWords.map((word, idx) => (
          <div
            key={idx}
            className="rounded-xl border bg-card p-4 sm:p-5 transition-all hover:shadow-sm"
          >
            <div className="flex items-start gap-4">
              {/* Word Header */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{word.word}</h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    {word.phonetic}
                  </span>
                  {word.register && (
                    <Badge
                      variant="outline"
                      className={cn("text-[10px] px-1.5 py-0.5 h-auto", REGISTER_COLORS[word.register] || REGISTER_COLORS.neutral)}
                    >
                      {word.register}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <span>{word.chinese}</span>
                  <span className="text-xs">({word.pinyin})</span>
                  <span className="text-xs bg-muted px-1.5 py-0.5 rounded">{word.partOfSpeech}</span>
                </div>

                {/* Definition */}
                <div className="space-y-1 text-sm">
                  <p>{word.definitionEn}</p>
                  <p className="text-muted-foreground text-xs">{word.definitionZh}</p>
                </div>

                {/* Example */}
                {word.exampleEn && (
                  <div className="mt-3 p-3 rounded-lg bg-muted/30 border border-muted">
                    <p className="text-sm italic">&ldquo;{word.exampleEn}&rdquo;</p>
                    {word.exampleZh && (
                      <p className="text-xs text-muted-foreground mt-1">{word.exampleZh}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex sm:flex-col gap-1 shrink-0">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onPlayAudio?.(word.word)}
                  className="h-9 w-9"
                  title="Play pronunciation"
                >
                  <Volume2 className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => onCopy?.(word.word)}
                  className="h-9 w-9"
                  title="Copy word"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {words.length > 5 && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="min-w-[200px]"
          >
            {isExpanded ? "Show Less" : `Show All ${words.length} Words`}
          </Button>
        </div>
      )}
    </section>
  );
}
