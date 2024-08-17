import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { languages, defaultLanguage } from "@/i18n";
import { icons } from "lucide-react";
import { create } from "./create-icon";
import { createElement, type ReactElement } from "react";

export const { getPage, getPages, pageTree } = loader({
  languages,
  defaultLanguage,
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
});
