"use client";

import { StudentSidebar } from "@/components/layout/sidebar";
import { businessEnglishData } from "@/data/business-english";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function BusinessEmailsPage() {
  const emails = businessEnglishData.emailTemplates;

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
                <Badge variant="outline" className="text-sm">Email Templates</Badge>
                <Link href="/business-english/read">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Read Mode
                  </Button>
                </Link>
              </div>
            </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">📧 Business Email Templates</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional email templates for common business situations. Learn how to write emails that get results.
            </p>
          </div>

          <Tabs defaultValue={emails[0]?.id} className="mb-8">
            <TabsList className="flex-wrap justify-center gap-2">
              {emails.map((email) => (
                <TabsTrigger key={email.id} value={email.id} className="text-xs sm:text-sm">
                  {email.categoryZh}
                </TabsTrigger>
              ))}
            </TabsList>

            {emails.map((email) => (
              <TabsContent key={email.id} value={email.id} className="mt-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{email.situation}</h2>
                  <p className="text-muted-foreground">{email.situationZh}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <Card className="p-4 border-red-200 dark:border-red-800">
                    <p className="text-xs font-medium text-red-900 dark:text-red-100 uppercase mb-2">Too Direct</p>
                    <p className="text-sm mb-1">{email.tooDirect.en}</p>
                    <p className="text-xs text-muted-foreground">{email.tooDirect.zh}</p>
                  </Card>

                  <Card className="p-4 border-yellow-200 dark:border-yellow-800">
                    <p className="text-xs font-medium text-yellow-900 dark:text-yellow-100 uppercase mb-2">Better</p>
                    <p className="text-sm mb-1">{email.better.en}</p>
                    <p className="text-xs text-muted-foreground">{email.better.zh}</p>
                  </Card>

                  <Card className="p-4 border-green-200 dark:border-green-800">
                    <p className="text-xs font-medium text-green-900 dark:text-green-100 uppercase mb-2">Professional</p>
                    <p className="text-sm mb-1">{email.professional.en}</p>
                    <p className="text-xs text-muted-foreground">{email.professional.zh}</p>
                  </Card>
                </div>

                <Card className="p-5 mb-6">
                  <h3 className="font-bold mb-2">Explanation</h3>
                  <p className="text-sm mb-1">{email.explanation}</p>
                  <p className="text-xs text-muted-foreground">{email.explanationZh}</p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-bold mb-2">Template</h3>
                  <pre className="text-sm whitespace-pre-wrap bg-muted/50 p-4 rounded-lg">{email.template}</pre>
                  <p className="text-xs text-muted-foreground mt-2 whitespace-pre-wrap">{email.templateZh}</p>
                </Card>
              </TabsContent>
            ))}
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
