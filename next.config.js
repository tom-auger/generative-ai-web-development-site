const repo = 'generative-ai-web-development-site'
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
}

module.exports = nextConfig
