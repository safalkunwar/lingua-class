"use client";

import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { everydayEnglishSections } from "@/data/everyday-english";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PracticeExercise } from "@/types/everyday-english";
import { ExerciseCard } from "@/components/everyday-english/PracticeExercise";
import { TeacherModePanel } from "@/components/everyday-english/TeacherModePanel";
import { Volume2, ChevronLeft, Lightbulb, BookOpen, Link2, GraduationCap } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { useState } from "react";
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

export default function PatternDetailPage({ params }: { params: { sectionId: string; patternId: string } }) {
  const section = everydayEnglishSections.find((s) => s.id === params.sectionId);
  const pattern = section?.patterns.find((p) => p.id === params.patternId);

  const [showTeacherMode, setShowTeacherMode] = useState(false);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  if (!section || !pattern) {
    notFound();
  }

  const relatedPatterns = section.patterns.filter((p) =>
    pattern.relatedTerms.includes(p.term) && p.id !== pattern.id
  );

  const sectionExercises = section.exercises.filter((ex) =>
    pattern.relatedTerms.some((rt) => ex.question.toLowerCase().includes(rt.toLowerCase())) ||
    ex.question.toLowerCase().includes(pattern.term.toLowerCase())
  );

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <Link href={`/everyday-english/${section.id}`}>
              <Button variant="ghost" className="mb-4">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to {section.title}
              </Button>
            </Link>

            <div className="flex items-start gap-3 mb-4">
              <span className="text-4xl sm:text-5xl">{section.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h1 className="text-2xl sm:text-3xl font-bold">{pattern.term}</h1>
                  <Badge variant="outline" className={cn("text-xs", DIFFICULTY_COLORS[pattern.difficulty] || "bg-gray-100")}>
                    {pattern.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="text-xs capitalize">{pattern.register}</Badge>
                </div>
                <p className="text-lg text-primary font-medium">{pattern.chinese}</p>
                <p className="text-sm text-muted-foreground">{pattern.pinyin}</p>
              </div>
              <div className="flex gap-1 shrink-0">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => speakEnglish(pattern.term)}
                  title="Play English"
                  className="h-10 w-10"
                >
                  <Volume2 className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => speakChinese(pattern.chinese)}
                  title="Play Chinese"
                  className="h-10 w-10"
                >
                  <span className="text-lg">🇨🇳</span>
                </Button>
              </div>
            </div>

            <Card className="p-5 sm:p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <h3 className="font-semibold">Meaning</h3>
              </div>
              <p className="text-base sm:text-lg">{pattern.meaning}</p>
            </Card>

            <Card className="p-5 sm:p-6 mb-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                Examples
              </h3>
              <div className="space-y-3">
                {pattern.examples.map((ex, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-muted/30">
                    <p className="font-medium">{ex.en}</p>
                    <p className="text-sm text-muted-foreground">{ex.zh}</p>
                  </div>
                ))}
              </div>
            </Card>

            {pattern.commonMistakes.length > 0 && (
              <Card className="p-5 sm:p-6 mb-6 border-amber-200 dark:border-amber-800">
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-amber-700 dark:text-amber-300">
                  <Lightbulb className="w-4 h-4" />
                  Common Mistakes
                </h3>
                <div className="space-y-3">
                  {pattern.commonMistakes.map((mistake, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20">
                      <p className="text-red-600 dark:text-red-400 line-through text-sm">❌ {mistake.mistake}</p>
                      <p className="text-green-700 dark:text-green-400 text-sm font-medium">✅ {mistake.correction}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {section.teacherPanel && (
              <div className="mb-6">
                <TeacherModePanel panel={section.teacherPanel} />
              </div>
            )}

            {relatedPatterns.length > 0 && (
              <Card className="p-5 sm:p-6 mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-primary" />
                  Related Concepts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {relatedPatterns.map((rp) => (
                    <Link key={rp.id} href={`/everyday-english/${section.id}/${rp.id}`}>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 transition-colors">
                        {rp.term}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {sectionExercises.length > 0 && (
              <div className="pt-6 border-t">
                <h3 className="text-xl font-bold mb-4">Practice Exercises</h3>
                <div className="space-y-4">
                  {sectionExercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
