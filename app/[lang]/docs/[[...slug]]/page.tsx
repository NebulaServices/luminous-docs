import { getPage, getPages, getLanguages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { ExternalLinkIcon } from "lucide-react";

export default async function Page({
  params,
}: {
  params: { slug?: string[]; lang: string };
}) {
  const page = getPage(params.slug, params.lang);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;
  const path = `content/docs/${page.file.path}`;
  const editText: Record<string, string> = {
    en: "Edit on GitHub",
    ja: "GitHubで編集",
  };
  return (
    <DocsPage
      toc={page.data.exports.toc}
      full={page.data.full}
      lastUpdate={page.data.exports.lastModified}
      tableOfContent={{
        footer: (
          <a
            href={`https://github.com/nebulaservices/luminous-docs-2/tree/main/${path}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground"
          >
            {editText[params.lang]} <ExternalLinkIcon className="ml-1 size-3" />
          </a>
        ),
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getLanguages().flatMap(({ language, pages }) =>
    pages.map((page) => ({
      lang: language,
      slug: page.slugs,
    }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { slug?: string[]; lang: string };
}) {
  const page = getPage(params.slug, params.lang);

  if (page == null) notFound();
  const imageParams = new URLSearchParams();
  imageParams.set("title", page.data.title);
  imageParams.set("description", page.data.description ?? "");
  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `/docs/${page.slugs.join("/")}`,
      images: {
        alt: "Banner",
        url: `/api/og?${imageParams.toString()}`,
        width: 1200,
        height: 630,
      },
    },
  } satisfies Metadata;
}
