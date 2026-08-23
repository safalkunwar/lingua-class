"use client";

import { StudentSidebar } from "@/components/layout/sidebar";
import { businessEnglishData } from "@/data/business-english";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Volume2, ChevronLeft, Lightbulb, MessageSquare, BookOpen } from "lucide-react";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function BusinessIdiomsPage() {
  const { speakEnglish, speakChinese } = useSpeechSynthesis();

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <Link href="/business-english">
                <Button variant="ghost">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back to Business English
                </Button>
              </Link>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-sm">Idioms & Decoder</Badge>
                <Link href="/business-english/read">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Mode
                  </Button>
                </Link>
              </div>
            </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">🎭 Business Idioms & Corporate Decoder</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn common business idioms and decode what corporate speak really means.
            </p>
          </div>

          <Tabs defaultValue="idioms" className="mb-8">
            <TabsList className="flex-wrap justify-center gap-2">
              <TabsTrigger value="idioms" className="gap-2">
                <Lightbulb className="w-4 h-4" />
                Idioms
              </TabsTrigger>
              <TabsTrigger value="decoder" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Corporate Decoder
              </TabsTrigger>
            </TabsList>

            <TabsContent value="idioms" className="mt-6">
              <div className="space-y-4">
                {businessEnglishData.idioms.map((idiom) => (
                  <Card key={idiom.id} className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">&ldquo;{idiom.idiom}&rdquo;</h3>
                        <p className="text-base text-indigo-600 dark:text-indigo-400">{idiom.chinese}</p>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => speakEnglish(idiom.idiom)}
                          className="h-9 w-9"
                        >
                          <Volume2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 mb-4">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Literal Meaning</p>
                        <p className="text-sm">{idiom.literalMeaning}</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">Actual Meaning</p>
                        <p className="text-sm">{idiom.actualMeaning}</p>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">{idiom.actualMeaningZh}</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-muted/30 mb-4">
                      <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Example</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm italic">&ldquo;{idiom.example}&rdquo;</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() => speakEnglish(idiom.example)}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">{idiom.exampleZh}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 mb-4">
                      <p className="text-xs font-medium text-amber-900 dark:text-amber-100 mb-1">Business Example</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm italic">&ldquo;{idiom.businessExample}&rdquo;</p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() => speakEnglish(idiom.businessExample)}
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">{idiom.businessExampleZh}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Related: {idiom.related.join(", ")}</Badge>
                      <Badge variant="outline" className="text-xs">Opposite: {idiom.opposite.join(", ")}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="decoder" className="mt-6">
              <div className="space-y-4">
                {businessEnglishData.corporateDecoder.map((item) => (
                  <Card key={item.id} className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">&ldquo;{item.phrase}&rdquo;</h3>
                        <p className="text-base text-indigo-600 dark:text-indigo-400">{item.businessMeaningZh}</p>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => speakEnglish(item.phrase)}
                          className="h-9 w-9"
                        >
                          <Volume2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 mb-4">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Literal Translation</p>
                        <p className="text-sm">{item.literalZh}</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">Business Meaning</p>
                        <p className="text-sm">{item.businessMeaning}</p>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">{item.businessMeaningZh}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-muted/30 rounded-lg mb-4">
                      <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Context & Tone</p>
                      <p className="text-sm mb-1">{item.context}</p>
                      <p className="text-xs text-muted-foreground">{item.contextZh}</p>
                    </div>

                    <Badge
                      variant={
                        item.tone === "funny"
                          ? "default"
                          : item.tone === "passive-aggressive"
                          ? "destructive"
                          : item.tone === "urgent"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs capitalize"
                    >
                      {item.tone}
                    </Badge>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="pt-8 border-t mt-8">
            <Link href="/business-english">
              <Button variant="ghost">← Back to Business English</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
