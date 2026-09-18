"use client";

import { useState, useMemo, useCallback } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { EnglishBoostChapter, Scene, Choice } from "@/types/english-boost";
import { englishBoostChapters } from "@/data/english-boost";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Zap, Lightbulb, AlertTriangle, Sparkles, BookOpen, RotateCcw, HelpCircle, Download, Printer, Laugh, Code, Target, ChevronDown, ChevronUp, Flame, Heart } from "lucide-react";
import Link from "next/link";
import { use } from "react";

function MeaningCardComponent({ card }: { card: any }) {
  const colorMap = {
    blue: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20",
    green: "border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20",
    yellow: "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20",
    purple: "border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20",
    red: "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20",
    teal: "border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/20",
  };
  const textColorMap = {
    blue: "text-blue-900 dark:text-blue-100",
    green: "text-emerald-900 dark:text-emerald-100",
    yellow: "text-amber-900 dark:text-amber-100",
    purple: "text-purple-900 dark:text-purple-100",
    red: "text-red-900 dark:text-red-100",
    teal: "text-teal-900 dark:text-teal-100",
  };

  return (
    <Card className={`p-4 border ${colorMap[card.color || "blue"]}`}>
      <h3 className={`text-sm font-semibold mb-1 ${textColorMap[card.color || "blue"]}`}>
        {card.title} <span className="text-xs text-muted-foreground ml-1">{card.titleZh}</span>
      </h3>
      <p className="text-xs text-muted-foreground mb-2">{card.meaningZh}</p>
      <div className="p-2 rounded bg-white/70 dark:bg-black/20 border border-border mb-2">
        <p className="text-sm font-medium">{card.example}</p>
        <p className="text-xs text-muted-foreground">{card.exampleZh}</p>
      </div>
      {card.situation && (
        <p className="text-xs text-muted-foreground italic">💡 {card.situation}</p>
      )}
    </Card>
  );
}

function ExampleGrid({ examples, title, titleZh }: { examples: { en: string; zh: string; explanation?: string }[]; title?: string; titleZh?: string }) {
  return (
    <div className="space-y-2">
      {(title || titleZh) && (
        <p className="text-xs font-semibold text-muted-foreground mb-2">
          {title} {titleZh && <span className="ml-1">{titleZh}</span>}
        </p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {examples.map((ex, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-muted/30 border border-border">
            <p className="text-sm font-medium">{ex.en}</p>
            <p className="text-xs text-muted-foreground">{ex.zh}</p>
            {ex.explanation && (
              <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1 italic">{ex.explanation}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CollapsibleSection({ title, titleZh, children, defaultOpen = false }: { title: string; titleZh?: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-muted/30 hover:bg-muted/50 transition-colors"
      >
        <span className="text-sm font-semibold">
          {title} {titleZh && <span className="text-xs text-muted-foreground ml-1 font-normal">{titleZh}</span>}
        </span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isOpen && (
        <div className="p-3 bg-white/50 dark:bg-black/20">
          {children}
        </div>
      )}
    </div>
  );
}

export default function EnglishBoostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const chapter = englishBoostChapters.find((c) => c.id === resolvedParams.id) || null;
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);
  const [sceneAnswer, setSceneAnswer] = useState<string>("");
  const [matchSelections, setMatchSelections] = useState<string[]>([]);
  const [sceneFeedback, setSceneFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [score, setScore] = useState(0);
  const [totalScenes, setTotalScenes] = useState(0);
  const [showRescue, setShowRescue] = useState(false);
  const [sceneMode, setSceneMode] = useState<"practice" | "review">("practice");

  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const downloadPrintable = useCallback(() => {
    if (!chapter) return;
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${chapter.title} - English Boost</title>
<style>
  @page { size: A4; margin: 2cm; }
  body { font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #111; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; }
  h1 { font-size: 26px; margin-bottom: 4px; }
  h2 { font-size: 18px; margin-top: 28px; margin-bottom: 10px; color: #1f2937; }
  .meta { color: #555; font-size: 13px; margin-bottom: 18px; }
  .badge { display: inline-block; padding: 3px 10px; border-radius: 999px; background: #eef2ff; color: #1e3a8a; font-size: 12px; margin-right: 6px; margin-bottom: 6px; }
  .section { margin-top: 22px; padding: 14px; border-radius: 10px; background: #f8fafc; border: 1px solid #e5e7eb; }
  .example { padding: 12px; border-radius: 8px; background: #ffffff; border: 1px solid #e5e7eb; margin-bottom: 10px; }
  .en { font-size: 15px; font-weight: 600; color: #0f172a; }
  .zh { font-size: 13px; color: #475569; margin-top: 4px; }
  .explanation { font-size: 13px; color: #1e40af; background: #eef2ff; padding: 10px; border-radius: 8px; margin-top: 8px; border-left: 3px solid #1e40af; }
  .mistake { text-decoration: line-through; color: #b91c1c; font-size: 14px; }
  .correction { color: #047857; font-size: 14px; }
  .chunk { display: inline-block; padding: 6px 10px; border-radius: 8px; background: #ecfdf5; color: #064e3b; font-size: 13px; margin: 4px 6px 4px 0; }
  table { width: 100%; border-collapse: collapse; margin-top: 8px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #e5e7eb; font-size: 13px; }
  th { background: #f1f5f9; color: #334155; }
  .footer { margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; }
</style>
</head>
<body>
  <h1>${chapter.title}</h1>
  <div class="meta">${chapter.titleZh} · ${chapter.difficulty} · ${chapter.theme}</div>
  <div>
    <span class="badge">${chapter.difficulty}</span>
    <span class="badge">${chapter.xpReward} XP</span>
    <span class="badge">${chapter.theme}</span>
  </div>

  <div class="section">
    <h2>Description</h2>
    <p>${chapter.description}</p>
    <p style="color:#475569">${chapter.descriptionZh}</p>
  </div>

  <h2>Scenes</h2>
  ${chapter.scenes.map((scene, idx) => `<div class="example">
    <div class="en"><strong>${idx + 1}. ${scene.narration}</strong></div>
    <div class="zh">${scene.narrationZh}</div>
    ${scene.dialogue ? `<div><strong>${scene.character || "Character"}:</strong> ${scene.dialogue} - ${scene.dialogueZh}</div>` : ''}
    ${scene.choices ? `<div><strong>Choices:</strong><ul>${scene.choices.map(c => `<li>${c.text} - ${c.textZh}</li>`).join('')}</ul></div>` : ''}
  </div>`).join('')}

  <div class="footer">Generated from English Boost · ${new Date().toLocaleDateString()}</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${chapter.id}-${chapter.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [chapter]);

  const downloadScenarios = useCallback(() => {
    if (!chapter) return;
    const text = chapter.scenes.map((scene, idx) => {
      let content = `${idx + 1}. ${scene.narration}\n   ${scene.narrationZh}\n`;
      if (scene.dialogue) {
        content += `   ${scene.character}: ${scene.dialogue} - ${scene.dialogueZh}\n`;
      }
      if (scene.choices) {
        content += "   Choices:\n" + scene.choices.map(c => `     - ${c.text} (${c.textZh})`).join("\n") + "\n";
      }
      return content;
    }).join("\n\n");

    const blob = new Blob([`${chapter.title} - English Boost Scenarios\n${chapter.titleZh}\n\n${text}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${chapter.id}-scenarios.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [chapter]);

  const printPage = useCallback(() => {
    window.print();
  }, []);

  if (!chapter || !selectedScene) {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Chapter not found</h1>
            <Link href="/english-boost">
              <Button>Back to English Boost</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const progress = selectedScene ? ((totalScenes + 1) / chapter.scenes.length) * 100 : 0;

  const handleSceneAnswer = (scene: Scene, answer: string) => {
    setSceneAnswer(answer);
    setTotalScenes((prev) => prev + 1);

    let isCorrect = false;
    if (scene.type === "choose") {
      const correctChoice = scene.choices?.find((c) => c.isCorrect && c.text === answer);
      isCorrect = !!correctChoice;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setSceneFeedback({ text: "✅ Correct!", zh: "✅ 正确！" });
    } else {
      const correctChoice = scene.choices?.find((c) => c.isCorrect);
      setSceneFeedback({ text: `❌ Not quite. ${correctChoice?.text || ""}`, zh: `❌ 不完全对。${correctChoice?.text || ""}` });
    }
  };

  const nextScene = () => {
    const currentIndex = chapter.scenes.findIndex((s) => s === selectedScene);
    if (currentIndex < chapter.scenes.length - 1) {
      setSelectedScene(chapter.scenes[currentIndex + 1]);
      setSceneAnswer("");
      setMatchSelections([]);
      setSceneFeedback(null);
    } else {
      addXp(chapter.xpReward + score * 5);
      incrementStreak();
      incrementWeeklyProgress();
      updateLevelProgress(chapter.id, {
        cardsReviewed: chapter.scenes.length,
        completed: true,
      });
      setSelectedScene(null);
      setSceneFeedback(null);
    }
  };

  const startScenes = () => {
    setSelectedScene(chapter.scenes[0]);
    setScore(0);
    setTotalScenes(0);
    setSceneAnswer("");
    setMatchSelections([]);
    setSceneFeedback(null);
  };

  const speakScene = () => {
    if (!selectedScene) return;
    const textToSpeak = [selectedScene.dialogue, selectedScene.narration].filter(Boolean).join(". ");
    if (textToSpeak) speakEnglish(textToSpeak);
  };

  return (
    <div className="flex min-w-0">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto min-w-0 space-y-4">
          <div className="mb-4 flex items-center gap-2">
            <Link href="/english-boost">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Boost Academy
              </Button>
            </Link>
            <div className="flex-1" />
            <Button variant="outline" size="sm" onClick={printPage} className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button variant="default" size="sm" onClick={downloadPrintable} className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="p-5 sm:p-6 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl sm:text-4xl">{chapter.emoji}</span>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">{chapter.title}</h1>
                  <p className="text-xs text-muted-foreground">{chapter.titleZh}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{chapter.description}</p>
              <p className="text-xs text-muted-foreground mb-4">{chapter.descriptionZh}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Flame className="h-3 w-3 mr-1" />
                  {chapter.xpReward} XP
                </Badge>
                <Badge variant="outline" className="text-xs capitalize">{chapter.difficulty}</Badge>
                <Badge variant="outline" className="text-xs">{chapter.theme}</Badge>
              </div>
            </Card>
          </motion.div>

          {!selectedScene && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="p-5 sm:p-6">
                <div className="text-center space-y-4">
                  <h2 className="text-lg font-semibold">Ready to play this mission?</h2>
                  <p className="text-sm text-muted-foreground">Navigate through {chapter.scenes.length} scenes and survive the English challenges!</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="gap-1">
                      <Zap className="h-3 w-3" />
                      {chapter.scenes.length} Scenes
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Heart className="h-3 w-3" />
                      Theme: {chapter.theme}
                    </Badge>
                  </div>
                  <Button onClick={startScenes} className="gap-2">
                    <Target className="h-4 w-4" />
                    Start Mission
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {selectedScene && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="p-5 sm:p-6 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl sm:text-2xl">{chapter.emoji}</span>
                  <div>
                    <h2 className="text-lg font-bold">Scene {chapter.scenes.findIndex((s) => s === selectedScene) + 1} of {chapter.scenes.length}</h2>
                    <p className="text-xs text-muted-foreground">Progress: {Math.round(progress)}%</p>
                  </div>
                </div>

                <Progress value={progress} className="mb-4 h-2" />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Narrative</h3>
                    <p className="text-sm">{selectedScene.narration}</p>
                    <p className="text-xs text-muted-foreground">{selectedScene.narrationZh}</p>
                  </div>

                  {selectedScene.dialogue && (
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Dialogue</h3>
                      <div className="p-3 rounded-lg bg-white/70 dark:bg-black/20 border border-border">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{selectedScene.characterEmoji}</span>
                          <p className="text-sm font-semibold">{selectedScene.character}</p>
                        </div>
                        <p className="text-base font-medium">{selectedScene.dialogue}</p>
                        <p className="text-xs text-muted-foreground">{selectedScene.dialogueZh}</p>
                        <Button variant="ghost" size="sm" className="mt-2 gap-2" onClick={() => speakEnglish(selectedScene.dialogue || "")}>
                          <Volume2 className="h-3.5 w-3.5" />
                          Listen
                        </Button>
                      </div>
                    </div>
                  )}

                  {selectedScene.chaosEvent && (
                    <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                        <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">Chaos Event</p>
                      </div>
                      <p className="text-sm">{selectedScene.chaosEvent}</p>
                    </div>
                  )}

                  {selectedScene.translationTrap && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-red-700 dark:text-red-300" />
                        <p className="text-sm font-semibold text-red-900 dark:text-red-100">Translation Trap</p>
                      </div>
                      <p className="text-sm line-through text-red-700/80 dark:text-red-300/80 mb-1">❌ {selectedScene.translationTrap.literal}</p>
                      <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">✅ {selectedScene.translationTrap.natural}</p>
                      <p className="text-xs text-muted-foreground">{selectedScene.translationTrap.explanation}</p>
                    </div>
                  )}

                  {selectedScene.stealPhrase && (
                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                        <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">💎 Steal This Phrase</p>
                      </div>
                      <p className="text-sm font-medium">{selectedScene.stealPhrase.phrase}</p>
                      <p className="text-xs text-muted-foreground mb-1">{selectedScene.stealPhrase.chinese}</p>
                      <p className="text-xs text-muted-foreground">Situation: {selectedScene.stealPhrase.situation}</p>
                      <Badge variant="outline" className="text-xs mt-2 capitalize">{selectedScene.stealPhrase.formality}</Badge>
                    </div>
                  )}

                  {selectedScene.choices && selectedScene.choices.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold mb-3">Choose Your Response</h3>
                      <div className="space-y-2">
                        {selectedScene.choices.map((choice) => (
                          <motion.div key={choice.id} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                            <Card className="p-3 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                              <Button
                                variant="ghost"
                                className="w-full justify-between text-left h-auto py-2"
                                onClick={() => handleSceneAnswer(selectedScene, choice.text)}
                                disabled={!!sceneFeedback}
                              >
                                <span className="text-sm">{choice.text}</span>
                                <span className="text-xs text-muted-foreground ml-2">{choice.textZh}</span>
                              </Button>
                              <p className="text-xs text-muted-foreground mt-1">{choice.feedback || ""}</p>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  <AnimatePresence>
                    {sceneFeedback && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`p-4 rounded-xl text-sm ${sceneFeedback.text.startsWith("✅")
                          ? "bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-200"
                          : "bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-200"
                        }`}
                      >
                        <p>{sceneFeedback.text}</p>
                        <p className="text-xs mt-1">{sceneFeedback.zh}</p>
                        <Button onClick={nextScene} size="sm" className="mt-2">
                          {chapter.scenes.findIndex((s) => s === selectedScene) < chapter.scenes.length - 1 ? "Next Scene" : "Finish"}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between items-center pt-4">
                    <div className="text-xs text-muted-foreground">
                      Score: {score}/{chapter.scenes.length}
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setShowRescue(!showRescue)} className="gap-2">
                      <HelpCircle className="h-3.5 w-3.5" />
                      Need Help
                    </Button>
                  </div>

                  <AnimatePresence>
                    {showRescue && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800"
                      >
                        <p className="text-sm font-semibold mb-2">🛟 Conversation Rescue</p>
                        <div className="flex flex-wrap gap-2">
                          {chapter.scenes.map((scene) => (
                            scene.dialogue && (
                              <Button key={scene.id} variant="secondary" size="sm" className="gap-2" onClick={() => speakEnglish(scene.dialogue || "")}>
                                <Volume2 className="h-3.5 w-3.5" />
                                {scene.dialogue}
                              </Button>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          )}

          {selectedScene === null && chapter && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setSelectedScene(chapter.scenes[0])} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Replay
                  </Button>
                  <Button variant="outline" onClick={downloadScenarios} className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Scenarios
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
