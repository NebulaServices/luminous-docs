import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const font = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Nebula Documentation",
  metadataBase: new URL(process.env.LOCAL_URL || "http://localhost:3000"),
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
