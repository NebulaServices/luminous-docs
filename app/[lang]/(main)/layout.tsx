import { HomeLayout } from "fumadocs-ui/home-layout";
import type { ReactNode } from "react";
import { baseOptions, getLinks } from "@/app/layout.config";
import { i18n } from "@/i18n";
import dynamic from "next/dynamic";
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
  return i18n.languages.map((lang) => ({ params: { lang } }));
}
