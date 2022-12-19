import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import UnoCSS from "unocss/vite"
import { presetAttributify, presetIcons, presetUno } from "unocss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
    Components(),
    AutoImport({
      imports: ["vue", "vue-router", "vue/macros", "@vueuse/core"],
      vueTemplate: true,
    }),
    UnoCSS({
      shortcuts: {
        "border-base": "border-gray/20 dark:border-gray/15",
        "bg-base": "bg-white dark:bg-[#1a1a1a]",
        "bg-canvas": "bg-gray:15 dark:bg-[#111]",
        "icon-btn": "op30 hover:op100",
      },
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // https://github.com/vitejs/vite/issues/1153#issuecomment-785467271
  // fix HRM windows docker and wsl
  server: {
    watch: {
      usePolling: true
    }
  }
})
