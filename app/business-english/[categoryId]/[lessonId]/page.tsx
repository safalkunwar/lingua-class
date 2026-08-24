"use client";

import { StudentSidebar } from "@/components/layout/sidebar";
import { businessEnglishData } from "@/data/business-english";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Volume2, ChevronLeft, CheckCircle2 } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BusinessLessonPage() {
  const params = useParams<{ categoryId: string; lessonId: string }>();
  const lesson = businessEnglishData.lessons.find((l) => l.id === params.lessonId && l.categoryId === params.categoryId);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!lesson) {
    notFound();
  }

  const category = businessEnglishData.categories.find((c) => c.id === lesson.categoryId);

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link href={`/business-english/${lesson.categoryId}`}>
              <Button variant="ghost">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to {category?.title || "Category"}
              </Button>
            </Link>
            <Badge variant="outline" className="text-sm">{lesson.level}</Badge>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{lesson.title}</h1>
            <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-3">{lesson.titleZh}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{lesson.level}</Badge>
              <Badge variant="outline">Scenario-based</Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200 dark:border-indigo-800"
          >
            <h2 className="text-xl font-bold mb-3">📋 Situation</h2>
            <p className="text-base mb-2">{lesson.situation}</p>
            <p className="text-sm text-muted-foreground">{lesson.situationZh}</p>
            <div className="mt-4 p-4 bg-white/60 dark:bg-black/20 rounded-lg">
              <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Objective</p>
              <p className="text-sm mb-1">{lesson.objective}</p>
              <p className="text-xs text-muted-foreground">{lesson.objectiveZh}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">🎯 Key Expressions</h2>
            <div className="space-y-3">
              {lesson.keyExpressions.map((expr, idx) => (
                <Card key={idx} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">&ldquo;{expr.en}&rdquo;</p>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => speakEnglish(expr.en)}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">{expr.zh}</p>
                      {expr.note && <p className="text-xs text-muted-foreground mt-1">{expr.note}</p>}
                    </div>
                    <Badge variant={expr.formality === "formal" ? "default" : expr.formality === "casual" ? "outline" : "secondary"}>
                      {expr.formality}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">📚 Vocabulary</h2>
            <div className="space-y-3">
              {lesson.vocabulary.map((word) => (
                <Card key={word.id} className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{word.word}</h3>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => speakEnglish(word.word)}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">{word.partOfSpeech} | {word.pronunciation}</p>
                    </div>
                    <Badge variant="outline">{word.level}</Badge>
                  </div>
                  <p className="text-sm mb-2">{word.meaning}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-2">{word.chinese}</p>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">Business Example</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm italic">&ldquo;{word.example}&rdquo;</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 shrink-0"
                        onClick={() => speakEnglish(word.example)}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{word.exampleZh}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">💬 Examples</h2>
            <div className="space-y-3">
              {lesson.examples.map((ex, idx) => (
                <Card key={idx} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">&ldquo;{ex.en}&rdquo;</p>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => speakEnglish(ex.en)}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">{ex.zh}</p>
                      {ex.note && <p className="text-xs text-muted-foreground mt-1">{ex.note}</p>}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">⚠️ Common Mistakes</h2>
              <div className="space-y-3">
                {lesson.commonMistakes.map((mistake, idx) => (
                  <Card key={idx} className="p-4 border-red-200 dark:border-red-800">
                    <p className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">❌ {mistake.mistake}</p>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">✅ {mistake.correction}</p>
                    <p className="text-xs text-muted-foreground">{mistake.explanation}</p>
                    <p className="text-xs text-muted-foreground">{mistake.explanationZh}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">🎯 Practice</h2>
            <div className="space-y-4">
              {lesson.practice.map((exercise, idx) => (
                <Card key={idx} className="p-5">
                  <p className="font-medium mb-2">{exercise.question}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exercise.questionZh}</p>
                  {exercise.type === "multiple-choice" && exercise.options && (
                    <div className="space-y-2">
                      {exercise.options.map((opt, optIdx) => (
                        <Button
                          key={optIdx}
                          variant={selectedOption === optIdx ? (exercise.correct === optIdx ? "default" : "destructive") : "outline"}
                          className="w-full justify-start"
                          onClick={() => {
                            setSelectedOption(optIdx);
                            setShowAnswer(true);
                          }}
                        >
                          {opt.en}
                          {showAnswer && exercise.correct === optIdx && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                        </Button>
                      ))}
                    </div>
                  )}
                  {exercise.type === "fill-blank" && (
                    <Input
                      placeholder="Type your answer..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && (e.target as HTMLInputElement).value.toLowerCase() === (exercise.correct as string)?.toLowerCase()) {
                          alert("Correct!");
                        }
                      }}
                    />
                  )}
                  {exercise.type === "roleplay" && (
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm mb-2">{exercise.question}</p>
                      <p className="text-xs text-muted-foreground mb-3">{exercise.questionZh}</p>
                      {exercise.partnerLine && (
                        <p className="text-sm italic text-muted-foreground">Partner: {exercise.partnerLine}</p>
                      )}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>

          {lesson.roleplay && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">🎭 Roleplay</h2>
              <Card className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {lesson.roleplay.roles.map((role) => (
                    <Badge key={role} variant="default">{role}</Badge>
                  ))}
                </div>
                <p className="text-sm mb-1">{lesson.roleplay.scenario}</p>
                <p className="text-xs text-muted-foreground mb-3">{lesson.roleplay.scenarioZh}</p>
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Objectives</p>
                  <ul className="list-disc list-inside text-sm">
                    {lesson.roleplay.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Useful Phrases</p>
                  <div className="flex flex-wrap gap-1">
                    {lesson.roleplay.usefulPhrases.map((phrase, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{phrase}</Badge>
                    ))}
                  </div>
                </div>
                {lesson.roleplay.partnerLines.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Partner Lines</p>
                    <div className="space-y-1">
                      {lesson.roleplay.partnerLines.map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground italic">"{line}"</p>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          )}

          {lesson.teacherPanel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">👩‍🏫 Teacher Panel</h2>
              <Card className="p-5">
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Objectives</p>
                  <ul className="list-disc list-inside text-sm">
                    {lesson.teacherPanel.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Warm-Up</p>
                  <p className="text-sm">{lesson.teacherPanel.warmUp}</p>
                  <p className="text-xs text-muted-foreground">{lesson.teacherPanel.warmUpZh}</p>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Drill</p>
                  <p className="text-sm">{lesson.teacherPanel.drill}</p>
                  <p className="text-xs text-muted-foreground">{lesson.teacherPanel.drillZh}</p>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Discussion Questions</p>
                  <ul className="list-disc list-inside text-sm">
                    {lesson.teacherPanel.discussionQuestions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Homework</p>
                  <p className="text-sm">{lesson.teacherPanel.homework}</p>
                  <p className="text-xs text-muted-foreground">{lesson.teacherPanel.homeworkZh}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Extension</p>
                  <p className="text-sm">{lesson.teacherPanel.extension}</p>
                  <p className="text-xs text-muted-foreground">{lesson.teacherPanel.extensionZh}</p>
                </div>
              </Card>
            </motion.div>
          )}

          <div className="pt-8 border-t mt-8">
            <Link href={`/business-english/${lesson.categoryId}`}>
              <Button variant="ghost">← Back to {category?.title || "Category"}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
