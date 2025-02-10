"use client";
import { i18n } from "@/i18n";
import { I18nProvider as I18nBase } from "fumadocs-ui/i18n";
import { RootProvider as RootBase } from "fumadocs-ui/provider";
import { usePathname, useRouter } from "next/navigation";
import { setLang } from "./set-lang";
import dynamic from "next/dynamic";
const SearchDialog = dynamic(() => import("@/components/search"), {
  ssr: false,
});
export function I18nProvider({
  ...props
}: Omit<React.ComponentProps<typeof I18nBase>, "onChange">) {
  const router = useRouter();
  const segments = usePathname()
    .split("/")
    .filter((v) => v.length > 0);
  return (
    <I18nBase
      onChange={(v) => {
        setLang(v);
        if (i18n.languages.includes(segments[0])) {
          segments.shift();
        }
        if (segments[0] !== v) {
          segments.unshift(v);
        } else {
          segments[0] = v;
        }
        router.push(`/${segments.join("/")}`);
      }}
      {...props}
    />
  );
}
export function RootProvider({ children }: { children: React.ReactNode }) {
  return <RootBase search={{ SearchDialog }}>{children}</RootBase>;
}
