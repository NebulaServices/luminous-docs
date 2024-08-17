import { getPages } from "@/app/source";
import { languages } from "@/i18n";
import { createI18nSearchAPI } from "fumadocs-core/search/server";

export const { GET } = createI18nSearchAPI("advanced", {
  indexes: languages.map((entry) => {
    const pages = getPages(entry).map((page) => ({
      id: page.url,
      url: page.url,
      title: page.data.title,
      structuredData: page.data.exports.structuredData,
      locale: entry,
    }));
    return [entry, pages];
  }),
});
