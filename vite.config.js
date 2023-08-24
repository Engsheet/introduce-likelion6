import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { env } from "node:process";

const idDev = env.NODE_ENV === "development";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: idDev ? "[name]_[local]__[hash:base64:5]" : "[hash:base64:4]",
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@a", replacement: "/src/assets" },
      { find: "@c", replacement: "/src/components" },
      { find: "@l", replacement: "/src/layout" },
      { find: "@p", replacement: "/src/pages" },
      { find: "@s", replacement: "/src/styles" },
      { find: "@u", replacement: "/src/utils" },
      { find: "@h", replacement: "/src/hooks" },
    ],
  },
});
