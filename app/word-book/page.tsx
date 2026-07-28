"use client";

import { motion } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { wordBook } from "@/data/word-book";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type LevelFilter = "all" | "A1" | "A2" | "B1" | "B2";

export default function WordBookPage() {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const [selectedWord, setSelectedWord] = useState<{ word: any; topic: any } | null>(null);

  const filteredTopics = wordBook.map((topic) => {
    const filteredWords = topic.words.filter((w) => {
      const matchesSearch =
        w.english.toLowerCase().includes(search.toLowerCase()) ||
        w.chinese.includes(search) ||
        w.pinyin.toLowerCase().includes(search.toLowerCase());
      const matchesLevel = levelFilter === "all" || w.level === levelFilter;
      return matchesSearch && matchesLevel;
    });
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
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight">📖 Word Book</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            A visual presentation of 1000 English words with Chinese translations, pinyin, definitions, 
            examples, collocations, and memory tricks.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">{totalWords} words</Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">{filteredTopics.length} topics</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              placeholder="Search English, Chinese, or pinyin..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sm:max-w-md"
            />
            <div className="flex gap-2 flex-wrap justify-center">
              {(["all", "A1", "A2", "B1", "B2"] as LevelFilter[]).map((level) => (
                <Button
                  key={level}
                  onClick={() => setLevelFilter(level)}
                  variant={levelFilter === level ? "default" : "outline"}
                  size="sm"
                  className="capitalize"
                >
                  {level === "all" ? "All Levels" : `Level ${level}`}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue={filteredTopics[0]?.id || ""} className="w-full">
          <TabsList className="mb-6 flex-wrap justify-center">
            {filteredTopics.map((topic) => (
              <TabsTrigger
                key={topic.id}
                value={topic.id}
                className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white"
              >
                <span className="mr-1">{topic.emoji}</span>
                <span className="hidden sm:inline">{topic.title}</span>
                <span className="sm:hidden">{topic.title.split(" ")[0]}</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {topic.words.length}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          {filteredTopics.map((topic, topicIndex) => (
            <TabsContent
              key={topic.id}
              value={topic.id}
              className="mt-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: topicIndex * 0.05 }}
              >
                <div className="text-center mb-8">
                  <div className="text-5xl mb-3">{topic.emoji}</div>
                  <h2 className="text-2xl font-bold">{topic.title}</h2>
                  <p className="text-muted-foreground mt-1">{topic.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {topic.words.map((word, wordIndex) => (
                    <motion.div
                      key={word.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: wordIndex * 0.03 }}
                    >
                      <Card
                        className="h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group border-2 hover:border-indigo-200"
                        onClick={() => setSelectedWord({ word, topic })}
                      >
                        <div className="p-6 text-center">
                          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                            {word.emoji}
                          </div>
                          
                          <h3 className="text-xl font-bold mb-1">{word.english}</h3>
                          <p className="text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                            {word.chinese}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3">{word.pinyin}</p>
                          
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            <Badge variant="secondary" className="text-xs">
                              {word.level}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {word.partOfSpeech}
                            </Badge>
                          </div>

                          <div className="text-left space-y-3 text-sm">
                            <div className="p-3 bg-muted/50 rounded-lg">
                              <p className="font-semibold text-indigo-500 mb-1">Definition</p>
                              <p className="text-foreground">{word.definitionEn}</p>
                              <p className="text-muted-foreground text-xs mt-1">{word.definitionZh}</p>
                            </div>

                            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                              <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Example</p>
                              <p className="text-foreground italic">"{word.exampleEn}"</p>
                              <p className="text-muted-foreground text-xs mt-1">{word.exampleZh}</p>
                            </div>

                            {word.collocations.length > 0 && (
                              <div>
                                <p className="font-semibold text-indigo-500 mb-1">Collocations</p>
                                <div className="flex flex-wrap gap-1">
                                  {word.collocations.slice(0, 4).map((col, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {col}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {word.synonyms.length > 0 && (
                              <div>
                                <p className="font-semibold text-indigo-500 mb-1">Synonyms</p>
                                <p className="text-muted-foreground text-xs">
                                  {word.synonyms.join(", ")}
                                </p>
                              </div>
                            )}

                            {word.antonyms.length > 0 && (
                              <div>
                                <p className="font-semibold text-indigo-500 mb-1">Antonyms</p>
                                <p className="text-muted-foreground text-xs">
                                  {word.antonyms.join(", ")}
                                </p>
                              </div>
                            )}

                            {(word.comparative || word.superlative) && (
                              <div>
                                <p className="font-semibold text-indigo-500 mb-1">Forms</p>
                                <p className="text-muted-foreground text-xs">
                                  {word.comparative && `Comparative: ${word.comparative}`}
                                  {word.comparative && word.superlative && " | "}
                                  {word.superlative && `Superlative: ${word.superlative}`}
                                </p>
                              </div>
                            )}

                            {word.pronunciationTips && (
                              <div>
                                <p className="font-semibold text-indigo-500 mb-1">Pronunciation</p>
                                <p className="text-muted-foreground text-xs">{word.pronunciationTips}</p>
                              </div>
                            )}

                            {word.memoryTrick && (
                              <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                                <p className="font-semibold text-amber-700 dark:text-amber-300 mb-1">
                                  🧠 Memory Trick
                                </p>
                                <p className="text-muted-foreground text-xs">{word.memoryTrick}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {selectedWord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWord(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-center flex-1">
                    <div className="text-6xl mb-4">{selectedWord.word.emoji}</div>
                    <h2 className="text-3xl font-bold mb-2">{selectedWord.word.english}</h2>
                    <p className="text-3xl font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                      {selectedWord.word.chinese}
                    </p>
                    <p className="text-lg text-muted-foreground mb-4">{selectedWord.word.pinyin}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary" className="text-sm">{selectedWord.word.level}</Badge>
                      <Badge variant="outline" className="text-sm">{selectedWord.word.partOfSpeech}</Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedWord(null)}
                    className="ml-4"
                  >
                    ✕
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-500">Definition</h3>
                    <p className="text-foreground mb-1">{selectedWord.word.definitionEn}</p>
                    <p className="text-muted-foreground">{selectedWord.word.definitionZh}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-500">Example</h3>
                    <p className="text-foreground italic mb-1">"{selectedWord.word.exampleEn}"</p>
                    <p className="text-muted-foreground">{selectedWord.word.exampleZh}</p>
                  </div>

                  {selectedWord.word.collocations.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-indigo-500">Collocations</h3>
                      <div className="flex flex-wrap gap-2">
                          {selectedWord.word.collocations.map((col: string, i: number) => (
                          <Badge key={i} variant="outline">{col}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedWord.word.synonyms.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-indigo-500">Synonyms</h3>
                      <p className="text-muted-foreground">{selectedWord.word.synonyms.join(", ")}</p>
                    </div>
                  )}

                  {selectedWord.word.antonyms.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-indigo-500">Antonyms</h3>
                      <p className="text-muted-foreground">{selectedWord.word.antonyms.join(", ")}</p>
                    </div>
                  )}

                  {(selectedWord.word.comparative || selectedWord.word.superlative) && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-indigo-500">Forms</h3>
                      <p className="text-muted-foreground">
                        {selectedWord.word.comparative && `Comparative: ${selectedWord.word.comparative}`}
                        {selectedWord.word.comparative && selectedWord.word.superlative && " | "}
                        {selectedWord.word.superlative && `Superlative: ${selectedWord.word.superlative}`}
                      </p>
                    </div>
                  )}

                  {selectedWord.word.pronunciationTips && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-indigo-500">Pronunciation</h3>
                      <p className="text-muted-foreground">{selectedWord.word.pronunciationTips}</p>
                    </div>
                  )}

                  {selectedWord.word.memoryTrick && (
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <h3 className="text-lg font-semibold mb-2 text-amber-700 dark:text-amber-300">
                        🧠 Memory Trick
                      </h3>
                      <p className="text-muted-foreground">{selectedWord.word.memoryTrick}</p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex justify-center gap-3">
                  <Button onClick={() => setSelectedWord(null)}>Close</Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const currentIndex = selectedWord.topic.words.findIndex(
                        (w: any) => w.id === selectedWord.word.id
                      );
                      if (currentIndex < selectedWord.topic.words.length - 1) {
                        setSelectedWord({
                          word: selectedWord.topic.words[currentIndex + 1],
                          topic: selectedWord.topic,
                        });
                      }
                    }}
                  >
                    Next Word →
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
