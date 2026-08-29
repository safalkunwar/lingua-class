"use client";

import { useState, useMemo, useCallback } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { survivalResources } from "@/data/english-survival-library";
import { SurvivalResource, MiniDrill } from "@/types/english-survival-library";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Volume2, Zap, Lightbulb, AlertTriangle, Sparkles, BookOpen, RotateCcw, HelpCircle, Download, Printer, Laugh, Code, Target } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function EnglishSurvivalLibraryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const resource = survivalResources.find((r) => r.id === resolvedParams.id) || null;
  const [selectedDrill, setSelectedDrill] = useState<MiniDrill | null>(null);
  const [drillAnswer, setDrillAnswer] = useState<string>("");
  const [drillFeedback, setDrillFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [score, setScore] = useState(0);
  const [totalDrills, setTotalDrills] = useState(0);
  const [showRescue, setShowRescue] = useState(false);

  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const downloadPrintable = useCallback(() => {
    if (!resource) return;
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${resource.title} - English Survival Library</title>
<style>
  @page { size: A4; margin: 2cm; }
  body { font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #111; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; }
  h1 { font-size: 26px; margin-bottom: 4px; }
  h2 { font-size: 18px; margin-top: 28px; margin-bottom: 10px; color: #1f2937; }
  .meta { color: #555; font-size: 13px; margin-bottom: 18px; }
  .badge { display: inline-block; padding: 3px 10px; border-radius: 999px; background: #eef2ff; color: #1e3a8a; font-size: 12px; margin-right: 6px; margin-bottom: 6px; }
  .section { margin-top: 22px; padding: 14px; border-radius: 10px; background: #f8fafc; border: 1px solid #e5e7eb; }
  .example { padding: 12px; border-radius: 8px; background: #ffffff; border: 1px solid #e5e7eb; margin-bottom: 10px; }
  .en { font-size: 15px; font-weight: 600; color: #0f172a; }
  .zh { font-size: 13px; color: #475569; margin-top: 4px; }
  .explanation { font-size: 13px; color: #1e40af; background: #eef2ff; padding: 10px; border-radius: 8px; margin-top: 8px; border-left: 3px solid #1e40af; }
  .mistake { text-decoration: line-through; color: #b91c1c; font-size: 14px; }
  .correction { color: #047857; font-size: 14px; }
  .chunk { display: inline-block; padding: 6px 10px; border-radius: 8px; background: #ecfdf5; color: #064e3b; font-size: 13px; margin: 4px 6px 4px 0; }
  table { width: 100%; border-collapse: collapse; margin-top: 8px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #e5e7eb; font-size: 13px; }
  th { background: #f1f5f9; color: #334155; }
  .footer { margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; }
</style>
</head>
<body>
  <h1>${resource.title}</h1>
  <div class="meta">${resource.titleZh} · ${resource.difficulty} · ${resource.category}</div>
  <div>
    <span class="badge">${resource.difficulty}</span>
    <span class="badge">${resource.xpReward} XP</span>
    <span class="badge">${resource.category}</span>
  </div>

  <div class="section">
    <h2>Explanation</h2>
    <p>${resource.explanation}</p>
    <p style="color:#475569">${resource.explanationZh}</p>
  </div>

  <h2>Examples</h2>
  ${resource.examples.map(ex => `<div class="example">
    <div class="en">${ex.en}</div>
    <div class="zh">${ex.zh}</div>
    ${ex.explanation ? `<div class="explanation">${ex.explanation}</div>` : ''}
  </div>`).join('')}

  ${resource.commonMistakes ? `<h2>Common Mistakes</h2>
  <div class="section">
    ${resource.commonMistakes.map(m => `<div style="margin-bottom:10px">
      <div class="mistake">❌ ${m.mistake}</div>
      <div class="correction">✅ ${m.correction}</div>
      <div style="font-size:12px;color:#64748b">${m.correctionZh}</div>
    </div>`).join('')}
  </div>` : ''}

  ${resource.chunks ? `<h2>Chunks</h2>
  <div class="section">
    ${resource.chunks.map(c => `<div style="margin-bottom:8px">
      <span class="chunk">${c.chunk}</span>
      <span style="font-size:13px;color:#334155;margin-left:6px">${c.meaning} · ${c.chinese}</span>
      <div style="font-size:12px;color:#64748b;margin-top:2px">"${c.example}"</div>
    </div>`).join('')}
  </div>` : ''}

  ${resource.funnyMoments ? `<h2>Funny Moments</h2>
  <div class="section">
    ${resource.funnyMoments.map(fm => `<div style="margin-bottom:12px">
      <p style="font-weight:600;color:#92400e">${fm.title}</p>
      <p style="font-size:12px;color:#78716c;margin-bottom:4px">${fm.titleZh}</p>
      <p style="font-size:12px;color:#78716c;font-style:italic;margin-bottom:6px">Situation: ${fm.situation}</p>
      <div style="padding:10px;background:#fef3c7;border-radius:6px;margin-bottom:6px">
        <p style="font-size:13px;margin-bottom:4px">💬 ${fm.dialogue}</p>
        <p style="font-size:13px;font-weight:600;color:#92400e">😂 ${fm.punchline}</p>
      </div>
      <p style="font-size:12px;color:#92400e">💡 ${fm.lesson}</p>
    </div>`).join('')}
  </div>` : ''}

  ${resource.structures ? `<h2>Structures & Templates</h2>
  <div class="section">
    ${resource.structures.map(s => `<div style="margin-bottom:12px">
      <p style="font-weight:600;color:#1e40af">${s.name} <span style="font-size:12px;color:#78716c">${s.nameZh}</span></p>
      <div style="padding:8px;background:#dbeafe;border-radius:6px;font-family:monospace;font-size:12px;margin:6px 0">
        <span style="color:#1e3a8a">${s.formula}</span>
      </div>
      <p style="font-size:12px;color:#1e3a8a">Example: "${s.example}"</p>
      <p style="font-size:12px;color:#1e40af">💡 ${s.tip}</p>
    </div>`).join('')}
  </div>` : ''}

  ${resource.techniques ? `<h2>Techniques & Tips</h2>
  <div class="section">
    ${resource.techniques.map(t => `<div style="margin-bottom:12px">
      <p style="font-weight:600;color:#6b21a8">${t.name}</p>
      <p style="font-size:12px;color:#4b5563;margin-top:2px">${t.description}</p>
      <p style="font-size:12px;color:#7c3aed;margin-top:2px">🎯 ${t.tip}</p>
    </div>`).join('')}
  </div>` : ''}

  ${resource.comparisonTable ? `<h2>Comparison</h2>
  <div class="section">
    <table>
      <tr><th>Term</th><th>Meaning</th><th>Situation</th></tr>
      ${resource.comparisonTable.map(row => `<tr>
        <td><strong>${row.term}</strong></td>
        <td>${row.meaning} · ${row.chinese}</td>
        <td style="color:#64748b">${row.situation}</td>
      </tr>`).join('')}
    </table>
  </div>` : ''}

  ${resource.pronunciation ? `<h2>Pronunciation</h2>
  <div class="section">
    <p><strong>${resource.pronunciation.phonetic}</strong></p>
    <p style="color:#334155">${resource.pronunciation.tip}</p>
    <p style="color:#64748b">${resource.pronunciation.tipZh}</p>
  </div>` : ''}

  <div class="footer">Generated from English Survival Library · ${new Date().toLocaleDateString()}</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resource.id}-${resource.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [resource]);

  const printPage = useCallback(() => {
    window.print();
  }, []);

  if (!resource) {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Resource not found</h1>
            <Link href="/english-survival-library">
              <Button>Back to Library</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const progress = selectedDrill ? ((totalDrills + 1) / resource.miniDrills.length) * 100 : 0;

  const handleDrillAnswer = (drill: MiniDrill, answer: string) => {
    setDrillAnswer(answer);
    setTotalDrills((prev) => prev + 1);

    let isCorrect = false;
    if (drill.type === "choose" || drill.type === "listen") {
      const correctOption = drill.options?.find((o) => o.isCorrect);
      isCorrect = correctOption?.text === answer;
    } else if (drill.type === "fill-blank") {
      isCorrect = answer.toLowerCase().trim() === drill.answer?.toLowerCase().trim();
    } else if (drill.type === "rewrite") {
      isCorrect = answer.toLowerCase().trim() === drill.answer?.toLowerCase().trim();
    } else if (drill.type === "speak") {
      isCorrect = true;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setDrillFeedback({ text: "✅ Correct!", zh: "✅ 正确！" });
    } else {
      setDrillFeedback({ text: `❌ Not quite. ${drill.answer || ""}`, zh: `❌ 不完全对。${drill.answer || ""}` });
    }
  };

  const nextDrill = () => {
    const currentIndex = resource.miniDrills.findIndex((d) => d === selectedDrill);
    if (currentIndex < resource.miniDrills.length - 1) {
      setSelectedDrill(resource.miniDrills[currentIndex + 1]);
      setDrillAnswer("");
      setDrillFeedback(null);
    } else {
      addXp(resource.xpReward + score * 5);
      incrementStreak();
      incrementWeeklyProgress();
      updateLevelProgress(resource.id, {
        cardsReviewed: resource.miniDrills.length,
        completed: true,
      });
      setSelectedDrill(null);
      setDrillFeedback(null);
    }
  };

  const startDrills = () => {
    setSelectedDrill(resource.miniDrills[0]);
    setScore(0);
    setTotalDrills(0);
    setDrillAnswer("");
    setDrillFeedback(null);
  };

  return (
    <div className="flex min-w-0">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto min-w-0">
          <div className="mb-4 flex items-center gap-2">
            <Link href="/english-survival-library">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Library
              </Button>
            </Link>
            <div className="flex-1" />
            <Button variant="outline" size="sm" onClick={printPage} className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button variant="default" size="sm" onClick={downloadPrintable} className="gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Card className="p-5 sm:p-6 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl sm:text-4xl">{resource.emoji}</span>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold">{resource.title}</h1>
                  <p className="text-xs text-muted-foreground">{resource.titleZh}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{resource.summary}</p>
              <p className="text-xs text-muted-foreground mb-4">{resource.summaryZh}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  <Zap className="h-3 w-3 mr-1" />
                  {resource.xpReward} XP
                </Badge>
                <Badge variant="outline" className="text-xs capitalize">
                  {resource.difficulty}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {resource.category}
                </Badge>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-4">
                <p className="text-sm sm:text-base mb-2">{resource.explanation}</p>
                <p className="text-xs text-muted-foreground mb-4">{resource.explanationZh}</p>

                <div className="space-y-3 mb-4">
                  {resource.examples.map((ex, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-white/70 dark:bg-black/20 border border-border">
                      <p className="text-sm font-medium mb-1">{ex.en}</p>
                      <p className="text-xs text-muted-foreground mb-2">{ex.zh}</p>
                      {ex.explanation && (
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 border-t border-border pt-2 mt-2">{ex.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>

                 {resource.commonMistakes && (
                   <div className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                     <div className="flex items-center gap-2 mb-2">
                       <AlertTriangle className="h-4 w-4 text-red-700 dark:text-red-300" />
                       <p className="text-sm font-semibold text-red-900 dark:text-red-100">Common Mistakes</p>
                     </div>
                     <div className="space-y-2">
                       {resource.commonMistakes.map((m, idx) => (
                         <div key={idx} className="text-sm">
                           <p className="line-through text-red-700/80 dark:text-red-300/80">❌ {m.mistake}</p>
                           <p className="text-green-700 dark:text-green-300">✅ {m.correction}</p>
                           <p className="text-xs text-muted-foreground">{m.correctionZh}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {resource.funnyMoments && (
                   <div className="mb-4 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800">
                     <div className="flex items-center gap-2 mb-2">
                       <Laugh className="h-4 w-4 text-yellow-700 dark:text-yellow-300" />
                       <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100">Funny Moments</p>
                     </div>
                     <div className="space-y-3">
                       {resource.funnyMoments.map((fm, idx) => (
                         <div key={idx} className="text-sm">
                           <p className="font-semibold text-yellow-800 dark:text-yellow-200">{fm.title}</p>
                           <p className="text-xs text-muted-foreground mb-1">{fm.titleZh}</p>
                           <p className="text-xs text-muted-foreground mb-2 italic">Situation: {fm.situation}</p>
                           <div className="p-3 rounded-lg bg-white/70 dark:bg-black/20 border border-yellow-100 dark:border-yellow-900">
                             <p className="text-sm font-medium mb-2">💬 {fm.dialogue}</p>
                             <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-300">😂 {fm.punchline}</p>
                           </div>
                           <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-2">💡 {fm.lesson}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                {resource.chunks && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-emerald-600" />
                      <p className="text-sm font-semibold">Chunks</p>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {resource.chunks.map((chunk, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-muted/30">
                          <p className="text-sm font-medium">{chunk.chunk}</p>
                          <p className="text-xs text-muted-foreground">{chunk.meaning} · {chunk.chinese}</p>
                          <p className="text-xs italic mt-1">“{chunk.example}”</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                 {resource.comparisonTable && (
                   <div className="mb-4">
                     <div className="flex items-center gap-2 mb-2">
                       <Lightbulb className="h-4 w-4 text-amber-600" />
                       <p className="text-sm font-semibold">Comparison</p>
                     </div>
                     <div className="overflow-x-auto">
                       <table className="w-full text-sm">
                         <thead>
                           <tr className="border-b">
                             <th className="text-left py-2 px-3">Term</th>
                             <th className="text-left py-2 px-3">Meaning</th>
                             <th className="text-left py-2 px-3">Situation</th>
                           </tr>
                         </thead>
                         <tbody>
                           {resource.comparisonTable.map((row, idx) => (
                             <tr key={idx} className="border-b last:border-0">
                               <td className="py-2 px-3 font-medium">{row.term}</td>
                               <td className="py-2 px-3">{row.meaning} · {row.chinese}</td>
                               <td className="py-2 px-3 text-xs text-muted-foreground">{row.situation}</td>
                             </tr>
                           ))}
                         </tbody>
                       </table>
                     </div>
                   </div>
                 )}

                 {resource.structures && (
                   <div className="mb-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                     <div className="flex items-center gap-2 mb-2">
                       <Code className="h-4 w-4 text-blue-700 dark:text-blue-300" />
                       <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Structures & Templates</p>
                     </div>
                     <div className="space-y-3">
                       {resource.structures.map((s, idx) => (
                         <div key={idx} className="text-sm">
                           <p className="font-semibold text-blue-800 dark:text-blue-200">{s.name} <span className="text-xs text-muted-foreground">{s.nameZh}</span></p>
                           <div className="mt-1 p-2 rounded bg-blue-100 dark:bg-blue-900/30 font-mono text-xs">
                             <span className="text-blue-700 dark:text-blue-300">{s.formula}</span>
                           </div>
                           <p className="text-xs mt-1 text-blue-900 dark:text-blue-100">Example: "{s.example}"</p>
                           <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">💡 {s.tip}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {resource.techniques && (
                   <div className="mb-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                     <div className="flex items-center gap-2 mb-2">
                       <Target className="h-4 w-4 text-purple-700 dark:text-purple-300" />
                       <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">Techniques & Tips</p>
                     </div>
                     <div className="space-y-3">
                       {resource.techniques.map((t, idx) => (
                         <div key={idx} className="text-sm">
                           <p className="font-semibold text-purple-800 dark:text-purple-200">{t.name}</p>
                           <p className="text-xs text-purple-900 dark:text-purple-100 mt-1">{t.description}</p>
                           <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">🎯 {t.tip}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                {resource.pronunciation && (
                  <div className="mb-4 p-4 rounded-xl bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 className="h-4 w-4 text-teal-700 dark:text-teal-300" />
                      <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">Pronunciation</p>
                    </div>
                    <p className="text-sm font-medium mb-1">{resource.pronunciation.phonetic}</p>
                    <p className="text-xs text-muted-foreground mb-2">{resource.pronunciation.tip}</p>
                    <p className="text-xs text-muted-foreground mb-3">{resource.pronunciation.tipZh}</p>
                    {resource.pronunciation.audioText && (
                      <Button variant="outline" size="sm" className="gap-2" onClick={() => speakEnglish(resource.pronunciation!.audioText || "")}>
                        <Volume2 className="h-3.5 w-3.5" />
                        Listen
                      </Button>
                    )}
                  </div>
                )}

                {resource.audioText && !resource.pronunciation && (
                  <div className="mb-4">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => speakEnglish(resource.audioText || "")}>
                      <Volume2 className="h-3.5 w-3.5" />
                      Listen
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  <h2 className="text-xl font-bold">Examples & Detailed Explanations</h2>
                </div>
                <div className="space-y-4">
                  {resource.examples.map((ex, idx) => (
                    <Card key={idx} className="p-5 border-indigo-100 dark:border-indigo-900">
                      <div className="flex items-start gap-3">
                        <span className="text-lg font-bold text-indigo-500 mt-0.5">{idx + 1}.</span>
                        <div className="flex-1">
                          <p className="text-base font-medium mb-1">{ex.en}</p>
                          <p className="text-sm text-muted-foreground mb-3">{ex.zh}</p>
                          {ex.explanation && (
                            <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900">
                              <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Why this works:</p>
                              <p className="text-xs text-indigo-900 dark:text-indigo-100">{ex.explanation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {showRescue && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                    <p className="text-sm font-semibold mb-2">🛟 Conversation Rescue</p>
                    <div className="flex flex-wrap gap-2">
                      {["Sorry, I didn't catch that.", "Could you say that again?", "Could you speak more slowly?", "What do you mean?"].map((phrase) => (
                        <Button key={phrase} variant="secondary" size="sm" className="gap-2" onClick={() => speakEnglish(phrase)}>
                          <Volume2 className="h-3.5 w-3.5" />
                          {phrase}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
