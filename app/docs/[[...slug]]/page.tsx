import { getPage, getPages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { ExternalLinkIcon } from "lucide-react";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;
  const path = `content/docs/${page.file.path}`;

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
            Edit on GitHub <ExternalLinkIcon className="ml-1 size-3" />
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
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();
  const imageParams = new URLSearchParams();
  const description = page.data.description ?? "";
  imageParams.set("title", page.data.title);
  imageParams.set("description", description);
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
