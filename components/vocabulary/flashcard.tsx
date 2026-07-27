"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Volume2, RotateCw } from "lucide-react";
import { VocabItem } from "@/types/curriculum";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

interface FlashcardProps {
  item: VocabItem;
  cardNumber: number;
  total: number;
}

export function Flashcard({ item, cardNumber, total }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  // Reset flip when card changes
  const handleFlip = () => setFlipped(!flipped);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-sm text-muted-foreground">
        Card {cardNumber + 1} of {total}
      </p>

      {/* Flip card container */}
      <div
        className="relative h-[420px] w-full max-w-md cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={handleFlip}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front (English) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-6 text-center shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/20">
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(item.imageKeyword || item.english)}?width=600&height=400&nologo=true`}
                alt={item.english}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
            <div className="mb-4 text-5xl">{item.emoji}</div>
            <h2 className="mb-3 text-4xl font-extrabold">{item.english}</h2>
            <div className="rounded-lg bg-muted px-4 py-1.5 font-mono text-sm text-muted-foreground">
              [{item.breakdown}]
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Click to reveal translation
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 gap-2"
              onClick={(e) => {
                e.stopPropagation();
                speakEnglish(item.english);
              }}
            >
              <Volume2 className="h-4 w-4" />
              Listen
            </Button>
          </div>

          {/* Back (Chinese) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 text-center shadow-xl dark:border-indigo-500/30 dark:from-indigo-950/40 dark:to-purple-950/20"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/20">
              <img
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(item.imageKeyword || item.english)}?width=600&height=400&nologo=true`}
                alt={item.english}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
            <div className="mb-4 text-5xl">{item.emoji}</div>
            <h2 className="mb-2 text-4xl font-extrabold text-pink-500">
              {item.chinese}
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">{item.pinyin}</p>
            <div className="max-w-sm rounded-xl bg-card/80 p-4 backdrop-blur-sm">
              <p className="text-sm font-medium">{item.detailsEn}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.detailsZh}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 gap-2"
              onClick={(e) => {
                e.stopPropagation();
                speakChinese(item.chinese);
              }}
            >
              <Volume2 className="h-4 w-4" />
              Listen
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant="outline" size="sm" onClick={handleFlip} className="gap-2">
          <RotateCw className="h-4 w-4" />
          Flip Card
        </Button>
      </div>
    </div>
  );
}
