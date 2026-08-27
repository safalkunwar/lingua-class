"use client";

import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { slangModule } from "@/data/slang-module";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { AlertTriangle, Volume2, BookOpen } from "lucide-react";
import { SlangLevelData, SlangItem } from "@/types/conversations";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

type LevelFilter = "all" | "safe" | "internet" | "street" | "rough" | "text-speak";

export default function SlangAcademyPage() {
  const [filter, setFilter] = useState<LevelFilter>("all");
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const levels = slangModule.levels || [];
  const filtered = filter === "all"
    ? levels
    : levels.filter((l) => l.level === filter);

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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <Link href="/conversations">
            <Button variant="ghost" className="mb-4">
              ← Back to Conversations
            </Button>
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight">🎭 Slang Academy</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Learn slang by level. Know when to use it, when to avoid it, and how to sound natural.
          </p>
          <div className="mt-4">
            <Link href="/slang-academy/read">
              <Button variant="default" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Read Mode — View All Details
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-wrap justify-center gap-2"
        >
          {[
            { key: "all", label: "All Levels", emoji: "📚" },
            { key: "safe", label: "Safe Slang", emoji: "😊" },
            { key: "internet", label: "Internet", emoji: "📱" },
            { key: "street", label: "Street", emoji: "🏙️" },
            { key: "rough", label: "Rough", emoji: "⚠️" },
            { key: "text-speak", label: "Text Speak", emoji: "📱" },
          ].map((level) => (
            <Button
              key={level.key}
              onClick={() => setFilter(level.key as LevelFilter)}
              variant={filter === level.key ? "default" : "outline"}
              size="sm"
              className="gap-2"
            >
              <span>{level.emoji}</span>
              {level.label}
            </Button>
          ))}
        </motion.div>

        {filtered.map((levelData, levelIndex) => (
          <motion.div
            key={levelData.level}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: levelIndex * 0.1 }}
            className="mb-10"
          >
            <div className={`rounded-2xl bg-gradient-to-r ${levelData.color} p-6 mb-6 text-white`}>
              <div className="flex items-center gap-3">
                <div className="text-4xl">{levelData.emoji}</div>
                <div>
                  <h2 className="text-2xl font-bold">{levelData.title}</h2>
                  <p className="text-white/90">{levelData.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {levelData.items.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: itemIndex * 0.05 }}
                >
                  <Card className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg">{item.word}</h3>
                          {getOffensiveBadge(item.offensiveLevel)}
                        </div>
                        <p className="text-base text-indigo-600 dark:text-indigo-400">{item.chinese}</p>
                        <p className="text-xs text-muted-foreground">{item.pinyin}</p>
                      </div>
                      <div className="flex gap-1 shrink-0">
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
