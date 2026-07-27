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
import { ComingSoon } from "@/components/shared/coming-soon";

export default function SpeakingPage() {
  return (
    <ComingSoon
      emoji="🎤"
      title="Speaking Studio"
      description="Practice your pronunciation with real-time feedback and drills."
      features={[
        "Speech recognition with accuracy scoring",
        "Pronunciation, fluency, and confidence ratings",
        "Replay and compare with native audio",
        "Speaking drills for every vocabulary word",
      ]}
    />
  );
}

