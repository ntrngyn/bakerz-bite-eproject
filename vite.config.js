// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: "/bakerz-bite-eproject/",

  plugins: [react(), basicSsl()],
  server: {
    https: true,
    proxy: {
      "/api/geolocation": {
        target: "https://nominatim.openstreetmap.org",
        changeOrigin: true,
        // Rewrite rule bây giờ sẽ trỏ đến /reverse
        rewrite: (path) => path.replace(/^\/api\/geolocation/, "/reverse"),
      },
    },
  },
});
