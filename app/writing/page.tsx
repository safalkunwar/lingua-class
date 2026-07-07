import { ComingSoon } from "@/components/shared/coming-soon";

export default function WritingPage() {
  return (
    <ComingSoon
      emoji="✍️"
      title="Writing Workshop"
      description="Practice writing messages, emails, paragraphs, and essays with guidance."
      features={[
        "Writing prompts for messages, emails, essays",
        "AI-style suggestions (rule-based initially)",
        "Grammar and spelling feedback",
        "Templates for common writing scenarios",
      ]}
    />
  );
}
