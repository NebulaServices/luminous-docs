import { HomeLayout } from "fumadocs-ui/home-layout";
import type { ReactNode } from "react";
import { baseOptions, getLinks } from "@/app/layout.config";
import { languages } from "@/i18n";
import dynamic from "next/dynamic";
const LanguageToggle = dynamic(
  async () => (await import("@/components/language-toggle")).LanguageToggle
);
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
      <div className="fixed bottom-2 right-2">
        <LanguageToggle />
      </div>
    </HomeLayout>
  );
}
export function generateStaticParams() {
  return languages.map((lang) => ({ params: { lang } }));
}
