/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Forza la disattivazione del motore di build sperimentale che rompe OpenNext
  turbo: true,
  experimental: {
    turbo: true,
  },
}

export default nextConfig
