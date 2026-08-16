"use client";

import React from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { dailyExpressions } from "@/data/daily-expressions";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Volume2, ChevronLeft } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { DailyExpression } from "@/types/conversations";

export default function DailyExpressionsReadModePage() {
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const getRegisterBadgeColor = (level: string) => {
    switch (level) {
      case "formal": return "bg-blue-100 text-blue-800 border-blue-200";
      case "neutral": return "bg-gray-100 text-gray-800 border-gray-200";
      case "casual": return "bg-green-100 text-green-800 border-green-200";
      case "slang": return "bg-purple-100 text-purple-800 border-purple-200";
      case "very-informal": return "bg-orange-100 text-orange-800 border-orange-200";
      case "rude": return "bg-red-100 text-red-800 border-red-200";
      case "vulgar": return "bg-rose-900 text-rose-100 border-rose-700";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link href="/daily-expressions">
              <Button variant="ghost">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Daily Expressions
              </Button>
            </Link>
            <Badge variant="outline" className="text-sm">Read Mode — All Details Visible</Badge>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">📚 Daily Native Expressions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Master expressions exactly as natives use them. Learn meaning, context, pronunciation, and common mistakes.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {dailyExpressions.length} expressions
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            {dailyExpressions.map((expr) => (
              <Card key={expr.id} className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">&ldquo;{expr.expression}&rdquo;</h3>
                      <Badge className={`${getRegisterBadgeColor(expr.register)}`}>
                        {expr.register}
                      </Badge>
                    </div>
                    <p className="text-base text-indigo-600 dark:text-indigo-400">{expr.chinese}</p>
                    <p className="text-xs text-muted-foreground">{expr.pinyin}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => speakEnglish(expr.expression)}
                      title="Play English"
                      className="h-9 w-9"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => speakChinese(expr.chinese)}
                      title="Play Chinese"
                      className="h-9 w-9"
                    >
                      <span className="text-sm">🇨🇳</span>
                    </Button>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-4">{expr.meaning}</p>

                <div className="grid gap-3 sm:grid-cols-2 mb-4">
                  <div className="p-3 rounded-lg bg-muted/30">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">When to Use</p>
                    <p className="text-sm">{expr.whenToUse}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200">
                    <p className="text-xs font-medium text-red-900 dark:text-red-100 uppercase mb-1">When NOT to Use</p>
                    <p className="text-sm text-red-700 dark:text-red-300">{expr.whenNotToUse}</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 mb-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Pronunciation</p>
                    <p className="text-sm font-mono">{expr.pronunciation}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Memory Trick</p>
                    <p className="text-sm">{expr.memoryTrick}</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/30 mb-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Funny Example</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm italic">&ldquo;{expr.funnyExample}&rdquo;</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0"
                      onClick={() => speakEnglish(expr.funnyExample)}
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                {expr.relatedExpressions.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Related Expressions</p>
                    <div className="flex flex-wrap gap-1">
                      {expr.relatedExpressions.map((rel, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{rel}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {expr.miniQuiz && expr.miniQuiz.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Mini Quiz</p>
                    {expr.miniQuiz.map((q, idx) => (
                      <div key={idx} className="mt-2 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                        <p className="text-sm mb-2">{q.question}</p>
                        <div className="flex flex-wrap gap-1">
                          {q.options.map((opt, optIdx) => (
                            <Badge key={optIdx} variant={q.correct === optIdx ? "default" : "outline"} className="text-xs">
                              {opt}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="pt-8 border-t mt-8">
            <Link href="/daily-expressions">
              <Button variant="ghost">← Back to Daily Expressions</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
