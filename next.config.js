const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Turbopack configuration
  turbopack: {
    root: __dirname,
  },
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
