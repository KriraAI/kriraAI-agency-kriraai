/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    // domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/service/:serviceId',
  //       destination: '/service/[serviceId]',
  //     },
  //   ];
  // },


  // output: "export"
};

module.exports = nextConfig;
