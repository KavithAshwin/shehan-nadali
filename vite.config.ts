import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: process.env.NETLIFY ? { preset: "netlify" } : false
});