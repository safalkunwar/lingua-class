"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { EverydayEnglishSection, PatternEntry } from "@/types/everyday-english";
import { Volume2, ChevronLeft, Lightbulb, BookOpen, Link2, GraduationCap } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DIFFICULTY_COLORS: Record<string, string> = {
  A1: "bg-green-100 text-green-800 border-green-200",
  A2: "bg-blue-100 text-blue-800 border-blue-200",
  B1: "bg-yellow-100 text-yellow-800 border-yellow-200",
  B2: "bg-orange-100 text-orange-800 border-orange-200",
  C1: "bg-red-100 text-red-800 border-red-200",
  C2: "bg-rose-900 text-rose-100 border-rose-700",
};

interface ReadModeViewProps {
  section: EverydayEnglishSection;
}

export function ReadModeView({ section }: ReadModeViewProps) {
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <span className="text-4xl sm:text-5xl block mb-3">{section.emoji}</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{section.title}</h1>
        <p className="text-lg text-muted-foreground mb-1">{section.titleZh}</p>
        <p className="text-muted-foreground max-w-2xl mx-auto">{section.descriptionZh}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">{section.patterns.length} patterns</Badge>
          <Badge variant="outline">{section.exercises.length} exercises</Badge>
          <Badge variant="outline" className="capitalize">{section.difficulty}</Badge>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link href={`/everyday-english/${section.id}`}>
          <Button variant="ghost">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to {section.title}
          </Button>
        </Link>
        <Badge variant="outline" className="text-sm">Read Mode — All Details Visible</Badge>
      </div>

      {section.teacherPanel && (
        <Card className="p-5 sm:p-6 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-5 h-5 text-amber-700 dark:text-amber-300" />
            <h3 className="font-semibold text-lg">Teacher Mode</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-medium mb-1">Simple Explanation</p>
              <p className="text-sm text-muted-foreground">{section.teacherPanel.simpleExplanation}</p>
            </div>
            <div>
              <p className="font-medium mb-1">中文解释</p>
              <p className="text-sm text-muted-foreground">{section.teacherPanel.chineseExplanation}</p>
            </div>
            <div>
              <p className="font-medium mb-1">Learner Difficulty</p>
              <p className="text-sm text-muted-foreground">{section.teacherPanel.learnerDifficulty}</p>
            </div>
            <div>
              <p className="font-medium mb-1">Teaching Tip</p>
              <p className="text-sm text-muted-foreground">{section.teacherPanel.teachingTip}</p>
            </div>
            <div>
              <p className="font-medium mb-2">Drills</p>
              <div className="space-y-1">
                {section.teacherPanel.drills.map((drill, idx) => (
                  <p key={idx} className="text-sm p-2 rounded bg-muted/30 font-mono">{drill}</p>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-8">
        {section.patterns.map((pattern) => (
          <PatternDetailReadMode key={pattern.id} pattern={pattern} />
        ))}
      </div>

      {section.exercises.length > 0 && (
        <div className="pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Practice Exercises</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {section.exercises.map((exercise) => (
              <Card key={exercise.id} className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs capitalize">{exercise.type}</Badge>
                  <span className="text-xs text-muted-foreground">ID: {exercise.id}</span>
                </div>
                <p className="font-medium mb-1">{exercise.question}</p>
                <p className="text-sm text-muted-foreground mb-3">{exercise.questionZh}</p>
                {exercise.audioText && (
                  <p className="text-sm text-muted-foreground italic mb-3">Audio: {exercise.audioText}</p>
                )}
                {exercise.options && exercise.options.length > 0 && (
                  <div className="space-y-1 mb-3">
                    {exercise.options.map((opt, idx) => (
                      <p key={idx} className="text-sm p-2 rounded bg-muted/30">
                        {String.fromCharCode(65 + idx)}. {opt}
                      </p>
                    ))}
                  </div>
                )}
                <div className="text-sm">
                  <span className="font-medium">Answer: </span>
                  <span className="text-green-700 dark:text-green-400">{exercise.correctAnswer}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium">Hint: </span>{exercise.hint}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">提示: </span>{exercise.hintZh}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="pt-8 border-t">
        <Link href="/everyday-english">
          <Button variant="ghost">← Back to Everyday English Toolkit</Button>
        </Link>
      </div>
    </div>
  );
}

function PatternDetailReadMode({ pattern }: { pattern: PatternEntry }) {
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  return (
    <Card className="p-5 sm:p-6">
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
                onClick={() => speakEnglish(pattern.term)}
                title="Play English"
                className="h-9 w-9"
              >
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => speakChinese(pattern.chinese)}
                title="Play Chinese"
                className="h-9 w-9"
              >
                <span className="text-sm">🇨🇳</span>
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="w-4 h-4 text-primary" />
        <h4 className="font-semibold">Meaning</h4>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground mb-4">{pattern.meaning}</p>

      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-primary" />
        <h4 className="font-semibold">Examples</h4>
      </div>
      <div className="space-y-2 mb-4 p-3 rounded-lg bg-muted/30">
        {pattern.examples.map((ex, idx) => (
          <div key={idx} className="text-sm">
            <p className="font-medium">{ex.en}</p>
            <p className="text-muted-foreground text-xs">{ex.zh}</p>
          </div>
        ))}
      </div>

      {pattern.commonMistakes.length > 0 && (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <h4 className="font-semibold text-amber-700 dark:text-amber-300">Common Mistakes</h4>
          </div>
          <div className="space-y-2 mb-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            {pattern.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="text-sm">
                <p className="text-red-600 dark:text-red-400 line-through">❌ {mistake.mistake}</p>
                <p className="text-green-700 dark:text-green-400">✅ {mistake.correction}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {pattern.relatedTerms.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <Link2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          <span className="text-xs text-muted-foreground mr-1">Related:</span>
          {pattern.relatedTerms.map((term) => (
            <span
              key={term}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {term}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}
