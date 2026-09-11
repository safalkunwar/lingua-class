"use client";

import { basketballSubModules } from "@/data/sports-basketball";
import {
  watchingAGameDialogue,
  talkingWithFansDialogue,
  talkingWithPlayersDialogue,
  askingQuestionsDialogue,
  gameCommentaryDialogue,
  basketballSmallTalkDialogue,
} from "@/data/sports-basketball";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StudentSidebar } from "@/components/layout/sidebar";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Volume2 } from "lucide-react";
import { useState } from "react";

const MODULE_META: Record<string, { emoji: string; color: string; type: string }> = {
  "basketball-basics": { emoji: "🏀", color: "from-blue-400 to-cyan-500", type: "vocabulary" },
  "basketball-vocabulary": { emoji: "📖", color: "from-green-400 to-emerald-500", type: "vocabulary" },
  "basketball-positions": { emoji: "👤", color: "from-purple-400 to-pink-500", type: "vocabulary" },
  "basketball-slang": { emoji: "🔥", color: "from-orange-400 to-red-500", type: "slang" },
  "watching-a-game": { emoji: "📺", color: "from-red-400 to-rose-500", type: "dialogue" },
  "talking-with-fans": { emoji: "🗣️", color: "from-teal-400 to-green-500", type: "dialogue" },
  "talking-with-players": { emoji: "🤝", color: "from-indigo-400 to-purple-500", type: "dialogue" },
  "asking-questions": { emoji: "❓", color: "from-pink-400 to-rose-500", type: "dialogue" },
  "basketball-pronunciation": { emoji: "👄", color: "from-cyan-400 to-teal-500", type: "vocabulary" },
  "game-commentary": { emoji: "🎙️", color: "from-amber-400 to-yellow-500", type: "dialogue" },
  "basketball-small-talk": { emoji: "💬", color: "from-lime-400 to-green-500", type: "dialogue" },
  "meet-stephen-curry": { emoji: "⭐", color: "from-yellow-400 to-amber-500", type: "mission" },
};

const DIALOGUE_MAP: Record<string, { title: string; dialogue: { speaker: string; line: string; lineZh?: string }[] }> = {
  "watching-a-game": { title: "Watching a Game Dialogue", dialogue: watchingAGameDialogue },
  "talking-with-fans": { title: "Talking With Fans Dialogue", dialogue: talkingWithFansDialogue },
  "talking-with-players": { title: "Talking With Players Dialogue", dialogue: talkingWithPlayersDialogue },
  "asking-questions": { title: "Asking Questions Dialogue", dialogue: askingQuestionsDialogue },
  "game-commentary": { title: "Game Commentary Dialogue", dialogue: gameCommentaryDialogue },
  "basketball-small-talk": { title: "Basketball Small Talk Dialogue", dialogue: basketballSmallTalkDialogue },
};

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  window.speechSynthesis.speak(utter);
}

export default function BasketballModulePage({
  params,
}: {
  params: { moduleId: string };
}) {
  const module = basketballSubModules.find((m) => m.id === params.moduleId);
  const [showZh, setShowZh] = useState(false);

  if (!module) {
    notFound();
  }

  const meta = MODULE_META[module.id] || { emoji: "📚", color: "from-gray-400 to-slate-500", type: module.type };
  const dialogueData = DIALOGUE_MAP[module.id];

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/sports/basketball">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Basketball
            </Button>
          </Link>

          <div className={`rounded-xl border-2 bg-gradient-to-br ${meta.color} bg-opacity-10 p-6 sm:p-8`}>
            <div className="flex items-start gap-4">
              <div className="text-5xl sm:text-6xl">{meta.emoji}</div>
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold mb-1">
                  {module.emoji} {module.title}
                </h1>
                <p className="text-muted-foreground mb-3">{module.titleZh}</p>
                <p className="text-sm text-muted-foreground mb-4">{module.descriptionZh}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{module.type}</Badge>
                  <Badge variant="outline">Basketball</Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-6 sm:p-8">
            {dialogueData ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{dialogueData.title}</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowZh((v) => !v)}
                  >
                    {showZh ? "Hide Chinese" : "Show Chinese"}
                  </Button>
                </div>
                <div className="space-y-4">
                  {dialogueData.dialogue.map((line, idx) => (
                    <div key={idx} className="rounded-lg border border-border/60 bg-muted/30 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="font-semibold">{line.speaker}</p>
                          <p className="mt-1">{line.line}</p>
                          {showZh && line.lineZh && (
                            <p className="mt-1 text-sm text-muted-foreground">{line.lineZh}</p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => speak(line.line)}
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  This module is being prepared. Check back soon for interactive lessons, audio practice, and quizzes!
                </p>
                <p className="text-sm text-muted-foreground mt-2">此模块正在准备中。敬请期待互动课程、音频练习和测验！</p>
                <Link href="/sports/basketball">
                  <Button className="mt-6">Explore Other Basketball Modules</Button>
                </Link>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
