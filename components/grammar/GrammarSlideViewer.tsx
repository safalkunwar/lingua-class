"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  ArrowLeft,
  RotateCcw,
  Trophy,
  Check,
  Languages,
  Maximize2,
  Minimize2,
  Table as TableIcon,
  MessageCircle,
  Clock,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  GrammarLesson,
  GrammarSlide,
  GrammarSlideType,
  VocabularyItem,
} from "@/types/grammar";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { useLearningStore } from "@/stores/learning-store";
import { useGrammarStore } from "@/stores/grammar-store";
import { GrammarTeacherPanel } from "./GrammarTeacherPanel";
import { GrammarNotesSheet } from "./GrammarNotesSheet";
import { InteractiveSentence } from "./InteractiveSentence";
import { VisualDiagram } from "./VisualDiagram";
import { SentenceReorder } from "./SentenceReorder";
import { ErrorCorrection } from "./ErrorCorrection";
import { SpeakingDrill } from "./SpeakingDrill";
import { cn } from "@/lib/utils";

interface GrammarSlideViewerProps {
  lesson: GrammarLesson;
}

type ChineseDisplayMode = "none" | "hint" | "full";

export function GrammarSlideViewer({ lesson }: GrammarSlideViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [chineseMode, setChineseMode] = useState<ChineseDisplayMode>("full");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [matchingSelections, setMatchingSelections] = useState<{ [leftId: string]: string }>({});
  const [matchingStatus, setMatchingStatus] = useState<boolean | null>(null);
  const [xpEarned, setXpEarned] = useState(0);

  const { speakEnglish } = useSpeechSynthesis();
  const { addXp, incrementWeeklyProgress } = useLearningStore();
  const { recordLastLesson, recordLessonCompletion, recordStrugglingTopic } = useGrammarStore();

  const totalSlides = lesson.slides.length;
  const currentSlide: GrammarSlide = lesson.slides[currentSlideIndex] || lesson.slides[0];
  const progressPercent = Math.round(((currentSlideIndex + 1) / totalSlides) * 100);

  // Sync current progress to store
  useEffect(() => {
    recordLastLesson(
      lesson.id,
      lesson.categoryId,
      lesson.subcategoryId,
      lesson.title,
      currentSlideIndex
    );
  }, [currentSlideIndex, lesson, recordLastLesson]);

  // Reset per-slide interactive state
  const resetSlideState = useCallback(() => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsCorrect(null);
    setShowHint(false);
    setMatchingSelections({});
    setMatchingStatus(null);
  }, []);

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
      resetSlideState();
    }
  }, [currentSlideIndex, totalSlides, resetSlideState]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
      resetSlideState();
    }
  }, [currentSlideIndex, resetSlideState]);

  const handleRestart = useCallback(() => {
    setCurrentSlideIndex(0);
    resetSlideState();
  }, [resetSlideState]);

  // Keyboard navigation: ArrowLeft, ArrowRight, Space, Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === " " && currentSlideIndex < totalSlides - 1) {
        // Space goes to next slide only if not on last slide
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === "Escape") {
        setShowHint(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, currentSlideIndex, totalSlides]);

  const handleSpeak = (text?: string) => {
    const target = text || currentSlide.audioText || currentSlide.content;
    speakEnglish(target);
  };

  const handleQuizSubmit = (index: number) => {
    if (!currentSlide.question) return;
    setSelectedAnswer(index);
    setIsAnswerSubmitted(true);
    const correct = index === currentSlide.question.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      const reward = currentSlide.question.xpReward || 15;
      setXpEarned((prev) => prev + reward);
      addXp(reward);
      incrementWeeklyProgress();
    } else {
      recordStrugglingTopic({
        topic: currentSlide.title,
        reason: `Missed practice question on ${currentSlide.title}: ${currentSlide.question.question}`,
        lessonId: lesson.id,
        categoryId: lesson.categoryId,
        subcategoryId: lesson.subcategoryId,
        lessonTitle: lesson.title,
      });
    }
  };

  const handleMatchingSelect = (pairId: string, rightValue: string) => {
    setMatchingSelections((prev) => ({ ...prev, [pairId]: rightValue }));
  };

  const checkMatching = () => {
    if (!currentSlide.matchingPairs) return;
    const allCorrect = currentSlide.matchingPairs.every(
      (pair) => matchingSelections[pair.id] === pair.right
    );
    setMatchingStatus(allCorrect);
    if (allCorrect) {
      addXp(20);
      setXpEarned((prev) => prev + 20);
      incrementWeeklyProgress();
    }
  };

  const toggleChineseMode = () => {
    setChineseMode((prev) => {
      if (prev === "full") return "hint";
      if (prev === "hint") return "none";
      return "full";
    });
  };

  // Canonical normalize slide type
  const normalizedType = useMemo(() => {
    const t = currentSlide.type;
    if (t === "introduction" || t === "what_you_need_to_know") return "TITLE";
    if (t === "simple_explanation") return "EXPLANATION";
    if (t === "core_rule") return "RULE";
    if (t === "examples") return "EXAMPLE";
    if (t === "comparison") return "COMPARISON";
    if (t === "visual_model") return "VISUAL_DIAGRAM";
    if (t === "common_mistakes") return "COMMON_MISTAKE";
    if (t === "real_scenario") return "REAL_LIFE_SCENARIO";
    if (t === "real_life_use") return "CONVERSATION";
    if (t === "guided_practice" || t === "independent_practice") return "MINI_QUIZ";
    if (t === "challenge" || t === "master_test") return "CHALLENGE";
    if (t === "review") return "REVIEW";
    return t as GrammarSlideType;
  }, [currentSlide.type]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 px-2 sm:px-4 py-2 sm:py-4">
      {/* 1. LESSON HEADER (Conforms to user specifications) */}
      <div className="p-4 sm:p-5 rounded-xl border bg-card/90 shadow-2xs space-y-3">
        {/* Top meta row */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Link
              href={`/grammar/${lesson.categoryId}/${lesson.subcategoryId}`}
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Lesson
            </Link>
            <span className="text-muted-foreground/60">•</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
              {lesson.level} — Beginner
            </span>
            <span className="text-muted-foreground/60">•</span>
            <span className="font-medium text-muted-foreground">
              Lesson {lesson.lessonIndex || 1} of {lesson.totalLessonsInSubcategory || 8}
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              {lesson.estimatedMinutes ? `${lesson.estimatedMinutes} mins` : "45–60 minutes"}
            </span>
            <span>Progress: {progressPercent}%</span>
          </div>
        </div>

        {/* Title and Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-border/50">
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
              {lesson.title}
            </h1>
            {lesson.subtitle && (
              <p className="text-xs sm:text-sm text-muted-foreground">{lesson.subtitle}</p>
            )}
          </div>

          {/* Toolbar Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Chinese Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleChineseMode}
              className="h-8 px-2.5 text-xs gap-1.5 border-border bg-card"
              title="Toggle Chinese translations mode"
            >
              <Languages className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>
                {chineseMode === "full"
                  ? "🇨🇳 Chinese: Full"
                  : chineseMode === "hint"
                  ? "💡 Chinese: Hint"
                  : "🇬🇧 English Only"}
              </span>
            </Button>

            {/* Teacher Mode Panel */}
            <GrammarTeacherPanel
              guide={lesson.teacherGuide || currentSlide.teacherGuide}
              lessonTitle={lesson.title}
            />

            {/* Student Notes Drawer */}
            <GrammarNotesSheet
              lessonId={lesson.id}
              lessonTitle={lesson.title}
            />
          </div>
        </div>

        {/* Progress Bar & Slide Indicator */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>
              Slide {currentSlideIndex + 1} / {totalSlides}
            </span>
            <span className="uppercase tracking-wider text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              {currentSlide.sectionTitle || normalizedType}
            </span>
          </div>
          <Progress value={progressPercent} className="h-1.5 w-full" />
        </div>
      </div>

      {/* 2. MAIN SLIDE CONTENT CONTAINER */}
      <Card className="min-h-[460px] p-5 sm:p-8 flex flex-col justify-between border bg-card shadow-sm rounded-xl">
        <div className="space-y-5">
          {/* Slide Sub-Header / Badge & Audio */}
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50">
                  {currentSlide.badge || normalizedType}
                </span>
                {currentSlide.difficulty && (
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Level: {currentSlide.difficulty}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {currentSlide.title}
              </h2>
              {chineseMode !== "none" && currentSlide.titleZh && (
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {currentSlide.titleZh}
                </p>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSpeak()}
              className="h-8 px-2.5 text-xs gap-1.5 shrink-0 bg-card hover:bg-muted"
              title="Listen to pronunciation"
            >
              <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden sm:inline">Audio</span>
            </Button>
          </div>

          {/* Primary Text Content */}
          {currentSlide.content && (
            <div className="p-4 sm:p-5 rounded-xl bg-muted/20 border border-border/60 text-sm sm:text-base leading-relaxed text-foreground space-y-1.5">
              <p>{currentSlide.content}</p>
              {chineseMode !== "none" && currentSlide.contentZh && (
                <p className="text-xs sm:text-sm text-muted-foreground pt-1 border-t border-border/40">
                  {chineseMode === "hint" ? `💡 提示：${currentSlide.contentZh.slice(0, 30)}...` : currentSlide.contentZh}
                </p>
              )}
            </div>
          )}

          {/* Key Bullet Points */}
          {currentSlide.keyPoints && currentSlide.keyPoints.length > 0 && (
            <ul className="space-y-2 text-xs sm:text-sm text-foreground/90 pl-1">
              {currentSlide.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {/* DYNAMIC SLIDE TYPE RENDERING */}

          {/* A. VISUAL DIAGRAM (SVO, Timeline, Concept Branch, Flowchart) */}
          {currentSlide.diagram && (
            <VisualDiagram diagram={currentSlide.diagram} chineseMode={chineseMode} />
          )}

          {/* B. INTERACTIVE EXAMPLES WITH CLICKABLE SUBJECT/VERB/OBJECT */}
          {currentSlide.examples && currentSlide.examples.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                Interactive Grammar Examples:
              </span>
              <div className="space-y-3">
                {currentSlide.examples.map((ex, idx) => (
                  <InteractiveSentence
                    key={idx}
                    example={ex}
                    chineseMode={chineseMode}
                  />
                ))}
              </div>
            </div>
          )}

          {/* C. COMPARISON (Side-by-side Action vs State, Correct vs Incorrect) */}
          {currentSlide.comparisons && currentSlide.comparisons.length > 0 && (
            <div className="space-y-3">
              {currentSlide.comparisons.map((comp, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl border bg-card space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-lg border bg-blue-50/40 dark:bg-blue-950/20 border-blue-200/60 dark:border-blue-900/40 space-y-1">
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300">
                        {comp.conceptA}
                      </span>
                      <p className="text-sm font-semibold text-foreground">&ldquo;{comp.exampleA}&rdquo;</p>
                    </div>

                    <div className="p-3.5 rounded-lg border bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40 space-y-1">
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                        {comp.conceptB}
                      </span>
                      <p className="text-sm font-semibold text-foreground">&ldquo;{comp.exampleB}&rdquo;</p>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-foreground/90 pt-1">
                    <strong className="text-foreground">Key Difference: </strong>
                    {comp.difference}
                    {chineseMode !== "none" && comp.differenceZh && (
                      <span className="block text-muted-foreground text-xs mt-0.5">
                        {comp.differenceZh}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* D. COMMON MISTAKE (Chinglish Pitfall Analysis) */}
          {currentSlide.mistakes && currentSlide.mistakes.length > 0 && (
            <div className="space-y-3">
              {currentSlide.mistakes.map((mistake, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl border border-rose-200/70 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-950/20 space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border border-rose-300/80 bg-card">
                      <span className="text-xs font-bold text-rose-600 block mb-1">
                        ❌ Incorrect (Common Mistake):
                      </span>
                      <p className="text-sm font-medium line-through text-rose-950 dark:text-rose-200">
                        {mistake.wrong}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg border border-emerald-300/80 bg-card">
                      <span className="text-xs font-bold text-emerald-600 block mb-1">
                        ✓ Correct (Natural English):
                      </span>
                      <p className="text-sm font-semibold text-emerald-950 dark:text-emerald-200">
                        {mistake.right}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm space-y-1 pt-1 border-t border-rose-200/40 text-foreground">
                    <p>
                      <strong className="text-foreground">Why this happens: </strong>
                      {mistake.why}
                    </p>
                    <p className="text-muted-foreground">{mistake.explanation}</p>
                    {chineseMode !== "none" && mistake.explanationZh && (
                      <p className="text-xs text-muted-foreground">{mistake.explanationZh}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* E. TABLE SLIDE */}
          {currentSlide.table && (
            <div className="p-4 rounded-xl border bg-card space-y-3 overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/80 text-muted-foreground font-semibold">
                    {currentSlide.table.headers.map((h, i) => (
                      <th key={i} className="pb-2 pr-4 font-mono uppercase tracking-wider">
                        {h}
                        {chineseMode !== "none" && currentSlide.table?.headersZh?.[i] && (
                          <span className="block text-[11px] font-normal text-muted-foreground">
                            {currentSlide.table.headersZh[i]}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {currentSlide.table.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={cn(
                        "hover:bg-muted/30 transition-colors",
                        row.highlight && "bg-indigo-50/50 dark:bg-indigo-950/40 font-bold"
                      )}
                    >
                      {row.cells.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2.5 pr-4 text-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* F. REAL-LIFE SCENARIO & CONVERSATION */}
          {currentSlide.scenario && (
            <div className="p-5 rounded-xl border bg-card space-y-4">
              <div className="p-3 rounded-lg bg-indigo-50/40 dark:bg-indigo-950/20 text-xs text-foreground/90 border border-indigo-200/50">
                <strong className="text-foreground">Context: </strong>
                {currentSlide.scenario.context}
                {chineseMode !== "none" && currentSlide.scenario.contextZh && (
                  <span className="block text-muted-foreground mt-0.5">
                    {currentSlide.scenario.contextZh}
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {currentSlide.scenario.dialogue.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs shrink-0 border">
                      {line.speaker[0]}
                    </span>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{line.speaker}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => speakEnglish(line.en)}
                          className="h-5 w-5 p-0 text-muted-foreground hover:text-foreground"
                        >
                          <Volume2 className="w-3 h-3" />
                        </Button>
                      </div>
                      <p
                        className={cn(
                          "text-foreground",
                          line.isTargetGrammar && "font-bold text-indigo-700 dark:text-indigo-300"
                        )}
                      >
                        {line.en}
                      </p>
                      {chineseMode !== "none" && line.zh && (
                        <p className="text-xs text-muted-foreground">{line.zh}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {currentSlide.scenario.task && (
                <div className="p-3 rounded-lg bg-muted/40 border text-xs text-foreground space-y-0.5">
                  <strong className="text-foreground">Your Roleplay Task: </strong>
                  <p>{currentSlide.scenario.task}</p>
                </div>
              )}
            </div>
          )}

          {/* G. VOCABULARY SLIDE */}
          {currentSlide.vocabulary && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentSlide.vocabulary.map((vocab, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border bg-card space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-foreground">{vocab.word}</h4>
                      <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-muted text-muted-foreground">
                        {vocab.partOfSpeech}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => speakEnglish(vocab.word)}
                      className="h-6 w-6 p-0 text-indigo-600"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                  {chineseMode !== "none" && (
                    <span className="text-xs text-muted-foreground block">{vocab.wordZh}</span>
                  )}
                  <p className="text-xs text-foreground/90">{vocab.definition}</p>
                  <p className="text-xs italic text-indigo-700 dark:text-indigo-300 pt-1 border-t border-border/40">
                    &ldquo;{vocab.exampleSentence}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* H. SENTENCE REORDER DRILL */}
          {currentSlide.reorder && (
            <SentenceReorder
              reorder={currentSlide.reorder}
              chineseMode={chineseMode}
              onSuccess={() => {
                addXp(15);
                setXpEarned((prev) => prev + 15);
              }}
            />
          )}

          {/* I. ERROR CORRECTION DRILL */}
          {currentSlide.errorCorrection && (
            <ErrorCorrection
              item={currentSlide.errorCorrection}
              chineseMode={chineseMode}
              onSuccess={() => {
                addXp(15);
                setXpEarned((prev) => prev + 15);
              }}
            />
          )}

          {/* J. SPEAKING DRILL */}
          {currentSlide.speakingDrill && (
            <SpeakingDrill
              drill={currentSlide.speakingDrill}
              chineseMode={chineseMode}
              onSuccess={() => {
                addXp(20);
                setXpEarned((prev) => prev + 20);
              }}
            />
          )}

          {/* K. MATCHING PAIRS DRILL */}
          {currentSlide.matchingPairs && currentSlide.matchingPairs.length > 0 && (
            <div className="p-5 rounded-xl border bg-card space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span>Matching Concept Drill</span>
                <span className="font-mono text-indigo-600">Connect the pairs</span>
              </div>

              <div className="space-y-2.5">
                {currentSlide.matchingPairs.map((pair) => (
                  <div
                    key={pair.id}
                    className="p-3 rounded-lg border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
                  >
                    <div className="font-bold text-foreground">
                      {pair.left}
                      {chineseMode !== "none" && pair.leftZh && (
                        <span className="block text-xs text-muted-foreground font-normal">
                          {pair.leftZh}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentSlide.matchingPairs?.map((p) => {
                        const isChosen = matchingSelections[pair.id] === p.right;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => handleMatchingSelect(pair.id, p.right)}
                            className={cn(
                              "px-3 py-1.5 rounded-lg border text-xs font-medium transition-all",
                              isChosen
                                ? "bg-indigo-600 text-white border-indigo-700 shadow-xs"
                                : "bg-card hover:border-indigo-400 text-foreground"
                            )}
                          >
                            {p.right}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  {matchingStatus === true && (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                      <CheckCircle2 className="w-4 h-4" /> All pairs matched correctly! +20 XP
                    </span>
                  )}
                  {matchingStatus === false && (
                    <span className="flex items-center gap-1.5 text-xs text-rose-600 font-bold">
                      <AlertCircle className="w-4 h-4" /> Some pairs are incorrect. Check again!
                    </span>
                  )}
                </div>
                <Button
                  onClick={checkMatching}
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs h-9 px-4"
                >
                  Verify Matches
                </Button>
              </div>
            </div>
          )}

          {/* L. MINI QUIZ / MULTIPLE CHOICE QUESTION */}
          {currentSlide.question && (
            <div className="p-5 sm:p-6 rounded-xl border bg-muted/20 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span className="uppercase tracking-wider">Concept Check Question</span>
                <span className="font-mono text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> +{currentSlide.question.xpReward || 15} XP
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-foreground">
                {currentSlide.question.question}
              </h3>
              {chineseMode !== "none" && currentSlide.question.questionZh && (
                <p className="text-xs text-muted-foreground">{currentSlide.question.questionZh}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {currentSlide.question.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isAnswerCorrect = idx === currentSlide.question?.correctIndex;

                  let optionStyle = "bg-card border-border hover:border-indigo-400 hover:bg-muted/50";
                  if (isAnswerSubmitted) {
                    if (isAnswerCorrect) {
                      optionStyle = "bg-emerald-500 text-white border-emerald-600 font-bold";
                    } else if (isSelected) {
                      optionStyle = "bg-rose-500 text-white border-rose-600 line-through";
                    } else {
                      optionStyle = "opacity-40 bg-card border-border";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => handleQuizSubmit(idx)}
                      className={cn(
                        "p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-2",
                        optionStyle
                      )}
                    >
                      <span>{option}</span>
                      {isAnswerSubmitted && isAnswerCorrect && (
                        <Check className="w-4 h-4 shrink-0 text-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Rationale feedback */}
              {isAnswerSubmitted && (
                <div
                  className={cn(
                    "p-3.5 rounded-xl border text-xs sm:text-sm space-y-1 animate-in fade-in duration-150",
                    isCorrect
                      ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 text-emerald-900 dark:text-emerald-200"
                      : "bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 text-rose-900 dark:text-rose-200"
                  )}
                >
                  <p className="font-bold flex items-center gap-1.5">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Correct!
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-600" /> Explanation:
                      </>
                    )}
                  </p>
                  <p>{currentSlide.question.explanation}</p>
                  {chineseMode !== "none" && currentSlide.question.explanationZh && (
                    <p className="text-xs opacity-90 mt-0.5">{currentSlide.question.explanationZh}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* M. REVIEW & SUMMARY TAKEAWAYS */}
          {currentSlide.reviewPoints && currentSlide.reviewPoints.length > 0 && (
            <div className="space-y-3">
              {currentSlide.reviewPoints.map((rev, idx) => (
                <div key={idx} className="p-4 rounded-xl border bg-card space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-foreground">
                      {rev.keyTakeaway}
                    </h4>
                  </div>
                  {chineseMode !== "none" && rev.keyTakeawayZh && (
                    <p className="text-xs text-muted-foreground pl-7">{rev.keyTakeawayZh}</p>
                  )}
                  {rev.ruleSummary && (
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 pl-7 pt-1">
                      Rule: {rev.ruleSummary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* N. HOMEWORK SLIDE */}
          {currentSlide.homework && (
            <div className="p-5 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/20 dark:bg-indigo-950/10 space-y-4">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>{currentSlide.homework.title}</span>
              </div>

              <div className="space-y-3">
                {currentSlide.homework.tasks.map((task, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border bg-card space-y-1 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {task.type}
                      </span>
                      <p className="font-semibold text-foreground">{task.instruction}</p>
                    </div>
                    {chineseMode !== "none" && task.instructionZh && (
                      <p className="text-xs text-muted-foreground">{task.instructionZh}</p>
                    )}
                    {task.sampleAnswer && (
                      <div className="pt-2 text-xs text-muted-foreground border-t border-border/40">
                        <strong className="text-foreground">Sample output: </strong>
                        &ldquo;{task.sampleAnswer}&rdquo;
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Optional Hint Button */}
          {currentSlide.hint && (
            <div className="pt-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-muted-foreground hover:text-foreground gap-1.5 h-7 px-2"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint ? "Hide Pedagogical Hint" : "Need a Hint?"}</span>
              </Button>
              {showHint && (
                <div className="p-3 mt-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-0.5 animate-in fade-in duration-150">
                  <p>💡 {currentSlide.hint}</p>
                  {chineseMode !== "none" && currentSlide.hintZh && (
                    <p className="opacity-90">{currentSlide.hintZh}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 3. NAVIGATION CONTROLS BAR */}
        <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between gap-2">
          {/* Left Controls: Previous & Restart */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevSlide}
              disabled={currentSlideIndex === 0}
              className="gap-1 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleRestart}
              className="h-9 sm:h-10 px-2.5 text-xs text-muted-foreground hover:text-foreground hidden sm:flex items-center gap-1"
              title="Restart from Slide 1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart</span>
            </Button>
          </div>

          {/* Center: Keyboard Shortcut Hint */}
          <div className="text-xs text-muted-foreground hidden md:block">
            Press <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[10px]">←</kbd> /{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[10px]">→</kbd> or{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-[10px]">Space</kbd>
          </div>

          {/* Right Controls: Next or Complete / Next Lesson */}
          {currentSlideIndex < totalSlides - 1 ? (
            <Button
              onClick={goToNextSlide}
              className="gap-1 text-xs sm:text-sm h-9 sm:h-10 px-4 sm:px-5 bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs font-semibold"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/grammar/${lesson.categoryId}/${lesson.subcategoryId}`}
                onClick={() => {
                  recordLessonCompletion({
                    lessonId: lesson.id,
                    categoryId: lesson.categoryId,
                    subcategoryId: lesson.subcategoryId,
                    completedAt: new Date().toISOString(),
                    score: 100,
                  });
                  addXp(50);
                }}
              >
                <Button className="gap-1.5 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs font-bold">
                  <Trophy className="w-4 h-4" />
                  <span>Mark Complete!</span>
                </Button>
              </Link>

              {lesson.nextLesson && (
                <Link
                  href={lesson.nextLesson.href}
                  onClick={() => {
                    recordLessonCompletion({
                      lessonId: lesson.id,
                      categoryId: lesson.categoryId,
                      subcategoryId: lesson.subcategoryId,
                      completedAt: new Date().toISOString(),
                      score: 100,
                    });
                    addXp(50);
                  }}
                >
                  <Button className="gap-1.5 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4 bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs font-bold">
                    <span>Next: {lesson.nextLesson.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
