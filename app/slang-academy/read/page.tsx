"use client";

import React from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { slangAcademy } from "@/data/slang-academy";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Volume2, ChevronLeft } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { SlangItem } from "@/types/conversations";

export default function SlangAcademyReadModePage() {
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const getOffensiveBadge = (level: number) => {
    if (level === 0) return <Badge className="bg-green-100 text-green-800 border-green-200">Safe</Badge>;
    if (level === 1) return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Mild</Badge>;
    if (level === 2) return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Caution</Badge>;
    if (level === 3) return <Badge className="bg-red-100 text-red-800 border-red-200">Rude</Badge>;
    return <Badge className="bg-rose-900 text-rose-100 border-rose-700">Extreme</Badge>;
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link href="/slang-academy">
              <Button variant="ghost">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Slang Academy
              </Button>
            </Link>
            <Badge variant="outline" className="text-sm">Read Mode — All Details Visible</Badge>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">🎭 Slang Academy</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn slang by level. Know when to use it, when to avoid it, and how to sound natural.
            </p>
          </div>

          <div className="space-y-8">
            {slangAcademy.map((levelData) => (
              <div key={levelData.level}>
                <div className={`rounded-2xl bg-gradient-to-r ${levelData.color} p-6 mb-4 text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{levelData.emoji}</div>
                    <div>
                      <h2 className="text-2xl font-bold">{levelData.title}</h2>
                      <p className="text-white/90">{levelData.description}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {levelData.items.map((item) => (
                    <Card key={item.id} className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold">{item.word}</h3>
                            {getOffensiveBadge(item.offensiveLevel)}
                          </div>
                          <p className="text-base text-indigo-600 dark:text-indigo-400">{item.chinese}</p>
                          <p className="text-xs text-muted-foreground">{item.pinyin}</p>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          {item.audioAvailable !== false && (
                            <>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => speakEnglish(item.word)}
                                title="Play English"
                                className="h-9 w-9"
                              >
                                <Volume2 className="w-4 h-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => speakChinese(item.chinese)}
                                title="Play Chinese"
                                className="h-9 w-9"
                              >
                                <span className="text-sm">🇨🇳</span>
                              </Button>
                            </>
                          )}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground mb-4">{item.meaning}</p>

                      <div className="p-3 rounded-lg bg-muted/30 mb-4">
                        <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Example</p>
                        <p className="text-sm font-medium">&ldquo;{item.example}&rdquo;</p>
                        <p className="text-xs text-muted-foreground">{item.exampleZh}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 mb-4">
                        <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-2">Conversation</p>
                        {item.conversation.map((line, idx) => (
                          <div key={idx} className="flex items-start justify-between gap-2 mb-1">
                            <p className="text-sm">
                              <strong>{line.speaker}:</strong> {line.line}
                            </p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 shrink-0"
                              onClick={() => speakEnglish(line.line)}
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        ))}
                        <div className="mt-2 space-y-1">
                          {item.chineseTranslation.map((line, idx) => (
                            <div key={idx} className="flex items-start justify-between gap-2">
                              <p className="text-xs text-muted-foreground">
                                {line.speaker}: {line.line}
                              </p>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 shrink-0"
                                onClick={() => speakChinese(line.line)}
                              >
                                <Volume2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2 mb-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Who Says It</p>
                          <p className="text-sm">{item.whoSaysIt}</p>
                          <p className="text-xs text-muted-foreground">Age: {item.ageGroup}</p>
                          <p className="text-xs text-muted-foreground">Region: {item.region}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Safe Alternatives</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.safeAlternatives.map((alt, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{alt}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {item.warning && (
                        <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 rounded-lg mb-4">
                          <p className="text-xs font-medium text-red-900 dark:text-red-100 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            Warning
                          </p>
                          <p className="text-sm text-red-800 dark:text-red-200 mt-1">{item.warning}</p>
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Cultural Notes</p>
                        <p className="text-sm">{item.culturalNotes}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t mt-8">
            <Link href="/slang-academy">
              <Button variant="ghost">← Back to Slang Academy</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
