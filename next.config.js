// /** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");

const withPWA = require("next-pwa")({
  dest: 'public'
})

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "cdn.sanity.io"]
  }
});

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["rb.gy", "cdn.sanity.io"]
//   }
// }
