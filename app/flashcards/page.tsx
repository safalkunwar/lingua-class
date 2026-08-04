"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  RotateCw,
  Layers,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

export default function FlashcardsPage() {
  const allItems = curriculum.flatMap((l) => l.items);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const { speakEnglish, speakChinese } = useSpeechSynthesis();
  const item = allItems[idx];
  const total = allItems.length;

  const goNext = () => {
    setFlipped(false);
    if (idx < total - 1) setIdx(idx + 1);
    else setIdx(0);
  };

  const goPrev = () => {
    setFlipped(false);
    if (idx > 0) setIdx(idx - 1);
    else setIdx(total - 1);
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="flex items-center gap-2 text-3xl font-extrabold">
            <Layers className="h-7 w-7 text-indigo-500" />
            Flashcards
          </h1>
          <p className="mt-1 text-muted-foreground">
            Review all {total} vocabulary words from every level.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>Card {idx + 1} of {total}</span>
            <span>{Math.round(((idx + 1) / total) * 100)}%</span>
          </div>
          <Progress value={((idx + 1) / total) * 100} className="h-2" />
        </div>

        {/* Flashcard */}
        <div className="mb-8 flex justify-center">
          <div
            className="relative h-[420px] w-full max-w-md cursor-pointer"
            style={{ perspective: "1200px" }}
            onClick={() => setFlipped(!flipped)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${idx}-${flipped}`}
                initial={{ rotateY: flipped ? -180 : 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="flex h-full flex-col items-center justify-center p-8 text-center">
                  {!flipped ? (
                    <>
                      <div className="mb-4 text-6xl">{item.emoji}</div>
                      <h2 className="mb-3 text-5xl font-extrabold">{item.english}</h2>
                      <div className="rounded-lg bg-muted px-4 py-1.5 font-mono text-sm text-muted-foreground">
                        [{item.breakdown}]
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4 gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakEnglish(item.english);
                        }}
                      >
                        <Volume2 className="h-4 w-4" />
                        Listen
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="mb-4 text-6xl">{item.emoji}</div>
                      <h2 className="mb-2 text-5xl font-extrabold text-pink-500">
                        {item.chinese}
                      </h2>
                      <p className="mb-4 text-xl text-muted-foreground">{item.pinyin}</p>
                      <div className="max-w-sm rounded-xl bg-muted/50 p-4">
                        <p className="text-sm">{item.detailsEn}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4 gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakChinese(item.chinese);
                        }}
                      >
                        <Volume2 className="h-4 w-4" />
                        Listen
                      </Button>
                    </>
                  )}
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" onClick={goPrev} className="gap-2">
            <ChevronLeft className="h-5 w-5" />
            Previous
          </Button>
          <Button variant="secondary" onClick={() => setFlipped(!flipped)} className="gap-2">
            <RotateCw className="h-4 w-4" />
            Flip
          </Button>
          <Button onClick={goNext} className="gap-2 bg-indigo-500 hover:bg-indigo-600">
            Next
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
