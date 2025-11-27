import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteVConsole } from "vite-plugin-vconsole";
import { fileURLToPath, URL } from "url";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import DefineOptions from "unplugin-vue-define-options/vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import topLevelAwait from "vite-plugin-top-level-await";
// 本地 mock 工具，仅 dev 环境生效
import { viteMock } from "./vite-plugin/vite-plugin-link-mock";

// @ts-ignore
export default defineConfig(({ mode }) => {
  const version = process.env.npm_package_version;
  const name = process.env.npm_package_name?.toUpperCase();

  return {
    base: "./",
    plugins: [
      vue({
        reactivityTransform: true,
      }),
      DefineOptions(),
      Components({
        resolvers: [VantResolver()],
      }),
      VueI18nPlugin({
        include: fileURLToPath(
          new URL("./src/config/locale/**", import.meta.url)
        ),
      }),
      viteVConsole({
        entry: [fileURLToPath(new URL("./src/main.ts", import.meta.url))],
        localEnabled: false, // dev environment
        enabled: mode === "vlog",
      }),
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: "__tla",
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i: any) => `__tla_${i}`,
      }),
      viteMock({
        entry: [fileURLToPath(new URL("./src/main.ts", import.meta.url))],
        path: "../mock/mock.js",
        enabled: false,
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@common": fileURLToPath(
          new URL("./src/components/common", import.meta.url)
        ),
      },
    },
    server: {
      // 开启 ip 访问
      host: "0.0.0.0",
    },
    build: {
      target: "modules",
      outDir: `dist/${version}/${name}`, //指定输出路径
      assetsDir: "assets", // 指定生成静态资源的存放路径
      minify: "terser", // 混淆器，terser构建后文件体积更小
    },
  };
});
