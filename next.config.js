/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For username.github.io repo, basePath is ''.
  // For project repos (e.g. github.com/user/portfolio), change to '/portfolio'.
  basePath: '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
