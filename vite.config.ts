import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Make sure base matches your repo name exactly
export default defineConfig({
  base: "/will-you-be-my-valentine-main/",
  plugins: [react()],
});
