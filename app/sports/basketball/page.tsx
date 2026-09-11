"use client";

import { StudentSidebar } from "@/components/layout/sidebar";
import {
  basketballCourtVocabulary,
  basketballActionVocabulary,
  basketballPositionVocabulary,
  basketballSlang,
  basketballCommentaryPhrases,
  slangMatchingGame,
  dontSayToCurry,
  commonChineseMistakes,
  naturalCompliments,
  fiveEssentialSentences,
  pronunciationPracticeWords,
  autographVsSignature,
  fanVsSupporter,
  likeVsAdmire,
  autographEtiquette,
} from "@/data/sports-basketball";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Mic, MessageCircle, Volume2, Star } from "lucide-react";
import Link from "next/link";

const MODULE_ROUTES: Record<string, string> = {
  "basketball-basics": "/sports/basketball/basketball-basics",
  "basketball-vocabulary": "/sports/basketball/basketball-vocabulary",
  "basketball-positions": "/sports/basketball/basketball-positions",
  "basketball-slang": "/sports/basketball/basketball-slang",
  "watching-a-game": "/sports/basketball/watching-a-game",
  "talking-with-fans": "/sports/basketball/talking-with-fans",
  "talking-with-players": "/sports/basketball/talking-with-players",
  "asking-questions": "/sports/basketball/asking-questions",
  "basketball-pronunciation": "/sports/basketball/basketball-pronunciation",
  "game-commentary": "/sports/basketball/game-commentary",
  "basketball-small-talk": "/sports/basketball/basketball-small-talk",
  "meet-stephen-curry": "/sports/basketball/curry-mission",
};

export default function BasketballPage() {
  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight">🏀 Basketball</h1>
          <p className="mt-2 text-muted-foreground max-w-3xl mx-auto">
            Master basketball English: court vocabulary, fan slang, game commentary, and the ultimate fan mission.
          </p>
          <p className="mt-1 text-muted-foreground max-w-3xl mx-auto text-sm">
            掌握篮球英语：球场词汇、球迷俚语、比赛解说，以及终极球迷任务。
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/sports/basketball/curry-mission">
              <Badge variant="default" className="text-sm px-3 py-1 cursor-pointer hover:bg-primary/80">
                ⭐ Meet Stephen Curry Mission
              </Badge>
            </Link>
          </div>
        </motion.div>

        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="flex flex-wrap gap-2 mb-6 h-auto bg-transparent">
            <TabsTrigger value="basics" className="gap-2"><BookOpen className="w-4 h-4" />Basics</TabsTrigger>
            <TabsTrigger value="vocabulary" className="gap-2"><BookOpen className="w-4 h-4" />Actions</TabsTrigger>
            <TabsTrigger value="positions" className="gap-2"><BookOpen className="w-4 h-4" />Positions</TabsTrigger>
            <TabsTrigger value="slang" className="gap-2"><Star className="w-4 h-4" />Slang</TabsTrigger>
            <TabsTrigger value="commentary" className="gap-2"><Volume2 className="w-4 h-4" />Commentary</TabsTrigger>
            <TabsTrigger value="smalltalk" className="gap-2"><MessageCircle className="w-4 h-4" />Small Talk</TabsTrigger>
            <TabsTrigger value="curry" className="gap-2"><Star className="w-4 h-4" />⭐ Curry Mission</TabsTrigger>
          </TabsList>

          <TabsContent value="basics">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold mb-4">🏀 Basketball Basics — Court Vocabulary</h2>
              <p className="text-muted-foreground mb-6">篮球基础词汇 — 球场术语</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {basketballCourtVocabulary.map((item) => (
                  <Link key={item.id} href={MODULE_ROUTES["basketball-basics"]}>
                    <Card className="p-4 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base group-hover:text-primary transition-colors">{item.english}</h3>
                          <p className="text-xs text-muted-foreground">{item.chinese} · {item.pinyin}</p>
                          <p className="text-xs text-muted-foreground mt-1 italic">{item.phonetic}</p>
                          <p className="text-sm mt-2">{item.definitionZh}</p>
                          <p className="text-sm text-muted-foreground mt-1 italic">"{item.exampleEn}"</p>
                          <p className="text-xs text-muted-foreground">"{item.exampleZh}"</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="vocabulary">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold mb-4">📖 Basketball Vocabulary — Key Actions</h2>
              <p className="text-muted-foreground mb-6">篮球词汇 — 关键动作</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {basketballActionVocabulary.map((item) => (
                  <Link key={item.id} href={MODULE_ROUTES["basketball-vocabulary"]}>
                    <Card className="p-4 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base group-hover:text-primary transition-colors">{item.english}</h3>
                          <p className="text-xs text-muted-foreground">{item.chinese} · {item.pinyin}</p>
                          <p className="text-xs text-muted-foreground mt-1 italic">{item.phonetic}</p>
                          <p className="text-sm mt-2">{item.definitionZh}</p>
                          <p className="text-sm text-muted-foreground mt-1 italic">"{item.exampleEn}"</p>
                          <p className="text-xs text-muted-foreground">"{item.exampleZh}"</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="positions">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold mb-4">👤 Important Positions</h2>
              <p className="text-muted-foreground mb-6">重要位置 — 简单解释</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {basketballPositionVocabulary.map((item) => (
                  <Link key={item.id} href={MODULE_ROUTES["basketball-positions"]}>
                    <Card className="p-4 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base group-hover:text-primary transition-colors">{item.english}</h3>
                          <p className="text-xs text-muted-foreground">{item.chinese} · {item.pinyin}</p>
                          <p className="text-xs text-muted-foreground mt-1 italic">{item.phonetic}</p>
                          <p className="text-sm mt-2">{item.definitionZh}</p>
                          <p className="text-sm text-muted-foreground mt-1 italic">"{item.exampleEn}"</p>
                          <p className="text-xs text-muted-foreground">"{item.exampleZh}"</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="slang">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold mb-4">🔥 Talk Like a Basketball Fan</h2>
              <p className="text-muted-foreground mb-6">像篮球迷一样说话 — 俚语</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {basketballSlang.map((item) => (
                  <Link key={item.id} href={MODULE_ROUTES["basketball-slang"]}>
                    <Card className="p-4 hover:shadow-lg transition-all cursor-pointer h-full hover:border-primary/50 group">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🏀</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base group-hover:text-primary transition-colors">{item.term}</h3>
                          <p className="text-xs text-muted-foreground">{item.chinese}</p>
                          <p className="text-sm mt-1">{item.meaningZh}</p>
                          <p className="text-sm text-muted-foreground mt-1 italic">"{item.exampleEn}"</p>
                          <p className="text-xs text-muted-foreground">"{item.exampleZh}"</p>
                          {item.warning && (
                            <p className="text-xs text-amber-600 mt-2 font-medium">⚠️ {item.warningZh || item.warning}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <Card className="p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">🎯 Slang Matching Game</h3>
                <p className="text-muted-foreground mb-4">俚语配对游戏 — 测试你对篮球俚语的了解！</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {slangMatchingGame.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-muted/50">
                      <Badge variant="secondary" className="shrink-0">{item.term}</Badge>
                      <span className="text-sm">→</span>
                      <span className="text-sm">{item.meaning}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">🚫 Don&apos;t Say This to Curry 😂</h3>
                <p className="text-muted-foreground mb-4">不要说这些给库里听！</p>
                <div className="space-y-3">
                  {dontSayToCurry.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-2 items-start">
                      <div className="flex-1 p-3 rounded bg-red-50 dark:bg-red-950/20 border border-red-200">
                        <p className="text-sm line-through text-red-600">❌ {item.bad}</p>
                      </div>
                      <div className="flex-1 p-3 rounded bg-green-50 dark:bg-green-950/20 border border-green-200">
                        <p className="text-sm text-green-700">✅ {item.better}</p>
                        <p className="text-xs text-green-600">{item.betterZh}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="commentary">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold mb-4">🎙️ Game Commentary</h2>
              <p className="text-muted-foreground mb-6">比赛解说 — 初学者友好的解说短语</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {basketballCommentaryPhrases.map((item) => (
                  <Card key={item.id} className="p-3 flex items-center gap-3">
                    <span className="text-xl">🎙️</span>
                    <div>
                      <p className="font-medium">{item.english}</p>
                      <p className="text-sm text-muted-foreground">{item.chinese}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">👀 Watch & Say Drill</h3>
                <p className="text-muted-foreground mb-4">看画面说发生了什么（初学者）</p>
                <div className="space-y-2">
                  <p className="font-medium">What happened?</p>
                  <div className="flex flex-wrap gap-2">
                    {["He scored.", "He missed.", "He passed.", "He got the rebound.", "He hit a three."].map((phrase, idx) => (
                      <Badge key={idx} variant="outline" className="cursor-pointer hover:bg-muted">{phrase}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="smalltalk">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold mb-4">💬 Basketball Small Talk</h2>
              <p className="text-muted-foreground mb-6">篮球闲聊 — 自然的对话开场白</p>

              <div className="grid gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3">Talking With Fans 与球迷交谈</h3>
                  <p className="text-muted-foreground mb-4">Fan: Are you here to see Curry?</p>
                  <p className="font-medium">May: Yeah! I've been looking forward to this.</p>
                  <p className="text-sm text-muted-foreground mt-4">Fan: Are you a Warriors fan?</p>
                  <p className="font-medium">May: I'm still pretty new to basketball, but I really enjoy watching Curry.</p>
                  <p className="text-sm text-muted-foreground mt-4">Fan: Where are you from?</p>
                  <p className="font-medium">May: [May responds]</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3">Waiting in Line 排队等待</h3>
                  <p className="text-sm text-muted-foreground mb-2">Fan: How long have you been waiting?</p>
                  <p className="font-medium">May: Almost an hour.</p>
                  <p className="text-sm text-muted-foreground mt-2">Fan: Worth it?</p>
                  <p className="font-medium">May: Ask me again after I meet him. 😂</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3">Shenzhen Small Talk 深圳闲聊</h3>
                  <p className="text-muted-foreground mb-2">How are you enjoying Shenzhen?</p>
                  <p className="text-sm text-muted-foreground">Have you been here before?</p>
                  <p className="text-sm text-muted-foreground">Have you had a chance to explore the city?</p>
                  <p className="text-sm text-muted-foreground">Have you tried any local food?</p>
                  <p className="text-xs text-muted-foreground mt-2">💡 Choose ONE question. Don&apos;t ask all four!</p>
                </Card>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="curry">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="rounded-xl border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 p-6 sm:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl sm:text-6xl">⭐</div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold mb-1">⭐ Meet Stephen Curry</h2>
                    <p className="text-muted-foreground mb-3">Special Shenzhen Mission: meet Stephen Curry with confidence.</p>
                    <p className="text-muted-foreground text-sm mb-4">深圳特别任务：自信会见斯蒂芬·库里。</p>
                    <Link href="/sports/basketball/curry-mission">
                      <Badge variant="default" className="text-sm px-4 py-2 cursor-pointer">
                        Start the Mission →
                      </Badge>
                    </Link>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">5 Essential Sentences</h3>
              <p className="text-muted-foreground mb-4">如果你只学五句话，就是这些。</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {fiveEssentialSentences.map((item) => (
                  <Card key={item.id} className="p-4">
                    <p className="font-medium">{item.english}</p>
                    <p className="text-sm text-muted-foreground">{item.chinese}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">✍️ Autograph vs Signature</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded bg-blue-50 dark:bg-blue-950/20">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300">{autographVsSignature.autograph.title}</h4>
                    <p className="text-sm text-muted-foreground">{autographVsSignature.autograph.meaningZh}</p>
                  </div>
                  <div className="p-4 rounded bg-green-50 dark:bg-green-950/20">
                    <h4 className="font-bold text-green-700 dark:text-green-300">{autographVsSignature.signature.title}</h4>
                    <p className="text-sm text-muted-foreground">{autographVsSignature.signature.meaningZh}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">{autographVsSignature.note.chinese}</p>
              </Card>

              <Card className="p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">✅ Autograph Etiquette</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">DO ✅</h4>
                    <ul className="space-y-1">
                      {autographEtiquette.dos.map((item, idx) => (
                        <li key={idx} className="text-sm">✅ {item.textZh}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-700 mb-2">DON&apos;T ❌</h4>
                    <ul className="space-y-1">
                      {autographEtiquette.donts.map((item, idx) => (
                        <li key={idx} className="text-sm">❌ {item.textZh}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">👄 Pronunciation Practice</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {pronunciationPracticeWords.map((item, idx) => (
                    <div key={idx} className="p-3 rounded bg-muted/50">
                      <p className="font-medium">{item.english}</p>
                      <p className="text-xs text-muted-foreground italic">{item.phonetic}</p>
                      <p className="text-sm text-muted-foreground">Tip: {item.tip}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
