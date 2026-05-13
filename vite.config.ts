import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      routes: ["/"],
    },
  },
  vite: {
    base: "/kosfinder-your-student-home/",
    build: {
      outDir: "dist",
    },
  },
});
