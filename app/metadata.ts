import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Nebula",
    default: "Nebula Documentation",
  },
  metadataBase: new URL(process.env.LOCAL_URL || "http://localhost:3000"),
};
