import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { I18nProvider } from "@/app/i18n-provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";
import type { Translations } from "fumadocs-ui/i18n";

const font = Roboto({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    template: "%s | Nebula",
    default: "Nebula Documentation",
  },
  metadataBase: new URL(process.env.LOCAL_URL || "http://localhost:3000"),
};
export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
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
                },
              } satisfies { [key: string]: Translations }
            )[params.lang]
          }
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
