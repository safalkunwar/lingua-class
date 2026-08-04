"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { imageGuessingCategories } from "@/data/image-guessing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Trophy, RotateCcw, Lightbulb, Star, MessageCircle, Mic, ArrowRight, PartyPopper, Frown, HelpCircle, Undo2, Redo2, Volume2 } from "lucide-react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

type GameState = "start" | "playing" | "revealed";

function svgToDataUri(svgString: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}

export default function ImageGuessingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [gameState, setGameState] = useState<GameState>("start");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [history, setHistory] = useState<number[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { speakEnglish } = useSpeechSynthesis();

  const category = selectedCategory
    ? imageGuessingCategories.find((c) => c.id === selectedCategory)
    : null;
  const currentItem = category?.items[currentIndex];

  const startGame = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setGuess("");
    setShowHint(false);
    setHintUsed(false);
    setFeedback(null);
    setHistory([0]);
    setHistoryIndex(0);
    setGameState("playing");
  };

  const normalize = (text: string) =>
    text.toLowerCase().trim().replace(/[^a-z\s]/g, "");

  const checkAnswer = () => {
    if (!currentItem || !guess.trim()) return;

    const normalizedGuess = normalize(guess);
    const normalizedAnswer = normalize(currentItem.answer);
    const isCorrect =
      normalizedGuess === normalizedAnswer ||
      currentItem.alternatives?.some((alt) => normalize(alt) === normalizedGuess);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
    setTotalAnswered((prev) => prev + 1);
    setGameState("revealed");
  };

  const nextItem = () => {
    if (!category) return;
    const newIndex = currentIndex + 1;
    if (newIndex < category.items.length) {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newIndex);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setCurrentIndex(newIndex);
      setGuess("");
      setShowHint(false);
      setHintUsed(false);
      setFeedback(null);
      setGameState("playing");
    } else {
      setGameState("start");
      setSelectedCategory(null);
    }
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const newIdx = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      setCurrentIndex(newIdx);
      setGuess("");
      setShowHint(false);
      setHintUsed(false);
      setFeedback(null);
      setGameState("playing");
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const newIdx = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      setCurrentIndex(newIdx);
      setGuess("");
      setShowHint(false);
      setHintUsed(false);
      setFeedback(null);
      setGameState("playing");
    }
  };

  const resetGame = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
    setGuess("");
    setShowHint(false);
    setHintUsed(false);
    setFeedback(null);
    setGameState("start");
  };

  const itemImageSrc = currentItem?.image
    ? svgToDataUri(currentItem.image)
    : "";

  const previewImageSrc = (cat: typeof imageGuessingCategories[0]) => {
    const first = cat.items[0];
    return first?.image ? svgToDataUri(first.image) : "";
  };

  if (gameState === "start" || !category) {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-6 sm:p-8 flex flex-col min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight flex items-center justify-center gap-3">
              <Sparkles className="w-10 h-10 text-yellow-500" />
              Image Guessing Game
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Look at the picture and guess what is happening. Can you name the action?
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto w-full">
            {imageGuessingCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  onClick={() => startGame(cat.id)}
                  className="cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 border-2 hover:border-yellow-300 h-full overflow-hidden group"
                >
                  <div className="p-6 text-center">
                    <div className="w-full h-40 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 transition-transform duration-300">
{previewImageSrc(cat) ? (
                         <img src={previewImageSrc(cat)} alt={cat.title} className="object-contain w-full h-full drop-shadow-md" />
                       ) : (
                        <span className="text-4xl">{cat.emoji}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {cat.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {cat.items.length} questions
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "revealed") {
    const isCorrect = feedback === "correct";
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-6 sm:p-8 flex flex-col min-h-screen">
          <div className="max-w-2xl mx-auto w-full text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6"
            >
              {isCorrect ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 text-green-600 text-3xl font-bold mb-4"
                >
                  <PartyPopper className="w-10 h-10" />
                  Correct!
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-2 text-red-500 text-3xl font-bold mb-4"
                >
                  <Frown className="w-10 h-10" />
                  Not quite!
                </motion.div>
              )}

              {!isCorrect && (
                <p className="text-lg text-muted-foreground mb-2">
                  The answer was:{" "}
                  <span className="font-bold text-foreground flex items-center justify-center gap-2">
                    {currentItem?.answer}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 inline-flex"
                      onClick={() => speakEnglish(currentItem?.answer || "")}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </span>
                </p>
              )}

              {isCorrect && (
                <p className="text-sm text-green-600 font-medium mt-2">
                  Great job! You got it right.
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 space-y-4"
            >
              <div className="relative w-full max-w-md mx-auto">
                {itemImageSrc && (
                  <img
                    src={itemImageSrc}
                    alt="guess image"
                    className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 object-contain drop-shadow-lg"
                    style={{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.15))"}}
                  />
                )}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    Your guess:
                  </span>
                  <span className="text-base font-bold text-foreground">
                    {guess || "(no answer)"}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {currentItem?.alternatives?.map((alt) => (
                    <Badge key={alt} variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900/50">
                      {alt}
                    </Badge>
                  ))}
                </div>

                {currentItem && (
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground">
                      Level: <span className="font-semibold">{currentItem.level}</span>
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

<div className="flex gap-3 justify-center flex-wrap">
               <Button onClick={goBack} size="lg" variant="outline" disabled={historyIndex <= 0} className="px-4">
                 <Undo2 className="w-4 h-4 mr-1" />
                 Undo
               </Button>
               <Button onClick={nextItem} size="lg" className="px-8 group">
                 {currentIndex && currentIndex < category.items.length - 1 ? (
                   <>
                     Next Picture
                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                   </>
                 ) : (
                   <>
                     Finish
                     <Trophy className="w-4 h-4 ml-2" />
                   </>
                 )}
               </Button>
               <Button onClick={goForward} size="lg" variant="outline" disabled={historyIndex >= history.length - 1} className="px-4">
                 <Redo2 className="w-4 h-4 mr-1" />
                 Redo
               </Button>
               <Button onClick={resetGame} variant="outline" size="lg">
                 <RotateCcw className="w-4 h-4 mr-2" />
                 New Game
               </Button>
             </div>

            {currentIndex < category.items.length - 1 && (
              <p className="mt-4 text-sm text-muted-foreground">
                {currentIndex + 1} of {category.items.length}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "playing" && currentItem) {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-6 sm:p-8 flex flex-col min-h-screen">
          <div className="max-w-2xl mx-auto w-full">
            <div className="flex items-center justify-between mb-6">
              <Button onClick={resetGame} variant="ghost" size="sm">
                <RotateCcw className="w-4 h-4 mr-2" />
                Back to Categories
              </Button>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-3 h-3 mr-1" />
                  {score} / {totalAnswered}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {currentIndex + 1} / {category.items.length}
                </Badge>
              </div>
            </div>

            <motion.div
              key={`img-${currentIndex}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-8"
            >
              <div className="relative inline-block mb-6">
{itemImageSrc && (
                   <img
                     src={itemImageSrc}
                     alt="guess image"
                     className="relative w-full max-w-md mx-auto h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 object-contain drop-shadow-lg"
                     style={{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.15))"}}
                   />
                 )}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-lg mx-auto"
              >
                <div className="absolute -top-4 left-8 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <Mic className="w-3 h-3" />
                  </div>
                  Teacher
                </div>
                <div className="pt-2">
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    What is happening in this picture?
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Look at the image and describe the action you see. Use a verb!
                  </p>
                </div>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white dark:bg-gray-800 border-b border-l border-gray-200 dark:border-gray-700 transform rotate-45"></div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex gap-3">
                <Input
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Type your guess... (e.g. swimming, eating)"
                  onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
                  className="text-lg flex-1"
                  disabled={feedback !== null}
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={checkAnswer}
                    size="lg"
                    disabled={!guess.trim() || feedback !== null}
                    className="px-8"
                  >
                    Check
                  </Button>
                </motion.div>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowHint((prev) => !prev);
                    setHintUsed(true);
                  }}
                  className="text-muted-foreground"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {showHint ? "Hide Hint" : "Show Hint"}
                  {hintUsed && !showHint && (
                    <Badge variant="secondary" className="text-xs ml-2">Hint used</Badge>
                  )}
                </Button>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <Card className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          {currentItem.hint}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  disabled={historyIndex <= 0}
                  className="text-muted-foreground"
                >
                  <Undo2 className="w-4 h-4 mr-1" />
                  Undo
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goForward}
                  disabled={historyIndex >= history.length - 1}
                  className="text-muted-foreground"
                >
                  <Redo2 className="w-4 h-4 mr-1" />
                  Redo
                </Button>
              </div>

              {feedback !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4 pt-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    {currentItem.alternatives?.map((alt) => (
                      <Badge key={alt} variant="outline" className="text-xs">
                        {alt}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Acceptable answers:{" "}
                    <span className="font-semibold">{currentItem.answer}</span>
                    {currentItem.alternatives && (
                      <span> or {currentItem.alternatives.join(", ")}</span>
                    )}
                  </p>
                  <Button onClick={nextItem} size="lg" className="px-8 group">
                    {currentIndex < category.items.length - 1 ? (
                      <>
                        Next Picture
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      <>
                        Finish
                        <Trophy className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}