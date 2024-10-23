import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    reactRouter({
      appDirectory: "src",
      ssr: true,
    }),
  ],
});
