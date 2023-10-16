/** @type {import('next').NextConfig} */

console.log("running next.config.js");
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  rewrites: () => [
    {
      source: "/xyz-admin/:path*",
      destination: "/api/xyz-admin/:path*",
    },
  ],
};

export default nextConfig;
