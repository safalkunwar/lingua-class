"use client";

import { ConversationTopic, ChineseLine, LearningObjective } from "@/types/conversations";
import { DialogueBlock } from "@/components/conversations/DialogueBlock";
import { VocabularySection } from "@/components/conversations/VocabularySection";
import { GrammarSection } from "@/components/conversations/GrammarSection";
import { PracticeSection } from "@/components/conversations/PracticeSection";
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart3, Target, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonLayoutProps {
  topic: ConversationTopic;
  chineseTranslation: ChineseLine[];
  currentLineIndex: number;
  isPlaying: boolean;
  showChinese: boolean;
  favorites: Set<string>;
  onToggleFavorite: (key: string) => void;
  onPlayEnglish: (text: string) => void;
  onPlayChinese: (text: string) => void;
  onCopy: (text: string) => void;
}

function SpeakerSide({ speaker }: { speaker: string }) {
  const isTeacher = ["Teacher", "Waiter", "Driver", "Agent"].includes(speaker);
  const isCustomer = ["Customer", "Passenger", "Jenny", "Sarah"].includes(speaker);

  if (isTeacher) return <span className="text-xs text-muted-foreground">👨‍🏫 Teacher</span>;
  if (isCustomer) return <span className="text-xs text-muted-foreground">👤 Customer</span>;
  return <span className="text-xs text-muted-foreground">{speaker}</span>;
}

export function LessonLayout({
  topic,
  chineseTranslation,
  currentLineIndex,
  isPlaying,
  showChinese,
  favorites,
  onToggleFavorite,
  onPlayEnglish,
  onPlayChinese,
  onCopy,
}: LessonLayoutProps) {
  const vocabulary = topic.vocabulary || topic.vocabularyPreview || [];
  const grammarPoints = (topic.grammarFocus || topic.grammarInContext || []).map((g) => ({
    title: g.title,
    explanation: g.explanation,
    explanationZh: g.explanationZh || "",
    examples: g.examples,
    examplesZh: g.examplesZh,
    miniExercise: g.miniExercise,
  }));
  const practiceActivities = topic.practiceActivities || [];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Lesson Header */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="text-5xl sm:text-6xl block mb-4">{topic.emoji}</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
          {topic.title}
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-4">
          {topic.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            {topic.level}
          </Badge>
          {topic.cefr && (
            <Badge variant="outline" className="text-sm px-3 py-1">
              CEFR {topic.cefr}
            </Badge>
          )}
          {topic.difficulty && (
            <Badge
              variant="outline"
              className={cn(
                "text-sm px-3 py-1",
                topic.difficulty === "beginner" && "bg-green-50 text-green-700 border-green-200",
                topic.difficulty === "elementary" && "bg-blue-50 text-blue-700 border-blue-200",
                topic.difficulty === "intermediate" && "bg-amber-50 text-amber-700 border-amber-200",
                topic.difficulty === "upper-intermediate" && "bg-orange-50 text-orange-700 border-orange-200",
                topic.difficulty === "advanced" && "bg-red-50 text-red-700 border-red-200"
              )}
            >
              {topic.difficulty}
            </Badge>
          )}
          <Badge variant="outline" className="text-sm px-3 py-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {topic.estimatedTime}
          </Badge>
          <Badge variant="outline" className="text-sm px-3 py-1 flex items-center gap-1">
            <BarChart3 className="w-3.5 h-3.5" />
            {topic.conversation.length} lines
          </Badge>
        </div>
      </div>

      {/* Learning Objectives */}
      {(topic.learningObjectives || topic.objectives) && (
        <section className="py-6 border-t border-b">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Learning Objectives</h2>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {(topic.learningObjectives || topic.objectives || []).map((obj, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-3 rounded-lg bg-muted/30 text-sm"
              >
                <span className="text-primary mt-0.5">✓</span>
                <span>{obj.objective}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Warm Up */}
      {topic.warmUp && (
        <section className="py-6 sm:py-8 border-b">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span>🔥</span> {topic.warmUp.title}
          </h2>
          <div className="p-4 rounded-xl bg-muted/30 border">
            <p className="text-sm mb-2">{topic.warmUp.content}</p>
            <p className="text-xs text-muted-foreground">{topic.warmUp.contentZh}</p>
          </div>
        </section>
      )}

      {/* Conversation Section */}
      <section className="py-8 sm:py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span>💬</span> Conversation
          </h2>
          <span className="text-sm text-muted-foreground">
            Scroll down to continue
          </span>
        </div>

        <div className="space-y-4">
          {topic.conversation.map((line, index) => {
            const chineseLine = chineseTranslation[index];
            const isFav = favorites.has(`${topic.id}-${index}`);

            return (
              <DialogueBlock
                key={index}
                line={line}
                chineseLine={chineseLine}
                index={index}
                topicId={topic.id}
                isCurrentLine={currentLineIndex === index}
                isPlaying={isPlaying && currentLineIndex === index}
                onPlayEnglish={onPlayEnglish}
                onPlayChinese={onPlayChinese}
                onToggleFavorite={onToggleFavorite}
                isFavorited={isFav}
                showChinese={showChinese}
                onCopy={onCopy}
              />
            );
          })}
        </div>
      </section>

      {/* Sentence Patterns */}
      {topic.sentencePatterns && topic.sentencePatterns.length > 0 && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🔑</span> Sentence Patterns
          </h2>
          <div className="space-y-4">
            {topic.sentencePatterns.map((pattern, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border bg-card"
              >
                <h3 className="font-semibold text-lg mb-2">&ldquo;{pattern.pattern}&rdquo;</h3>
                <p className="text-sm text-muted-foreground mb-1">{pattern.meaning}</p>
                <p className="text-xs text-muted-foreground mb-3">{pattern.meaningZh}</p>
                <p className="text-xs text-muted-foreground mb-3">{pattern.usage}</p>
                {pattern.variations.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {pattern.variations.map((v, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{v}</Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Useful Expressions */}
      {topic.usefulExpressions && topic.usefulExpressions.length > 0 && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>💡</span> Useful Expressions
          </h2>
          <div className="space-y-3">
            {topic.usefulExpressions.map((expr, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl border bg-card"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-base sm:text-lg">&ldquo;{expr.expression}&rdquo;</h3>
                  <span className="text-xs text-muted-foreground">{expr.formality}</span>
                </div>
                <p className="text-sm mb-1">{expr.meaning}</p>
                <p className="text-xs text-muted-foreground mb-3">{expr.meaningZh}</p>
                <p className="text-xs text-muted-foreground">{expr.usage}</p>
                {expr.alternatives && expr.alternatives.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {expr.alternatives.map((alt, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{alt}</Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Collocations and Chunks */}
      {topic.collocationsAndChunks && topic.collocationsAndChunks.length > 0 && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🧩</span> Collocations & Chunks
          </h2>
          <div className="grid gap-3">
            {topic.collocationsAndChunks.map((chunk, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border bg-card"
              >
                <h3 className="font-semibold text-base sm:text-lg">&ldquo;{chunk.chunk}&rdquo;</h3>
                <p className="text-sm text-muted-foreground mt-1">{chunk.meaning}</p>
                <p className="text-xs text-muted-foreground">{chunk.meaningZh}</p>
                {chunk.example && (
                  <p className="text-sm mt-2 p-2 rounded bg-muted/30 italic">
                    &ldquo;{chunk.example}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Vocabulary Section */}
      {vocabulary.length > 0 && (
        <VocabularySection
          words={vocabulary}
          title={topic.vocabularySection?.title || "Vocabulary"}
          onPlayAudio={onPlayEnglish}
          onCopy={onCopy}
        />
      )}

      {/* Grammar Section */}
      {grammarPoints.length > 0 && (
        <GrammarSection points={grammarPoints} />
      )}

      {/* Pronunciation Tips */}
      {(topic.pronunciation || topic.pronunciationTips) && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🗣️</span> Pronunciation Notes
          </h2>
          <div className="space-y-3">
            {(topic.pronunciation || topic.pronunciationTips || []).map((tip, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border bg-card"
              >
                <p className="text-sm font-medium mb-1">
                  {tip.tip || tip.example}
                </p>
                <p className="text-xs text-muted-foreground italic">
                  &ldquo;{tip.example || tip.tip}&rdquo;
                </p>
                {"exampleZh" in tip && tip.exampleZh && (
                  <p className="text-xs text-muted-foreground mt-1">{(tip as any).exampleZh}</p>
                )}
                {"reduction" in tip && tip.reduction && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Reduction: {tip.reduction}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cultural Notes */}
      {topic.culturalNotes && topic.culturalNotes.length > 0 && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🌍</span> Cultural Notes
          </h2>
          <div className="space-y-4">
            {topic.culturalNotes.map((note, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{note.icon || "💡"}</span>
                  <h3 className="font-semibold">{note.title}</h3>
                </div>
                <p className="text-sm mb-2">{note.content}</p>
                <p className="text-xs text-muted-foreground">{note.contentZh}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practice Activities */}
      {practiceActivities.length > 0 && (
        <PracticeSection
          activities={practiceActivities}
          onPlayAudio={onPlayEnglish}
        />
      )}

      {/* Shadowing Practice */}
      {topic.shadowing && topic.shadowing.length > 0 && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🎭</span> Shadowing Practice
          </h2>
          <div className="space-y-3">
            {topic.shadowing.map((line, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border bg-card"
              >
                <p className="text-sm mb-1">&ldquo;{line.line}&rdquo;</p>
                <p className="text-xs text-muted-foreground">
                  Emphasis: <span className="font-medium text-primary">{line.emphasis}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Speaking Practice */}
      {topic.speakingPractice && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🎤</span> Speaking Practice
          </h2>
          <div className="p-5 rounded-xl border bg-card">
            <p className="text-sm font-medium mb-3">{topic.speakingPractice.instruction}</p>
            {topic.speakingPractice.hints.length > 0 && (
              <div className="space-y-1.5">
                {topic.speakingPractice.hints.map((hint, idx) => (
                  <p key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span> {hint}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Role Play */}
      {topic.rolePlay && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🎬</span> Role Play
          </h2>
          <div className="p-5 rounded-xl border bg-card">
            <p className="text-sm font-medium mb-3">{topic.rolePlay.scenario}</p>
            <ul className="space-y-2">
              {topic.rolePlay.prompts.map((prompt, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-primary mt-0.5">{idx + 1}.</span> {prompt}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Quiz */}
      {topic.quiz && topic.quiz.length > 0 && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>📝</span> Quiz
          </h2>
          <div className="space-y-6">
            {topic.quiz.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border bg-card"
              >
                <p className="text-sm font-medium mb-1">{item.question}</p>
                <p className="text-xs text-muted-foreground mb-3">{item.questionZh}</p>
                <div className="grid gap-2">
                  {item.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className={cn(
                        "p-3 rounded-lg border text-sm",
                        opt.correct
                          ? "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800"
                          : "bg-muted/30"
                      )}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-3 rounded-lg bg-muted/30 text-xs">
                  <p>{item.explanation}</p>
                  <p className="text-muted-foreground mt-1">{item.explanationZh}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common Mistakes */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>⚠️</span> Common Mistakes
          </h2>
          <div className="space-y-3">
            {topic.commonMistakes.map((mistake, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border bg-red-50/30 border-red-200 dark:bg-red-950/20 dark:border-red-800"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-sm line-through text-red-600 dark:text-red-400">
                      ❌ {mistake.mistake}
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                      ✓ {mistake.correction}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{mistake.explanation}</p>
                    <p className="text-xs text-muted-foreground">{mistake.explanationZh}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Homework */}
      {topic.homework && (
        <section className="py-8 sm:py-12 border-t">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span>📋</span> Homework
          </h2>
          <div className="p-5 rounded-xl border bg-card">
            <p className="text-sm font-medium mb-1">{topic.homework.task}</p>
            <p className="text-xs text-muted-foreground mb-2">{topic.homework.description}</p>
            <Badge variant="outline" className="text-xs">{topic.homework.dueText}</Badge>
          </div>
        </section>
      )}
    </div>
  );
}
