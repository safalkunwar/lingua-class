"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { TeacherSidebar } from "@/components/layout/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Volume2,
  AlertCircle,
  Lightbulb,
  PenTool,
  Mic,
  ClipboardList,
} from "lucide-react";
import { curriculum } from "@/data/curriculum";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { notFound } from "next/navigation";

export default function LessonPlanPage() {
  const params = useParams<{ levelId: string }>();
  const level = curriculum.find((l) => l.id === params.levelId);

  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  if (!level) notFound();

  return (
    <div className="flex">
      <TeacherSidebar />
      <div className="flex-1 p-6 sm:p-8">
        <Link href="/teacher">
          <Button variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold">{level!.title}</h1>
          <p className="mt-1 text-muted-foreground">{level!.description}</p>
          <div className="mt-3 flex gap-2">
            <Badge variant="secondary">{level!.items.length} words</Badge>
            <Badge variant="outline">Lesson Plan</Badge>
            <Link href="/classroom">
              <Badge className="bg-indigo-500 hover:bg-indigo-600">
                Open in Classroom
              </Badge>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {level!.items.map((item, i) => (
            <motion.div
              key={item.english}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <div>
                        <CardTitle className="text-2xl">
                          {item.english}
                        </CardTitle>
                        <p className="text-lg font-medium text-indigo-500">
                          {item.chinese}{" "}
                          <span className="text-sm text-muted-foreground">
                            ({item.pinyin})
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => speakEnglish(item.english)}
                      >
                        <Volume2 className="h-4 w-4" />
                        EN
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => speakChinese(item.chinese)}
                      >
                        <Volume2 className="h-4 w-4" />
                        ZH
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Pronunciation */}
                  <div className="rounded-lg bg-muted/50 p-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Pronunciation
                    </div>
                    <div className="font-mono text-sm">{item.breakdown}</div>
                  </div>

                  {/* Usage */}
                  <div>
                    <h4 className="mb-1 flex items-center gap-1.5 text-sm font-semibold">
                      <Lightbulb className="h-4 w-4 text-amber-500" />
                      Usage
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.detailsEn}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detailsZh}</p>
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="mb-1 text-sm font-semibold">Examples</h4>
                    <div className="rounded-lg border-l-4 border-indigo-400 bg-indigo-50/50 p-3 dark:bg-indigo-950/20">
                      <p className="text-sm font-medium">{item.exampleEn}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.exampleZh}
                      </p>
                    </div>
                  </div>

                  {/* Common Mistakes (placeholder) */}
                  <div>
                    <h4 className="mb-1 flex items-center gap-1.5 text-sm font-semibold">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      Common Mistakes
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Students often confuse &ldquo;{item.english}&rdquo; with similar
                      words. Emphasize the correct pronunciation:{" "}
                      <span className="font-mono">{item.breakdown}</span>.
                    </p>
                  </div>

                  <Separator />

                  {/* Teacher-only section */}
                  <div className="rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/50 p-4 dark:border-amber-500/30 dark:bg-amber-950/10">
                    <div className="mb-2 flex items-center gap-2">
                      <ClipboardList className="h-4 w-4 text-amber-600" />
                      <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400">
                        Teacher Notes (Hidden from Students)
                      </h4>
                    </div>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Ask students to repeat &ldquo;{item.english}&rdquo; three times.</li>
                      <li>Have students use it in their own sentence.</li>
                      <li>Pair practice: one says English, one says Chinese.</li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1">
                        <Mic className="h-3 w-3" /> Speaking Drill
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <PenTool className="h-3 w-3" /> Homework: Write 3 sentences
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
