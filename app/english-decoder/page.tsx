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
import { englishDecoderCases } from "@/data/english-decoder";
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
  MessageCircle,
  HelpCircle,
  Clock,
  Shield,
} from "lucide-react";

type GameState = "menu" | "playing" | "won";

export default function EnglishDecoderPage() {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [currentStepId, setCurrentStepId] = useState("");
  const [gameState, setGameState] = useState<GameState>("menu");
  const [xpEarned, setXpEarned] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [showRescue, setShowRescue] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timeoutTriggered, setTimeoutTriggered] = useState(false);

  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

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

  if (gameState === "menu") {
    return (
      <div className="flex min-w-0">
        <StudentSidebar />
        <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">🧩 English Decoder</h1>
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
                className="min-w-0"
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
                      <Badge variant="secondary" className="text-xs">
                        <Zap className="h-3 w-3 mr-1" />
                        {caseItem.xpReward} XP
                      </Badge>
                      <Badge variant="outline" className="text-xs capitalize">
                        {caseItem.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {caseItem.theme}
                      </Badge>
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
      </div>
    );
  }

  if (!selectedCase || !currentStep) return null;

  const stepIndex = selectedCase.steps.findIndex((s) => s.id === currentStepId);
  const isLastStep = stepIndex === selectedCase.steps.length - 1;

  return (
    <div className="flex min-w-0">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto min-w-0">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Button variant="ghost" onClick={() => { setGameState("menu"); setSelectedCaseId(null); setCurrentStepId(""); setXpEarned(0); setLives(3); setCombo(0); setLastFeedback(null); setShowRescue(false); stopTimer(); setTimeLeft(0); setTimeoutTriggered(false); }}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Cases
            </Button>
            <div className="flex items-center gap-2 sm:gap-3">
              <Badge variant="secondary" className="gap-1 text-xs">
                <Zap className="h-3 w-3" />
                {xpEarned} XP
              </Badge>
              <Badge variant="outline" className="gap-1 text-xs">
                <Flame className="h-3 w-3" />
                {combo} combo
              </Badge>
              <Badge variant="outline" className="gap-1 text-xs">
                ❤️ {lives}
              </Badge>
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

                {currentStep.title && (
                  <h3 className="text-sm sm:text-base font-semibold mb-2">{currentStep.title}</h3>
                )}
                {currentStep.titleZh && (
                  <p className="text-xs text-muted-foreground mb-3">{currentStep.titleZh}</p>
                )}

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
                          <p className="text-xs italic mt-1">“{chunk.example}”</p>
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
                    <p className="text-xs text-muted-foreground mb-3">{currentStep.challengePromptZh}</p>
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
                    className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 min-w-0"
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
                  <Button onClick={() => { setGameState("menu"); setSelectedCaseId(null); setCurrentStepId(""); setXpEarned(0); setLives(3); setCombo(0); setLastFeedback(null); setShowRescue(false); stopTimer(); setTimeLeft(0); setTimeoutTriggered(false); }} className="gap-2">
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
                <Button onClick={() => { setGameState("menu"); setSelectedCaseId(null); setCurrentStepId(""); setXpEarned(0); setLives(3); setCombo(0); setLastFeedback(null); setShowRescue(false); stopTimer(); setTimeLeft(0); setTimeoutTriggered(false); }} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Try Again
                </Button>
              </Card>
            </motion.div>
          )}

          {gameState !== "won" && lives > 0 && (
            <div className="mt-4 sm:mt-6 text-center">
              <Button variant="ghost" onClick={() => { setGameState("menu"); setSelectedCaseId(null); setCurrentStepId(""); setXpEarned(0); setLives(3); setCombo(0); setLastFeedback(null); setShowRescue(false); stopTimer(); setTimeLeft(0); setTimeoutTriggered(false); }}>
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Cases
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
