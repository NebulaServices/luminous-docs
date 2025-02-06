import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";
import { baseOptions, getLinks } from "@/app/layout.config";
import { i18n } from "@/i18n";
import dynamic from "next/dynamic";
export default async function Layout(props: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <HomeLayout {...baseOptions} links={getLinks(params.lang)}>
      {children}
    </HomeLayout>
  );
}
export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ params: { lang } }));
}
