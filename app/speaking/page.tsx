"use client";

import { StudentSidebar } from "@/components/layout/sidebar";
import { IELSSpeakingTopicList } from "@/components/speaking/speaking-topic-list";

export default function SpeakingPage() {
  return (
    <div className="flex">
      <StudentSidebar />
      <IELSSpeakingTopicList />
    </div>
  );
}
