import { createMDX } from "fumadocs-mdx/next";
function generateRemotePatterns(...domains) {
  return domains.map((domain) => ({
    hostname: domain,
    pathname: "**",
  }));
}
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: generateRemotePatterns(
      "github.com",
      "*.shields.io",
      "badgen.net"
    ),
    dangerouslyAllowSVG: true,
  },
};

export default withMDX(config);
