import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/i18n";
import { icons } from "lucide-react";
import { create } from "./create-icon";

export const { getPage, getPages, pageTree, getLanguages } = loader({
  i18n,
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
});
