"use client";

import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { survivalResources } from "@/data/english-survival-library";
import { SurvivalResource, MiniDrill } from "@/types/english-survival-library";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Zap, Lightbulb, AlertTriangle, Sparkles, BookOpen, RotateCcw, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function EnglishSurvivalLibraryDetailPage({ params }: { params: { id: string } }) {
  const resource = survivalResources.find((r) => r.id === params.id) || null;
  const [selectedDrill, setSelectedDrill] = useState<MiniDrill | null>(null);
  const [drillAnswer, setDrillAnswer] = useState<string>("");
  const [drillFeedback, setDrillFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [score, setScore] = useState(0);
  const [totalDrills, setTotalDrills] = useState(0);
  const [showRescue, setShowRescue] = useState(false);

  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  if (!resource) {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Resource not found</h1>
            <Link href="/english-survival-library">
              <Button>Back to Library</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const progress = selectedDrill ? ((totalDrills + 1) / resource.miniDrills.length) * 100 : 0;

  const handleDrillAnswer = (drill: MiniDrill, answer: string) => {
    setDrillAnswer(answer);
    setTotalDrills((prev) => prev + 1);

    let isCorrect = false;
    if (drill.type === "choose" || drill.type === "listen") {
      const correctOption = drill.options?.find((o) => o.isCorrect);
      isCorrect = correctOption?.text === answer;
    } else if (drill.type === "fill-blank") {
      isCorrect = answer.toLowerCase().trim() === drill.answer?.toLowerCase().trim();
    } else if (drill.type === "rewrite") {
      isCorrect = answer.toLowerCase().trim() === drill.answer?.toLowerCase().trim();
    } else if (drill.type === "speak") {
      isCorrect = true;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setDrillFeedback({ text: "✅ Correct!", zh: "✅ 正确！" });
    } else {
      setDrillFeedback({ text: `❌ Not quite. ${drill.answer || ""}`, zh: `❌ 不完全对。${drill.answer || ""}` });
    }
  };

  const nextDrill = () => {
    const currentIndex = resource.miniDrills.findIndex((d) => d === selectedDrill);
    if (currentIndex < resource.miniDrills.length - 1) {
      setSelectedDrill(resource.miniDrills[currentIndex + 1]);
      setDrillAnswer("");
      setDrillFeedback(null);
    } else {
      addXp(resource.xpReward + score * 5);
      incrementStreak();
      incrementWeeklyProgress();
      updateLevelProgress(resource.id, {
        cardsReviewed: resource.miniDrills.length,
        completed: true,
      });
      setSelectedDrill(null);
      setDrillFeedback(null);
    }
  };

  const startDrills = () => {
    setSelectedDrill(resource.miniDrills[0]);
    setScore(0);
    setTotalDrills(0);
    setDrillAnswer("");
    setDrillFeedback(null);
  };

  return (
    <div className="flex min-w-0">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto min-w-0">
          <div className="mb-4">
            <Link href="/english-survival-library">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Library
              </Button>
            </Link>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Card className="p-5 sm:p-6 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl sm:text-4xl">{resource.emoji}</span>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">{resource.title}</h1>
                  <p className="text-xs text-muted-foreground">{resource.titleZh}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{resource.summary}</p>
              <p className="text-xs text-muted-foreground mb-4">{resource.summaryZh}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  <Zap className="h-3 w-3 mr-1" />
                  {resource.xpReward} XP
                </Badge>
                <Badge variant="outline" className="text-xs capitalize">
                  {resource.difficulty}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {resource.category}
                </Badge>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-4">
                <p className="text-sm sm:text-base mb-2">{resource.explanation}</p>
                <p className="text-xs text-muted-foreground mb-4">{resource.explanationZh}</p>

                <div className="space-y-2 mb-4">
                  {resource.examples.map((ex, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/70 dark:bg-black/20 border border-border">
                      <p className="text-sm font-medium">{ex.en}</p>
                      <p className="text-xs text-muted-foreground">{ex.zh}</p>
                    </div>
                  ))}
                </div>

                {resource.commonMistakes && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-700 dark:text-red-300" />
                      <p className="text-sm font-semibold text-red-900 dark:text-red-100">Common Mistakes</p>
                    </div>
                    <div className="space-y-2">
                      {resource.commonMistakes.map((m, idx) => (
                        <div key={idx} className="text-sm">
                          <p className="line-through text-red-700/80 dark:text-red-300/80">❌ {m.mistake}</p>
                          <p className="text-green-700 dark:text-green-300">✅ {m.correction}</p>
                          <p className="text-xs text-muted-foreground">{m.correctionZh}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {resource.chunks && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-emerald-600" />
                      <p className="text-sm font-semibold">Chunks</p>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {resource.chunks.map((chunk, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-muted/30">
                          <p className="text-sm font-medium">{chunk.chunk}</p>
                          <p className="text-xs text-muted-foreground">{chunk.meaning} · {chunk.chinese}</p>
                          <p className="text-xs italic mt-1">“{chunk.example}”</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {resource.comparisonTable && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-amber-600" />
                      <p className="text-sm font-semibold">Comparison</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-3">Term</th>
                            <th className="text-left py-2 px-3">Meaning</th>
                            <th className="text-left py-2 px-3">Situation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {resource.comparisonTable.map((row, idx) => (
                            <tr key={idx} className="border-b last:border-0">
                              <td className="py-2 px-3 font-medium">{row.term}</td>
                              <td className="py-2 px-3">{row.meaning} · {row.chinese}</td>
                              <td className="py-2 px-3 text-xs text-muted-foreground">{row.situation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {resource.pronunciation && (
                  <div className="mb-4 p-4 rounded-xl bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 className="h-4 w-4 text-teal-700 dark:text-teal-300" />
                      <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">Pronunciation</p>
                    </div>
                    <p className="text-sm font-medium mb-1">{resource.pronunciation.phonetic}</p>
                    <p className="text-xs text-muted-foreground mb-2">{resource.pronunciation.tip}</p>
                    <p className="text-xs text-muted-foreground mb-3">{resource.pronunciation.tipZh}</p>
                    {resource.pronunciation.audioText && (
                      <Button variant="outline" size="sm" className="gap-2" onClick={() => speakEnglish(resource.pronunciation!.audioText || "")}>
                        <Volume2 className="h-3.5 w-3.5" />
                        Listen
                      </Button>
                    )}
                  </div>
                )}

                {resource.audioText && !resource.pronunciation && (
                  <div className="mb-4">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => speakEnglish(resource.audioText || "")}>
                      <Volume2 className="h-3.5 w-3.5" />
                      Listen
                    </Button>
                  </div>
                )}
              </div>

              {!selectedDrill && (
                <div className="text-center">
                  <Button onClick={startDrills} className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Start Drills
                  </Button>
                </div>
              )}

              {selectedDrill && (
                <div className="mt-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium">Drill Progress</p>
                      <p className="text-xs text-muted-foreground">{totalDrills + 1} / {resource.miniDrills.length}</p>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <Card className="p-5 sm:p-6 border-indigo-200 dark:border-indigo-800 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-4 w-4 text-indigo-500" />
                      <p className="text-sm font-semibold">{selectedDrill.question}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{selectedDrill.questionZh}</p>

                    {selectedDrill.type === "listen" && selectedDrill.audioText && (
                      <Button variant="outline" size="sm" className="mb-4 gap-2" onClick={() => speakEnglish(selectedDrill.audioText || "")}>
                        <Volume2 className="h-3.5 w-3.5" />
                        Play Audio
                      </Button>
                    )}

                    {selectedDrill.type === "speak" && (
                      <div className="mb-4">
                        <Button variant="default" className="gap-2" onClick={() => speakEnglish(selectedDrill.audioText || selectedDrill.question)}>
                          <Volume2 className="h-3.5 w-3.5" />
                          Practice Speaking
                        </Button>
                      </div>
                    )}

                    {selectedDrill.options && (
                      <div className="space-y-2">
                        {selectedDrill.options.map((option, idx) => (
                          <Button
                            key={idx}
                            variant={drillAnswer === option.text ? (option.isCorrect ? "default" : "destructive") : "outline"}
                            className="w-full justify-start text-left h-auto py-2 min-w-0"
                            onClick={() => !drillAnswer && handleDrillAnswer(selectedDrill, option.text)}
                            disabled={!!drillAnswer}
                          >
                            <span className="text-sm break-words">{option.text}</span>
                            <span className="text-xs text-muted-foreground ml-2 break-words hidden sm:inline">{option.textZh}</span>
                          </Button>
                        ))}
                      </div>
                    )}

                    {selectedDrill.type === "fill-blank" && (
                      <div className="flex gap-2">
                        <Input
                          value={drillAnswer}
                          onChange={(e) => setDrillAnswer(e.target.value)}
                          placeholder={selectedDrill.blank}
                          className="flex-1"
                        />
                        <Button onClick={() => handleDrillAnswer(selectedDrill, drillAnswer)} disabled={!drillAnswer}>
                          Check
                        </Button>
                      </div>
                    )}

                    {selectedDrill.type === "rewrite" && (
                      <div className="flex flex-col gap-2">
                        <Input
                          value={drillAnswer}
                          onChange={(e) => setDrillAnswer(e.target.value)}
                          placeholder="Type your answer..."
                          className="flex-1"
                        />
                        <Button onClick={() => handleDrillAnswer(selectedDrill, drillAnswer)} disabled={!drillAnswer}>
                          Check
                        </Button>
                      </div>
                    )}

                    {drillFeedback && (
                      <div className={`mt-4 p-3 rounded-lg ${drillFeedback.text.startsWith("✅") ? "bg-green-50 dark:bg-green-950/20 border border-green-200" : "bg-red-50 dark:bg-red-950/20 border border-red-200"}`}>
                        <p className="text-sm font-medium">{drillFeedback.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{drillFeedback.zh}</p>
                      </div>
                    )}

                    {drillAnswer && (
                      <div className="mt-4 text-center">
                        <Button onClick={nextDrill} className="gap-2">
                          {totalDrills + 1 < resource.miniDrills.length ? "Next Drill" : "Finish"}
                        </Button>
                      </div>
                    )}
                  </Card>
                </div>
              )}

              {!selectedDrill && totalDrills === 0 && (
                <div className="mt-6 text-center">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => setShowRescue(!showRescue)}>
                      <HelpCircle className="h-3.5 w-3.5" />
                      Survival Rescue
                    </Button>
                  </div>
                </div>
              )}

              <AnimatePresence>
                {showRescue && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                    <p className="text-sm font-semibold mb-2">🛟 Conversation Rescue</p>
                    <div className="flex flex-wrap gap-2">
                      {["Sorry, I didn't catch that.", "Could you say that again?", "Could you speak more slowly?", "What do you mean?"].map((phrase) => (
                        <Button key={phrase} variant="secondary" size="sm" className="gap-2" onClick={() => speakEnglish(phrase)}>
                          <Volume2 className="h-3.5 w-3.5" />
                          {phrase}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
