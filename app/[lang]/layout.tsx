import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { I18nProvider } from "@/app/i18n-provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";

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
        <I18nProvider locale={params.lang}>
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
