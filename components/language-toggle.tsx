"use client";
import { useState } from "react";
import type { PopoverProps } from "@radix-ui/react-popover";
import { LanguagesIcon } from "lucide-react";
import { useI18n } from "fumadocs-ui/provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils/cn";
import { layoutButtonVariants } from "@/components/ui/button";
import { setLang } from "@/app/set-lang";
import { usePathname, useRouter } from "next/navigation";

export type LanguageSelectProps = Omit<PopoverProps, "open" | "onOpenChange">;
export function LanguageToggle(props: LanguageSelectProps): React.ReactElement {
  const context = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (!context.locales) throw new Error("Missing `<I18nProvider />`");

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger
        aria-label={context.text.chooseLanguage}
        className={cn(
          layoutButtonVariants({
            size: "sm",
            color: "outline",
            className: "p-2",
          })
        )}
      >
        <LanguagesIcon className="size-4 mr-2" />
        {context.text.chooseLanguage}
      </PopoverTrigger>
      <PopoverContent className="flex flex-col p-1">
        <p className="mb-1 p-2 text-xs font-medium text-fd-muted-foreground">
          {context.text.chooseLanguage}
        </p>
        {context.locales.map((item) => (
          <button
            key={item.locale}
            type="button"
            className={cn(
              "rounded-md p-2 text-left text-sm transition-colors duration-100",
              item.locale === context.locale
                ? "bg-fd-primary/10 font-medium text-fd-primary"
                : "hover:bg-fd-accent hover:text-fd-accent-foreground"
            )}
            onClick={() => {
              setLang(item.locale);
              router.replace(`/${item.locale}${pathname.slice(3)}`);
            }}
          >
            {item.name}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
