import solid from "solid-start/vite";
import { defineConfig } from "vite";
import svgSprite from "svg-sprites/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [solid({ ssr: false }), svgSprite({ dir: "assets/icons/**/*.svg" })],
});
