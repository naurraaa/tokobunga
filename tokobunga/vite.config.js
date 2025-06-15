import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Konfigurasi Vite
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // supaya bisa pakai '@/components/...'
    },
  },
  server: {
    port: 5173, // default, bisa diganti kalau mau
  },
  base: "./", // ✅ Tambahkan ini agar Vite bisa resolve import relative saat build
});
