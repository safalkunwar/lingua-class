import { ComingSoon } from "@/components/shared/coming-soon";

export default function ListeningPage() {
  return (
    <ComingSoon
      emoji="🎧"
      title="Listening Lab"
      description="Train your ear with native English conversations in British and American accents."
      features={[
        "Native English audio at multiple speeds",
        "British and American accent options",
        "Fill-in-the-blanks exercises",
        "Comprehension questions",
      ]}
    />
  );
}
