"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
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

const tabs: { key: Tab; label: string }[] = [
  { key: "boost", label: "English Boost" },
  { key: "decoder", label: "English Decoder" },
  { key: "library", label: "Survival Library" },
];

export default function EnglishBoostConsolidatedPage() {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4">
        <EnglishAcademyContent />
      </div>
    </div>
  );
}

function EnglishAcademyContent() {
  const [activeTab, setActiveTab] = useState<Tab>("boost");
  const { speakEnglish } = useSpeechSynthesis();
  const { updateLevelProgress, addXp, incrementStreak, incrementWeeklyProgress } = useLearningStore();

  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold tracking-tight">English Academy</h1>
        <p className="mt-1 text-muted-foreground text-sm">Interactive quests, phrase decoding, and survival reference.</p>
      </div>

      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            variant={activeTab === tab.key ? "default" : "outline"}
            size="sm"
            className="gap-2 px-3 py-1.5 text-xs"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div key={activeTab}>
        {activeTab === "boost" && <BoostSection speakEnglish={speakEnglish} />}
        {activeTab === "decoder" && <DecoderSection speakEnglish={speakEnglish} />}
        {activeTab === "library" && <LibrarySection speakEnglish={speakEnglish} />}
      </div>
    </>
  );
}

function BoostSection({ speakEnglish }: { speakEnglish: (text: string) => void }) {
  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();

  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState("");
  const [gameState, setGameState] = useState<MenuState>("menu");
  const [xpEarned, setXpEarned] = useState(0);
  const [unlockedPhrases, setUnlockedPhrases] = useState<string[]>([]);
  const [lastFeedback, setLastFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [showStealPhrase, setShowStealPhrase] = useState(false);
  const [chaosTriggered, setChaosTriggered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timeoutTriggered, setTimeoutTriggered] = useState(false);
  const [fastAnswerCount, setFastAnswerCount] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

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
        ? { text: "Time's up! Auto-selected.", zh: "时间到！已自动选择第一个选项。" }
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

  const earnedPhrases = useMemo(() => {
    if (!chapter) return [];
    return chapter.scenes
      .filter((s) => s.stealPhrase && unlockedPhrases.includes(s.stealPhrase.phrase))
      .map((s) => s.stealPhrase!);
  }, [chapter, unlockedPhrases]);

  const nextScene = () => {
    if (!chapter || !scene) return;
    const currentIndex = chapter.scenes.findIndex((s) => s.id === currentSceneId);
    if (currentIndex < chapter.scenes.length - 1) {
      const next = chapter.scenes[currentIndex + 1];
      setCurrentSceneId(next.id);
      setHistory((prev) => [...prev, next.id]);
      setLastFeedback(null);
      setShowStealPhrase(false);
      setChaosTriggered(false);
    } else {
      addXp(chapter.xpReward + xpEarned);
      incrementStreak();
      incrementWeeklyProgress();
      updateLevelProgress(chapter.id, {
        cardsReviewed: chapter.scenes.length,
        completed: true,
      });
      setGameState("won");
    }
  };

  if (gameState === "menu") {
    return (
      <div>
        <div className="mb-4 text-center">
          <h2 className="text-lg font-bold">English Boost</h2>
          <p className="mt-1 text-muted-foreground text-sm">Learn English. Survive awkward situations. Become dangerously fluent.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {englishBoostChapters.map((chapter) => (
            <Card key={chapter.id} className="cursor-pointer border hover:border-indigo-300">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{chapter.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm">{chapter.title}</h3>
                    <p className="text-xs text-muted-foreground">{chapter.titleZh}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{chapter.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs"><Flame className="h-2 w-2 mr-1" />{chapter.xpReward} XP</Badge>
                  <Badge variant="outline" className="text-xs capitalize">{chapter.difficulty}</Badge>
                  <Badge variant="outline" className="text-xs">{chapter.theme}</Badge>
                </div>
                <Button className="w-full text-xs gap-1" onClick={() => startChapter(chapter.id)}>
                  <Zap className="h-3 w-3" />
                  Start
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!chapter || !scene) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <Button variant="ghost" onClick={backToMenu} className="text-xs">
          <ArrowLeft className="h-3 w-3 mr-1" />
          Quests
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs gap-1">
            <Zap className="h-2 w-2" />
            {xpEarned} XP
          </Badge>
          <Badge variant="outline" className="text-xs">{chapter.emoji} {chapter.title}</Badge>
        </div>
      </div>

      <Progress value={progress} className="mb-3 h-1.5" />

      {scene?.timeLimit && gameState === "playing" && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1 text-xs font-medium">
              <Clock className="h-3 w-3" />
              <span>Time Left</span>
            </div>
            <span className={`text-xs font-bold ${timeLeft <= 5 ? "text-red-600" : ""}`}>
              {timeLeft}s
            </span>
          </div>
          <Progress
            value={scene.timeLimit ? (timeLeft / scene.timeLimit) * 100 : 100}
            className={`h-1.5 ${timeLeft <= 5 ? "text-red-500" : "text-indigo-500"}`}
          />
        </div>
      )}

      <div className="space-y-3">
        <Card className="p-4 border-indigo-200 bg-indigo-50/40 dark:bg-indigo-950/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{chapter.emoji}</span>
            <div>
              <h2 className="text-sm font-bold">{chapter.title}</h2>
              <p className="text-xs text-muted-foreground">{chapter.titleZh}</p>
            </div>
          </div>

          {scene.narration && (
            <p className="text-sm mb-2">{scene.narration}</p>
          )}

          {scene.chaosEvent && (
            <div className="mb-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 text-sm">
              <span className="font-semibold text-amber-900">Chaos</span>
              <p className="text-sm">{scene.chaosEvent}</p>
            </div>
          )}

          {scene.translationTrap && (
            <div className="mb-3 p-3 rounded-lg bg-red-50 border border-red-200 text-sm">
              <span className="font-semibold text-red-900">Translation Trap</span>
              <p className="text-sm line-through text-red-700">❌ {scene.translationTrap.literal}</p>
              <p className="text-sm font-medium text-green-700">✅ {scene.translationTrap.natural}</p>
              <p className="text-xs text-muted-foreground">{scene.translationTrap.explanation}</p>
            </div>
          )}

          {scene.stealPhrase && showStealPhrase && (
            <div className="mb-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-sm">
              <span className="font-semibold text-emerald-900">💎 Steal This Phrase</span>
              <p className="text-sm font-medium">{scene.stealPhrase.phrase}</p>
              <p className="text-xs text-muted-foreground">{scene.stealPhrase.chinese}</p>
              <p className="text-xs text-muted-foreground">Situation: {scene.stealPhrase.situation}</p>
              <Badge variant="outline" className="text-xs mt-1 capitalize">{scene.stealPhrase.formality}</Badge>
            </div>
          )}

          {scene.dialogue && (
            <div className="mb-3 p-3 rounded-lg bg-white/70 border border-border text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span>{scene.characterEmoji}</span>
                <span className="font-semibold">{scene.character}</span>
              </div>
              <p className="font-medium">{scene.dialogue}</p>
              <p className="text-xs text-muted-foreground">{scene.dialogueZh}</p>
              <Button variant="ghost" size="sm" className="mt-2 gap-1" onClick={() => speakEnglish(scene.dialogue || "")}>
                <Volume2 className="h-3 w-3" />
                Listen
              </Button>
            </div>
          )}
        </Card>

        <div className="space-y-2">
          {scene.choices.map((choice) => (
            <Card key={choice.id} className="p-2 cursor-pointer hover:border-indigo-300">
              <Button
                variant="ghost"
                className="w-full justify-between text-left h-auto py-2 text-xs"
                onClick={() => handleChoice(choice)}
              >
                <span>{choice.text}</span>
                <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">{choice.textZh}</span>
              </Button>
              <p className="text-xs text-muted-foreground mt-1 sm:hidden">{choice.textZh}</p>
            </Card>
          ))}
        </div>

        {lastFeedback && (
          <div className={`p-3 rounded-lg text-sm ${lastFeedback.text.startsWith("✅") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            <p>{lastFeedback.text}</p>
            {lastFeedback.zh && <p className="text-xs mt-1">{lastFeedback.zh}</p>}
            <Button onClick={nextScene} size="sm" className="mt-2">
              {currentIndex < chapter.scenes.length - 1 ? "Next" : "Finish"}
            </Button>
          </div>
        )}
      </div>

      {gameState === "won" && (
        <div className="mt-6 text-center space-y-3">
          <Card className="p-5 border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20">
            <div className="text-2xl mb-1">🎉</div>
            <h3 className="text-lg font-bold">Mission Complete</h3>
            <p className="text-sm text-muted-foreground">You survived {chapter.title}!</p>
            <div className="grid grid-cols-4 gap-3 mt-4">
              <div className="text-center">
                <div className="text-lg font-extrabold text-emerald-700">+{chapter.xpReward + xpEarned}</div>
                <div className="text-xs text-muted-foreground">XP</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">{chapter.scenes.length}</div>
                <div className="text-xs text-muted-foreground">Scenes</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">{unlockedPhrases.length}</div>
                <div className="text-xs text-muted-foreground">Phrases</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">{fastAnswerCount}</div>
                <div className="text-xs text-muted-foreground">Fast</div>
              </div>
            </div>
            {earnedPhrases.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold mb-2">💎 Phrases You Can Steal Today</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {earnedPhrases.map((phrase) => (
                    <Badge key={phrase.phrase} variant="secondary" className="text-xs">{phrase.phrase}</Badge>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-2 justify-center mt-4">
              <Button onClick={resetChapter} variant="outline" className="text-xs gap-1">
                <RotateCcw className="h-3 w-3" />
                Replay
              </Button>
              <Button onClick={backToMenu} className="text-xs gap-1">
                <ChevronRight className="h-3 w-3" />
                Next
              </Button>
            </div>
          </Card>
        </div>
      )}

      {gameState !== "won" && (
        <div className="mt-4 text-center">
          <Button variant="ghost" onClick={backToMenu} className="text-xs">
            <ArrowLeft className="h-3 w-3 mr-1" />
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
        ? { text: "Time's up! Auto-selected.", zh: "时间到！已自动选择。" }
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
        <div className="mb-4 text-center">
          <h2 className="text-lg font-bold">English Decoder</h2>
          <p className="mt-1 text-muted-foreground text-sm">Understand what's happening before you worry about what to say.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {englishDecoderCases.map((caseItem) => (
            <Card key={caseItem.id} className="cursor-pointer border hover:border-indigo-300">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{caseItem.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-sm">{caseItem.title}</h3>
                    <p className="text-xs text-muted-foreground">{caseItem.titleZh}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{caseItem.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs"><Zap className="h-2 w-2 mr-1" />{caseItem.xpReward} XP</Badge>
                  <Badge variant="outline" className="text-xs capitalize">{caseItem.difficulty}</Badge>
                  <Badge variant="outline" className="text-xs">{caseItem.theme}</Badge>
                </div>
                <Button className="w-full text-xs gap-1" onClick={() => startCase(caseItem.id)}>
                  <Shield className="h-3 w-3" />
                  Start Decoding
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!selectedCase || !currentStep) return null;

  const stepIndex = selectedCase.steps.findIndex((s) => s.id === currentStepId);
  const isLastStep = stepIndex === selectedCase.steps.length - 1;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <Button variant="ghost" onClick={resetState} className="text-xs">
          <ArrowLeft className="h-3 w-3 mr-1" />
          Cases
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs gap-1"><Zap className="h-2 w-2" />{xpEarned} XP</Badge>
          <Badge variant="outline" className="text-xs gap-1"><Flame className="h-2 w-2" />{combo} combo</Badge>
          <Badge variant="outline" className="text-xs">❤️ {lives}</Badge>
        </div>
      </div>

      <Progress value={progress} className="mb-3 h-1.5" />

      <div className="space-y-3">
        <Card className="p-4 border-indigo-200 bg-indigo-50/40 dark:bg-indigo-950/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{selectedCase.emoji}</span>
            <div>
              <h2 className="text-sm font-bold">{selectedCase.title}</h2>
              <p className="text-xs text-muted-foreground">{selectedCase.titleZh}</p>
            </div>
          </div>

          {currentStep.title && (<h3 className="text-xs font-semibold mb-1">{currentStep.title}</h3>)}
          {currentStep.titleZh && (<p className="text-xs text-muted-foreground mb-2">{currentStep.titleZh}</p>)}

          {(currentStep.situation || currentStep.sentence) && (
            <div className="mb-3 p-3 rounded-lg bg-white/70 border border-border text-sm">
              <p className="font-medium mb-1">{currentStep.situation || currentStep.sentence}</p>
              <p className="text-xs text-muted-foreground mb-2">{currentStep.situationZh || currentStep.sentenceZh}</p>
              {currentStep.audioText && (
                <Button variant="ghost" size="sm" className="gap-1" onClick={() => speakEnglish(currentStep.audioText || "")}>
                  <Volume2 className="h-3 w-3" />
                  Listen
                </Button>
              )}
            </div>
          )}

          {currentStep.translationTrap && (
            <div className="mb-3 p-3 rounded-lg bg-red-50 border border-red-200 text-sm">
              <span className="font-semibold text-red-900">Translation Trap</span>
              <p className="text-sm line-through text-red-700">❌ {currentStep.translationTrap.literal}</p>
              <p className="text-sm font-medium text-green-700">✅ {currentStep.translationTrap.natural}</p>
              <p className="text-xs text-muted-foreground">{currentStep.translationTrap.explanation}</p>
            </div>
          )}

          {currentStep.chunks && (
            <div className="mb-3">
              <p className="text-xs font-semibold mb-1">Chunks</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {currentStep.chunks.map((chunk, idx) => (
                  <div key={idx} className="p-2 rounded bg-muted/30 text-xs">
                    <p className="font-medium">{chunk.chunk}</p>
                    <p className="text-muted-foreground">{chunk.meaning} · {chunk.chinese}</p>
                    <p className="italic mt-1">"{chunk.example}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep.meaningOptions && (
            <div className="mb-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm">
              <p className="font-semibold mb-2">What does this mean?</p>
              <div className="space-y-2">
                {currentStep.meaningOptions.map((option, idx) => (
                  <Button
                    key={idx}
                    variant={option.isCorrect ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-2 text-xs"
                    onClick={() => handleChoice({ xp: option.isCorrect ? 10 : 2, isCorrect: option.isCorrect, feedback: option.isCorrect ? "Correct meaning." : "Not quite.", feedbackZh: option.isCorrect ? "正确的意思。" : "不完全对。" })}
                  >
                    <span className="text-xs">{option.text}</span>
                    <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">{option.textZh}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {currentStep.reactionOptions && (
            <div className="mb-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-sm">
              <p className="font-semibold mb-2">Choose your reaction</p>
              <div className="space-y-2">
                {currentStep.reactionOptions.map((option, idx) => (
                  <Button
                    key={idx}
                    variant={option.tone === "natural" ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto py-2 text-xs"
                    onClick={() => handleChoice({ xp: option.tone === "natural" ? 10 : 4, isCorrect: option.tone === "natural", feedback: option.tone === "natural" ? "Natural response." : "A bit awkward.", feedbackZh: option.tone === "natural" ? "自然的回应。" : "有点 awkward。" })}
                  >
                    <span className="text-xs">{option.text}</span>
                    <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">{option.textZh}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {currentStep.challengePrompt && (
            <div className="mb-3 p-3 rounded-lg bg-indigo-50 border border-indigo-200 text-sm">
              <p className="font-semibold mb-1">Challenge</p>
              <p className="text-sm">{currentStep.challengePrompt}</p>
              <p className="text-xs text-muted-foreground">{currentStep.challengePromptZh}</p>
            </div>
          )}
        </Card>

        {!currentStep.meaningOptions && !currentStep.reactionOptions && currentStep.choices && (
          <div className="space-y-2">
            {currentStep.choices.map((choice) => (
              <Card key={choice.id} className="p-2 cursor-pointer hover:border-indigo-300">
                <Button
                  variant="ghost"
                  className="w-full justify-between text-left h-auto py-2 text-xs"
                  onClick={() => handleChoice(choice)}
                >
                  <span>{choice.text}</span>
                  <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">{choice.textZh}</span>
                </Button>
                <p className="text-xs text-muted-foreground mt-1 sm:hidden">{choice.textZh}</p>
              </Card>
            ))}
          </div>
        )}

        {lives > 0 && !isLastStep && (
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm" className="gap-1 text-xs" onClick={() => setShowRescue(!showRescue)}>
              <HelpCircle className="h-3 w-3" />
              Rescue
            </Button>
          </div>
        )}

        {showRescue && lives > 0 && (
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm">
            <p className="font-semibold mb-2">🛟 Conversation Rescue</p>
            <div className="flex flex-wrap gap-2">
              {currentStep.rescueOptions?.map((option, idx) => (
                <Button key={idx} variant="secondary" size="sm" className="gap-1 text-xs" onClick={() => speakEnglish(option)}>
                  <Volume2 className="h-3 w-3" />
                  {option}
                </Button>
              ))}
            </div>
          </div>
        )}

        {lastFeedback && (
          <div className={`p-3 rounded-lg text-sm ${lastFeedback.text.startsWith("✅") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
            <p>{lastFeedback.text}</p>
            {lastFeedback.zh && <p className="text-xs mt-1">{lastFeedback.zh}</p>}
          </div>
        )}
      </div>

      {gameState === "won" && (
        <div className="mt-6 text-center space-y-3">
          <Card className="p-5 border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20">
            <div className="text-2xl mb-1">🎉</div>
            <h3 className="text-lg font-bold">You Decoded English!</h3>
            <p className="text-sm text-muted-foreground">You survived {selectedCase.title}!</p>
            <div className="grid grid-cols-4 gap-3 mt-4">
              <div className="text-center">
                <div className="text-lg font-extrabold text-emerald-700">+{selectedCase.xpReward + xpEarned}</div>
                <div className="text-xs text-muted-foreground">XP</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">{selectedCase.steps.length}</div>
                <div className="text-xs text-muted-foreground">Steps</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">{Math.max(0, 3 - lives + 1)}</div>
                <div className="text-xs text-muted-foreground">Lives Lost</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">{combo}</div>
                <div className="text-xs text-muted-foreground">Best Combo</div>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-4">
              <Button onClick={() => startCase(selectedCase.id)} variant="outline" className="text-xs gap-1">
                <RotateCcw className="h-3 w-3" />
                Replay
              </Button>
              <Button onClick={resetState} className="text-xs gap-1">
                <ChevronRight className="h-3 w-3" />
                Next Case
              </Button>
            </div>
          </Card>
        </div>
      )}

      {lives <= 0 && gameState !== "won" && (
        <div className="mt-6 text-center">
          <Card className="p-5 border-red-200 bg-red-50 dark:bg-red-950/20">
            <div className="text-2xl mb-1">😂</div>
            <h3 className="text-lg font-bold mb-2">English attacked!</h3>
            <p className="text-sm text-muted-foreground mb-3">Don't worry — decoding takes practice.</p>
            <Button onClick={resetState} className="text-xs gap-1">
              <RotateCcw className="h-3 w-3" />
              Try Again
            </Button>
          </Card>
        </div>
      )}

      {gameState !== "won" && lives > 0 && (
        <div className="mt-4 text-center">
          <Button variant="ghost" onClick={resetState} className="text-xs">
            <ArrowLeft className="h-3 w-3 mr-1" />
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
      <div className="mb-4 text-center">
        <h2 className="text-lg font-bold">English Survival Library</h2>
        <p className="mt-1 text-muted-foreground text-sm">English doesn't have to be confusing. Find it. Understand it. Practice it.</p>
        <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-400">英语不用那么复杂。找到它，理解它，练习它。</p>
      </div>

      <div className="mb-4 flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="What are you struggling with?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant={activeCategory === null ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(null)} className="text-xs">
            All
          </Button>
          {survivalCategories.slice(0, 6).map((cat) => (
            <Button key={cat.id} variant={activeCategory === cat.id ? "default" : "outline"} size="sm" onClick={() => setActiveCategory(cat.id)} className="text-xs">
              <span className="mr-1">{cat.emoji}</span>
              {cat.title}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource, idx) => (
          <Card key={resource.id} className="border hover:border-indigo-300">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{resource.emoji}</span>
                <div>
                  <h3 className="font-semibold text-sm">{resource.title}</h3>
                  <p className="text-xs text-muted-foreground">{resource.titleZh}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{resource.summary}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                <Badge variant="secondary" className="text-xs"><Zap className="h-2 w-2 mr-1" />{resource.xpReward} XP</Badge>
                <Badge variant="outline" className="text-xs capitalize">{resource.difficulty}</Badge>
                <Badge variant="outline" className="text-xs">{resource.category}</Badge>
              </div>
              <div className="flex gap-2">
                <Link href={`/english-survival-library/${resource.id}`} className="flex-1">
                  <Button className="w-full text-xs gap-1" onClick={() => openResource(resource)}>
                    <BookOpen className="h-3 w-3" />
                    Study
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => toggleFavorite(resource.id)} className="text-xs">
                  {favorites.includes(resource.id) ? "⭐" : "☆"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-muted-foreground text-sm">
          <p>No resources found matching "{query}"</p>
        </div>
      )}
    </div>
  );
}