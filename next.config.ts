/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "clinicmaster.goeasyapp.com",
      },
      {
        protocol: "https",
        hostname: "grocery.reclinerbdking.com",
      },
    ],
  },
};

module.exports = nextConfig;
