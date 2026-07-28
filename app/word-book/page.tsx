"use client";

import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { wordBook } from "@/data/word-book";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type SortOption = "topic" | "level" | "alphabetical";

export default function WordBookPage() {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("topic");

  const filteredTopics = wordBook.map((topic) => {
    const filteredWords = topic.words.filter(
      (w) =>
        w.english.toLowerCase().includes(search.toLowerCase()) ||
        w.chinese.includes(search) ||
        w.pinyin.toLowerCase().includes(search.toLowerCase())
    );
    return { ...topic, words: filteredWords };
  }).filter((t) => t.words.length > 0);

  const totalWords = filteredTopics.reduce((sum, t) => sum + t.words.length, 0);

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold">📖 Word Book</h1>
          <p className="mt-1 text-muted-foreground">
            1000 high-frequency English words with Chinese translations, pinyin, examples, collocations, and memory tricks.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge variant="secondary">{totalWords} words</Badge>
            <Badge variant="outline">{wordBook.length} topics</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Input
            placeholder="Search English, Chinese, or pinyin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sm:max-w-sm"
          />
          <div className="flex gap-2">
            {(["topic", "level", "alphabetical"] as SortOption[]).map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium capitalize transition-colors ${
                  sortBy === option
                    ? "bg-indigo-500 text-white"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          {filteredTopics.map((topic, topicIndex) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + topicIndex * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{topic.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold">{topic.title}</h2>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
                <Badge variant="outline">{topic.words.length} words</Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topic.words.map((word, wordIndex) => (
                  <motion.div
                    key={word.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + topicIndex * 0.05 + wordIndex * 0.02 }}
                  >
                    <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">{word.emoji}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold">{word.english}</h3>
                              <span className="text-lg">{word.chinese}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{word.pinyin}</p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              <Badge variant="secondary" className="text-xs">{word.level}</Badge>
                              <Badge variant="outline" className="text-xs">{word.partOfSpeech}</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 space-y-3 text-sm">
                          <div>
                            <span className="font-semibold text-indigo-500">Definition: </span>
                            <span>{word.definitionEn}</span>
                            <p className="text-muted-foreground">{word.definitionZh}</p>
                          </div>

                          <div>
                            <span className="font-semibold text-indigo-500">Example: </span>
                            <p>{word.exampleEn}</p>
                            <p className="text-muted-foreground">{word.exampleZh}</p>
                          </div>

                          {word.collocations.length > 0 && (
                            <div>
                              <span className="font-semibold text-indigo-500">Collocations: </span>
                              <div className="flex flex-wrap gap-1">
                                {word.collocations.map((col, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">{col}</Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {word.synonyms.length > 0 && (
                            <div>
                              <span className="font-semibold text-indigo-500">Synonyms: </span>
                              <span className="text-muted-foreground">{word.synonyms.join(", ")}</span>
                            </div>
                          )}

                          {word.antonyms.length > 0 && (
                            <div>
                              <span className="font-semibold text-indigo-500">Antonyms: </span>
                              <span className="text-muted-foreground">{word.antonyms.join(", ")}</span>
                            </div>
                          )}

                          {(word.comparative || word.superlative) && (
                            <div>
                              <span className="font-semibold text-indigo-500">Forms: </span>
                              <span className="text-muted-foreground">
                                {word.comparative && `Comparative: ${word.comparative}`}
                                {word.comparative && word.superlative && " | "}
                                {word.superlative && `Superlative: ${word.superlative}`}
                              </span>
                            </div>
                          )}

                          {word.pronunciationTips && (
                            <div>
                              <span className="font-semibold text-indigo-500">Pronunciation: </span>
                              <span className="text-muted-foreground">{word.pronunciationTips}</span>
                            </div>
                          )}

                          {word.memoryTrick && (
                            <div className="rounded-lg bg-amber-50 p-2.5 dark:bg-amber-950/20">
                              <span className="font-semibold text-amber-700 dark:text-amber-300">🧠 Memory Trick: </span>
                              <span className="text-muted-foreground">{word.memoryTrick}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
