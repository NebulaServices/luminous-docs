import type { DocsLayoutProps } from "fumadocs-ui/layout";
import type { HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div className="flex flex-row gap-2 items-center w-auto">
        <span className="size-12 transition-all duration-1000">
          <NebulaLogo />
        </span>
        Nebula
      </div>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
function NebulaLogo() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width="400"
      height="400"
      style={{ width: "100%", height: "100%" }}
    >
      <title>nebula</title>
      <g id="svgg">
        <path
          id="path0"
          fillRule="evenodd"
          style={{ fill: "#5e17eb" }}
          d="m213.6 84c1 0.3 3.4 0.7 5.1 1 1.8 0.2 4.1 0.7 5.2 1 13.2 4.1 20.3 6.8 24.5 9.1 0.6 0.3 2.3 1.2 3.8 2 2.8 1.4 13.1 8 14.4 9.2 0.5 0.3 2.3 1.9 4.2 3.5 6.7 5.5 15.5 14.9 19.2 20.4 1 1.4 2 2.7 2.2 2.8 0.3 0.1 0.5 0.5 0.5 0.8 0 0.3 1.2 2.2 2.5 4.3 2.3 3.4 7.8 14.3 9.8 19.3 0.8 2.1 0.9 2.2 10 4.9 5.6 1.6 11.1 3.4 11.7 3.8 0.3 0.2 2.4 1.1 4.7 1.9 11.1 4.1 23 12.5 27.3 19.4 5.5 8.7 3.6 20.5-4.5 28.5-3.1 3-7.5 6.4-8.4 6.4-0.3 0-0.7 0.2-0.8 0.5-1.1 2.3-23.3 11.2-35.9 14.3-3.2 0.9-3.5 1.2-5.7 6.8-7.5 19-25.5 40.6-42.3 51.1-1.6 1-3.1 2-3.3 2.2-0.1 0.2-0.9 0.7-1.7 1.2-0.8 0.4-2.2 1.2-2.9 1.6-0.8 0.4-1.6 1-1.8 1.1-0.5 0.5-4.1 2.2-8.1 3.9-1.8 0.8-3.8 1.6-4.5 2-0.7 0.3-3.1 1.1-5.2 1.8-8.3 2.6-9.8 3-21 4.9-6.4 1.1-25.3 1.3-30.5 0.3-1.9-0.3-5.8-1.1-8.6-1.6-6.8-1.3-12.7-3-20-5.7-3.3-1.2-18-8.8-19.7-10.1-0.9-0.7-4.1-3.1-7.1-5.2-5.7-4.1-17.9-15.9-20.7-20-0.9-1.2-2-2.7-2.5-3.2-3.2-3.3-13.7-21.7-13.7-24.1 0-0.6-0.2-1.2-0.6-1.4-0.3-0.2-0.8-1.2-1-2.3-0.4-1.9-1.7-2.7-6.5-3.8-23.2-5.6-43.1-17.2-48.6-28.5-7.1-14.4 4.5-31.3 27.3-39.7 1.8-0.7 4.1-1.6 5.2-2 3.7-1.5 8-2.9 19.5-6.2 1.6-0.5 2.8-1.2 2.8-1.7 0-2.4 9.8-21.6 13.1-25.7 0.2-0.4 1.4-1.8 2.5-3.2 13.8-18.1 30.2-30.6 50.6-38.8 4.3-1.7 6-2.3 14.3-4.5 5.5-1.6 11.2-2.4 18.4-2.9 7.9-0.5 24-0.2 26.8 0.6zm-29.7 17.3c-0.2 0.1-7.3 1.7-12.9 2.7-1.7 0.4-4.3 1.2-5.8 1.9-1.5 0.6-3.9 1.5-5.5 2-1.5 0.4-3.3 1.3-4 2-0.7 0.7-1.7 1.2-2.3 1.2-1.2 0-9.5 4.5-9.8 5.3-0.2 0.3-0.5 0.6-0.9 0.6-1.9 0-19.6 16-23.8 21.6-9.3 12.2-16.1 27.4-19.2 42.7-2 10.1-1.1 37.5 1.4 41.4 0 0.1 3.7 0.9 8.1 1.8 9.5 1.9 12.8 2.4 34.6 4.9 38.5 4.5 107.9 2.2 138.3-4.5 1.4-0.3 4.1-0.9 6.1-1.3 4.2-0.8 3.4 0.2 4.9-7.1 1.6-8.3 1.7-27 0.1-34.6-1.5-7.1-3.2-13.4-3.7-14.2-0.3-0.4-0.7-1.5-0.9-2.6-2.8-12.1-19.2-34.1-33-44.3-2.9-2.1-5.5-4-5.8-4.3-2.8-2.2-4.9-3.1-7.2-3.1-2.1 0-2.6-0.2-2.7-1.3-0.2-1.5-5.7-4.5-6.3-3.5-0.7 1.1-2.4 0.6-2.7-0.7-0.4-1.3-1.2-1.6-5.8-2.1-1.6-0.2-4-0.9-5.5-1.6-3.9-1.8-5.3-2.2-10.2-2.6-4.6-0.4-25.2-0.7-25.5-0.3zm74.3 42.2c7.4 9.8 4.8 23.5-4.6 24.9-6.9 1-20.9-5.8-21-10.2 0-0.2-0.3-0.8-0.8-1.3-6.4-6.8-5-20.8 2.4-24.1 6.7-2.9 17.2 1.8 24 10.7zm-176.4 36.4c-0.1-0.1-4.6 1.1-5.9 1.6-0.7 0.3-3 1.2-5.1 2-9.9 3.8-15.1 6.8-19.6 11.5-3.4 3.5-3.3 4.5 0.5 8.7 1 1 11.3 7.6 12 7.6 0.2 0 1.7 0.6 3.4 1.3 1.6 0.8 3.6 1.6 4.3 1.9 1.8 0.8 9.3 3.3 9.9 3.3 0.3 0 0.3-2 0-4.4-0.6-5.6-0.6-24.5 0.1-29.6 0.3-2.1 0.5-3.9 0.4-3.9zm229.3-0.3c-0.2 0 0 1 0.2 2.1 0.6 2.8 0.6 31.3 0 34-0.5 2.2-0.4 2.2 1.3 1.8 3.1-0.7 12.9-4.5 18.3-7 8.5-4 14.3-10.1 12.6-13.3-1.1-2.1-6.7-7.2-7.9-7.2-0.4 0-0.9-0.2-1-0.5-0.4-1.1-11.8-6.1-19.2-8.5-2.3-0.7-4.2-1.4-4.3-1.4zm-199.4 63.4l-3.1-0.4 1.8 3.2c0.9 1.8 1.9 3.4 2.2 3.5 0.3 0.1 0.5 0.6 0.5 1.1 0 0.4 0.6 1.5 1.3 2.3 0.7 0.9 1.5 1.9 1.8 2.2 0.3 0.4 0.8 1.2 1.1 1.7 6.2 10.7 35.6 33.5 43.3 33.5 0.2 0 1.3 0.4 2.5 0.9 2.5 1.2 10.6 3.4 15.3 4.2 9.5 1.8 11.6 2.1 17.4 2.1 6.6 0 16.4-1.3 22.9-3 2.2-0.5 5.2-1.3 6.8-1.7 1.6-0.3 3.2-0.9 3.5-1.2 0.4-0.3 1.1-0.6 1.6-0.6 2.3 0 22-10.6 24-12.9 0.2-0.2 2.2-1.9 4.5-3.7 5.7-4.5 11.8-11 17.1-18.4 1.6-2.3 3.2-4.5 3.6-4.9 0.4-0.4 0.7-1 0.7-1.2 0-0.2 0.8-1.9 1.9-3.6 1.1-1.7 1.9-3.2 1.9-3.4 0-0.2-3.8 0.4-11 1.6-31.7 5.4-85.1 6.7-126.9 3.1-9.6-0.8-23.1-2.3-27.8-3.2-2.2-0.4-5.3-0.9-6.9-1.2z"
        />
      </g>
    </svg>
  );
}
