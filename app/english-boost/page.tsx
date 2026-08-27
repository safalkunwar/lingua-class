"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { englishBoostChapters } from "@/data/english-boost";
import {
  ArrowLeft,
  Volume2,
  Trophy,
  Zap,
  Flame,
  Star,
  MessageSquare,
  Mic,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  RotateCcw,
  Clock,
} from "lucide-react";

type GameState = "menu" | "playing" | "won";

export default function EnglishBoostPage() {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState("");
  const [gameState, setGameState] = useState<GameState>("menu");
  const [xpEarned, setXpEarned] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [unlockedPhrases, setUnlockedPhrases] = useState<string[]>([]);
  const [lastFeedback, setLastFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [showStealPhrase, setShowStealPhrase] = useState(false);
  const [chaosTriggered, setChaosTriggered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timeoutTriggered, setTimeoutTriggered] = useState(false);
  const [fastAnswerCount, setFastAnswerCount] = useState(0);

  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const chapter = englishBoostChapters.find((c) => c.id === selectedChapterId) || null;
  const scene = chapter?.scenes.find((s) => s.id === currentSceneId) || null;

  const totalScenes = chapter?.scenes.length || 0;
  const currentIndex = chapter?.scenes.findIndex((s) => s.id === currentSceneId) ?? -1;
  const progress = totalScenes > 0 ? Math.max(0, Math.min(100, ((currentIndex + 1) / totalScenes) * 100)) : 0;

  const stopTimer = useCallback(() => {
    setTimerActive(false);
  }, []);

  useEffect(() => {
    if (!timerActive || timeLeft <= 0) {
      if (timerActive && timeLeft <= 0) {
        setTimeoutTriggered(true);
      }
      stopTimer();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timerActive, timeLeft, stopTimer]);

  useEffect(() => {
    if (timeoutTriggered && scene && scene.choices.length > 0 && gameState === "playing") {
      const fallback = scene.choices[0];
      handleChoice(fallback, true);
      setTimeoutTriggered(false);
    }
  }, [timeoutTriggered, scene, gameState]);

  useEffect(() => {
    if (scene && scene.timeLimit && gameState === "playing") {
      setTimeLeft(scene.timeLimit);
      setTimerActive(true);
      setLastFeedback(null);
      setShowStealPhrase(false);
      setChaosTriggered(false);
    }
  }, [currentSceneId, gameState, scene]);

  const startChapter = (chapterId: string) => {
    const chapterData = englishBoostChapters.find((c) => c.id === chapterId);
    if (!chapterData) return;
    setSelectedChapterId(chapterId);
    setCurrentSceneId(chapterData.scenes[0].id);
    setGameState("playing");
    setXpEarned(0);
    setHistory([chapterData.scenes[0].id]);
    setUnlockedPhrases([]);
    setLastFeedback(null);
    setShowStealPhrase(false);
    setChaosTriggered(false);
    setTimeoutTriggered(false);
    setFastAnswerCount(0);
  };

  const handleChoice = (choice: { nextScene: string; xp: number; feedback?: string; feedbackZh?: string }, isTimeout = false) => {
    if (!chapter) return;

    const nextSceneData = chapter.scenes.find((s) => s.id === choice.nextScene);
    const isEnding = !choice.nextScene || choice.nextScene === "" || !nextSceneData;

    const remaining = scene?.timeLimit ? timeLeft : 0;
    const timeBonus = remaining > 0 ? Math.min(remaining, 10) : 0;
    const awardedXp = isTimeout ? Math.max(1, choice.xp - 3) : choice.xp + timeBonus;

    setXpEarned((prev) => prev + awardedXp);
    if (timeBonus > 0 && !isTimeout) {
      setFastAnswerCount((prev) => prev + 1);
    }

    setLastFeedback(
      isTimeout
        ? { text: "⏰ Time's up! Auto-selected the first option.", zh: "⏰ 时间到！已自动选择第一个选项。" }
        : choice.feedback
          ? { text: choice.feedback, zh: choice.feedbackZh || "" }
          : null
    );

    if (nextSceneData?.stealPhrase && !unlockedPhrases.includes(nextSceneData.stealPhrase.phrase)) {
      setUnlockedPhrases((prev) => [...prev, nextSceneData.stealPhrase!.phrase]);
      setShowStealPhrase(true);
    }

    if (nextSceneData?.chaosEvent && !chaosTriggered) {
      setChaosTriggered(true);
    }

    stopTimer();

    if (isEnding) {
      addXp(chapter.xpReward + xpEarned);
      incrementStreak();
      incrementWeeklyProgress();
      updateLevelProgress(chapter.id, {
        cardsReviewed: chapter.scenes.length,
        completed: true,
      });
      setGameState("won");
    } else {
      setCurrentSceneId(choice.nextScene);
      setHistory((prev) => [...prev, choice.nextScene]);
      setShowStealPhrase(false);
    }
  };

  const resetChapter = () => {
    if (!chapter) return;
    setCurrentSceneId(chapter.scenes[0].id);
    setGameState("playing");
    setXpEarned(0);
    setHistory([chapter.scenes[0].id]);
    setUnlockedPhrases([]);
    setLastFeedback(null);
    setShowStealPhrase(false);
    setChaosTriggered(false);
    setTimeoutTriggered(false);
    setFastAnswerCount(0);
  };

  const backToMenu = () => {
    setGameState("menu");
    setSelectedChapterId(null);
    setCurrentSceneId("");
    setXpEarned(0);
    setHistory([]);
    setUnlockedPhrases([]);
    setLastFeedback(null);
    setShowStealPhrase(false);
    setChaosTriggered(false);
    stopTimer();
    setTimeLeft(0);
    setTimeoutTriggered(false);
    setFastAnswerCount(0);
  };

  const speakScene = () => {
    if (!scene) return;
    const textToSpeak = [scene.dialogue, scene.narration].filter(Boolean).join(". ");
    if (textToSpeak) speakEnglish(textToSpeak);
  };

  const speakChoice = (text: string) => {
    speakEnglish(text);
  };

  const earnedPhrases = useMemo(() => {
    if (!chapter) return [];
    return chapter.scenes
      .filter((s) => s.stealPhrase && unlockedPhrases.includes(s.stealPhrase.phrase))
      .map((s) => s.stealPhrase!);
  }, [chapter, unlockedPhrases]);

  if (gameState === "menu") {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight">🎮 English Quest</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Learn English. Survive awkward situations. Become dangerously fluent. 😂
            </p>
            <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
              学英语，解决尴尬场景，慢慢变得“超会说”。😂
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
          >
            {englishBoostChapters.map((chapter, idx) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="h-full cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 border-2 hover:border-indigo-300 dark:hover:border-indigo-700 group">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl group-hover:scale-110 transition-transform">{chapter.emoji}</span>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{chapter.title}</h3>
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
                      <Badge variant="outline" className="text-xs capitalize">
                        {chapter.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {chapter.theme}
                      </Badge>
                    </div>
                    <Button className="w-full mt-4 gap-2" onClick={() => startChapter(chapter.id)}>
                      <Zap className="h-4 w-4" />
                      Start Mission
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  if (!chapter || !scene) return null;

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" onClick={backToMenu}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Quests
            </Button>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="gap-1">
                <Zap className="h-3 w-3" />
                {xpEarned} XP
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Flame className="h-3 w-3" />
                {chapter.emoji} {chapter.title}
              </Badge>
            </div>
          </div>

          <Progress value={progress} className="mb-4 h-2" />

          {scene?.timeLimit && gameState === "playing" && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4" />
                  <span>Time Left</span>
                </div>
                <span className={`text-sm font-bold ${timeLeft <= 5 ? "text-red-600 dark:text-red-400" : "text-foreground"}`}>
                  {timeLeft}s
                </span>
              </div>
              <Progress
                value={scene.timeLimit ? (timeLeft / scene.timeLimit) * 100 : 100}
                className={`h-2 ${timeLeft <= 5 ? "text-red-500" : "text-indigo-500"}`}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSceneId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <Card className="p-6 sm:p-8 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{chapter.emoji}</span>
                  <div>
                    <h2 className="text-lg font-bold">{chapter.title}</h2>
                    <p className="text-xs text-muted-foreground">{chapter.titleZh}</p>
                  </div>
                </div>

                {scene.narration && (
                  <p className="text-sm sm:text-base text-foreground/90 mb-4">{scene.narration}</p>
                )}

                {scene.chaosEvent && (
                  <div className="mb-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                      <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{scene.chaosEvent}</p>
                    </div>
                  </div>
                )}

                {scene.translationTrap && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-red-700 dark:text-red-300" />
                      <p className="text-sm font-semibold text-red-900 dark:text-red-100">Translation Trap</p>
                    </div>
                    <p className="text-sm line-through text-red-700/80 dark:text-red-300/80 mb-1">❌ {scene.translationTrap.literal}</p>
                    <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">✅ {scene.translationTrap.natural}</p>
                    <p className="text-xs text-muted-foreground">{scene.translationTrap.explanation}</p>
                  </div>
                )}

                {scene.stealPhrase && showStealPhrase && (
                  <div className="mb-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
                      <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">💎 Steal This Phrase</p>
                    </div>
                    <p className="text-sm font-medium">{scene.stealPhrase.phrase}</p>
                    <p className="text-xs text-muted-foreground mb-1">{scene.stealPhrase.chinese}</p>
                    <p className="text-xs text-muted-foreground">Situation: {scene.stealPhrase.situation}</p>
                    <Badge variant="outline" className="text-xs mt-2 capitalize">{scene.stealPhrase.formality}</Badge>
                  </div>
                )}

                {scene.dialogue && (
                  <div className="mb-4 p-4 rounded-xl bg-white/70 dark:bg-black/20 border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{scene.characterEmoji}</span>
                      <p className="text-sm font-semibold">{scene.character}</p>
                    </div>
                    <p className="text-base font-medium">{scene.dialogue}</p>
                    <p className="text-xs text-muted-foreground">{scene.dialogueZh}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 gap-2"
                      onClick={() => speakEnglish(scene.dialogue || "")}
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      Listen
                    </Button>
                  </div>
                )}
              </Card>

              <div className="space-y-3">
                {scene.choices.map((choice) => (
                  <motion.div key={choice.id} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Card className="p-4 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-left h-auto py-2"
                        onClick={() => handleChoice(choice)}
                      >
                        <span className="text-sm sm:text-base">{choice.text}</span>
                        <span className="text-xs text-muted-foreground ml-2">{choice.textZh}</span>
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {lastFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800"
                  >
                    <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">{lastFeedback.text}</p>
                    {lastFeedback.zh && <p className="text-xs text-muted-foreground mt-1">{lastFeedback.zh}</p>}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {gameState === "won" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center space-y-4"
            >
              <Card className="p-6 sm:p-8 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-2xl font-bold mb-2">MISSION COMPLETE</h3>
                <p className="text-sm text-muted-foreground mb-4">You survived {chapter.title}!</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">+{chapter.xpReward + xpEarned}</div>
                    <div className="text-xs text-muted-foreground">Total XP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-extrabold">{chapter.scenes.length}</div>
                    <div className="text-xs text-muted-foreground">Scenes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-extrabold">{unlockedPhrases.length}</div>
                    <div className="text-xs text-muted-foreground">Phrases Stolen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-extrabold">{fastAnswerCount}</div>
                    <div className="text-xs text-muted-foreground">Fast Answers</div>
                  </div>
                </div>

                {earnedPhrases.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-2">💎 Phrases You Can Steal Today</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {earnedPhrases.map((phrase) => (
                        <Badge key={phrase.phrase} variant="secondary" className="text-xs">
                          {phrase.phrase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={resetChapter} variant="outline" className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Play Again
                  </Button>
                  <Button onClick={backToMenu} className="gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Next Mission
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {gameState !== "won" && (
            <div className="mt-6 text-center">
              <Button variant="ghost" onClick={backToMenu}>
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Quests
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
