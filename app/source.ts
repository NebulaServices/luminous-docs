import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { languages, defaultLanguage } from "@/i18n";

export const { getPage, getPages, pageTree } = loader({
  languages,
  defaultLanguage,
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
});
