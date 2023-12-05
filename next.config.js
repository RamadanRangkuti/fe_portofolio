/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    customKey: 'my-value',
  },
}

module.exports = nextConfig
