/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org', "encrypted-tbn0.gstatic.com", "firstteeaustin.org"],
  },
  env: {
    apiKey: 'a9681e5d77mshe54731460894278p138f6ajsn3e29791c6eab',
  },
};

export default nextConfig;