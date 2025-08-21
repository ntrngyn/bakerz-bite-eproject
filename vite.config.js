// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: "/bakerz-bite-eproject/",

  plugins: [react(), basicSsl()],

  server: {
    https: true,
  },
});
