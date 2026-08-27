import { notFound } from "next/navigation";
import { ReadingReader } from "@/components/reading/reading-reader";
import { readingPassages } from "@/data/reading";

export default async function ReadingPassagePage({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;
  const passage = readingPassages.find((p) => p.id === resolved.id);

  if (!passage) {
    notFound();
  }

  return <ReadingReader passage={passage} />;
}
