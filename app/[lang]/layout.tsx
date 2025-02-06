import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { I18nProvider } from "@/app/i18n-provider";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import type { ReactNode } from "react";
import type { Translations } from "fumadocs-ui/i18n";

const font = Roboto_Flex({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    template: "%s | Nebula",
    default: "Nebula Documentation",
  },
  metadataBase: new URL(process.env.LOCAL_URL || "http://localhost:3000"),
};
export default async function Layout(props: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html
      lang={params.lang}
      className={font.className}
      suppressHydrationWarning
    >
      <body>
        <I18nProvider
          locale={params.lang}
          locales={[
            {
              name: "English",
              locale: "en",
            },
            {
              name: "日本語",
              locale: "ja",
            },
          ]}
          translations={
            (
              {
                ja: {
                  search: "検索",
                  chooseLanguage: "言語を選択",
                  searchNoResult: "結果が見つかりませんでした",
                  toc: "このページでは",
                  tocNoHeadings: "見出しなし",
                  lastUpdate: "最終更新日",
                  nextPage: "次",
                  previousPage: "前の",
                  chooseTheme: "テーマ",
                  editOnGithub: "GitHub で編集する",
                },
              } satisfies Record<string, Translations>
            )[params.lang]
          }
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
