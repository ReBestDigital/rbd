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
  turbo: false,
  experimental: {
    turbo: false,
  },
}

export default nextConfig
