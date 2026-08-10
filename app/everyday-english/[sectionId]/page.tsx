"use client";

import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { everydayEnglishSections } from "@/data/everyday-english";
import { SectionView } from "@/components/everyday-english/SectionView";
import { PatternEntry } from "@/types/everyday-english";

export default function SectionPage({ params }: { params: { sectionId: string } }) {
  const section = everydayEnglishSections.find((s) => s.id === params.sectionId);

  if (!section) {
    notFound();
  }

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <SectionView section={section} />
      </div>
    </div>
  );
}
