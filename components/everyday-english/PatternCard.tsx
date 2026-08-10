"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PatternEntry } from "@/types/everyday-english";
import { Volume2, ChevronDown, ChevronUp, Lightbulb, BookOpen, Link2 } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { cn } from "@/lib/utils";

interface PatternCardProps {
  pattern: PatternEntry;
  onRelatedClick?: (term: string) => void;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  A1: "bg-green-100 text-green-800 border-green-200",
  A2: "bg-blue-100 text-blue-800 border-blue-200",
  B1: "bg-yellow-100 text-yellow-800 border-yellow-200",
  B2: "bg-orange-100 text-orange-800 border-orange-200",
  C1: "bg-red-100 text-red-800 border-red-200",
  C2: "bg-rose-900 text-rose-100 border-rose-700",
};

export function PatternCard({ pattern, onRelatedClick }: PatternCardProps) {
  const [showExamples, setShowExamples] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const handlePlayEnglish = () => {
    if (pattern.audioAvailable) {
      speakEnglish(pattern.term);
    }
  };

  const handlePlayChinese = () => {
    if (pattern.audioAvailable) {
      speakChinese(pattern.chinese);
    }
  };

  return (
    <Card className="p-5 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-lg sm:text-xl font-bold">{pattern.term}</h3>
            <Badge variant="outline" className={cn("text-xs", DIFFICULTY_COLORS[pattern.difficulty] || "bg-gray-100")}>
              {pattern.difficulty}
            </Badge>
            <Badge variant="secondary" className="text-xs capitalize">
              {pattern.register}
            </Badge>
          </div>
          <p className="text-base text-primary font-medium">{pattern.chinese}</p>
          <p className="text-xs text-muted-foreground">{pattern.pinyin}</p>
        </div>
        <div className="flex gap-1 shrink-0">
          {pattern.audioAvailable && (
            <>
              <Button
                size="icon"
                variant="ghost"
                onClick={handlePlayEnglish}
                title="Play English"
                className="h-9 w-9"
              >
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={handlePlayChinese}
                title="Play Chinese"
                className="h-9 w-9"
              >
                <span className="text-sm">🇨🇳</span>
              </Button>
            </>
          )}
        </div>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground mb-4">{pattern.meaning}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowExamples(!showExamples)}
          className="gap-1.5"
        >
          <BookOpen className="w-3.5 h-3.5" />
          Examples ({pattern.examples.length})
          {showExamples ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </Button>
        {pattern.commonMistakes.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMistakes(!showMistakes)}
            className="gap-1.5"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Common Mistakes ({pattern.commonMistakes.length})
            {showMistakes ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </Button>
        )}
      </div>

      {showExamples && (
        <div className="space-y-2 mb-4 p-3 rounded-lg bg-muted/30">
          {pattern.examples.map((ex, idx) => (
            <div key={idx} className="text-sm">
              <p className="font-medium">{ex.en}</p>
              <p className="text-muted-foreground text-xs">{ex.zh}</p>
            </div>
          ))}
        </div>
      )}

      {showMistakes && pattern.commonMistakes.length > 0 && (
        <div className="space-y-2 mb-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
          {pattern.commonMistakes.map((mistake, idx) => (
            <div key={idx} className="text-sm">
              <p className="text-red-600 dark:text-red-400 line-through">❌ {mistake.mistake}</p>
              <p className="text-green-700 dark:text-green-400">✅ {mistake.correction}</p>
            </div>
          ))}
        </div>
      )}

      {pattern.relatedTerms.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <Link2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          {pattern.relatedTerms.map((term) => (
            <button
              key={term}
              onClick={() => onRelatedClick?.(term)}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </Card>
  );
}
