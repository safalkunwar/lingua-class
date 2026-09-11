"use client";

import { basketballSubModules } from "@/data/sports-basketball";
import {
  watchingAGameDialogue,
  talkingWithFansDialogue,
  talkingWithPlayersDialogue,
  askingQuestionsDialogue,
  gameCommentaryDialogue,
  basketballSmallTalkDialogue,
  basketballMemoryPhrases,
} from "@/data/sports-basketball";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StudentSidebar } from "@/components/layout/sidebar";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Volume2, Lightbulb, ImageIcon } from "lucide-react";
import { useState } from "react";

const SCENE_IMAGES: Record<string, { emoji: string; title: string; color: string; image: string }> = {
  "watching-a-game": { emoji: "🏟️", title: "Basketball Stadium", color: "from-blue-500 to-cyan-500", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop" },
  "talking-with-fans": { emoji: "🗣️", title: "Fans Talking", color: "from-teal-500 to-green-500", image: "https://images.unsplash.com/photo-1504457038037-3f0cc2549ee7?w=800&h=400&fit=crop" },
  "talking-with-players": { emoji: "🤝", title: "Interview Moment", color: "from-indigo-500 to-purple-500", image: "https://images.unsplash.com/photo-1519861531473-92002639313cc?w=800&h=400&fit=crop" },
  "asking-questions": { emoji: "🙋", title: "Asking Questions", color: "from-pink-500 to-rose-500", image: "https://images.unsplash.com/photo-1579952363873-27f3bde9be0f?w=800&h=400&fit=crop" },
  "game-commentary": { emoji: "🎙️", title: "Commentary Booth", color: "from-amber-500 to-yellow-500", image: "https://images.unsplash.com/photo-1516541196182-54bd7741596a?w=800&h=400&fit=crop" },
  "basketball-small-talk": { emoji: "💬", title: "Casual Chat", color: "from-lime-500 to-green-500", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&h=400&fit=crop" },
};

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

const MEMORY_PHRASE_MAP: Record<string, { category: string; phrases: { en: string; zh: string; tip: string }[] }[]> = {
  "watching-a-game": basketballMemoryPhrases.filter((m) => m.category === "Watching a Game"),
  "talking-with-fans": basketballMemoryPhrases.filter((m) => m.category === "Talking With Fans"),
  "talking-with-players": basketballMemoryPhrases.filter((m) => m.category === "Talking With Players"),
  "asking-questions": basketballMemoryPhrases.filter((m) => m.category === "Asking Questions"),
  "game-commentary": basketballMemoryPhrases.filter((m) => m.category === "Game Commentary"),
  "basketball-small-talk": basketballMemoryPhrases.filter((m) => m.category === "Basketball Small Talk"),
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
  const memoryPhrases = MEMORY_PHRASE_MAP[module.id];
  const scene = SCENE_IMAGES[module.id];

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

        {scene && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-lg">
              <img
                src={scene.image}
                alt={scene.title}
                className="h-56 w-full object-cover sm:h-72"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{scene.emoji}</span>
                  <div>
                    <h2 className="text-lg font-bold text-white sm:text-xl">{scene.title}</h2>
                    <p className="text-sm text-white/80">Real basketball situation — practice speaking like a pro</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-6 sm:p-8">
            {dialogueData ? (
              <div className="space-y-8">
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

                {scene && (
                  <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 p-3 text-sm text-muted-foreground">
                    <ImageIcon className="h-4 w-4" />
                    Scene: {scene.title} — Listen to each line and repeat after the speaker.
                  </div>
                )}

                <div className="space-y-4">
                  {dialogueData.dialogue.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="rounded-xl border border-border/60 bg-gradient-to-br from-muted/40 to-muted/10 p-4 sm:p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-lg text-white">
                          {line.speaker[0]}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-indigo-700 dark:text-indigo-300">{line.speaker}</p>
                          <p className="mt-1 text-base leading-relaxed">{line.line.replace(/^[^\p{L}\p{N}]+/u, '')}</p>
                          {showZh && line.lineZh && (
                            <p className="mt-1 text-sm text-muted-foreground">{line.lineZh}</p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 shrink-0"
                          onClick={() => speak(line.line.replace(/^[^\p{L}\p{N}]+/u, ''))}
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {memoryPhrases && memoryPhrases.length > 0 && (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-950/30">
                    <div className="mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">Easy to Remember</h3>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {memoryPhrases.flatMap((group) =>
                        group.phrases.map((phrase, idx) => (
                          <div key={idx} className="rounded-lg border border-amber-100 bg-white p-4 dark:border-amber-800 dark:bg-background">
                            <p className="font-semibold text-amber-900 dark:text-amber-100">{phrase.en}</p>
                            <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">{phrase.zh}</p>
                            <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">💡 {phrase.tip}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
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
