"use client";

import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { roughEnglish } from "@/data/rough-english";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  AlertTriangle,
  Volume2,
  BookOpen,
} from "lucide-react";
import { SlangItem } from "@/types/conversations";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

export default function RoughEnglishPage() {
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
          <h1 className="text-4xl font-extrabold tracking-tight">⚠️ Rough English</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Understand rough speech without necessarily using it. Learn strength levels, when it becomes bullying, and safer alternatives.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {roughEnglish.length} expressions
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              For comprehension, not encouragement
            </Badge>
          </div>
          <div className="mt-4">
            <Link href="/rough-english/read">
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
          className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-xl"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-900 dark:text-amber-100">Important Note</h3>
              <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
                This section teaches you to understand rough English when you hear it. It does NOT encourage you to use these expressions.
                Always assess your audience and environment. When in doubt, use safer alternatives.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {roughEnglish.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-5 sm:p-6">
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
                    {item.audioAvailable && (
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
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t mt-8">
          <Link href="/rough-english/read">
            <Button variant="ghost">← Back to Rough English</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
