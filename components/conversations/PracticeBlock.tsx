"use client";

import { useState } from "react";
import { ConversationTopic } from "@/types/conversations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PracticeBlockProps {
  topic: ConversationTopic;
  startIndex: number;
}

const PRACTICE_TYPES = [
  {
    id: "repeat",
    label: "🔁 Repeat After Audio",
    icon: "🔊",
  },
  {
    id: "fill-blank",
    label: "✏️ Fill in the Missing Word",
    icon: "📝",
  },
  {
    id: "choose",
    label: "✅ Choose the Correct Response",
    icon: "👆",
  },
  {
    id: "rearrange",
    label: "🔀 Rearrange the Sentence",
    icon: "🧩",
  },
  {
    id: "match",
    label: "🔗 Match Vocabulary",
    icon: "🎯",
  },
  {
    id: "translate",
    label: "🌐 Translate One Sentence",
    icon: "📝",
  },
];

export function PracticeBlock({ topic, startIndex }: PracticeBlockProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const lines = topic.conversation || [];
  const currentLine = lines[startIndex];

  if (!currentLine) return null;

  const handleAnswer = (type: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [type]: answer }));
    setShowResult(true);
  };

  const resetPractice = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20 p-6">
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
        🏋️ Practice Time
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Practice what you just learned. Choose an exercise type below.
      </p>

      {!selectedType ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PRACTICE_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className="rounded-lg border bg-card p-3 text-sm font-medium hover:bg-muted transition-colors text-left"
            >
              <span className="text-lg block mb-1">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">
              {PRACTICE_TYPES.find((t) => t.id === selectedType)?.label}
            </h4>
            <button
              onClick={resetPractice}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ← Back to exercises
            </button>
          </div>

          <div className="p-4 bg-card rounded-lg border">
            <p className="text-xs text-muted-foreground mb-2">Practice with this sentence:</p>
            <p className="text-lg font-medium italic">"{currentLine.line}"</p>
          </div>

          {/* Practice Content based on type */}
          {selectedType === "repeat" && (
            <div className="space-y-3">
              <p className="text-sm">Listen to the audio and repeat after the speaker.</p>
              <Button onClick={() => {}} className="w-full">
                🔊 Play Audio
              </Button>
              <p className="text-xs text-muted-foreground">
                Tip: Listen carefully to the rhythm and intonation.
              </p>
            </div>
          )}

          {selectedType === "fill-blank" && (
            <div className="space-y-3">
              <p className="text-sm">Fill in the missing word:</p>
              <p className="text-lg font-mono p-3 bg-muted/50 rounded-lg">
                {currentLine.line.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === 3 ? (
                      <input
                        type="text"
                        className="border-b-2 border-indigo-500 bg-transparent outline-none w-24 text-center"
                        placeholder="..."
                        onChange={(e) => handleAnswer("fill-blank", e.target.value)}
                      />
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </p>
            </div>
          )}

          {selectedType === "choose" && (
            <div className="space-y-2">
              <p className="text-sm">Choose the best response:</p>
              {["That sounds great!", "I don't know.", "Maybe later.", "That's interesting!"].map(
                (option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer("choose", option)}
                    className="w-full text-left p-3 rounded-lg border hover:border-indigo-300 transition-colors"
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          )}

          {selectedType === "rearrange" && (
            <div className="space-y-3">
              <p className="text-sm">Rearrange the words to form a correct sentence:</p>
              <div className="flex flex-wrap gap-2">
                {currentLine.line.split(" ").sort(() => Math.random() - 0.5).map((word, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg border bg-card text-sm cursor-move"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedType === "match" && (
            <div className="space-y-3">
              <p className="text-sm">Match the English phrase with its Chinese meaning:</p>
              {topic.chineseTranslation && topic.chineseTranslation[startIndex] && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-card rounded-lg border text-center">
                    <p className="font-medium">{currentLine.line}</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border text-center">
                    <p className="font-medium">{topic.chineseTranslation[startIndex].line}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedType === "translate" && (
            <div className="space-y-3">
              <p className="text-sm">Translate this sentence to Chinese:</p>
              <p className="text-lg font-medium p-3 bg-muted/50 rounded-lg">
                "{currentLine.line}"
              </p>
              <textarea
                className="w-full rounded-lg border p-3 min-h-[100px]"
                placeholder="Type your translation..."
                onChange={(e) => handleAnswer("translate", e.target.value)}
              />
            </div>
          )}

          {showResult && (
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-700 dark:text-green-300">
                Great job! Keep practicing.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
