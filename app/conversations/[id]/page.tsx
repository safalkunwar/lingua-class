"use client";

import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { conversations } from "@/data/conversations";
import { use } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeft,
  MessageCircle,
  Clock,
  Volume2,
  PenTool,
  BookOpen,
  Lightbulb,
  Users,
  Mic,
  BookMarked,
  Target,
  Sparkles,
  HelpCircle,
  ClipboardList,
  RefreshCw,
  Laugh,
  Palette,
} from "lucide-react";
import { useState } from "react";

export default function ConversationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const topic = conversations.find((c) => c.id === resolvedParams.id);

  if (!topic) {
    notFound();
  }

  const topicIndex = conversations.findIndex((c) => c.id === resolvedParams.id);
  const prevTopic = topicIndex > 0 ? conversations[topicIndex - 1] : null;
  const nextTopic = topicIndex < conversations.length - 1 ? conversations[topicIndex + 1] : null;

  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("conversation");

  const sections = [
    { id: "warmup", label: "Warm-Up", icon: <Sparkles className="w-4 h-4" /> },
    { id: "vocabulary", label: "Vocabulary", icon: <BookOpen className="w-4 h-4" /> },
    { id: "expressions", label: "Daily Expressions", icon: <BookMarked className="w-4 h-4" /> },
    { id: "chunks", label: "Native Chunks", icon: <MessageCircle className="w-4 h-4" /> },
    { id: "conversation", label: "Conversation", icon: <MessageCircle className="w-4 h-4" /> },
    { id: "grammar", label: "Grammar", icon: <PenTool className="w-4 h-4" /> },
    { id: "pronunciation", label: "Pronunciation", icon: <Volume2 className="w-4 h-4" /> },
    { id: "shadowing", label: "Shadowing", icon: <Volume2 className="w-4 h-4" /> },
    { id: "speaking", label: "Speaking Practice", icon: <Mic className="w-4 h-4" /> },
    { id: "roleplay", label: "Role Play", icon: <Users className="w-4 h-4" /> },
    { id: "homework", label: "Homework", icon: <ClipboardList className="w-4 h-4" /> },
    { id: "quiz", label: "Quiz", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "review", label: "Review", icon: <RefreshCw className="w-4 h-4" /> },
    { id: "humor", label: "Humor", icon: <Laugh className="w-4 h-4" /> },
  ];

  const getRegisterBadgeColor = (level: string) => {
    switch (level) {
      case "formal": return "bg-blue-100 text-blue-800 border-blue-200";
      case "neutral": return "bg-gray-100 text-gray-800 border-gray-200";
      case "casual": return "bg-green-100 text-green-800 border-green-200";
      case "slang": return "bg-purple-100 text-purple-800 border-purple-200";
      case "very-informal": return "bg-orange-100 text-orange-800 border-orange-200";
      case "rude": return "bg-red-100 text-red-800 border-red-200";
      case "vulgar": return "bg-rose-900 text-rose-100 border-rose-700";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link href="/conversations">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Conversations
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="text-6xl">{topic.emoji}</div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {topic.title}
              </h1>
              <p className="mt-1 text-muted-foreground">{topic.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary">{topic.level}</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {topic.estimatedTime}
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Register Markers */}
        {topic.registerMarkers && topic.registerMarkers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-6"
          >
            <Card className="p-4">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Palette className="w-5 h-5 text-indigo-500" />
                Register Markers
              </h2>
              <p className="text-sm text-muted-foreground mb-3">
                Color-coded formality levels used in this lesson:
              </p>
              <div className="flex flex-wrap gap-2">
                {topic.registerMarkers.map((marker) => (
                  <div
                    key={marker.level}
                    className={`px-3 py-1.5 rounded-full border text-xs font-medium ${getRegisterBadgeColor(marker.level)}`}
                    title={marker.description}
                  >
                    {marker.label}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Section Navigation */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSection(section.id)}
                className="gap-1.5 whitespace-nowrap"
              >
                {section.icon}
                {section.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {activeSection === "warmup" && topic.warmUp && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-500" />
                  {topic.warmUp.title}
                </h2>
                <p className="text-foreground leading-relaxed">{topic.warmUp.content}</p>
                <p className="text-sm text-muted-foreground mt-3">{topic.warmUp.contentZh}</p>
              </Card>
            )}

            {activeSection === "vocabulary" && topic.vocabulary && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  Vocabulary
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {topic.vocabulary.map((word, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <div className="flex items-start justify-between mb-1">
                        <p className="font-semibold text-lg">{word.word}</p>
                        <Badge className={`text-xs ${getRegisterBadgeColor(word.register)}`}>
                          {word.register}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{word.phonetic}</p>
                      <p className="text-indigo-600 dark:text-indigo-400 mt-1">{word.chinese}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{word.pinyin}</p>
                      <p className="text-sm mt-2">{word.definitionEn}</p>
                      <p className="text-xs text-muted-foreground">{word.definitionZh}</p>
                      <p className="text-sm italic mt-2 text-foreground/80">"{word.exampleEn}"</p>
                      <p className="text-xs text-muted-foreground">{word.exampleZh}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeSection === "expressions" && topic.dailyExpressions && (
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-indigo-500" />
                    {topic.dailyExpressions.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master these expressions with full context, usage rules, and practice.
                  </p>
                </Card>
                {topic.dailyExpressions.items.map((expr, i) => (
                  <motion.div
                    key={expr.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">"{expr.expression}"</h3>
                        <Badge className={`${getRegisterBadgeColor(expr.register)}`}>
                          {expr.register}
                        </Badge>
                      </div>
                      <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-1">{expr.chinese}</p>
                      <p className="text-sm text-muted-foreground mb-3">{expr.pinyin}</p>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">Meaning</p>
                            <p className="text-sm">{expr.meaning}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">When to Use</p>
                            <p className="text-sm">{expr.whenToUse}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">When NOT to Use</p>
                            <p className="text-sm text-red-700 dark:text-red-300">{expr.whenNotToUse}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">Native Frequency</p>
                            <p className="text-sm">{expr.nativeFrequency}</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">Pronunciation</p>
                            <p className="text-sm font-mono">{expr.pronunciation}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">Memory Trick</p>
                            <p className="text-sm">{expr.memoryTrick}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">Funny Example</p>
                            <p className="text-sm italic">"{expr.funnyExample}"</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">Related Expressions</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {expr.relatedExpressions.map((rel, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">{rel}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {expr.commonMistakes && expr.commonMistakes.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <p className="text-xs font-medium text-muted-foreground uppercase">Common Mistakes</p>
                          {expr.commonMistakes.map((mistake, idx) => (
                            <div key={idx} className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                              <p className="text-sm text-red-700 dark:text-red-300 line-through">{mistake.mistake}</p>
                              <p className="text-sm text-green-700 dark:text-green-300 font-semibold mt-1">{mistake.correction}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {expr.miniQuiz && expr.miniQuiz.length > 0 && (
                        <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                          <p className="text-sm font-medium mb-2">Mini Quiz</p>
                          {expr.miniQuiz.map((q, idx) => (
                            <div key={idx}>
                              <p className="text-sm mb-2">{q.question}</p>
                              <div className="flex flex-wrap gap-2">
                                {q.options.map((opt, optIdx) => (
                                  <Badge key={optIdx} variant={q.correct === optIdx ? "default" : "outline"}>
                                    {opt}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {activeSection === "chunks" && topic.nativeChunks && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-indigo-500" />
                  Native Speaker Chunks
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {topic.nativeChunks.map((chunk, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">{chunk.chunk}</p>
                        <Badge className={`text-xs ${getRegisterBadgeColor(chunk.register)}`}>
                          {chunk.register}
                        </Badge>
                      </div>
                      <p className="text-foreground mt-1">{chunk.meaning}</p>
                      <p className="text-sm text-muted-foreground mt-1 italic">"{chunk.example}"</p>
                      <p className="text-xs text-muted-foreground mt-1">Context: {chunk.context}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeSection === "conversation" && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-indigo-500" />
                  Conversation
                </h2>
                <div className="space-y-4">
                  {topic.conversation.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.02 * i }}
                      className="flex gap-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-lg font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                        {line.speaker[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-sm text-indigo-600 dark:text-indigo-400">
                            {line.speaker}
                          </p>
                          {line.register && (
                            <Badge className={`text-xs ${getRegisterBadgeColor(line.register)}`}>
                              {line.register}
                            </Badge>
                          )}
                        </div>
                        <p className="text-foreground mt-1">{line.line}</p>
                        {line.note && (
                          <p className="text-xs text-muted-foreground mt-1 italic">Note: {line.note}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            )}

            {activeSection === "grammar" && topic.grammarInContext && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-indigo-500" />
                  Grammar in Context
                </h2>
                <div className="space-y-6">
                  {topic.grammarInContext.map((grammar, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-semibold mb-2">{grammar.title}</h3>
                      <p className="text-muted-foreground mb-3">{grammar.explanation}</p>
                      <div className="space-y-2">
                        {grammar.examples.map((example, j) => (
                          <div key={j} className="p-3 bg-muted/50 rounded-lg italic">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeSection === "pronunciation" && topic.pronunciation && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-indigo-500" />
                  Pronunciation
                </h2>
                <div className="space-y-4">
                  {topic.pronunciation.map((tip, i) => (
                    <div key={i} className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl">
                      <p className="font-semibold text-amber-700 dark:text-amber-300">{tip.tip}</p>
                      <p className="text-sm text-muted-foreground mt-1">Example: "{tip.example}"</p>
                      {tip.reduction && (
                        <p className="text-xs text-muted-foreground mt-1">Reduction: {tip.reduction}</p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeSection === "shadowing" && topic.shadowing && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-indigo-500" />
                  Shadowing Practice
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Listen and repeat. Focus on the emphasized words/phrases in bold.
                </p>
                <ul className="space-y-3">
                  {topic.shadowing.map((line, i) => (
                    <li key={i} className="p-4 bg-muted/50 rounded-lg">
                      <p className="italic text-lg">
                        {line.line.split(new RegExp(`(${line.emphasis})`, 'gi')).map((part, idx) =>
                          part.toLowerCase() === line.emphasis.toLowerCase() ? (
                            <strong key={idx} className="text-indigo-600 dark:text-indigo-400">{part}</strong>
                          ) : part
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {activeSection === "speaking" && topic.speakingPractice && (
              <Card className="p-6 border-2 border-indigo-200">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Mic className="w-5 h-5 text-indigo-500" />
                  Speaking Practice
                </h2>
                <p className="text-lg mb-4">{topic.speakingPractice.instruction}</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                  {topic.speakingPractice.hints.map((hint, i) => (
                    <li key={i}>{hint}</li>
                  ))}
                </ul>
                {topic.speakingPractice.followUpQuestions && topic.speakingPractice.followUpQuestions.length > 0 && (
                  <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                    <p className="text-sm font-medium mb-2">Follow-Up Questions</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {topic.speakingPractice.followUpQuestions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            )}

            {activeSection === "roleplay" && topic.rolePlay && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-500" />
                  Role-Play Practice
                </h2>
                <p className="font-semibold mb-2">{topic.rolePlay.scenario}</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                  {topic.rolePlay.prompts.map((prompt, j) => (
                    <li key={j}>{prompt}</li>
                  ))}
                </ul>
                {topic.rolePlay.partnerLines && topic.rolePlay.partnerLines.length > 0 && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-2">Partner Lines (for practice)</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {topic.rolePlay.partnerLines.map((line, j) => (
                        <li key={j}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            )}

            {activeSection === "homework" && topic.homework && (
              <Card className="p-6 border-2 border-amber-200">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-indigo-500" />
                  Homework
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Task</p>
                    <p className="text-lg font-semibold">{topic.homework.task}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Description</p>
                    <p className="text-sm">{topic.homework.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Due</p>
                    <p className="text-sm text-amber-700 dark:text-amber-300">{topic.homework.dueText}</p>
                  </div>
                </div>
              </Card>
            )}

            {activeSection === "quiz" && topic.quiz && (
              <div className="space-y-6">
                {topic.quiz.map((q, idx) => {
                  const isAnswered = quizAnswers[q.id] !== undefined;
                  const selectedOption = isAnswered ? (topic.quiz as NonNullable<typeof topic.quiz>)[idx].options[quizAnswers[q.id]] : null;
                  const isCorrect = selectedOption?.correct || false;

                  return (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <div className="mb-4">
                        <p className="font-medium">
                          {idx + 1}. {q.question}
                        </p>
                        <p className="text-xs text-muted-foreground">{q.questionZh}</p>
                      </div>
                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => {
                          const isSelected = quizAnswers[q.id] === optIdx;
                          const optionCorrect = option.correct;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (!isAnswered) {
                                  setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                }
                              }}
                              disabled={isAnswered}
                              className={`w-full rounded-lg border p-3 text-left transition-all ${
                                isSelected && optionCorrect
                                  ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/20"
                                  : isSelected && !optionCorrect
                                  ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950/20"
                                  : optionCorrect && isAnswered
                                  ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/20"
                                  : "border-border bg-muted/30 hover:border-indigo-200"
                              }`}
                            >
                              <p className="text-sm">{option.label}</p>
                              <p className="text-xs text-muted-foreground">{option.labelZh}</p>
                            </button>
                          );
                        })}
                      </div>
                      {isAnswered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 rounded-lg border border-indigo-200 bg-indigo-50 p-3 dark:border-indigo-700 dark:bg-indigo-950/20"
                        >
                          <p className="text-sm text-indigo-900 dark:text-indigo-100">
                            <strong>Explanation:</strong> {q.explanation}
                          </p>
                          <p className="text-xs text-indigo-800 dark:text-indigo-200">
                            {q.explanationZh}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeSection === "review" && topic.review && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-indigo-500" />
                  Review
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Test yourself on the key points from this lesson.
                </p>
                <div className="space-y-4">
                  {topic.review.map((item, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <p className="font-medium mb-2">{item.prompt}</p>
                      <details className="cursor-pointer">
                        <summary className="text-sm text-indigo-600 dark:text-indigo-400">Show Answer</summary>
                        <p className="text-sm mt-2 p-2 bg-indigo-50 dark:bg-indigo-950/20 rounded">{item.answer}</p>
                      </details>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeSection === "humor" && topic.humorNotes && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Laugh className="w-5 h-5 text-indigo-500" />
                  Humor Notes
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Humor helps you remember. Here are some funny moments from this lesson.
                </p>
                <div className="space-y-4">
                  {topic.humorNotes.map((note, i) => (
                    <div key={i} className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl">
                      <p className="text-xs font-medium text-amber-700 dark:text-amber-300 mb-1">Context: {note.context}</p>
                      <p className="text-sm italic mb-2">"{note.punchline}"</p>
                      <p className="text-xs text-muted-foreground">{note.explanation}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-between">
          {prevTopic ? (
            <Link href={`/conversations/${prevTopic.id}`}>
              <Button variant="outline">
                <ChevronLeft className="w-4 h-4 mr-2" />
                {prevTopic.emoji} {prevTopic.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {nextTopic ? (
            <Link href={`/conversations/${nextTopic.id}`}>
              <Button variant="outline">
                {nextTopic.emoji} {nextTopic.title}
                <ChevronLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
