import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { i18n } from "@/i18n";
import { icons } from "lucide-react";
import { create } from "./create-icon";

export const source = loader({
  i18n,
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (icon && icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
});
export const { getPage, getPages, pageTree, getLanguages } = source;
