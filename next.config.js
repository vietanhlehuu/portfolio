module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/ball",
        destination: "https://ball.lehuuvietanh.com",
        permanent: true,
      },
    ];
  },
};
