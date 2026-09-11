"use client";

import { useState, useEffect } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import {
  safeDialogue,
  naturalDialogue,
  confidentDialogue,
  nervousMayDialogue,
  howAreYouResponses,
  nameResponses,
  autographRequestOptions,
  personalizedAutographOptions,
  photoRequestOptions,
  staffDenialResponses,
  tenSecondModeDialogue,
  thirtySecondModeDialogue,
  recoveryPhrases,
  commonChineseMistakes,
  curryQuestions,
  questionsToAvoid,
  reactionBank,
  rapidDrillItems,
  roleplayScenarios,
  listeningCommands,
  eventChecklist,
  finalExamScenario,
  curryMeetingReadiness,
  confusedEnglishExamples,
  fiveEssentialSentences,
  gqratFormula,
  manageToExplanation,
  afterMeetingResponses,
  noAutographResponse,
  gotAutographResponses,
  mayPossibleAnswers,
  mayAnswersCurry,
  mayFavoritePlayerResponse,
  shenzhenSmallTalk,
  naturalCompliments,
} from "@/data/sports-basketball";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Star,
  Heart,
  Zap,
  Trophy,
  Shield,
  Smile,
  MessageCircle,
  Volume2,
  Mic,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  HelpCircle,
  Camera,
  PenTool,
  User,
  Users,
  MessageSquare,
  Gamepad2,
  Sparkles,
  BookOpen,
  ArrowLeft,
  Save,
  Play,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

type CurryLevel = "safe" | "natural" | "confident";

function speak(text: string, rate = 1) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = rate;
  window.speechSynthesis.speak(utter);
}

function useSavedSentences() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("curry-saved-sentences");
      if (raw) setSaved(JSON.parse(raw));
    } catch {}
  }, []);

  const toggleSave = (sentence: string) => {
    setSaved((prev) => {
      const next = prev.includes(sentence) ? prev.filter((s) => s !== sentence) : [...prev, sentence];
      localStorage.setItem("curry-saved-sentences", JSON.stringify(next));
      return next;
    });
  };

  return { saved, toggleSave };
}

export default function CurryMissionPage() {
  const [selectedLevel, setSelectedLevel] = useState<CurryLevel>("safe");
  const [showFinalExam, setShowFinalExam] = useState(false);
  const [examStep, setExamStep] = useState(0);
  const [readinessScores, setReadinessScores] = useState({
    greeting: 0,
    autograph: 0,
    listening: 0,
    basketball: 0,
    emergency: 0,
  });
  const [quizActive, setQuizActive] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const { saved, toggleSave } = useSavedSentences();

  const dialogues: Record<CurryLevel, typeof safeDialogue> = {
    safe: safeDialogue,
    natural: naturalDialogue,
    confident: confidentDialogue,
  };

  const levelEmojis: Record<CurryLevel, string> = {
    safe: "🌱",
    natural: "🌿",
    confident: "🔥",
  };

  const levelColors: Record<CurryLevel, string> = {
    safe: "from-green-400 to-emerald-500",
    natural: "from-blue-400 to-cyan-500",
    confident: "from-orange-400 to-red-500",
  };

  const updateReadiness = (key: keyof typeof readinessScores, value: number) => {
    setReadinessScores((prev) => ({ ...prev, [key]: value }));
  };

  const overallReadiness = Math.round(
    (readinessScores.greeting +
      readinessScores.autograph +
      readinessScores.listening +
      readinessScores.basketball +
      readinessScores.emergency) /
      5
  );

  const quizQuestions = [
    { question: "Best default autograph request?", options: ["Give autograph.", "Would you mind signing this for me, please?", "Sign this."], correct: 1 },
    { question: "What does 'make it out to May' mean?", options: ["Make the autograph personal for May", "Write 'out to May'", "Make it fast"], correct: 0 },
    { question: "If you don't understand Curry, you should:", options: ["Nod and smile", "Say 'Sorry, I didn't catch that'", "Change the topic"], correct: 1 },
    { question: "Which is natural?", options: ["I very like your basketball.", "I really like watching you play.", "I like you very much."], correct: 1 },
    { question: "G-Q-R-A-T stands for:", options: ["Greet, Question, React, Autograph, Thank", "Go, Quick, Run, Ask, Talk", "Good, Question, Reply, Ask, Thank"], correct: 0 },
    { question: "If staff says no autographs:", options: ["Argue politely", "Say 'No worries. Thank you anyway!'", "Keep asking"], correct: 1 },
    { question: "Best 10-second mode greeting:", options: ["Hi! Nice to meet you.", "Steph! I'm a huge fan. It's amazing to meet you.", "Hello Curry."], correct: 1 },
    { question: "How to ask for a photo?", options: ["Take photo?", "Would it be okay if we took a quick photo?", "Photo now!"], correct: 1 },
  ];

  const startQuiz = () => {
    setQuizActive(true);
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const answerQuiz = (optionIndex: number) => {
    const current = quizQuestions[quizIndex];
    if (optionIndex === current.correct) {
      setQuizScore((prev) => prev + 1);
    }
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizActive(false);
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="text-5xl mb-3">⭐</div>
          <h1 className="text-4xl font-extrabold tracking-tight">Meet Stephen Curry</h1>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            🏀 MAY&apos;S REAL-LIFE MISSION
          </p>
          <p className="mt-1 text-lg font-medium text-primary">
            You are about to meet Stephen Curry.
          </p>
          <p className="text-muted-foreground">你马上要见到斯蒂芬·库里了。</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Don&apos;t try to speak perfect English. Your mission is simple:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm">SMILE 😊</Badge>
            <Badge variant="secondary" className="text-sm">SAY HELLO 👋</Badge>
            <Badge variant="secondary" className="text-sm">SAY ONE NICE THING 💬</Badge>
            <Badge variant="secondary" className="text-sm">ASK ONE QUESTION ❓</Badge>
            <Badge variant="secondary" className="text-sm">PHOTO / AUTOGRAPH 📸</Badge>
            <Badge variant="secondary" className="text-sm">THANK HIM 🙏</Badge>
            <Badge variant="secondary" className="text-sm">LEAVE NATURALLY 🚶</Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            微笑 → 打招呼 → 说一句好话 → 问一个问题 → 要签名/拍照 → 感谢 → 自然离开
          </p>

          {saved.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 text-sm">
              <Save className="w-4 h-4 text-yellow-600" />
              <span className="font-medium text-yellow-700 dark:text-yellow-300">{saved.length} sentence{saved.length !== 1 ? "s" : ""} saved</span>
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-4 sm:p-6 mb-6">
            <h3 className="text-lg font-bold mb-3">📊 Curry Meeting Readiness</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {curryMeetingReadiness.metrics.map((metric) => (
                <div key={metric.label} className="p-3 rounded bg-muted/50 text-center">
                  <div className="text-2xl mb-1">{metric.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{metric.labelZh}</p>
                  <p className="text-sm font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Overall readiness</span>
                <span className="text-sm text-muted-foreground">{overallReadiness}%</span>
              </div>
              <Progress value={overallReadiness} className="h-3" />
              <p className="text-xs text-muted-foreground mt-1">
                {overallReadiness >= 80 ? "🔥 You're ready, May!" : overallReadiness >= 50 ? "💪 Keep practicing!" : "📚 Review the mission first."}
              </p>
            </div>
          </Card>
        </motion.div>

        <Tabs defaultValue="emergency" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-6 h-auto bg-transparent">
            <TabsTrigger value="emergency" className="gap-2"><Zap className="w-4 h-4" />30-Second Emergency</TabsTrigger>
            <TabsTrigger value="levels" className="gap-2"><Star className="w-4 h-4" />3 Levels</TabsTrigger>
            <TabsTrigger value="nervous" className="gap-2"><Smile className="w-4 h-4" />Nervous May</TabsTrigger>
            <TabsTrigger value="responses" className="gap-2"><MessageCircle className="w-4 h-4" />Responses</TabsTrigger>
            <TabsTrigger value="autograph" className="gap-2"><PenTool className="w-4 h-4" />Autograph</TabsTrigger>
            <TabsTrigger value="photo" className="gap-2"><Camera className="w-4 h-4" />Photo</TabsTrigger>
            <TabsTrigger value="questions" className="gap-2"><HelpCircle className="w-4 h-4" />Questions</TabsTrigger>
            <TabsTrigger value="reactions" className="gap-2"><Heart className="w-4 h-4" />Reactions</TabsTrigger>
            <TabsTrigger value="emergencies" className="gap-2"><AlertTriangle className="w-4 h-4" />If...</TabsTrigger>
            <TabsTrigger value="drills" className="gap-2"><Target className="w-4 h-4" />Drills</TabsTrigger>
            <TabsTrigger value="roleplay" className="gap-2"><Users className="w-4 h-4" />Roleplay</TabsTrigger>
            <TabsTrigger value="quiz" className="gap-2"><BookOpen className="w-4 h-4" />Quiz</TabsTrigger>
            <TabsTrigger value="final" className="gap-2"><Trophy className="w-4 h-4" />Final Exam</TabsTrigger>
          </TabsList>

          <TabsContent value="emergency">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold">🛟 May&apos;s Safe Script</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  If she learns nothing else, she can memorize this. Practice every sentence separately with audio.
                </p>
                <div className="space-y-4">
                  {[
                    { en: "Hi Steph! It's really nice to meet you.", zh: "嗨，Steph！真的很高兴见到你。" },
                    { en: "I'm a big fan. I can't believe I'm actually meeting you!", zh: "我是你的忠实粉丝，真不敢相信我真的见到你了！" },
                    { en: "Could I get your autograph, please?", zh: "能给我一个你的签名吗？" },
                    { en: "Would it be okay if we took a quick photo?", zh: "我们能拍个快照吗？" },
                    { en: "Thank you so much. It was amazing meeting you!", zh: "非常感谢。见到你太棒了！" },
                  ].map((item, idx) => (
                    <Card key={idx} className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="font-medium text-lg">{item.en}</p>
                          <p className="text-muted-foreground">{item.zh}</p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <Button size="sm" variant="outline" onClick={() => speak(item.en)} title="Play normal">
                            <Play className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => speak(item.en, 0.7)} title="Play slow">
                            <Volume2 className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant={saved.includes(item.en) ? "default" : "outline"} onClick={() => toggleSave(item.en)} title="Save">
                            <Save className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="levels">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex gap-2 mb-6 justify-center">
                {(["safe", "natural", "confident"] as const).map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    onClick={() => setSelectedLevel(level)}
                    className="gap-2"
                  >
                    <span>{levelEmojis[level]}</span>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </Button>
                ))}
              </div>

              <Card className={`p-6 sm:p-8 bg-gradient-to-br ${levelColors[selectedLevel]} bg-opacity-10`}>
                <h3 className="text-xl font-bold mb-4">
                  {levelEmojis[selectedLevel]} {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Version
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedLevel === "safe" && "Very easy English. Simple and short."}
                  {selectedLevel === "natural" && "Normal conversational English."}
                  {selectedLevel === "confident" && "More expressive, fan-like English."}
                </p>
                <div className="space-y-4">
                  {dialogues[selectedLevel].map((line, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg ${
                        line.speaker === "May"
                          ? "bg-blue-50 dark:bg-blue-950/20 ml-0 sm:ml-8"
                          : line.speaker === "Curry"
                          ? "bg-green-50 dark:bg-green-950/20 mr-0 sm:mr-8"
                          : "bg-muted/50"
                      }`}
                    >
                       <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {line.speaker === "May" ? "👤 May" : line.speaker === "Curry" ? "🏀 Curry" : "📢 " + line.speaker}
                        </Badge>
                        {line.note && (
                          <Badge variant="outline" className="text-xs">
                            {line.note}
                          </Badge>
                        )}
                      </div>
                      <p className="font-medium">{line.line}</p>
                      {line.lineZh && <p className="text-sm text-muted-foreground">{line.lineZh}</p>}
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="ghost" onClick={() => speak(line.line)}>
                          <Play className="w-3 h-3 mr-1" /> Play
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => speak(line.line, 0.7)}>
                          <Volume2 className="w-3 h-3 mr-1" /> Slow
                        </Button>
                        {line.speaker === "May" && (
                          <Button size="sm" variant={saved.includes(line.line) ? "default" : "ghost"} onClick={() => toggleSave(line.line)}>
                            <Save className="w-3 h-3 mr-1" /> {saved.includes(line.line) ? "Saved" : "Save"}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="nervous">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <Smile className="w-8 h-8 text-yellow-500" />
                  <h2 className="text-2xl font-bold">😂 Nervous May Version</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Realistic and funny. If she freezes, teach her recovery phrases.
                </p>
                <div className="space-y-4">
                  {nervousMayDialogue.map((line, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg ${
                        line.speaker === "May"
                          ? "bg-yellow-50 dark:bg-yellow-950/20 ml-0 sm:ml-8"
                          : line.speaker === "Curry"
                          ? "bg-green-50 dark:bg-green-950/20 mr-0 sm:mr-8"
                          : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {line.speaker === "May" ? "👤 May" : line.speaker === "Curry" ? "🏀 Curry" : "📢 " + line.speaker}
                        </Badge>
                      </div>
                      <p className="font-medium">{line.line}</p>
                      {line.lineZh && <p className="text-sm text-muted-foreground">{line.lineZh}</p>}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">🛟 Recovery Phrases</h3>
                  <p className="text-muted-foreground mb-4">
                    If she freezes or forgets what to say, these are much better than staying silent.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {recoveryPhrases.map((phrase, idx) => (
                      <Card key={idx} className="p-4">
                        <p className="font-medium">{phrase.english}</p>
                        <p className="text-sm text-muted-foreground">{phrase.chinese}</p>
                        <p className="text-xs text-muted-foreground mt-1">Use when: {phrase.situation}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="responses">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">👋 What If He Asks &quot;How Are You?&quot;</h3>
                  <p className="text-muted-foreground mb-4">
                    May must NOT answer only &quot;Fine, thank you, and you?&quot; Teach alternatives.
                  </p>
                  <div className="space-y-3">
                    {howAreYouResponses.map((response, idx) => (
                      <div key={idx} className="p-3 rounded bg-muted/50">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs capitalize">{response.level}</Badge>
                        </div>
                        <p className="font-medium">{response.english}</p>
                        <p className="text-sm text-muted-foreground">{response.chinese}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">📛 What If He Asks &quot;What&apos;s Your Name?&quot;</h3>
                  <div className="space-y-3">
                    {nameResponses.map((response, idx) => (
                      <div key={idx} className="p-3 rounded bg-muted/50">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs capitalize">{response.level}</Badge>
                        </div>
                        <p className="font-medium">{response.english}</p>
                        <p className="text-sm text-muted-foreground">{response.chinese}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 rounded bg-blue-50 dark:bg-blue-950/20">
                    <p className="font-medium">Personalized autograph:</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      &quot;Could you make it out to May, please?&quot; or &quot;Could you write &apos;To May&apos;?&quot;
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Means: personalize the autograph for May.
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">🏀 What If He Asks &quot;Do You Play Basketball?&quot;</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded bg-green-50 dark:bg-green-950/20">
                      <p className="font-medium">If YES:</p>
                      <p className="text-sm">{mayPossibleAnswers.playsYes}</p>
                    </div>
                    <div className="p-3 rounded bg-blue-50 dark:bg-blue-950/20">
                      <p className="font-medium">If NO:</p>
                      <p className="text-sm">{mayPossibleAnswers.playsNo}</p>
                    </div>
                    <div className="p-3 rounded bg-yellow-50 dark:bg-yellow-950/20">
                      <p className="font-medium">If occasionally:</p>
                      <p className="text-sm">{mayPossibleAnswers.playsOccasionally}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">👤 What If He Asks &quot;Who&apos;s Your Favorite Player?&quot;</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded bg-yellow-50 dark:bg-yellow-950/20">
                      <p className="font-medium">Funny but safe:</p>
                      <p className="text-sm">{mayFavoritePlayerResponse.joke}</p>
                    </div>
                    <div className="p-3 rounded bg-green-50 dark:bg-green-950/20">
                      <p className="font-medium">Simple:</p>
                      <p className="text-sm">{mayFavoritePlayerResponse.simple}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">📺 What If He Asks &quot;Do You Watch the NBA?&quot;</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded bg-green-50 dark:bg-green-950/20">
                      <p className="font-medium">Yes:</p>
                      <p className="text-sm">{mayAnswersCurry.yes}</p>
                    </div>
                    <div className="p-3 rounded bg-blue-50 dark:bg-blue-950/20">
                      <p className="font-medium">Sometimes:</p>
                      <p className="text-sm">{mayAnswersCurry.sometimes}</p>
                    </div>
                    <div className="p-3 rounded bg-yellow-50 dark:bg-yellow-950/20">
                      <p className="font-medium">Beginner:</p>
                      <p className="text-sm">{mayAnswersCurry.beginner}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="autograph">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <PenTool className="w-8 h-8 text-blue-500" />
                  <h2 className="text-2xl font-bold">✍️ Best Way to Ask for an Autograph</h2>
                </div>
                <div className="space-y-4">
                  {autographRequestOptions.map((option, idx) => (
                    <Card key={idx} className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs capitalize">{option.level}</Badge>
                      </div>
                      <p className="font-medium text-lg">{option.english}</p>
                      <p className="text-sm text-muted-foreground">{option.chinese}</p>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Personalized Autograph</h3>
                  <div className="space-y-3">
                    {personalizedAutographOptions.map((option, idx) => (
                      <Card key={idx} className="p-4">
                        <p className="font-medium">{option.english}</p>
                        <p className="text-sm text-muted-foreground">{option.chinese}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Autograph Mini Dialogue</h3>
                  <div className="space-y-3">
                    {[
                      { speaker: "May", line: "Steph, would you mind signing this for me?", lineZh: "Steph，你介意帮我签个名吗？" },
                      { speaker: "Curry", line: "Sure. What's your name?", lineZh: "当然。你叫什么名字？" },
                      { speaker: "May", line: "May — M-A-Y.", lineZh: "May — M-A-Y。" },
                      { speaker: "Curry", line: "May?", lineZh: "May？" },
                      { speaker: "May", line: "Yes.", lineZh: "是的。" },
                      { speaker: "May", line: "Thank you so much. I'm definitely keeping this forever. 😂", lineZh: "非常感谢。我肯定会永远珍藏这个。😂" },
                    ].map((line, idx) => (
                      <div key={idx} className={`p-3 rounded ${line.speaker === "May" ? "bg-blue-50 dark:bg-blue-950/20 ml-0 sm:ml-6" : "bg-green-50 dark:bg-green-950/20 mr-0 sm:mr-6"}`}>
                        <p className="font-medium">{line.line}</p>
                        {line.lineZh && <p className="text-sm text-muted-foreground">{line.lineZh}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="photo">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-purple-500" />
                  <h2 className="text-2xl font-bold">📸 Asking for a Photo</h2>
                </div>
                <div className="space-y-4">
                  {photoRequestOptions.map((option, idx) => (
                    <Card key={idx} className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs capitalize">{option.level}</Badge>
                      </div>
                      <p className="font-medium text-lg">{option.english}</p>
                      <p className="text-sm text-muted-foreground">{option.chinese}</p>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Photo Dialogue</h3>
                  <div className="space-y-3">
                    {[
                      { speaker: "May", line: "Would it be okay if we took a quick photo?", lineZh: "我们能拍个快照吗？" },
                      { speaker: "Curry", line: "Sure!", lineZh: "当然！" },
                      { speaker: "May", line: "Thank you!", lineZh: "谢谢！" },
                      { speaker: "May", line: "After photo: Perfect. Thank you so much!", lineZh: "拍完后：完美。非常感谢！" },
                      { speaker: "May", line: "Alternative: This just made my day. Thank you!", lineZh: "或者：这真的让我今天很美好。谢谢！" },
                    ].map((line, idx) => (
                      <div key={idx} className={`p-3 rounded ${line.speaker === "May" ? "bg-blue-50 dark:bg-blue-950/20 ml-0 sm:ml-6" : "bg-green-50 dark:bg-green-950/20 mr-0 sm:mr-6"}`}>
                        <p className="font-medium">{line.line}</p>
                        {line.lineZh && <p className="text-sm text-muted-foreground">{line.lineZh}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="questions">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">🏀 Basketball Questions</h3>
                  <div className="space-y-2">
                    {curryQuestions.filter((q) => q.category === "basketball").map((q) => (
                      <div key={q.id} className="p-3 rounded bg-muted/50">
                        <p className="font-medium">{q.question}</p>
                        <p className="text-sm text-muted-foreground">{q.questionZh}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">🧠 Mindset Questions</h3>
                  <div className="space-y-2">
                    {curryQuestions.filter((q) => q.category === "mindset").map((q) => (
                      <div key={q.id} className="p-3 rounded bg-muted/50">
                        <p className="font-medium">{q.question}</p>
                        <p className="text-sm text-muted-foreground">{q.questionZh}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">🌏 China / Shenzhen Questions</h3>
                  <div className="space-y-2">
                    {curryQuestions.filter((q) => q.category === "china").map((q) => (
                      <div key={q.id} className="p-3 rounded bg-muted/50">
                        <p className="font-medium">{q.question}</p>
                        <p className="text-sm text-muted-foreground">{q.questionZh}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">😄 Light Questions</h3>
                  <div className="space-y-2">
                    {curryQuestions.filter((q) => q.category === "light").map((q) => (
                      <div key={q.id} className="p-3 rounded bg-muted/50">
                        <p className="font-medium">{q.question}</p>
                        <p className="text-sm text-muted-foreground">{q.questionZh}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 border-2 border-red-200 bg-red-50 dark:bg-red-950/20">
                  <h3 className="text-xl font-bold mb-4 text-red-700">❌ Questions to Avoid</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Famous person ≠ no boundaries.
                  </p>
                  <div className="space-y-2">
                    {questionsToAvoid.map((q, idx) => (
                      <div key={idx} className="p-3 rounded bg-red-100 dark:bg-red-900/20">
                        <p className="font-medium line-through text-red-600">❌ {q.english}</p>
                        <p className="text-sm text-red-500">{q.chinese}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="reactions">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold">🔥 Reaction Bank</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  CRITICAL: May might successfully ask a question but then not know what to say. Use these reactions.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {reactionBank.map((reaction, idx) => (
                    <Card key={idx} className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs capitalize">{reaction.level}</Badge>
                      </div>
                      <p className="font-medium">{reaction.phrase}</p>
                      <p className="text-sm text-muted-foreground">{reaction.phraseZh}</p>
                    </Card>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">💬 Natural Compliments</h3>
                  <p className="text-muted-foreground mb-4">
                    May should NOT only say &quot;You are very good basketball player.&quot; Teach better English.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {naturalCompliments.map((item, idx) => (
                      <Card key={idx} className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs capitalize">{item.level}</Badge>
                        </div>
                        <p className="font-medium">{item.english}</p>
                        <p className="text-sm text-muted-foreground">{item.chinese}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">📝 Correct May&apos;s English</h3>
                  <p className="text-muted-foreground mb-4">Realistic Chinese learner mistakes.</p>
                  <div className="space-y-3">
                    {commonChineseMistakes.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row gap-2 items-start">
                        <div className="flex-1 p-3 rounded bg-red-50 dark:bg-red-950/20 border border-red-200">
                          <p className="text-sm line-through text-red-600">❌ {item.mistake}</p>
                        </div>
                        <div className="flex-1 p-3 rounded bg-green-50 dark:bg-green-950/20 border border-green-200">
                          <p className="text-sm text-green-700">✅ {item.correction}</p>
                          <p className="text-xs text-green-600">{item.correctionZh}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="emergencies">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">👂 If May Doesn&apos;t Understand Curry</h3>
                  <p className="text-muted-foreground mb-4">
                    Do NOT make May pretend she understood. Show:
                  </p>
                  <div className="p-4 rounded bg-red-50 dark:bg-red-950/20 mb-4">
                    <p className="font-medium text-red-700">❌ BAD:</p>
                    <p className="text-sm">{confusedEnglishExamples[0].bad}</p>
                  </div>
                  <div className="p-4 rounded bg-green-50 dark:bg-green-950/20">
                    <p className="font-medium text-green-700">✅ BETTER:</p>
                    <p className="text-sm">{confusedEnglishExamples[0].good}</p>
                    <p className="text-xs text-green-600">{confusedEnglishExamples[0].goodZh}</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {recoveryPhrases.slice(3).map((phrase, idx) => (
                      <div key={idx} className="p-3 rounded bg-muted/50">
                        <p className="font-medium">{phrase.english}</p>
                        <p className="text-sm text-muted-foreground">{phrase.chinese}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">🚫 What If Staff Says &quot;No&quot;?</h3>
                  <p className="text-muted-foreground mb-4">Important. May should NOT look embarrassed.</p>
                  <div className="space-y-3">
                    {staffDenialResponses.map((response, idx) => (
                      <Card key={idx} className="p-4">
                        <p className="font-medium">{response.english}</p>
                        <p className="text-sm text-muted-foreground">{response.chinese}</p>
                      </Card>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Then she can simply say to Curry: &quot;It was still really nice meeting you.&quot;
                    <br />
                    然后她可以对库里说：&quot;见到你仍然真的很开心。&quot;
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This is a successful interaction. 这是一个成功的互动。
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">⏱️ What If There Are Only 10 Seconds?</h3>
                  <div className="space-y-3">
                    {tenSecondModeDialogue.map((line, idx) => (
                      <div key={idx} className="p-3 rounded bg-blue-50 dark:bg-blue-950/20">
                        <p className="font-medium">{line.line}</p>
                        {line.lineZh && <p className="text-sm text-muted-foreground">{line.lineZh}</p>}
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">⏱️ What If There Are 30 Seconds?</h3>
                  <div className="space-y-3">
                    {thirtySecondModeDialogue.map((line, idx) => (
                      <div key={idx} className={`p-3 rounded ${line.speaker === "May" ? "bg-blue-50 dark:bg-blue-950/20 ml-0 sm:ml-6" : "bg-green-50 dark:bg-green-950/20 mr-0 sm:mr-6"}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">{line.speaker}</Badge>
                          {line.note && <span className="text-xs text-amber-600">{line.note}</span>}
                        </div>
                        <p className="font-medium">{line.line}</p>
                        {line.lineZh && <p className="text-sm text-muted-foreground">{line.lineZh}</p>}
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">⏱️ What If She Gets 1–2 Minutes?</h3>
                  <p className="text-muted-foreground mb-4">
                    Now allow an actual conversation. Teach May to use:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">G — Greet</Badge>
                    <Badge variant="secondary">Q — Question</Badge>
                    <Badge variant="secondary">R — React</Badge>
                    <Badge variant="secondary">A — Autograph/Photo</Badge>
                    <Badge variant="secondary">T — Thank</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This creates a memorable but safe conversation structure.
                  </p>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="drills">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">⚡ Rapid Drill</h3>
                  <p className="text-muted-foreground mb-4">
                    Display one situation every 5–10 seconds. May must respond immediately.
                  </p>
                  <div className="space-y-3">
                    {rapidDrillItems.map((item, idx) => (
                      <Card key={idx} className="p-4">
                        <p className="font-medium text-sm mb-1">{item.situation}</p>
                        <p className="text-xs text-muted-foreground mb-2">{item.situationZh}</p>
                        <div className="p-2 rounded bg-green-50 dark:bg-green-950/20">
                          <p className="text-sm font-medium text-green-700">✅ {item.goodResponse}</p>
                          <p className="text-xs text-green-600">{item.goodResponseZh}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">😂 Chaos Mode</h3>
                  <p className="text-muted-foreground mb-4">Unexpected events — train real confidence!</p>
                  <div className="space-y-2">
                    {[
                      "Staff: You only have ten seconds.",
                      "Curry: Sorry, could you repeat your name?",
                      "Crowd gets loud.",
                      "May doesn't hear the question.",
                      "Curry asks something she wasn't expecting.",
                      "No autographs allowed.",
                      "Only photos allowed.",
                      "Only autograph allowed.",
                      "Curry starts leaving.",
                    ].map((event, idx) => (
                      <div key={idx} className="p-3 rounded bg-orange-50 dark:bg-orange-950/20">
                        <p className="text-sm font-medium">{event}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">📋 Before the Event Checklist</h3>
                  <p className="text-muted-foreground mb-4">May&apos;s Game Plan</p>
                  <div className="space-y-2">
                    {eventChecklist.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded bg-muted/50">
                        <span className="text-lg">☐</span>
                        <div>
                          <p className="font-medium">{item.text}</p>
                          <p className="text-xs text-muted-foreground">{item.textZh}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                  <h3 className="text-xl font-bold mb-4">🎯 G-Q-R-A-T Formula</h3>
                  <p className="text-muted-foreground mb-4">One simple memory formula for May.</p>
                  <div className="space-y-3">
                    {gqratFormula.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded bg-white dark:bg-gray-900/50">
                        <div className="text-3xl font-bold text-primary">{step.letter}</div>
                        <div className="flex-1">
                          <p className="font-bold text-lg">{step.label}</p>
                          <p className="font-medium">{step.english}</p>
                          <p className="text-sm text-muted-foreground">{step.chinese}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="roleplay">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid gap-6">
                {roleplayScenarios.map((scenario) => (
                  <Card key={scenario.id} className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold">{scenario.titleZh}</h3>
                        <p className="text-sm text-muted-foreground">{scenario.title}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Badge variant="secondary" className="text-sm">
                        {scenario.roleZh} · {scenario.role}
                      </Badge>
                    </div>
                    {scenario.secretInstructions && (
                      <div className="p-4 rounded bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 mb-4">
                        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                          🔒 Teacher instructions (do not show to May):
                        </p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">{scenario.secretInstructionsZh}</p>
                      </div>
                    )}
                    {scenario.prompts && (
                      <div className="mb-4">
                        <p className="font-medium mb-2">Prompts for teacher:</p>
                        <ul className="space-y-1">
                          {scenario.prompts.map((prompt, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">• {prompt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {scenario.partnerLines && (
                      <div>
                        <p className="font-medium mb-2">Partner lines (what May might hear):</p>
                        <div className="space-y-1">
                          {scenario.partnerLines.map((line, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground italic">&quot;{line}&quot;</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="quiz">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-indigo-500" />
                  <h2 className="text-2xl font-bold">📝 Curry Mission Quiz</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Test what you learned about meeting Curry, basketball English, and fan culture.
                </p>

                {!quizActive ? (
                  <div className="text-center py-8">
                    <p className="text-lg font-medium mb-2">Ready to test your knowledge?</p>
                    <p className="text-sm text-muted-foreground mb-6">8 questions about the Curry mission and basketball English.</p>
                    <Button onClick={startQuiz} size="lg" className="gap-2">
                      Start Quiz <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                ) : quizFinished ? (
                  <div className="text-center py-8">
                    <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                    <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                    <p className="text-lg mb-2">You scored {quizScore} out of {quizQuestions.length}</p>
                    <p className="text-muted-foreground mb-6">
                      {quizScore === quizQuestions.length ? "Perfect! You're Curry meeting ready! 🏆" : quizScore >= 6 ? "Great job! Keep practicing! 💪" : "Review the mission and try again! 📚"}
                    </p>
                    <Button onClick={resetQuiz} variant="outline" className="gap-2">
                      <RotateCcw className="w-4 h-4" /> Retry Quiz
                    </Button>
                  </div>
                ) : (
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Question {quizIndex + 1} of {quizQuestions.length}</span>
                        <span className="text-sm font-medium">Score: {quizScore}</span>
                      </div>
                      <Progress value={((quizIndex + 1) / quizQuestions.length) * 100} className="h-2" />
                    </div>

                    <Card className="p-6 mb-6">
                      <p className="text-xl font-medium mb-6">{quizQuestions[quizIndex].question}</p>
                      <div className="space-y-3">
                        {quizQuestions[quizIndex].options.map((option, optionIdx) => (
                          <Button
                            key={optionIdx}
                            variant="outline"
                            className="w-full text-left justify-start h-auto py-3 px-4"
                            onClick={() => answerQuiz(optionIdx)}
                          >
                            <span className="mr-3 text-lg">{String.fromCharCode(65 + optionIdx)}.</span>
                            {option}
                          </Button>
                        ))}
                      </div>
                    </Card>
                  </div>
                )}
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="final">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <h2 className="text-2xl font-bold">🏆 Final Exam — The Real Meeting</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Without Chinese initially. Scenario: You are waiting. Staff calls: &quot;Next!&quot;
                </p>

                <div className="space-y-4 mb-8">
                  {finalExamScenario.lines.map((line, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg ${
                        line.speaker === "May"
                          ? "bg-blue-50 dark:bg-blue-950/20 ml-0 sm:ml-8"
                          : line.speaker === "Curry"
                          ? "bg-green-50 dark:bg-green-950/20 mr-0 sm:mr-8"
                          : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {line.speaker === "May" ? "👤 May" : line.speaker === "Curry" ? "🏀 Curry" : "📢 Staff"}
                        </Badge>
                        {line.note && <span className="text-xs text-amber-600">{line.note}</span>}
                      </div>
                      <p className="font-medium">{line.line}</p>
                      {line.lineZh && <p className="text-sm text-muted-foreground">{line.lineZh}</p>}
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Evaluation Criteria 评估标准</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {finalExamScenario.evaluationCriteria.map((criterion, idx) => (
                      <Card key={idx} className="p-4">
                        <p className="font-medium">{criterion.criterion}</p>
                        <p className="text-sm text-muted-foreground">{criterion.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30">
                  <h3 className="text-xl font-bold mb-4">🏆 Final Screen</h3>
                  <p className="text-lg font-medium mb-2">Curry Meeting Ready!</p>
                  <p className="text-muted-foreground mb-4">
                    May, you don&apos;t need perfect English. You know how to:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {["start", "respond", "ask", "recover", "understand", "request", "react", "finish"].map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm justify-center">
                        ✅ {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Curry probably won&apos;t remember whether your grammar was perfect. But a friendly smile, a genuine sentence and respectful conversation can make the interaction memorable.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    库里可能不会记得你的语法是否完美。但一个友好的微笑、一句真诚的话和尊重的对话可以让这次互动令人难忘。
                  </p>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
