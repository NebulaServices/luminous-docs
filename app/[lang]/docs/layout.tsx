import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions, getLinks } from "@/app/layout.config";
import { pageTree } from "@/app/source";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <DocsLayout
      {...baseOptions}
      links={getLinks(params.lang)}
      tree={(pageTree as any)[params.lang]}
      i18n
    >
      {children}
    </DocsLayout>
  );
}
