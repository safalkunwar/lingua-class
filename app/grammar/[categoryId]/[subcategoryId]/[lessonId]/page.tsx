"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { getGrammarCategory, getGrammarSubcategory, getGrammarLesson } from "@/data/grammar";
import { GrammarBreadcrumb } from "@/components/grammar/GrammarBreadcrumb";
import { GrammarSlideViewer } from "@/components/grammar/GrammarSlideViewer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface LessonPageProps {
  params: Promise<{ categoryId: string; subcategoryId: string; lessonId: string }>;
}

export default function GrammarLessonPage({ params }: LessonPageProps) {
  const resolvedParams = React.use(params);
  const { categoryId, subcategoryId, lessonId } = resolvedParams;

  const category = getGrammarCategory(categoryId);
  const subcategory = getGrammarSubcategory(categoryId, subcategoryId);
  const lesson = getGrammarLesson(lessonId);

  if (!category || !subcategory || !lesson) {
    notFound();
  }

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />

      <main className="flex-1 p-3 sm:p-5 lg:p-7 max-w-5xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-2">
          <GrammarBreadcrumb
            items={[
              {
                label: category.name,
                labelZh: category.nameZh,
                href: `/grammar/${category.id}`,
              },
              {
                label: subcategory.name,
                labelZh: subcategory.nameZh,
                href: `/grammar/${category.id}/${subcategory.id}`,
              },
              {
                label: lesson.title,
                labelZh: lesson.titleZh,
              },
            ]}
          />

          <Link href={`/grammar/${category.id}/${subcategory.id}`}>
            <Button variant="ghost" size="sm" className="text-xs gap-1 shrink-0">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Lessons
            </Button>
          </Link>
        </div>

        {/* Slide Viewer Component */}
        <div className="mt-2">
          <GrammarSlideViewer lesson={lesson} />
        </div>
      </main>
    </div>
  );
}
