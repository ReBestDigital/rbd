import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Qui forziamo Next.js a compilare tutto in modalità Edge, 
     rendendolo compatibile al 100% con Cloudflare Workers */
  experimental: {
    runtime: 'edge',
  },
};

export default nextConfig;