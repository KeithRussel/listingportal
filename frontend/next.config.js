/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    path: "/_next/image",
    domains: ["via.placeholder.com", "listing-app-zzws6.ondigitalocean.app"],
  },
  env: {
    APP_URL: process.env.APP_URL,
  },
};

module.exports = nextConfig;
