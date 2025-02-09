import type { MetadataRoute } from "next";
import { metadata } from "./metadata";
import { source } from "@/app/source";
import { i18n } from "@/i18n";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string): string =>
    new URL(path, metadata.metadataBase as URL).toString();
  const langPages = i18n.languages.flatMap((lang) =>
    source.getPages(lang).map((page) => {
      const { lastModified } = page.data;
      return {
        url: url(page.url),
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: "weekly",
        priority: 0.5,
        alternates: {
          languages: {
            en: url(page.url.replace(`/${lang}`, `/en`)),
            ja: url(page.url.replace(`/${lang}`, `/ja`)),
            "x-default": url(page.url.replace(`/${lang}/`, "/")),
          },
        },
      } as MetadataRoute.Sitemap[number];
    })
  );
  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: url("/en"),
          ja: url("ja"),
          "x-default": url("/"),
        },
      },
    },
    ...langPages,
  ];
}
