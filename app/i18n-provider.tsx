"use client";
import { languages } from "@/i18n";
import { I18nProvider as Base } from "fumadocs-ui/i18n";
import { usePathname, useRouter } from "next/navigation";
import { setLang } from "./set-lang";

export function I18nProvider({
  ...props
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const segments = usePathname()
    .split("/")
    .filter((v) => v.length > 0);
  return (
    <Base
      locales={[
        {
          name: "English",
          locale: "en",
        },
        {
          name: "Español",
          locale: "es",
        },
        {
          name: "日本語",
          locale: "ja",
        },
      ]}
      onChange={(v) => {
        setLang(v);
        if (languages.includes(segments[0])) {
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
