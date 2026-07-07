import { ComingSoon } from "@/components/shared/coming-soon";

export default function ReadingPage() {
  return (
    <ComingSoon
      emoji="📖"
      title="Reading Center"
      description="Read stories, news, and articles with Chinese translations and vocabulary popups."
      features={[
        "Stories, news, business, travel articles",
        "Side-by-side Chinese translations",
        "Tap any word for instant vocabulary popup",
        "Audio narration by native speakers",
      ]}
    />
  );
}
