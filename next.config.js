// next.config.js

// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: outputDir,
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        // Optionally, specify pathname patterns
        // pathname: "/**",
      },
    ],
    domains: ['localhost'],
    unoptimized: true,
  },
  productionBrowserSourceMaps: isProduction,
};

module.exports = nextConfig;
