"use client";

import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { dailyExpressions } from "@/data/daily-expressions";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  BookOpen,
  MessageCircle,
  HelpCircle,
  Lightbulb,
  Volume2,
  BookMarked,
  Search,
} from "lucide-react";
import { DailyExpression } from "@/types/conversations";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";

type Tab = "all" | "formal" | "neutral" | "casual" | "slang" | "very-informal";

export default function DailyExpressionsPage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<Tab>("all");
  const [selectedExpr, setSelectedExpr] = useState<DailyExpression | null>(null);
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  const filtered = dailyExpressions.filter((expr) => {
    const matchesSearch =
      expr.expression.toLowerCase().includes(search.toLowerCase()) ||
      expr.meaning.toLowerCase().includes(search.toLowerCase()) ||
      expr.chinese.includes(search);
    const matchesTab = tab === "all" || expr.register === tab;
    return matchesSearch && matchesTab;
  });

  const getRegisterBadgeColor = (level: string) => {
    switch (level) {
      case "formal": return "bg-blue-100 text-blue-800 border-blue-200";
      case "neutral": return "bg-gray-100 text-gray-800 border-gray-200";
      case "casual": return "bg-green-100 text-green-800 border-green-200";
      case "slang": return "bg-purple-100 text-purple-800 border-purple-200";
      case "very-informal": return "bg-orange-100 text-orange-800 border-orange-200";
      case "rude": return "bg-red-100 text-red-800 border-red-200";
      case "vulgar": return "bg-rose-900 text-rose-100 border-rose-700";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <Link href="/conversations">
            <Button variant="ghost" className="mb-4">
              ← Back to Conversations
            </Button>
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight">📚 Daily Native Expressions</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Master expressions exactly as natives use them. Learn meaning, context, pronunciation, and common mistakes.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {dailyExpressions.length} expressions
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex gap-2 flex-wrap justify-center">
              {(["all", "formal", "neutral", "casual", "slang", "very-informal"] as Tab[]).map((t) => (
                <Button
                  key={t}
                  onClick={() => setTab(t)}
                  variant={tab === t ? "default" : "outline"}
                  size="sm"
                  className="capitalize"
                >
                  {t === "all" ? "All" : t.replace("-", " ")}
                </Button>
              ))}
            </div>
            <div className="sm:max-w-md w-full">
              <Input
                placeholder="Search expressions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No expressions found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter.</p>
          </motion.div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((expr, index) => (
              <motion.div
                key={expr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group border-2 hover:border-indigo-200"
                  onClick={() => setSelectedExpr(selectedExpr?.id === expr.id ? null : expr)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                         <div className="flex items-center gap-2">
                           <h3 className="text-xl font-bold">&ldquo;{expr.expression}&rdquo;</h3>
                           <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => speakEnglish(expr.expression)}
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-indigo-600 dark:text-indigo-400">{expr.chinese}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => speakChinese(expr.chinese)}
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">{expr.pinyin}</p>
                      </div>
                      <Badge className={`${getRegisterBadgeColor(expr.register)}`}>
                        {expr.register}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{expr.meaning}</p>

                    {selectedExpr?.id === expr.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 space-y-3 border-t border-border pt-4"
                      >
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">When to Use</p>
                          <p className="text-sm">{expr.whenToUse}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">When NOT to Use</p>
                          <p className="text-sm text-red-700 dark:text-red-300">{expr.whenNotToUse}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Pronunciation</p>
                          <p className="text-sm font-mono">{expr.pronunciation}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Memory Trick</p>
                          <p className="text-sm">{expr.memoryTrick}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Funny Example</p>
                           <div className="flex items-center gap-2">
                             <p className="text-sm italic">&ldquo;{expr.funnyExample}&rdquo;</p>
                             <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => speakEnglish(expr.funnyExample)}
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase">Related Expressions</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {expr.relatedExpressions.map((rel, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{rel}</Badge>
                            ))}
                          </div>
                        </div>
                        {expr.miniQuiz && expr.miniQuiz.length > 0 && (
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase">Mini Quiz</p>
                            {expr.miniQuiz.map((q, idx) => (
                              <div key={idx} className="mt-2 p-2 bg-indigo-50 dark:bg-indigo-950/20 rounded">
                                <p className="text-sm mb-1">{q.question}</p>
                                <div className="flex flex-wrap gap-1">
                                  {q.options.map((opt, optIdx) => (
                                    <Badge key={optIdx} variant={q.correct === optIdx ? "default" : "outline"} className="text-xs">
                                      {opt}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
