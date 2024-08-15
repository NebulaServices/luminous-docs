import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: "git",
  },
});
function generateRemotePatterns(...domains) {
  return domains.map((domain) => ({
    hostname: domain,
    pathname: "**",
  }));
}
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
