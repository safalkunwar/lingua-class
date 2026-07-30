"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { imageGuessingCategories } from "@/data/image-guessing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Trophy, RotateCcw, Lightbulb, Star, Heart } from "lucide-react";
import { StudentSidebar } from "@/components/layout/sidebar";

type GameState = "start" | "playing" | "revealed";

export default function ImageGuessingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [gameState, setGameState] = useState<GameState>("start");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const category = selectedCategory
    ? imageGuessingCategories.find((c) => c.id === selectedCategory)
    : null;
  const currentItem = category?.items[currentIndex];

  useEffect(() => {
    if (category && currentIndex >= category.items.length) {
      setGameState("start");
    }
  }, [currentIndex, category]);

  const startGame = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setGuess("");
    setShowHint(false);
    setFeedback(null);
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
    if (currentIndex < category.items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setGuess("");
      setShowHint(false);
      setFeedback(null);
      setGameState("playing");
    } else {
      setGameState("start");
      setSelectedCategory(null);
    }
  };

  const resetGame = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
    setGuess("");
    setShowHint(false);
    setFeedback(null);
    setGameState("start");
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
                  className="cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 border-2 hover:border-yellow-300 h-full"
                >
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-3">{cat.emoji}</div>
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
              className="text-9xl mb-6"
            >
              {currentItem?.emoji}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-6"
            >
              {isCorrect ? (
                <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                  <Trophy className="w-8 h-8" />
                  <h2 className="text-3xl font-bold">Correct!</h2>
                </div>
              ) : (
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-red-500 mb-2">Not quite!</h2>
                  <p className="text-lg text-muted-foreground">
                    The answer was: <span className="font-bold text-foreground">{currentItem?.answer}</span>
                  </p>
                </div>
              )}

              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Your guess:</span> {guess || "(no answer)"}
                </p>
              </div>
            </motion.div>

            <div className="flex gap-3 justify-center">
              <Button onClick={nextItem} size="lg" className="px-8">
                {currentIndex < category.items.length - 1 ? "Next Picture" : "Finish"}
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center mb-8"
            >
              <div className="text-9xl mb-4">{currentItem.emoji}</div>
              <Badge variant="outline" className="text-xs mb-2">
                {currentItem.category}
              </Badge>
              <h2 className="text-2xl font-bold text-muted-foreground">
                What is happening?
              </h2>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex gap-3">
                <Input
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Type your guess..."
                  onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
                  className="text-lg"
                  disabled={false}
                />
                <Button
                  onClick={checkAnswer}
                  size="lg"
                  disabled={!guess.trim()}
                  className="px-8"
                >
                  Check
                </Button>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHint((prev) => !prev)}
                  className="text-muted-foreground"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  {showHint ? "Hide Hint" : "Show Hint"}
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
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        💡 Hint: {currentItem.hint}
                      </p>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {feedback !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4 pt-4"
                >
                  <div className="flex gap-2">
                    {currentItem.alternatives?.map((alt) => (
                      <Badge key={alt} variant="outline">
                        {alt}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Acceptable answers: <span className="font-semibold">{currentItem.answer}</span>
                    {currentItem.alternatives && (
                      <span> or {currentItem.alternatives.join(", ")}</span>
                    )}
                  </p>
                  <Button onClick={nextItem} size="lg" className="px-8">
                    {currentIndex < category.items.length - 1 ? "Next Picture" : "Finish"}
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
