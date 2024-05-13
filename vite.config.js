import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  VantResolver,
  AntDesignVueResolver,
} from "unplugin-vue-components/resolvers";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      impoets: ["vue"],
      dts: "./auto-imports.d.ts",
    }),
    Components({
      dts: true,
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
