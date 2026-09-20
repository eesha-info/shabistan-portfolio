/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // generates static HTML/CSS/JS
  basePath: '/shabistan-portfolio',
  assetPrefix: '/shabistan-portfolio/',
  images: {
    unoptimized: true,           // GitHub Pages can't run Next's image optimizer
  },
  trailingSlash: true,           // helps GitHub Pages route folders correctly
};

module.exports = nextConfig;