import type { HomeLayoutProps } from "fumadocs-ui/home-layout";
import Image from "next/image";
import logo from "./icon.svg";

// shared configuration
export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/nebulaservices",
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
};
export const getLinks = (lang: string): HomeLayoutProps["links"] => [
  {
    text: "Documentation",
    url: `/${lang}/docs`,
    active: "nested-url",
  },
];
