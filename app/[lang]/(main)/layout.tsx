import { HomeLayout } from "fumadocs-ui/home-layout";
import type { ReactNode } from "react";
import { baseOptions, getLinks } from "@/app/layout.config";
import { languages } from "@/i18n";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <HomeLayout {...baseOptions} links={getLinks(params.lang)}>
      {children}
    </HomeLayout>
  );
}
export function generateStaticParams() {
  return languages.map((lang) => ({ params: { lang } }));
}
