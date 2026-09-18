"use client";

import { useState, useCallback } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLearningStore } from "@/stores/learning-store";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { EnglishBoostChapter, Scene } from "@/types/english-boost";
import { englishBoostChapters } from "@/data/english-boost";
import { ArrowLeft, Volume2, Zap, Lightbulb, AlertTriangle, Sparkles, BookOpen, Download, Printer, Flame, Heart, Target, RotateCcw, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { use } from "react";

function CollapsibleSection({ title, titleZh, children, defaultOpen = false }: { title: string; titleZh?: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mb-3 border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 bg-muted/30 text-xs font-semibold"
      >
        <span>{title} {titleZh && <span className="text-xs text-muted-foreground font-normal">({titleZh})</span>}</span>
        {isOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
      </button>
      {isOpen && (
        <div className="p-2 bg-white/50 dark:bg-black/20 text-xs">
          {children}
        </div>
      )}
    </div>
  );
}

export default function EnglishBoostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const chapter = englishBoostChapters.find((c) => c.id === resolvedParams.id) || null;
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);
  const [sceneAnswer, setSceneAnswer] = useState<string>("");
  const [sceneFeedback, setSceneFeedback] = useState<{ text: string; zh: string } | null>(null);
  const [score, setScore] = useState(0);
  const [totalScenes, setTotalScenes] = useState(0);
  const [showRescue, setShowRescue] = useState(false);

  const { addXp, incrementStreak, incrementWeeklyProgress, updateLevelProgress } = useLearningStore();
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const downloadPrintable = useCallback(() => {
    if (!chapter) return;
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${chapter.title} - English Boost</title>
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
  .footer { margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; }
</style>
</head>
<body>
  <h1>${chapter.title}</h1>
  <div class="meta">${chapter.titleZh} · ${chapter.difficulty} · ${chapter.theme}</div>
  <div>
    <span class="badge">${chapter.difficulty}</span>
    <span class="badge">${chapter.xpReward} XP</span>
    <span class="badge">${chapter.theme}</span>
  </div>

  <div class="section">
    <h2>Description</h2>
    <p>${chapter.description}</p>
    <p style="color:#475569">${chapter.descriptionZh}</p>
  </div>

  <h2>Scenes</h2>
  ${chapter.scenes.map((scene, idx) => `<div class="example">
    <div class="en"><strong>${idx + 1}. ${scene.narration}</strong></div>
    <div class="zh">${scene.narrationZh}</div>
    ${scene.dialogue ? `<div><strong>${scene.character || "Character"}:</strong> ${scene.dialogue} - ${scene.dialogueZh}</div>` : ''}
    ${scene.choices ? `<div><strong>Choices:</strong><ul>${scene.choices.map(c => `<li>${c.text} - ${c.textZh}</li>`).join('')}</ul></div>` : ''}
  </div>`).join('')}

  <div class="footer">Generated from English Boost · ${new Date().toLocaleDateString()}</div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${chapter.id}-${chapter.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [chapter]);

  const downloadScenarios = useCallback(() => {
    if (!chapter) return;
    const text = chapter.scenes.map((scene, idx) => {
      let content = `${idx + 1}. ${scene.narration}\n   ${scene.narrationZh}\n`;
      if (scene.dialogue) {
        content += `   ${scene.character}: ${scene.dialogue} - ${scene.dialogueZh}\n`;
      }
      if (scene.choices) {
        content += "   Choices:\n" + scene.choices.map(c => `     - ${c.text} (${c.textZh})`).join("\n") + "\n";
      }
      return content;
    }).join("\n\n");

    const blob = new Blob([`${chapter.title} - English Boost Scenarios\n${chapter.titleZh}\n\n${text}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${chapter.id}-scenarios.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [chapter]);

  const printPage = useCallback(() => {
    window.print();
  }, []);

  if (!chapter) {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-4">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-2">Chapter not found</h1>
            <Link href="/english-boost">
              <Button>Back to English Boost</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSceneAnswer = (scene: Scene, answer: string) => {
    setSceneAnswer(answer);
    setTotalScenes((prev) => prev + 1);

    let isCorrect = false;
    if (scene.choices && scene.choices.length > 0) {
      const correctChoice = scene.choices.find((c) => c.isCorrect && c.text === answer);
      isCorrect = !!correctChoice;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setSceneFeedback({ text: "✅ Correct!", zh: "✅ 正确！" });
    } else {
      const correctChoice = scene.choices?.find((c) => c.isCorrect);
      setSceneFeedback({ text: `❌ Not quite. ${correctChoice?.text || ""}`, zh: `❌ 不完全对。${correctChoice?.text || ""}` });
    }
  };

  const nextScene = () => {
    const currentIndex = chapter.scenes.findIndex((s) => s === selectedScene);
    if (selectedScene && currentIndex < chapter.scenes.length - 1) {
      setSelectedScene(chapter.scenes[currentIndex + 1]);
      setSceneAnswer("");
      setSceneFeedback(null);
    } else {
      addXp(chapter.xpReward + score * 5);
      incrementStreak();
      incrementWeeklyProgress();
      updateLevelProgress(chapter.id, {
        cardsReviewed: chapter.scenes.length,
        completed: true,
      });
      setSelectedScene(null);
      setSceneFeedback(null);
    }
  };

  const startScenes = () => {
    setSelectedScene(chapter.scenes[0]);
    setScore(0);
    setTotalScenes(0);
    setSceneAnswer("");
    setSceneFeedback(null);
  };

  const speakScene = () => {
    if (!selectedScene) return;
    const textToSpeak = [selectedScene.dialogue, selectedScene.narration].filter(Boolean).join(". ");
    if (textToSpeak) speakEnglish(textToSpeak);
  };

  const progress = selectedScene ? ((totalScenes + 1) / chapter.scenes.length) * 100 : 0;

  return (
    <div className="flex min-w-0">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4">
        <div className="max-w-2xl mx-auto min-w-0 space-y-3">
          <div className="mb-3 flex items-center gap-2">
            <Link href="/english-boost">
              <Button variant="ghost" size="sm" className="text-xs">
                <ArrowLeft className="h-3 w-3 mr-1" />
                Boost Academy
              </Button>
            </Link>
            <div className="flex-1" />
            <Button variant="outline" size="sm" onClick={printPage} className="text-xs gap-1">
              <Printer className="h-3 w-3" />
              Print
            </Button>
            <Button variant="default" size="sm" onClick={downloadPrintable} className="text-xs gap-1">
              <Download className="h-3 w-3" />
              Download
            </Button>
          </div>

          <Card className="p-4 border-indigo-200 bg-indigo-50/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{chapter.emoji}</span>
              <div>
                <h1 className="text-base font-bold">{chapter.title}</h1>
                <p className="text-xs text-muted-foreground">{chapter.titleZh}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{chapter.description}</p>
            <p className="text-xs text-muted-foreground">{chapter.descriptionZh}</p>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs"><Flame className="h-2 w-2 mr-1" />{chapter.xpReward} XP</Badge>
              <Badge variant="outline" className="text-xs capitalize">{chapter.difficulty}</Badge>
              <Badge variant="outline" className="text-xs">{chapter.theme}</Badge>
            </div>
          </Card>

          {!selectedScene && (
            <Card className="p-4 text-center">
              <h2 className="text-sm font-semibold mb-2">Ready to play this mission?</h2>
              <p className="text-xs text-muted-foreground mb-3">Navigate through {chapter.scenes.length} scenes and survive the English challenges!</p>
              <Button onClick={startScenes} className="text-xs gap-1">
                <Target className="h-3 w-3" />
                Start Mission
              </Button>
            </Card>
          )}

          {selectedScene && (
            <Card className="p-4 border-indigo-200 bg-indigo-50/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{chapter.emoji}</span>
                <div>
                  <h2 className="text-sm font-bold">Scene {chapter.scenes.findIndex((s) => s === selectedScene) + 1} of {chapter.scenes.length}</h2>
                  <p className="text-xs text-muted-foreground">Progress: {Math.round(progress)}%</p>
                </div>
              </div>

              <Progress value={progress} className="mb-2 h-1.5" />

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold mb-1">Narrative</p>
                  <p className="text-xs">{selectedScene.narration}</p>
                  <p className="text-xs text-muted-foreground">{selectedScene.narrationZh}</p>
                </div>

                {selectedScene.dialogue && (
                  <div>
                    <p className="text-xs font-semibold mb-1">Dialogue</p>
                    <div className="p-2 rounded bg-white/70 border border-border">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-sm">{selectedScene.characterEmoji}</span>
                        <p className="text-xs font-semibold">{selectedScene.character}</p>
                      </div>
                      <p className="text-sm font-medium">{selectedScene.dialogue}</p>
                      <p className="text-xs text-muted-foreground">{selectedScene.dialogueZh}</p>
                      <Button variant="ghost" size="sm" className="mt-1 text-xs gap-1" onClick={() => speakEnglish(selectedScene.dialogue || "")}>
                        <Volume2 className="h-3 w-3" />
                        Listen
                      </Button>
                    </div>
                  </div>
                )}

                {selectedScene.chaosEvent && (
                  <div className="p-2 rounded bg-amber-50 border border-amber-200 text-xs">
                    <span className="font-semibold text-amber-900">Chaos Event</span>
                    <p>{selectedScene.chaosEvent}</p>
                  </div>
                )}

                {selectedScene.translationTrap && (
                  <div className="p-2 rounded bg-red-50 border border-red-200 text-xs">
                    <span className="font-semibold text-red-900">Translation Trap</span>
                    <p className="line-through text-red-700">❌ {selectedScene.translationTrap.literal}</p>
                    <p className="font-medium text-green-700">✅ {selectedScene.translationTrap.natural}</p>
                    <p className="text-muted-foreground">{selectedScene.translationTrap.explanation}</p>
                  </div>
                )}

                {selectedScene.stealPhrase && (
                  <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-xs">
                    <span className="font-semibold text-emerald-900">Steal This Phrase</span>
                    <p className="font-medium">{selectedScene.stealPhrase.phrase}</p>
                    <p className="text-muted-foreground">{selectedScene.stealPhrase.chinese}</p>
                    <p className="text-muted-foreground">Situation: {selectedScene.stealPhrase.situation}</p>
                    <Badge variant="outline" className="text-xs mt-1 capitalize">{selectedScene.stealPhrase.formality}</Badge>
                  </div>
                )}

                {selectedScene.choices && selectedScene.choices.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold mb-1">Choose Your Response</p>
                    <div className="space-y-1">
                      {selectedScene.choices.map((choice) => (
                        <Card key={choice.id} className="p-2 cursor-pointer hover:border-indigo-300">
                          <Button
                            variant="ghost"
                            className="w-full justify-between text-left h-auto py-1 text-xs"
                            onClick={() => handleSceneAnswer(selectedScene, choice.text)}
                            disabled={!!sceneFeedback}
                          >
                            <span>{choice.text}</span>
                            <span className="text-xs text-muted-foreground ml-2">{choice.textZh}</span>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {sceneFeedback && (
                  <div className={`p-3 rounded text-xs ${sceneFeedback.text.startsWith("✅") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                    <p>{sceneFeedback.text}</p>
                    <p className="mt-1">{sceneFeedback.zh}</p>
                    <Button onClick={nextScene} size="sm" className="mt-2 text-xs">
                      {chapter.scenes.findIndex((s) => s === selectedScene) < chapter.scenes.length - 1 ? "Next" : "Finish"}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}

          {selectedScene === null && (
            <Card className="p-4">
              <div className="flex gap-2 justify-center text-xs">
                <Button onClick={() => setSelectedScene(chapter.scenes[0])} className="gap-1">
                  <RotateCcw className="h-3 w-3" />
                  Replay
                </Button>
                <Button variant="outline" onClick={downloadScenarios} className="gap-1">
                  <Download className="h-3 w-3" />
                  Download Scenarios
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
