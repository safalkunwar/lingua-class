"use client";

import { motion, AnimatePresence } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { wordBook } from "@/data/word-book";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Search, Maximize2, Minimize2, List, Grid3X3, Volume2, BookOpen } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";

type ViewMode = "presentation" | "grid";
type LevelFilter = "all" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export default function WordBookPage() {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const [selectedTopicId, setSelectedTopicId] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("presentation");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const filteredTopics = useMemo(() => {
    return wordBook.map((topic) => {
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
  }, [search, levelFilter]);

  const totalWords = useMemo(() => {
    return filteredTopics.reduce((sum, t) => sum + t.words.length, 0);
  }, [filteredTopics]);

  const currentTopic = useMemo(() => {
    return filteredTopics.find(t => t.id === selectedTopicId) || filteredTopics[0];
  }, [filteredTopics, selectedTopicId]);

  const currentWord = useMemo(() => {
    if (!currentTopic) return null;
    return currentTopic.words[currentWordIndex] || null;
  }, [currentTopic, currentWordIndex]);

  const goToPrevious = () => {
    if (!currentTopic) return;
    const newIndex = currentWordIndex > 0 ? currentWordIndex - 1 : currentTopic.words.length - 1;
    setCurrentWordIndex(newIndex);
  };

  const goToNext = () => {
    if (!currentTopic) return;
    const newIndex = currentWordIndex < currentTopic.words.length - 1 ? currentWordIndex + 1 : 0;
    setCurrentWordIndex(newIndex);
  };

  const handleTopicChange = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentWordIndex(0);
  };

  useEffect(() => {
    if (!isFullscreen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
      if (e.key === "ArrowRight") {
        goToNext();
      }
      if (e.key === "ArrowLeft") {
        goToPrevious();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, currentTopic, currentWordIndex]);

  return (
    <div className={`flex ${isFullscreen ? 'fixed inset-0 bg-white dark:bg-gray-950 z-50' : ''}`}>
      {!isFullscreen && <StudentSidebar />}
      
      <div className={`flex-1 ${isFullscreen ? 'p-4 sm:p-8' : 'p-6 sm:p-8'} flex flex-col min-h-screen`}>
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight">📖 Word Book</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Presentation-style vocabulary learning with {totalWords} words across {filteredTopics.length} topics
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">{totalWords} words</Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">{filteredTopics.length} topics</Badge>
            </div>
          </motion.div>
        )}

        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowSearch(!showSearch)}
                  variant={showSearch ? "default" : "outline"}
                  size="sm"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button
                  onClick={() => setViewMode(viewMode === "presentation" ? "grid" : "presentation")}
                  variant={viewMode === "presentation" ? "default" : "outline"}
                  size="sm"
                >
                  {viewMode === "presentation" ? <List className="w-4 h-4 mr-2" /> : <Grid3X3 className="w-4 h-4 mr-2" />}
                  {viewMode === "presentation" ? "Slides" : "Grid"}
                </Button>
                <Button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  variant="outline"
                  size="sm"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4 mr-2" /> : <Maximize2 className="w-4 h-4 mr-2" />}
                  {isFullscreen ? "Exit" : "Fullscreen"}
                </Button>
                <Link href="/word-book/read">
                  <Button variant="default" size="sm" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Mode
                  </Button>
                </Link>
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {(["all", "A1", "A2", "B1", "B2", "C1", "C2"] as LevelFilter[]).map((level) => (
                  <Button
                    key={level}
                    onClick={() => setLevelFilter(level)}
                    variant={levelFilter === level ? "default" : "outline"}
                    size="sm"
                    className="capitalize"
                  >
                    {level === "all" ? "All" : level}
                  </Button>
                ))}
              </div>
            </div>

            {showSearch && (
              <Input
                placeholder="Search English, Chinese, or pinyin..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="sm:max-w-md mx-auto block"
              />
            )}
          </motion.div>
        )}

        {filteredTopics.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 flex-1 flex flex-col items-center justify-center"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No words found</h3>
            <p className="text-muted-foreground">Try adjusting your search or level filter.</p>
          </motion.div>
        ) : viewMode === "presentation" ? (
          <div className="flex-1 flex flex-col">
            {!isFullscreen && (
              <Tabs value={selectedTopicId || filteredTopics[0]?.id} onValueChange={handleTopicChange} className="mb-6">
                <TabsList className="flex-wrap justify-center gap-2">
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
              </Tabs>
            )}

            {isFullscreen && (
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold">{currentTopic?.title}</h2>
                <p className="text-muted-foreground">{currentTopic?.description}</p>
              </div>
            )}

            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {currentWord && (
                  <motion.div
                    key={currentWord.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-5xl"
                  >
                    <Card className={`overflow-hidden ${isFullscreen ? 'border-0 shadow-none bg-transparent' : 'border-2'}`}>
                      <div className={`p-8 sm:p-12 ${isFullscreen ? 'text-center' : ''}`}>
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex gap-2">
                            <Badge variant="secondary" className="text-sm">{currentWord.level}</Badge>
                            <Badge variant="outline" className="text-sm">{currentWord.partOfSpeech}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {currentWordIndex + 1} / {currentTopic?.words.length}
                          </div>
                        </div>

                        <div className={`${isFullscreen ? 'text-center' : 'text-center sm:text-left'} mb-8`}>
                          <div className="text-7xl sm:text-8xl mb-6 inline-block">{currentWord.emoji}</div>
                          
                          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
                              {currentWord.english}
                            </h2>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10"
                              onClick={() => speakEnglish(currentWord.english)}
                            >
                              <Volume2 className="h-5 w-5" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
                            <p className="text-4xl sm:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                              {currentWord.chinese}
                            </p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10"
                              onClick={() => speakChinese(currentWord.chinese)}
                            >
                              <Volume2 className="h-5 w-5" />
                            </Button>
                          </div>
                          
                          <p className="text-xl text-muted-foreground mb-6">{currentWord.pinyin}</p>
                        </div>

                        <Separator className="my-8" />

                        <div className={`grid gap-6 ${isFullscreen ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                          <div className="space-y-4">
                            <div className="p-5 bg-muted/50 rounded-xl">
                              <p className="font-semibold text-indigo-500 mb-2 text-sm uppercase tracking-wider">Definition</p>
                              <p className="text-lg mb-2">{currentWord.definitionEn}</p>
                              <p className="text-muted-foreground">{currentWord.definitionZh}</p>
                            </div>

                            <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
                              <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2 text-sm uppercase tracking-wider">Example</p>
                               <div className="flex items-center gap-2">
                                 <p className="text-lg italic mb-2">&ldquo;{currentWord.exampleEn}&rdquo;</p>
                                 <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => speakEnglish(currentWord.exampleEn)}
                                >
                                  <Volume2 className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex items-center gap-2">
                                <p className="text-muted-foreground">{currentWord.exampleZh}</p>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => speakChinese(currentWord.exampleZh)}
                                >
                                  <Volume2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            {currentWord.collocations.length > 0 && (
                              <div className="p-5 bg-muted/50 rounded-xl">
                                <p className="font-semibold text-indigo-500 mb-2 text-sm uppercase tracking-wider">Collocations</p>
                                <div className="flex flex-wrap gap-2">
                                  {currentWord.collocations.map((col, i) => (
                                    <Badge key={i} variant="outline" className="text-sm">{col}</Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {currentWord.synonyms.length > 0 && (
                              <div className="p-5 bg-muted/50 rounded-xl">
                                <p className="font-semibold text-indigo-500 mb-2 text-sm uppercase tracking-wider">Synonyms</p>
                                <p className="text-muted-foreground">{currentWord.synonyms.join(", ")}</p>
                              </div>
                            )}

                            {currentWord.antonyms.length > 0 && (
                              <div className="p-5 bg-muted/50 rounded-xl">
                                <p className="font-semibold text-indigo-500 mb-2 text-sm uppercase tracking-wider">Antonyms</p>
                                <p className="text-muted-foreground">{currentWord.antonyms.join(", ")}</p>
                              </div>
                            )}

                            {(currentWord.comparative || currentWord.superlative) && (
                              <div className="p-5 bg-muted/50 rounded-xl">
                                <p className="font-semibold text-indigo-500 mb-2 text-sm uppercase tracking-wider">Forms</p>
                                <p className="text-muted-foreground">
                                  {currentWord.comparative && `Comparative: ${currentWord.comparative}`}
                                  {currentWord.comparative && currentWord.superlative && " | "}
                                  {currentWord.superlative && `Superlative: ${currentWord.superlative}`}
                                </p>
                              </div>
                            )}

                            {currentWord.pronunciationTips && (
                              <div className="p-5 bg-muted/50 rounded-xl">
                                <p className="font-semibold text-indigo-500 mb-2 text-sm uppercase tracking-wider">Pronunciation</p>
                                <p className="text-muted-foreground">{currentWord.pronunciationTips}</p>
                              </div>
                            )}

                            {currentWord.memoryTrick && (
                              <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                                <p className="font-semibold text-amber-700 dark:text-amber-300 mb-2 text-sm uppercase tracking-wider">
                                  🧠 Memory Trick
                                </p>
                                <p className="text-muted-foreground">{currentWord.memoryTrick}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-center items-center gap-4">
              <Button
                onClick={goToPrevious}
                size="lg"
                variant="outline"
                className="min-w-[120px]"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>

              <div className="flex gap-2">
                {currentTopic?.words.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentWordIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentWordIndex
                        ? "bg-indigo-500 w-6"
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={goToNext}
                size="lg"
                className="min-w-[120px]"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {isFullscreen && (
              <div className="mt-6 text-center">
                <Button
                  onClick={() => setIsFullscreen(false)}
                  variant="ghost"
                  size="sm"
                >
                  Press ESC or click to exit fullscreen
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1">
            {!isFullscreen && (
              <Tabs value={selectedTopicId || filteredTopics[0]?.id} onValueChange={handleTopicChange} className="mb-6">
                <TabsList className="flex-wrap justify-center gap-2">
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
              </Tabs>
            )}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentTopic?.words.map((word, wordIndex) => (
                <motion.div
                  key={word.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: wordIndex * 0.03 }}
                >
                   <Card
                     className="h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group border-2 hover:border-indigo-200"
                     onClick={() => setCurrentWordIndex(wordIndex)}
                   >
                      <div className="p-6 text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                          {word.emoji}
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <h3 className="text-xl font-bold">{word.english}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 opacity-70 hover:opacity-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakEnglish(word.english);
                            }}
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <p className="text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                            {word.chinese}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 opacity-70 hover:opacity-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakChinese(word.chinese);
                            }}
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        
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
                           <p className="text-foreground italic">&ldquo;{word.exampleEn}&rdquo;</p>
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
          </div>
        )}
      </div>
    </div>
  );
}
