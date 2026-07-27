"use client";

import { notFound } from "next/navigation";
import { StudentSidebar } from "@/components/layout/sidebar";
import { SpeakingTopicView } from "@/components/speaking/speaking-topic-view";
import { ieltsSpeakingPart1 } from "@/data/ielts-speaking-part1";
import { useSearchParams } from "next/navigation";
import { use } from "react";

export default function SpeakingTopicPage({ params }: { params: Promise<{ topicId: string }> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const mockId = searchParams.get("mock");
  const topic = ieltsSpeakingPart1.topics.find((t) => t.id === resolvedParams.topicId);

  if (!topic) {
    notFound();
  }

  return (
    <div className="flex">
      <StudentSidebar />
      <SpeakingTopicView topic={topic} activeMockId={mockId || undefined} />
    </div>
  );
}
