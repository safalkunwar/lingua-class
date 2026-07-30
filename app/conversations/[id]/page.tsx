"use client";

import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { conversations } from "@/data/conversations";
import { use } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, MessageCircle, Clock, Volume2, PenTool, BookOpen, Lightbulb, Users, Mic } from "lucide-react";

export default function ConversationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const topic = conversations.find((c) => c.id === resolvedParams.id);

  if (!topic) {
    notFound();
  }

  const topicIndex = conversations.findIndex((c) => c.id === resolvedParams.id);
  const prevTopic = topicIndex > 0 ? conversations[topicIndex - 1] : null;
  const nextTopic = topicIndex < conversations.length - 1 ? conversations[topicIndex + 1] : null;

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8 flex flex-col min-h-screen">
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

        <div className="max-w-4xl mx-auto w-full space-y-8">
          {topic.vocabularyPreview.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  Vocabulary Preview
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {topic.vocabularyPreview.map((word, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <p className="font-semibold text-lg">{word.word}</p>
                      <p className="text-sm text-muted-foreground">{word.phonetic}</p>
                      <p className="text-indigo-600 dark:text-indigo-400 mt-1">{word.chinese}</p>
                      <Badge variant="outline" className="text-xs mt-2">{word.partOfSpeech}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.section>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
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
                      <p className="font-semibold text-sm text-indigo-600 dark:text-indigo-400">
                        {line.speaker}
                      </p>
                      <p className="text-foreground mt-1">{line.line}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-500">中文翻译</h2>
              <div className="space-y-4">
                {topic.chineseTranslation.map((line, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <div className="w-12 shrink-0 text-right text-muted-foreground">
                      {line.speaker}
                    </div>
                    <div className="flex-1 text-muted-foreground">{line.line}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          {topic.usefulExpressions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-indigo-500" />
                  Useful Expressions
                </h2>
                <div className="grid gap-4">
                  {topic.usefulExpressions.map((expr, i) => (
                    <div key={i} className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
                      <p className="font-semibold text-lg text-blue-700 dark:text-blue-300">
                        "{expr.expression}"
                      </p>
                      <p className="text-foreground mt-1">{expr.meaning}</p>
                      <p className="text-sm text-muted-foreground mt-1">{expr.usage}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.section>
          )}

          {topic.grammarFocus.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-indigo-500" />
                  Grammar Focus
                </h2>
                <div className="space-y-6">
                  {topic.grammarFocus.map((grammar, i) => (
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
            </motion.section>
          )}

          {topic.collocationsAndChunks.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  Collocations & Chunks
                </h2>
                <div className="grid gap-4">
                  {topic.collocationsAndChunks.map((col, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <p className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">
                        {col.chunk}
                      </p>
                      <p className="text-foreground mt-1">{col.meaning}</p>
                      <p className="text-sm text-muted-foreground mt-1 italic">"{col.example}"</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.section>
          )}

          {topic.pronunciationTips.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-indigo-500" />
                  Pronunciation Tips
                </h2>
                <div className="space-y-4">
                  {topic.pronunciationTips.map((tip, i) => (
                    <div key={i} className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl">
                      <p className="font-semibold text-amber-700 dark:text-amber-300">{tip.tip}</p>
                      <p className="text-sm text-muted-foreground mt-1">Example: "{tip.example}"</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.section>
          )}

          {topic.commonMistakes.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-indigo-500" />
                  Common Mistakes
                </h2>
                <div className="space-y-4">
                  {topic.commonMistakes.map((mistake, i) => (
                    <div key={i} className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl">
                      <p className="text-red-700 dark:text-red-300 line-through">
                        {mistake.mistake}
                      </p>
                      <p className="text-green-700 dark:text-green-300 font-semibold mt-1">
                        {mistake.correction}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{mistake.explanation}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.section>
          )}

          {topic.rolePlayPractice.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-500" />
                  Role-play Practice
                </h2>
                {topic.rolePlayPractice.map((role, i) => (
                  <div key={i}>
                    <p className="font-semibold mb-2">{role.scenario}</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {role.prompts.map((prompt, j) => (
                        <li key={j}>{prompt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Card>
            </motion.section>
          )}

          {topic.vocabularyExpansion.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  Vocabulary Expansion
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {topic.vocabularyExpansion.map((word, i) => (
                    <div key={i} className="p-4 bg-muted/50 rounded-xl">
                      <p className="font-semibold text-lg">{word.word}</p>
                      <p className="text-sm text-muted-foreground">
                        Synonyms: {word.synonyms.join(", ") || "—"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Antonyms: {word.antonyms.join(", ") || "—"}
                      </p>
                      <p className="text-foreground mt-2 italic">"{word.example}"</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.section>
          )}

          {topic.shadowingPractice.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-indigo-500" />
                  Shadowing Practice
                </h2>
                <ul className="space-y-3">
                  {topic.shadowingPractice.map((line, i) => (
                    <li key={i} className="p-3 bg-muted/50 rounded-lg italic">
                      {line}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.section>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <Card className="p-6 border-2 border-indigo-200">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mic className="w-5 h-5 text-indigo-500" />
                Speaking Challenge
              </h2>
              <p className="text-lg mb-4">{topic.speakingChallenge.instruction}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {topic.speakingChallenge.hints.map((hint, i) => (
                  <li key={i}>{hint}</li>
                ))}
              </ul>
            </Card>
          </motion.section>

          <div className="flex justify-between pt-8">
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
    </div>
  );
}
