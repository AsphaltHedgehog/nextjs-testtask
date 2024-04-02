/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['upload.wikimedia.org', "encrypted-tbn0.gstatic.com", "firstteeaustin.org"],
  },
  env: {
    apiKey: 'f63cf3ec6emsh3d725b5c79a169bp1dd2fcjsn36ea03d0676c',
  },
};

export default nextConfig;