// next.config.js
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
    ],
  },
};

module.exports = nextConfig;
