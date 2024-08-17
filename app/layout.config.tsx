import type { HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";
import Image from "next/image";
import logo from "./assets/logo.svg";

// shared configuration
export const baseOptions = (lang: string): HomeLayoutProps => ({
  nav: {
    title: (
      <div className="flex flex-row gap-2 items-center w-auto">
        <span className="size-12 transition-all duration-1000">
          <Image src={logo} alt="The nebula logo" />
        </span>
        Nebula
      </div>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: `/${lang}/docs`,
      active: "nested-url",
    },
  ],
});
