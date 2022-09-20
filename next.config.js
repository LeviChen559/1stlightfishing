/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp']
  },
  i18n: {
    // providing the locales supported by your application
   locales: ["en", "zh", ],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "en",
 },

}

module.exports = nextConfig
