import { ComingSoon } from "@/components/shared/coming-soon";

export default function LessonLibraryPage() {
  return (
    <ComingSoon
      emoji="🎓"
      title="Lesson Library"
      description="Browse our complete curriculum organized by level and topic."
      features={[
        "Foundation: Alphabet, sounds, pronunciation",
        "Beginner: Everyday English, numbers, food, travel",
        "Elementary: Daily routine, work, school, social life",
        "Intermediate: Business English, emails, meetings",
        "Advanced: Professional communication, leadership",
      ]}
    />
  );
}
