"use client";

import React from "react";
import { useState } from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { everydayEnglishSections } from "@/data/everyday-english";
import { SectionView } from "@/components/everyday-english/SectionView";
import { PatternEntry } from "@/types/everyday-english";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function SectionPage({ params }: { params: Promise<{ sectionId: string }> }) {
  const [sectionId] = useState(() => React.use(params).sectionId);
  const section = everydayEnglishSections.find((s) => s.id === sectionId);

  if (!section) {
    return (
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Section not found</h1>
            <p className="text-muted-foreground mb-6">The everyday English section you are looking for does not exist.</p>
            <a href="/everyday-english" className="text-primary underline">Back to Everyday English</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
          <div>
            <h1 className="text-2xl font-bold">{section.title}</h1>
            <p className="text-muted-foreground">{section.titleZh}</p>
          </div>
          <Link href={`/everyday-english/${section.id}/read`}>
            <Button variant="default" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Read Mode — View All Details
            </Button>
          </Link>
        </div>
        <SectionView section={section} />
      </div>
    </div>
  );
}
