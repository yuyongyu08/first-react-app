import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  build: {
    outDir: "/Users/mac/Devs/yuyongyu08.github.io/react-demo",
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
