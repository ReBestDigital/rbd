import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
    minify: false, // Disattiva la decompilazione aggressiva dei chunk
    dangerousDynamicCacheKeys: true,
    buildCommand: "npx next build",
});