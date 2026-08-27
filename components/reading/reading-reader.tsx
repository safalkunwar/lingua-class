"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReadingPassage } from "@/types/reading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import {
  Volume2,
  Volume1,
  ChevronDown,
  ChevronUp,
  BookOpen,
  MessageSquare,
  PenTool,
  Lightbulb,
  Target,
  GraduationCap,
  Maximize2,
  Minimize2,
  Languages,
  Sparkles,
  Brain,
  MessageCircle,
} from "lucide-react";

type TabId = "before" | "read" | "vocabulary" | "questions" | "grammar" | "collocations" | "strategies" | "think" | "speak" | "write" | "teacher";

export function ReadingReader({ passage }: { passage: ReadingPassage }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showChineseVocab, setShowChineseVocab] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [focusMode, setFocusMode] = useState(false);
  const [teacherMode, setTeacherMode] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("read");
  const [scores, setScores] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const paragraphs = passage.passage.split("\n\n").filter(Boolean);
  const totalQuestions = passage.questions.length;

  const handleScore = (id: string, value: number) => {
    setScores((prev) => ({ ...prev, [id]: value }));
  };

  const overallScore = totalQuestions > 0 ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / totalQuestions) : 0;

  return (
    <div className={`mx-auto w-full max-w-5xl ${focusMode ? "fixed inset-0 z-50 bg-background overflow-y-auto" : ""}`}>
      {focusMode && (
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/95 px-4 py-3 backdrop-blur">
          <span className="font-semibold">Focus Reading</span>
          <Button variant="ghost" size="sm" onClick={() => setFocusMode(false)}><Minimize2 className="h-4 w-4 mr-2" /> Exit Focus</Button>
        </div>
      )}

      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{passage.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{passage.author} · {passage.source}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="secondary">{passage.level}</Badge>
              <Badge variant="outline">{passage.estimatedMinutes} min read</Badge>
              <Badge variant="outline">{passage.wordCount} words</Badge>
              <Badge variant="outline">{passage.theme}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setFocusMode((f) => !f)}>{focusMode ? <Minimize2 className="h-4 w-4 mr-2" /> : <Maximize2 className="h-4 w-4 mr-2" />} {focusMode ? "Exit Focus" : "Focus Mode"}</Button>
            <Button variant="ghost" size="sm" onClick={() => setTeacherMode((t) => !t)}><GraduationCap className="h-4 w-4 mr-2" /> {teacherMode ? "Student View" : "Teacher"}</Button>
          </div>
        </motion.div>

        {!focusMode && (
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabId)} className="w-full">
            <TabsList className="flex-wrap justify-center gap-2">
              {[
                { id: "before", label: "Before You Read", icon: BookOpen },
                { id: "read", label: "Reading", icon: BookOpen },
                { id: "vocabulary", label: `Vocabulary (${passage.vocabulary.length})`, icon: Sparkles },
                { id: "questions", label: `Questions (${totalQuestions})`, icon: MessageSquare },
                { id: "grammar", label: "Grammar", icon: PenTool },
                { id: "collocations", label: "Collocations", icon: MessageCircle },
                { id: "strategies", label: "Strategies", icon: Target },
                { id: "think", label: "Think", icon: Brain },
                { id: "speak", label: "Speak", icon: Volume2 },
                { id: "write", label: "Write", icon: PenTool },
                ...(teacherMode ? [{ id: "teacher", label: "Teacher Guide", icon: GraduationCap }] : []),
              ].map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} data-active="bg-indigo-500 data-active:text-white data-active:border-indigo-500">
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="before" className="mt-6 space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Before You Read</h2>
                <p className="text-sm text-muted-foreground mb-4">Think about these questions before starting. There are no right or wrong answers.</p>
                <ul className="space-y-3">
                  {passage.questions.slice(0, 2).map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm"><span className="text-primary font-bold">{idx + 1}.</span> {q.chinese ? <>{q.question} <span className="text-muted-foreground">({q.chinese})</span></> : q.question}</li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="read" className="mt-6 space-y-4">
              <Card className="p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => speakEnglish(passage.passage)}><Volume2 className="h-4 w-4 mr-2" /> Listen English</Button>
                    <Button variant="outline" size="sm" onClick={() => speakChinese(passage.translation)}><Volume1 className="h-4 w-4 mr-2" /> Listen Chinese</Button>
                    <Button variant="ghost" size="sm" onClick={() => setShowTranslation((s) => !s)}><Languages className="h-4 w-4 mr-2" /> {showTranslation ? "Hide Translation" : "Show Translation"}</Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setFontSize((f) => Math.max(14, f - 2))}>A-</Button>
                    <span className="text-xs text-muted-foreground w-12 text-center">{fontSize}px</span>
                    <Button variant="ghost" size="sm" onClick={() => setFontSize((f) => Math.min(28, f + 2))}>A+</Button>
                  </div>
                </div>

                <div className="space-y-6">
                  {paragraphs.map((para, idx) => (
                    <div key={idx}>
                      <p style={{ fontSize, lineHeight }} className="text-foreground/90">
                        {para.split(/(\s+)/).map((word, i) => {
                          const clean = word.replace(/[^a-zA-Z'-]/g, "");
                          const vocab = passage.vocabulary.find((v) => v.word.toLowerCase() === clean.toLowerCase());
                          if (vocab) {
                            return (
                              <span key={i} className="relative inline">
                                <span className="border-b-2 border-indigo-400/60 cursor-pointer hover:text-primary" title={vocab.meaning}>{word}</span>
                              </span>
                            );
                          }
                          return <span key={i}>{word}</span>;
                        })}
                      </p>
                      {showTranslation && (
                        <p className="mt-2 text-sm text-muted-foreground border-l-2 border-indigo-200 pl-3" style={{ fontSize: Math.max(14, fontSize - 2), lineHeight }}>
                          {passage.translation.split("\n\n")[idx] || ""}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {showTranslation && (
                  <div className="mt-6 rounded-lg bg-muted/30 p-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Full Chinese Translation</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{passage.translation}</p>
                  </div>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="vocabulary" className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {passage.vocabulary.map((item, idx) => (
                  <Card key={idx} className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{item.word}</h3>
                        <p className="text-xs text-muted-foreground">{item.partOfSpeech}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => speakEnglish(item.word)}><Volume2 className="h-4 w-4" /></Button>
                    </div>
                    <p className="text-sm mb-1">{item.meaning}</p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-2">{item.chinese}</p>
                    <p className="text-sm italic mb-2">&ldquo;{item.example}&rdquo;</p>
                    <p className="text-xs text-muted-foreground mb-3">{item.exampleChinese}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.collocations.map((col, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{col}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="questions" className="mt-6 space-y-6">
              {passage.questions.map((q, idx) => (
                <Card key={q.id} className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs capitalize">{q.type.replace(/-/g, " ")}</Badge>
                    <span className="text-xs text-muted-foreground">Question {idx + 1} of {totalQuestions}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{q.question}</h3>
                  {q.chinese && <p className="text-sm text-muted-foreground mb-3">{q.chinese}</p>}
                  {q.options && (
                    <div className="space-y-2 mb-4">
                      {q.options.map((opt, oi) => (
                        <label key={oi} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input type="radio" name={q.id} value={oi} className="h-4 w-4" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}
                  <details className="group">
                    <summary className="cursor-pointer text-sm font-medium text-primary">Show Explanation</summary>
                    <p className="mt-2 text-sm text-muted-foreground">{q.explanation}</p>
                    {q.chineseExplanation && <p className="text-xs text-muted-foreground mt-1">{q.chineseExplanation}</p>}
                  </details>
                  {q.type !== "critical-thinking" && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Your confidence:</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" onClick={() => handleScore(q.id, star)} className={`text-lg ${scores[q.id] >= star ? "text-amber-500" : "text-muted-foreground"}`}>★</button>
                      ))}
                    </div>
                  )}
                </Card>
              ))}

              {submitted && (
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-2">Your Reading Profile</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="text-center"><div className="text-2xl font-extrabold">{overallScore}/5</div><div className="text-xs text-muted-foreground">Confidence</div></div>
                    <div className="text-center"><div className="text-2xl font-extrabold">{passage.level}</div><div className="text-xs text-muted-foreground">Level</div></div>
                    <div className="text-center"><div className="text-2xl font-extrabold">{passage.wordCount}</div><div className="text-xs text-muted-foreground">Words</div></div>
                    <div className="text-center"><div className="text-2xl font-extrabold">{passage.estimatedMinutes}m</div><div className="text-xs text-muted-foreground">Read time</div></div>
                  </div>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="grammar" className="mt-6 space-y-4">
              {passage.grammarPoints.map((gp, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold mb-2">{gp.title}</h3>
                  <p className="text-sm mb-2">{gp.explanation}</p>
                  <p className="text-sm italic mb-2">{gp.example}</p>
                  <p className="text-xs text-muted-foreground">{gp.chineseExplanation}</p>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="collocations" className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {passage.collocations.map((col, idx) => (
                  <Card key={idx} className="p-5">
                    <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">{col.phrase}</h3>
                    <p className="text-sm mb-1">{col.meaning}</p>
                    <p className="text-xs text-muted-foreground mb-2">{col.chinese}</p>
                    <p className="text-sm italic">&ldquo;{col.example}&rdquo;</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="strategies" className="mt-6 space-y-4">
              {passage.readingStrategies.map((strategy, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold mb-2">{strategy.title}</h3>
                  <p className="text-sm mb-2">{strategy.description}</p>
                  <p className="text-xs text-muted-foreground">Tip: {strategy.tip}</p>
                </Card>
              ))}
              <Card className="p-6">
                <h3 className="font-bold mb-3">Reading Tips for Chinese Learners</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {Object.entries(passage.tips).map(([key, tip]) => (
                    <li key={key}><span className="font-medium text-foreground">{key.replace("tip", "Tip ")}.</span> {tip}</li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="think" className="mt-6 space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Think About It</h2>
                <ul className="space-y-3">
                  {passage.discussionQuestions.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm"><span className="text-primary font-bold">{idx + 1}.</span> {q}</li>
                  ))}
                </ul>
              </Card>
              {passage.authorChoices.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-bold mb-3">Author&apos;s Choice</h3>
                  {passage.authorChoices.map((choice, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="text-sm font-medium">&ldquo;{choice.phrase}&rdquo;</p>
                      <p className="text-xs text-muted-foreground mb-1">Instead of: &ldquo;{choice.alternative}&rdquo;</p>
                      <p className="text-sm mb-1">{choice.explanation}</p>
                      <Badge variant="outline" className="text-xs">{choice.technique}</Badge>
                    </div>
                  ))}
                </Card>
              )}
              {passage.sentenceBreakdowns.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-bold mb-3">Sentence Breakdown</h3>
                  {passage.sentenceBreakdowns.map((sb, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="text-sm font-medium mb-1">&ldquo;{sb.sentence}&rdquo;</p>
                      <p className="text-xs text-muted-foreground mb-1">{sb.chineseExplanation}</p>
                      {sb.note && <p className="text-xs text-muted-foreground italic">{sb.note}</p>}
                    </div>
                  ))}
                </Card>
              )}
            </TabsContent>

            <TabsContent value="speak" className="mt-6 space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-2">{passage.speakingPrompt.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{passage.speakingPrompt.prompt}</p>
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Useful expressions</p>
                  <ul className="flex flex-wrap gap-2">
                    {passage.speakingPrompt.usefulExpressions.map((expr, idx) => (
                      <li key={idx} className="text-sm rounded-lg bg-muted/50 px-3 py-1">{expr}</li>
                    ))}
                  </ul>
                </div>
                <Textarea placeholder="Practice your answer here..." className="min-h-32" />
              </Card>
            </TabsContent>

            <TabsContent value="write" className="mt-6 space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-2">{passage.writingPrompt.title}</h2>
                <p className="text-sm text-muted-foreground mb-1">{passage.writingPrompt.prompt}</p>
                <p className="text-xs text-muted-foreground mb-4">Target: {passage.writingPrompt.wordCount}</p>
                <Textarea placeholder="Start writing..." className="min-h-48" />
              </Card>
            </TabsContent>

            {teacherMode && (
              <TabsContent value="teacher" className="mt-6 space-y-4">
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-2">Teacher Guide</h2>
                  <p className="text-sm text-muted-foreground mb-4">{passage.teacherGuide.objective}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Warm-up</p>
                      <ul className="list-disc pl-4 text-sm space-y-1">{passage.teacherGuide.warmUp.map((w, i) => <li key={i}>{w}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Key Vocabulary</p>
                      <div className="flex flex-wrap gap-1.5">{passage.teacherGuide.keyVocabulary.map((v, i) => <Badge key={i} variant="secondary" className="text-xs">{v}</Badge>)}</div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Grammar Focus</p>
                      <div className="flex flex-wrap gap-1.5">{passage.teacherGuide.grammarFocus.map((g, i) => <Badge key={i} variant="outline" className="text-xs">{g}</Badge>)}</div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Reading Strategy</p>
                      <p className="text-sm">{passage.teacherGuide.readingStrategy}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Lesson Plan</p>
                    <div className="space-y-1">
                      {passage.teacherGuide.lessonPlan.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm"><span className="text-xs font-mono text-muted-foreground w-16">{step.time}</span><span>{step.activity}</span></div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        )}
      </div>
    </div>
  );
}
