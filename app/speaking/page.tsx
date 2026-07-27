"use client";

import { StudentSidebar } from "@/components/layout/sidebar";
import { IELSSpeakingTopicList } from "@/components/speaking/speaking-topic-list";
import { ieltsSpeakingPart1 } from "@/data/ielts-speaking-part1";

export default function SpeakingPage() {
  return (
    <div className="flex">
      <StudentSidebar />
      <IELSSpeakingTopicList />
    </div>
  );
}
