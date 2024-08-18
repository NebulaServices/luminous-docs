"use client";
import { i18n } from "@/i18n";
import { I18nProvider as Base } from "fumadocs-ui/i18n";
import { usePathname, useRouter } from "next/navigation";
import { setLang } from "./set-lang";

export function I18nProvider({
  ...props
}: Omit<React.ComponentProps<typeof Base>, "onChange">) {
  const router = useRouter();
  const segments = usePathname()
    .split("/")
    .filter((v) => v.length > 0);
  return (
    <Base
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
