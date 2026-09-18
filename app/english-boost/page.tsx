"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { englishBoostChapters } from "@/data/english-boost";
import { englishDecoderCases } from "@/data/english-decoder";
import { survivalCategories, survivalResources } from "@/data/english-survival-library";
import { SurvivalResource } from "@/types/english-survival-library";
import Link from "next/link";

import {
  ArrowLeft,
  Volume2,
  Zap,
  Flame,
  Heart,
  RotateCcw,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Clock,
  Shield,
  Search,
  BookOpen,
  HelpCircle,
  Target,
  Trophy,
  MessageCircle,
} from "lucide-react";

type Tab = "boost" | "decoder" | "library";
type MenuState = "menu" | "playing" | "won";
type DecoderMenuState = "menu" | "playing" | "won";

const tabs: { key: Tab; label: string; emoji: string; description: string }[] = [
  { key: "boost", label: "English Boost", emoji: "🚀", description: "Learn English. Survive awkward situations. Become dangerously fluent." },
  { key: "decoder", label: "English Decoder", emoji: "🧩", description: "Understand what's happening before you worry about what to say." },
  { key: "library", label: "Survival Library", emoji: "📚", description: "Reference, examples, and quick drills for tricky English." },
];

export default function EnglishBoostConsolidatedPage() {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <EnglishAcademyContent />
      </div>
    </div>
  );
}

function EnglishAcademyContent() {
  const [activeTab, setActiveTab] = useState<Tab>("boost");
  const { speakEnglish, speakChinese } = useSpeechSynthesis();
  const { updateLevelProgress, addXp, incrementStreak, incrementWeeklyProgress } = useLearningStore();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">🎓 English Academy</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Master English through interactive quests, phrase decoding, and a survival reference library.
        </p>
        <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
          英语academy — 交互任务、短语解码和生存参考库。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mb-6 flex flex-wrap justify-center gap-2"
      >
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            variant={activeTab === tab.key ? "default" : "outline"}
            size="sm"
            className="gap-2"
          >
            <span>{tab.emoji}</span>
            {tab.label}
          </Button>
        ))}
      </motion.div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "boost" && <BoostSection speakEnglish={speakEnglish} />}
        {activeTab === "decoder" && <DecoderSection speakEnglish={speakEnglish} />}
        {activeTab === "library" && <LibrarySection speakEnglish={speakEnglish} />}
      </motion.div>
    </>
  );
}

function BoostSection({ speakEnglish }: { speakEnglish: (text: string) => void }) {
  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();

  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState("");
  const [gameState, setGameState] = useState<MenuState>("menu");
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

  const earnedPhrases = useMemo(() => {
    if (!chapter) return [];
    return chapter.scenes
      .filter((s) => s.stealPhrase && unlockedPhrases.includes(s.stealPhrase.phrase))
      .map((s) => s.stealPhrase!);
  }, [chapter, unlockedPhrases]);

  if (gameState === "menu") {
    return (
      <div>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">🚀 English Boost</h2>
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
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {englishBoostChapters.map((chapter, idx) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 border-2 hover:border-indigo-300 dark:hover:border-indigo-700 group">
                <div className="p-5 sm:p-6">
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
                    <Badge variant="outline" className="text-xs capitalize">{chapter.difficulty}</Badge>
                    <Badge variant="outline" className="text-xs">{chapter.theme}</Badge>
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
    );
  }

  if (!chapter || !scene) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
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

      <Progress value={progress} className="mb-3 sm:mb-4 h-2" />

      {scene?.timeLimit && gameState === "playing" && (
        <div className="mb-4 sm:mb-6">
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
          className="space-y-4 sm:space-y-6 min-w-0"
        >
          <Card className="p-5 sm:p-6 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20">
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
              <div className="mb-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{scene.chaosEvent}</p>
                </div>
              </div>
            )}

            {scene.translationTrap && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 min-w-0">
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
              <div className="mb-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 min-w-0">
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
              <div className="mb-4 p-4 rounded-xl bg-white/70 dark:bg-black/20 border border-border min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{scene.characterEmoji}</span>
                  <p className="text-sm font-semibold">{scene.character}</p>
                </div>
                <p className="text-base font-medium">{scene.dialogue}</p>
                <p className="text-xs text-muted-foreground">{scene.dialogueZh}</p>
                <Button variant="ghost" size="sm" className="mt-2 gap-2" onClick={() => speakEnglish(scene.dialogue || "")}>
                  <Volume2 className="h-3.5 w-3.5" />
                  Listen
                </Button>
              </div>
            )}
          </Card>

          <div className="space-y-3 min-w-0">
            {scene.choices.map((choice) => (
              <motion.div key={choice.id} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="min-w-0">
                <Card className="p-3 sm:p-4 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors min-w-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-left h-auto py-2 min-w-0"
                    onClick={() => handleChoice(choice)}
                  >
                    <span className="text-sm sm:text-base break-words text-left">{choice.text}</span>
                    <span className="text-xs text-muted-foreground ml-2 break-words text-right hidden sm:inline">{choice.textZh}</span>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1 sm:hidden break-words">{choice.textZh}</p>
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
                className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 min-w-0"
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
          className="mt-6 sm:mt-8 text-center space-y-4 min-w-0"
        >
          <Card className="p-5 sm:p-6 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 min-w-0">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-2xl font-bold mb-2">MISSION COMPLETE</h3>
            <p className="text-sm text-muted-foreground mb-4">You survived {chapter.title}!</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
                    <Badge key={phrase.phrase} variant="secondary" className="text-xs">{phrase.phrase}</Badge>
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
        <div className="mt-4 sm:mt-6 text-center">
          <Button variant="ghost" onClick={backToMenu}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Quests
          </Button>
        </div>
      )}
    </div>
  );
}

function DecoderSection({ speakEnglish }: { speakEnglish: (text: string) => void }) {
  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();

  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [currentStepId, setCurrentStepId] = useState("");
  const [gameState, setGameState] = useState<DecoderMenuState>("menu");
  const [xpEarned, setXpEarned] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [showRescue, setShowRescue] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timeoutTriggered, setTimeoutTriggered] = useState(false);

  const selectedCase = englishDecoderCases.find((c) => c.id === selectedCaseId) || null;
  const currentStep = selectedCase?.steps.find((s) => s.id === currentStepId) || null;

  const totalSteps = selectedCase?.steps.length || 0;
  const currentIndex = selectedCase?.steps.findIndex((s) => s.id === currentStepId) ?? -1;
  const progress = totalSteps > 0 ? Math.max(0, Math.min(100, ((currentIndex + 1) / totalSteps) * 100)) : 0;

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
    if (timeoutTriggered && currentStep && currentStep.choices && currentStep.choices.length > 0 && gameState === "playing") {
      const fallback = currentStep.choices[0];
      handleChoice(fallback, true);
      setTimeoutTriggered(false);
    }
  }, [timeoutTriggered, currentStep, gameState]);

  useEffect(() => {
    if (currentStep && currentStep.audioText && gameState === "playing") {
      speakEnglish(currentStep.audioText);
    }
  }, [currentStepId, gameState]);

  const startCase = (caseId: string) => {
    const caseData = englishDecoderCases.find((c) => c.id === caseId);
    if (!caseData) return;
    setSelectedCaseId(caseId);
    setCurrentStepId(caseData.steps[0].id);
    setGameState("playing");
    setXpEarned(0);
    setLives(3);
    setCombo(0);
    setLastFeedback(null);
    setShowRescue(false);
    setTimeoutTriggered(false);
  };

  const handleChoice = (choice: { nextScene?: string; xp: number; isCorrect?: boolean; feedback?: string; feedbackZh?: string }, isTimeout = false) => {
    if (!selectedCase || !currentStep) return;
    const remaining = currentStep.xpReward > 0 ? timeLeft : 0;
    const timeBonus = remaining > 0 ? Math.min(remaining, 10) : 0;
    const awardedXp = isTimeout ? Math.max(1, choice.xp - 3) : choice.xp + timeBonus;
    setXpEarned((prev) => prev + awardedXp);
    if (!isTimeout && choice.isCorrect) {
      setCombo((prev) => prev + 1);
    } else if (!isTimeout && !choice.isCorrect) {
      setLives((prev) => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => {
            setGameState("menu");
            setSelectedCaseId(null);
            setCurrentStepId("");
            setXpEarned(0);
            setLives(3);
            setCombo(0);
            setLastFeedback(null);
            setShowRescue(false);
            stopTimer();
            setTimeLeft(0);
            setTimeoutTriggered(false);
          }, 1200);
        }
        return newLives;
      });
      setCombo(0);
    }
    setLastFeedback(
      isTimeout
        ? { text: "⏰ Time's up! Auto-selected.", zh: "⏰ 时间到！已自动选择。" }
        : choice.feedback
          ? { text: choice.feedback, zh: choice.feedbackZh || "" }
          : null
    );
    if (isTimeout || !choice.isCorrect) {
      setShowRescue(false);
    }
    stopTimer();
    const currentStepIndex = selectedCase.steps.findIndex((s) => s.id === currentStepId);
    const nextStep = selectedCase.steps[currentStepIndex + 1];
    if (!nextStep) {
      addXp(selectedCase.xpReward + xpEarned);
      incrementStreak();
      incrementWeeklyProgress();
      updateLevelProgress(selectedCase.id, {
        cardsReviewed: selectedCase.steps.length,
        completed: true,
      });
      setGameState("won");
    } else {
      setCurrentStepId(nextStep.id);
    }
  };

  const speakRescue = (text: string) => {
    speakEnglish(text);
  };

  const resetState = () => {
    setGameState("menu");
    setSelectedCaseId(null);
    setCurrentStepId("");
    setXpEarned(0);
    setLives(3);
    setCombo(0);
    setLastFeedback(null);
    setShowRescue(false);
    stopTimer();
    setTimeLeft(0);
    setTimeoutTriggered(false);
  };

  if (gameState === "menu") {
    return (
      <div>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">🧩 English Decoder</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Understand what's happening before you worry about what to say.
          </p>
          <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
            先听懂发生了什么，再慢慢学会怎么说。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {englishDecoderCases.map((caseItem, idx) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 border-2 hover:border-indigo-300 dark:hover:border-indigo-700 group">
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">{caseItem.emoji}</span>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">{caseItem.title}</h3>
                      <p className="text-xs text-muted-foreground">{caseItem.titleZh}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{caseItem.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">{caseItem.descriptionZh}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs"><Zap className="h-3 w-3 mr-1" />{caseItem.xpReward} XP</Badge>
                    <Badge variant="outline" className="text-xs capitalize">{caseItem.difficulty}</Badge>
                    <Badge variant="outline" className="text-xs">{caseItem.theme}</Badge>
                  </div>
                  <Button className="w-full mt-4 gap-2" onClick={() => startCase(caseItem.id)}>
                    <Shield className="h-4 w-4" />
                    Start Decoding
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  if (!selectedCase || !currentStep) return null;

  const stepIndex = selectedCase.steps.findIndex((s) => s.id === currentStepId);
  const isLastStep = stepIndex === selectedCase.steps.length - 1;

  return (
    <div>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <Button variant="ghost" onClick={resetState}>
          <ArrowLeft className="h-4 w-4 mr-1" />
          Cases
        </Button>
        <div className="flex items-center gap-2 sm:gap-3">
          <Badge variant="secondary" className="gap-1 text-xs"><Zap className="h-3 w-3" />{xpEarned} XP</Badge>
          <Badge variant="outline" className="gap-1 text-xs"><Flame className="h-3 w-3" />{combo} combo</Badge>
          <Badge variant="outline" className="gap-1 text-xs">❤️ {lives}</Badge>
        </div>
      </div>

      <Progress value={progress} className="mb-3 sm:mb-4 h-2" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStepId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="space-y-4 sm:space-y-6 min-w-0"
        >
          <Card className="p-5 sm:p-6 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl sm:text-2xl">{selectedCase.emoji}</span>
              <div>
                <h2 className="text-base sm:text-lg font-bold">{selectedCase.title}</h2>
                <p className="text-xs text-muted-foreground">{selectedCase.titleZh}</p>
              </div>
            </div>

            {currentStep.title && (<h3 className="text-sm sm:text-base font-semibold mb-2">{currentStep.title}</h3>)}
            {currentStep.titleZh && (<p className="text-xs text-muted-foreground mb-3">{currentStep.titleZh}</p>)}

            {(currentStep.situation || currentStep.sentence) && (
              <div className="mb-4 p-3 sm:p-4 rounded-xl bg-white/70 dark:bg-black/20 border border-border min-w-0">
                <p className="text-sm sm:text-base font-medium mb-1">{currentStep.situation || currentStep.sentence}</p>
                <p className="text-xs text-muted-foreground mb-2">{currentStep.situationZh || currentStep.sentenceZh}</p>
                {currentStep.audioText && (
                  <Button variant="ghost" size="sm" className="gap-2" onClick={() => speakEnglish(currentStep.audioText || "")}>
                    <Volume2 className="h-3.5 w-3.5" />
                    Listen
                  </Button>
                )}
              </div>
            )}

            {currentStep.translationTrap && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-red-700 dark:text-red-300" />
                  <p className="text-sm font-semibold text-red-900 dark:text-red-100">Translation Trap</p>
                </div>
                <p className="text-sm line-through text-red-700/80 dark:text-red-300/80 mb-1">❌ {currentStep.translationTrap.literal}</p>
                <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">✅ {currentStep.translationTrap.natural}</p>
                <p className="text-xs text-muted-foreground">{currentStep.translationTrap.explanation}</p>
              </div>
            )}

            {currentStep.chunks && (
              <div className="mb-4 min-w-0">
                <p className="text-sm font-semibold mb-2">Chunks</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {currentStep.chunks.map((chunk, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-muted/30 min-w-0">
                      <p className="text-sm font-medium">{chunk.chunk}</p>
                      <p className="text-xs text-muted-foreground">{chunk.meaning} · {chunk.chinese}</p>
                      <p className="text-xs italic mt-1">"{chunk.example}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep.meaningOptions && (
              <div className="mb-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 min-w-0">
                <p className="text-sm font-semibold mb-2">What does this mean?</p>
                <div className="space-y-2">
                  {currentStep.meaningOptions.map((option, idx) => (
                    <Button
                      key={idx}
                      variant={option.isCorrect ? "default" : "outline"}
                      className="w-full justify-start text-left h-auto py-2 min-w-0"
                      onClick={() => handleChoice({ xp: option.isCorrect ? 10 : 2, isCorrect: option.isCorrect, feedback: option.isCorrect ? "Correct meaning." : "Not quite.", feedbackZh: option.isCorrect ? "正确的意思。" : "不完全对。" })}
                    >
                      <span className="text-sm break-words">{option.text}</span>
                      <span className="text-xs text-muted-foreground ml-2 break-words hidden sm:inline">{option.textZh}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep.reactionOptions && (
              <div className="mb-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 min-w-0">
                <p className="text-sm font-semibold mb-2">Choose your reaction</p>
                <div className="space-y-2">
                  {currentStep.reactionOptions.map((option, idx) => (
                    <Button
                      key={idx}
                      variant={option.tone === "natural" ? "default" : "outline"}
                      className="w-full justify-start text-left h-auto py-2 min-w-0"
                      onClick={() => handleChoice({ xp: option.tone === "natural" ? 10 : 4, isCorrect: option.tone === "natural", feedback: option.tone === "natural" ? "Natural response." : "A bit awkward.", feedbackZh: option.tone === "natural" ? "自然的回应。" : "有点 awkward。" })}
                    >
                      <span className="text-sm break-words">{option.text}</span>
                      <span className="text-xs text-muted-foreground ml-2 break-words hidden sm:inline">{option.textZh}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep.challengePrompt && (
              <div className="mb-4 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 min-w-0">
                <p className="text-sm font-semibold mb-2">Challenge</p>
                <p className="text-sm mb-2">{currentStep.challengePrompt}</p>
                <p className="text-xs text-muted-foreground">{currentStep.challengePromptZh}</p>
              </div>
            )}
          </Card>

          {currentStep.choices && !currentStep.meaningOptions && !currentStep.reactionOptions && (
            <div className="space-y-3 min-w-0">
              {currentStep.choices.map((choice) => (
                <motion.div key={choice.id} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="min-w-0">
                  <Card className="p-3 sm:p-4 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors min-w-0">
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-left h-auto py-2 min-w-0"
                      onClick={() => handleChoice(choice)}
                    >
                      <span className="text-sm sm:text-base break-words text-left">{choice.text}</span>
                      <span className="text-xs text-muted-foreground ml-2 break-words text-right hidden sm:inline">{choice.textZh}</span>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1 sm:hidden break-words">{choice.textZh}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {lives > 0 && !isLastStep && (
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm" className="gap-2" onClick={() => setShowRescue(!showRescue)}>
                <HelpCircle className="h-3.5 w-3.5" />
                Rescue
              </Button>
            </div>
          )}

          <AnimatePresence>
            {showRescue && lives > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800"
              >
                <p className="text-sm font-semibold mb-2">🛟 Conversation Rescue</p>
                <div className="flex flex-wrap gap-2">
                  {currentStep.rescueOptions?.map((option, idx) => (
                    <Button key={idx} variant="secondary" size="sm" className="gap-2" onClick={() => speakRescue(option)}>
                      <Volume2 className="h-3.5 w-3.5" />
                      {option}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {lastFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 min-w-0"
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
          className="mt-6 sm:mt-8 text-center space-y-4 min-w-0"
        >
          <Card className="p-5 sm:p-6 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 min-w-0">
            <div className="text-3xl sm:text-4xl mb-2">🎉</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">YOU DECODED ENGLISH!</h3>
            <p className="text-sm text-muted-foreground mb-4">You survived {selectedCase.title}!</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">+{selectedCase.xpReward + xpEarned}</div>
                <div className="text-xs text-muted-foreground">Total XP</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold">{selectedCase.steps.length}</div>
                <div className="text-xs text-muted-foreground">Steps</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold">{Math.max(0, 3 - lives + 1)}</div>
                <div className="text-xs text-muted-foreground">Lives Lost</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold">{combo}</div>
                <div className="text-xs text-muted-foreground">Best Combo</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => startCase(selectedCase.id)} variant="outline" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Play Again
              </Button>
              <Button onClick={resetState} className="gap-2">
                <ChevronRight className="h-4 w-4" />
                Next Case
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {lives <= 0 && gameState !== "won" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <Card className="p-6 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
            <div className="text-3xl mb-2">😂</div>
            <h3 className="text-xl font-bold mb-2">English attacked!</h3>
            <p className="text-sm text-muted-foreground mb-4">Don't worry — decoding takes practice.</p>
            <Button onClick={resetState} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
          </Card>
        </motion.div>
      )}

      {gameState !== "won" && lives > 0 && (
        <div className="mt-4 sm:mt-6 text-center">
          <Button variant="ghost" onClick={resetState}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Cases
          </Button>
        </div>
      )}
    </div>
  );
}

function LibrarySection({ speakEnglish }: { speakEnglish: (text: string) => void }) {
  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return survivalResources.filter((r) => {
      if (activeCategory && r.category !== activeCategory) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.titleZh.includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        r.summary.toLowerCase().includes(q) ||
        r.summaryZh.includes(q)
      );
    });
  }, [query, activeCategory]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  const openResource = (resource: SurvivalResource) => {
    updateLevelProgress(resource.id, {
      cardsReviewed: (resource.miniDrills?.length || 0),
      completed: false,
    });
    addXp(5);
    incrementStreak();
    incrementWeeklyProgress();
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">📚 English Survival Library</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          English doesn't have to be confusing. Find it. Understand it. Practice it. Use it.
        </p>
        <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
          英语不用那么复杂。找到它，理解它，练习它，然后真正用起来。
        </p>
        <div className="mt-3">
          <Link href="/english-boost/library/read">
            <Button variant="default" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Read Mode — View All Details
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="What are you struggling with?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button variant={activeCategory === null ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(null)}>
              All
            </Button>
            {survivalCategories.slice(0, 6).map((cat) => (
              <Button key={cat.id} variant={activeCategory === cat.id ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(cat.id)}>
                <span className="mr-1">{cat.emoji}</span>
                {cat.title}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource, idx) => (
          <motion.div key={resource.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
            <Card className="h-full cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 border-2 hover:border-indigo-300 dark:hover:border-indigo-700 group">
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">{resource.emoji}</span>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">{resource.title}</h3>
                    <p className="text-xs text-muted-foreground">{resource.titleZh}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{resource.summary}</p>
                <p className="text-xs text-muted-foreground mb-4">{resource.summaryZh}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs"><Zap className="h-3 w-3 mr-1" />{resource.xpReward} XP</Badge>
                  <Badge variant="outline" className="text-xs capitalize">{resource.difficulty}</Badge>
                  <Badge variant="outline" className="text-xs">{resource.category}</Badge>
                </div>
                <div className="flex gap-2">
                  <Link href={`/english-survival-library/${resource.id}`} className="flex-1">
                    <Button className="w-full gap-2" onClick={() => openResource(resource)}>
                      <BookOpen className="h-4 w-4" />
                      Study
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon" onClick={() => toggleFavorite(resource.id)}>
                    {favorites.includes(resource.id) ? "⭐" : "☆"}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No resources found matching "{query}"</p>
        </div>
      )}
    </div>
  );
}
