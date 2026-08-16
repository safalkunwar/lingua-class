"use client";

import React from "react";
import { StudentSidebar } from "@/components/layout/sidebar";
import { everydayEnglishSections } from "@/data/everyday-english";
import { ReadModeView } from "@/components/everyday-english/ReadModeView";

export default function ReadModePage({ params }: { params: Promise<{ sectionId: string }> }) {
  const { sectionId } = React.use(params);
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
        <div className="max-w-4xl mx-auto">
          <ReadModeView section={section} />
        </div>
      </div>
    </div>
  );
}
