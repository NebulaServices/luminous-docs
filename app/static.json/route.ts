import { NextResponse } from "next/server";
import { type DocumentRecord } from "fumadocs-core/search/algolia";
import { source } from "@/app/source";
export const revalidate = false;

export function GET() {
  const results: Record<string, DocumentRecord[]> = {};
  for (const { language, pages } of source.getLanguages()) {
    results[language] = pages.map((page) => ({
      _id: page.url,
      structured: page.data.structuredData,
      url: page.url,
      title: page.data.title,
      description: page.data.description,
    }));
  }
  return NextResponse.json(results);
}
