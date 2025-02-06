import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions, getLinks } from "@/app/layout.config";
import { pageTree } from "@/app/source";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      {...baseOptions}
      links={getLinks(lang)}
      tree={pageTree[lang]}
      i18n
    >
      {children}
    </DocsLayout>
  );
}
