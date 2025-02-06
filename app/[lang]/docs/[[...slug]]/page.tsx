import { getPage, source } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
export default async function Page(props: {
  params: Promise<{ slug?: string[]; lang: string }>;
}) {
  const params = await props.params;
  console.log(params);
  const page = getPage(params.slug, params.lang);

  if (!page) notFound();

  const { body: MDX, toc, lastModified, full } = page.data;
  return (
    <DocsPage
      toc={toc}
      full={full}
      lastUpdate={lastModified}
      tableOfContent={{
        style: "clerk",
      }}
      editOnGithub={{
        repo: "luminous-docs",
        owner: "spaceness",
        sha: "main",
        path: `content/docs/${page.file.path}`,
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX
          components={{
            ...defaultMdxComponents,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[]; lang: string }>;
}) {
  const params = await props.params;
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
