import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/RMPortfolio" : "",
  assetPrefix: isGitHubPages ? "/RMPortfolio/" : "",
  trailingSlash: isGitHubPages,
  images: { unoptimized: isGitHubPages },
  turbopack: { root: process.cwd() },
};

export default nextConfig;
