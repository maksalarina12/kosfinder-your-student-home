import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Tambahkan base path sesuai nama repository kamu
  base: '/kosfinder-your-student-home/', 
  tanstackStart: {
    server: { entry: "server" },
  },
});
