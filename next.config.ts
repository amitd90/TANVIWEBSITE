import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" && repoName ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" && repoName ? `/${repoName}/` : "",
};

export default nextConfig;
