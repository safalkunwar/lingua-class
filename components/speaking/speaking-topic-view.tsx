"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { IELTSTopic } from "@/types/ielts-speaking";
import { useState, useRef, useEffect } from "react";

interface SpeakingTopicViewProps {
  topic: IELTSTopic;
  activeMockId?: string;
}

export function SpeakingTopicView({ topic, activeMockId }: SpeakingTopicViewProps) {
  const mock = topic.mockTests?.find((m) => m.id === activeMockId) || topic.mockTests?.[0];
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState(mock?.transcript || "");
  const [evaluationResult, setEvaluationResult] = useState<{ criterion: string; score: number; feedback: string }[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTranscript(mock?.transcript || "");
  }, [mock?.id, mock?.transcript]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Microphone access denied:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const simulateEvaluation = () => {
    if (!mock) return;
    const results = mock.evaluationCriteria.map((criterion) => ({
      criterion: criterion.criterion,
      score: 5 + Math.floor(Math.random() * 4.5),
      feedback: `Good ${criterion.criterion.toLowerCase()} demonstrated. Focus on extending answers and adding more linking words.`,
    }));
    setEvaluationResult(results);
  };

  if (!mock) {
    return (
      <div className="flex">
        <div className="flex-1 p-6 sm:p-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{topic.icon}</span>
              <div>
                <h1 className="text-3xl font-extrabold">{topic.title}</h1>
                <p className="text-muted-foreground">{topic.description}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge variant="secondary">{topic.cefrLevel}</Badge>
              <Badge variant="outline">{topic.estimatedTime}</Badge>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">📋 Introduction</h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-indigo-500 mb-1">Why IELTS Asks This Topic</h3>
                <p>{topic.introduction.whyIELTSAsks}</p>
              </div>
              <div>
                <h3 className="font-semibold text-indigo-500 mb-1">What The Examiner Wants</h3>
                <p>{topic.introduction.whatExaminerWants}</p>
              </div>
              <div>
                <h3 className="font-semibold text-red-500 mb-1">Common Mistakes</h3>
                <p>{topic.introduction.commonMistakes}</p>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-500 mb-2">Band Comparison</h3>
                <div className="grid gap-3">
                  <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-950/20">
                    <span className="font-bold text-amber-700 dark:text-amber-300">Band 5</span>
                    <p className="mt-1 text-muted-foreground">{topic.introduction.bandComparison.band5}</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/20">
                    <span className="font-bold text-emerald-700 dark:text-emerald-300">Band 7</span>
                    <p className="mt-1 text-muted-foreground">{topic.introduction.bandComparison.band7}</p>
                  </div>
                  <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-950/20">
                    <span className="font-bold text-indigo-700 dark:text-indigo-300">Band 9</span>
                    <p className="mt-1 text-muted-foreground">{topic.introduction.bandComparison.band9}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/20">
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">🇨🇳 中文讲解</h3>
                <p className="text-muted-foreground">{topic.introduction.chineseExplanation}</p>
              </div>
            </div>
          </motion.div>

          {/* Frequently Asked Questions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">❓ Frequently Asked Questions</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {topic.frequentlyAskedQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                  <span className="mt-0.5 text-indigo-500">•</span>
                  <span className="text-sm">{q}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Speaking Structure */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">🏗️ Universal Speaking Structure</h2>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {topic.speakingStructure.flow.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="rounded-lg bg-indigo-100 px-3 py-2 text-sm font-medium dark:bg-indigo-950/30">
                    {step}
                  </div>
                  {i < topic.speakingStructure.flow.length - 1 && (
                    <span className="text-muted-foreground">↓</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{topic.speakingStructure.whyItWorks}</p>
            <div className="space-y-3">
              {topic.speakingStructure.bandExamples.map((example) => (
                <div key={example.band} className="rounded-lg bg-muted/50 p-4">
                  <span className="font-bold text-indigo-500">{example.label}</span>
                  <p className="mt-1 text-sm">{example.answer}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{example.explanation}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sentence Starters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">💬 Universal Sentence Starters</h2>
            <div className="flex flex-wrap gap-2">
              {topic.sentenceStarters.map((starter, i) => (
                <span key={i} className="rounded-full bg-indigo-50 px-3 py-1 text-sm dark:bg-indigo-950/30">
                  {starter}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Vocabulary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">📚 High-Frequency Vocabulary</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 text-left font-semibold">Word</th>
                    <th className="pb-2 text-left font-semibold">IPA</th>
                    <th className="pb-2 text-left font-semibold">Chinese</th>
                    <th className="pb-2 text-left font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {topic.vocabulary.map((entry, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-2">
                        <div className="font-medium">{entry.english}</div>
                        <div className="text-xs text-muted-foreground">{entry.meaning}</div>
                      </td>
                      <td className="py-2 font-mono text-xs">{entry.ipa}</td>
                      <td className="py-2">{entry.chinese}</td>
                      <td className="py-2 text-muted-foreground">{entry.exampleSentence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Band Upgrade */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">📈 Band Upgrade</h2>
            {topic.bandUpgrade.map((item, i) => (
              <div key={i} className="mb-6">
                <h3 className="mb-3 font-semibold">{item.question}</h3>
                <div className="space-y-2">
                  {item.bands.map((band) => (
                    <div key={band.band} className="rounded-lg bg-muted/50 p-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-indigo-500">Band {band.band}</span>
                        <span className="text-xs text-muted-foreground">— {band.label}</span>
                      </div>
                      <p className="mt-1 text-sm">{band.answer}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{band.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Conversation Expansions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">🗣️ Conversation Expansion</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              See how to expand answers from one word to Band 9 level.
            </p>
            <div className="space-y-4">
              {topic.conversationExpansions.map((expansion, i) => (
                <div key={i} className="rounded-lg bg-muted/50 p-4">
                  <h3 className="mb-2 font-semibold">{expansion.question}</h3>
                  <div className="grid gap-2">
                    <div className="flex gap-2">
                      <span className="text-xs font-medium text-red-500">1 word:</span>
                      <span className="text-sm">{expansion.oneWord}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs font-medium text-orange-500">1 sentence:</span>
                      <span className="text-sm">{expansion.oneSentence}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs font-medium text-yellow-600">3 sentences:</span>
                      <span className="text-sm">{expansion.threeSentences}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs font-medium text-emerald-500">Band 7:</span>
                      <span className="text-sm">{expansion.band7}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs font-medium text-indigo-500">Band 9:</span>
                      <span className="text-sm">{expansion.band9}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* No Mock Test Placeholder */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold mb-4">🎯 Mock Test</h2>
            <p className="text-sm text-muted-foreground">No mock test is configured for this topic yet.</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="flex-1 p-6 sm:p-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{topic.icon}</span>
            <div>
              <h1 className="text-3xl font-extrabold">{topic.title}</h1>
              <p className="text-muted-foreground">{topic.description}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge variant="secondary">{topic.cefrLevel}</Badge>
            <Badge variant="outline">{topic.estimatedTime}</Badge>
            {mock && <Badge variant="outline">{mock.title}</Badge>}
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">📋 Introduction</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-indigo-500 mb-1">Why IELTS Asks This Topic</h3>
              <p>{topic.introduction.whyIELTSAsks}</p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-500 mb-1">What The Examiner Wants</h3>
              <p>{topic.introduction.whatExaminerWants}</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-1">Common Mistakes</h3>
              <p>{topic.introduction.commonMistakes}</p>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-500 mb-2">Band Comparison</h3>
              <div className="grid gap-3">
                <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-950/20">
                  <span className="font-bold text-amber-700 dark:text-amber-300">Band 5</span>
                  <p className="mt-1 text-muted-foreground">{topic.introduction.bandComparison.band5}</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950/20">
                  <span className="font-bold text-emerald-700 dark:text-emerald-300">Band 7</span>
                  <p className="mt-1 text-muted-foreground">{topic.introduction.bandComparison.band7}</p>
                </div>
                <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-950/20">
                  <span className="font-bold text-indigo-700 dark:text-indigo-300">Band 9</span>
                  <p className="mt-1 text-muted-foreground">{topic.introduction.bandComparison.band9}</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/20">
              <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">🇨🇳 中文讲解</h3>
              <p className="text-muted-foreground">{topic.introduction.chineseExplanation}</p>
            </div>
          </div>
        </motion.div>

        {/* Frequently Asked Questions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">❓ Frequently Asked Questions</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {topic.frequentlyAskedQuestions.map((q, i) => (
              <div key={i} className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                <span className="mt-0.5 text-indigo-500">•</span>
                <span className="text-sm">{q}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Speaking Structure */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">🏗️ Universal Speaking Structure</h2>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {topic.speakingStructure.flow.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="rounded-lg bg-indigo-100 px-3 py-2 text-sm font-medium dark:bg-indigo-950/30">
                  {step}
                </div>
                {i < topic.speakingStructure.flow.length - 1 && (
                  <span className="text-muted-foreground">↓</span>
                )}
              </div>
            ))}
          </div>
          <p className="mb-4 text-sm text-muted-foreground">{topic.speakingStructure.whyItWorks}</p>
          <div className="space-y-3">
            {topic.speakingStructure.bandExamples.map((example) => (
              <div key={example.band} className="rounded-lg bg-muted/50 p-4">
                <span className="font-bold text-indigo-500">{example.label}</span>
                <p className="mt-1 text-sm">{example.answer}</p>
                <p className="mt-1 text-xs text-muted-foreground">{example.explanation}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sentence Starters */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">💬 Universal Sentence Starters</h2>
          <div className="flex flex-wrap gap-2">
            {topic.sentenceStarters.map((starter, i) => (
              <span key={i} className="rounded-full bg-indigo-50 px-3 py-1 text-sm dark:bg-indigo-950/30">
                {starter}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Vocabulary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">📚 High-Frequency Vocabulary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left font-semibold">Word</th>
                  <th className="pb-2 text-left font-semibold">IPA</th>
                  <th className="pb-2 text-left font-semibold">Chinese</th>
                  <th className="pb-2 text-left font-semibold">Example</th>
                </tr>
              </thead>
              <tbody>
                {topic.vocabulary.map((entry, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2">
                      <div className="font-medium">{entry.english}</div>
                      <div className="text-xs text-muted-foreground">{entry.meaning}</div>
                    </td>
                    <td className="py-2 font-mono text-xs">{entry.ipa}</td>
                    <td className="py-2">{entry.chinese}</td>
                    <td className="py-2 text-muted-foreground">{entry.exampleSentence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Band Upgrade */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">📈 Band Upgrade</h2>
          {topic.bandUpgrade.map((item, i) => (
            <div key={i} className="mb-6">
              <h3 className="mb-3 font-semibold">{item.question}</h3>
              <div className="space-y-2">
                {item.bands.map((band) => (
                  <div key={band.band} className="rounded-lg bg-muted/50 p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-indigo-500">Band {band.band}</span>
                      <span className="text-xs text-muted-foreground">— {band.label}</span>
                    </div>
                    <p className="mt-1 text-sm">{band.answer}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{band.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Conversation Expansions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">🗣️ Conversation Expansion</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            See how to expand answers from one word to Band 9 level.
          </p>
          <div className="space-y-4">
            {topic.conversationExpansions.map((expansion, i) => (
              <div key={i} className="rounded-lg bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">{expansion.question}</h3>
                <div className="grid gap-2">
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-red-500">1 word:</span>
                    <span className="text-sm">{expansion.oneWord}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-orange-500">1 sentence:</span>
                    <span className="text-sm">{expansion.oneSentence}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-yellow-600">3 sentences:</span>
                    <span className="text-sm">{expansion.threeSentences}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-emerald-500">Band 7:</span>
                    <span className="text-sm">{expansion.band7}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium text-indigo-500">Band 9:</span>
                    <span className="text-sm">{expansion.band9}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mock Test */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold mb-4">🎯 Mock Test</h2>
          <p className="text-sm text-muted-foreground mb-4">{mock.title}</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-4">
              <h3 className="mb-2 font-semibold">📋 Questions</h3>
              <ul className="space-y-2 text-sm">
                {mock.questions.map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 text-indigo-500">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background p-4">
              <h3 className="mb-2 font-semibold">🎙️ Recording</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {!isRecording ? (
                    <button type="button" onClick={startRecording} className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
                      Start Recording
                    </button>
                  ) : (
                    <button type="button" onClick={stopRecording} className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600">
                      Stop Recording
                    </button>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {isRecording ? "Recording..." : "Click to record your response"}
                  </span>
                </div>
                {audioUrl && (
                  <audio controls src={audioUrl} className="w-full" />
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-background p-4">
            <h3 className="mb-2 font-semibold">📝 Transcript</h3>
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Type or paste your transcript here..."
              className="h-32 w-full rounded-lg border border-border bg-background p-3 text-sm"
            />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button type="button" onClick={simulateEvaluation} className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600">
              Evaluate Response
            </button>
            <span className="text-xs text-muted-foreground">Simulated evaluation</span>
          </div>

          {evaluationResult.length > 0 && (
            <div className="mt-6 rounded-xl border border-border bg-background p-4">
              <h3 className="mb-3 font-semibold">📊 Band Score Results</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {evaluationResult.map((result, i) => (
                  <div key={i} className="rounded-lg bg-muted/50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{result.criterion}</span>
                      <span className="text-sm font-bold text-indigo-500">
                        Band {result.score.toFixed(1)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{result.feedback}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-indigo-50 p-3 dark:bg-indigo-950/30">
                <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300">
                  Overall Band: {(evaluationResult.reduce((sum, r) => sum + r.score, 0) / evaluationResult.length).toFixed(1)}
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
