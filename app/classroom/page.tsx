"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  Eye,
  EyeOff,
  MonitorPlay,
  ClipboardList,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

export default function ClassroomPage() {
  const [levelId, setLevelId] = useState(curriculum[0].id);
  const [slideIdx, setSlideIdx] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const level = curriculum.find((l) => l.id === levelId)!;
  const item = level.items[slideIdx];
  const total = level.items.length;

  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const goNext = () => slideIdx < total - 1 && setSlideIdx(slideIdx + 1);
  const goPrev = () => slideIdx > 0 && setSlideIdx(slideIdx - 1);

  const handleLevelChange = (id: string | null) => {
    if (id) {
      setLevelId(id);
      setSlideIdx(0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Top Control Bar */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-800/80 px-4 py-3 backdrop-blur-xl sm:px-6">
        <div className="flex items-center gap-3">
          <MonitorPlay className="h-5 w-5 text-indigo-400" />
          <span className="font-bold">Classroom Mode</span>
          <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300">
            Slide {slideIdx + 1} / {total}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Select value={levelId} onValueChange={handleLevelChange}>
            <SelectTrigger className="w-[200px] border-white/20 bg-slate-700 text-white">
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent>
              {curriculum.map((l) => (
                <SelectItem key={l.id} value={l.id}>
                  {l.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant={showNotes ? "secondary" : "outline"}
            onClick={() => setShowNotes(!showNotes)}
            className={`gap-2 ${
              showNotes
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "border-white/20 bg-transparent text-white hover:bg-white/10"
            }`}
          >
            {showNotes ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            Teacher Notes
          </Button>
        </div>
      </div>

      {/* Main Presentation Area */}
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${levelId}-${slideIdx}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-1 flex-col items-center justify-center"
          >
            {/* Big Emoji */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="mb-6 text-9xl"
            >
              {item.emoji}
            </motion.div>

            {/* English Word */}
            <h2 className="text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
              {item.english}
            </h2>

            {/* Pronunciation */}
            <div className="mt-4 rounded-xl bg-white/10 px-6 py-2 font-mono text-xl text-slate-300">
              [{item.breakdown}]
            </div>

            {/* Chinese Translation */}
            <div className="mt-8 text-center">
              <p className="text-5xl font-bold text-pink-400 sm:text-6xl">
                {item.chinese}
              </p>
              <p className="mt-2 text-2xl text-slate-400">{item.pinyin}</p>
            </div>

            {/* Audio Buttons */}
            <div className="mt-8 flex gap-3">
              <Button
                size="lg"
                onClick={() => speakEnglish(item.english)}
                className="gap-2 bg-indigo-500 px-8 py-6 text-lg hover:bg-indigo-600"
              >
                <Volume2 className="h-6 w-6" />
                English Audio
              </Button>
              <Button
                size="lg"
                onClick={() => speakChinese(item.chinese)}
                className="gap-2 bg-pink-500 px-8 py-6 text-lg hover:bg-pink-600"
              >
                <Volume2 className="h-6 w-6" />
                Chinese Audio
              </Button>
            </div>

            {/* Example Sentence */}
            <div className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <p className="text-xl font-medium text-white">{item.exampleEn}</p>
              <p className="mt-2 text-lg text-slate-400">{item.exampleZh}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Teacher Notes Panel */}
        <AnimatePresence>
          {showNotes && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-6 rounded-2xl border-2 border-dashed border-amber-400/50 bg-amber-500/10 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-amber-300">
                    Teacher Notes — Hidden from Students
                  </h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-1 font-semibold text-white">Definition</h4>
                    <p className="text-sm text-slate-300">{item.detailsEn}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.detailsZh}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">Teaching Tips</h4>
                    <ul className="ml-4 list-disc space-y-1 text-sm text-slate-300">
                      <li>Ask students to repeat &ldquo;{item.english}&rdquo; 3 times.</li>
                      <li>Have students use it in their own sentence.</li>
                      <li>Pair practice: EN ↔ ZH translation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="outline"
            size="lg"
            onClick={goPrev}
            disabled={slideIdx === 0}
            className="gap-2 border-white/20 bg-transparent text-white hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
            Previous
          </Button>

          <div className="flex gap-1.5">
            {level.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIdx(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === slideIdx
                    ? "w-8 bg-indigo-400"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button
            size="lg"
            onClick={goNext}
            disabled={slideIdx === total - 1}
            className="gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50"
          >
            Next
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
