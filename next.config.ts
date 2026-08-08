import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const useProjectPath = process.env.NEXT_PUBLIC_USE_PROJECT_PATH === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: useProjectPath && repoName ? `/${repoName}` : "",
  assetPrefix: useProjectPath && repoName ? `/${repoName}/` : "",
};

export default nextConfig;
