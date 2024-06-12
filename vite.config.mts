import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ViteImages from "vite-plugin-vue-images";
import legacyPlugin from "@vitejs/plugin-legacy";
import path from "path";
import pxtorem from "postcss-pxtorem";
import { fileURLToPath, URL } from "node:url";
// import postcss from "rollup-plugin-postcss";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue"],
        dts: "src/auto-import.d.ts",
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ViteImages({
        dirs: ["src/assets"], // 图像目录的相对路径
        extensions: ["jpg", "jpeg", "png", "svg", "webp"], // 有效的图像扩展
        customResolvers: [], // 覆盖名称->图像路径解析的默认行为
        customSearchRegex: "([a-zA-Z0-9]+)", // 重写搜索要替换的变量的Regex。
      }),
      legacyPlugin({
        targets: ["chrome 52"], // 需要兼容的目标列表，可以设置多个
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"], // 面向IE11时需要此插件
      }),
      // postcss({
      //   plugins: [
      //     pxtorem({
      //       rootValue: 16, // 基准值，根据实际情况调整
      //       propList: ["*"], // 需要转换的属性列表
      //     }),
      //   ],
      // }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // path记得引入
        // alias: {
        //   // '@': fileURLToPath(new URL('./src', import.meta.url)),
        //   // '@': fileURLToPath(new URL('.', import.meta.url)),
        //   // '@': path.resolve(__dirname, 'src'), // path记得引入
        // },
        // 注意一定不要随意命名，a b c这样的，项目的目录也不能为关键字保留字！！
        // "comp": resolve(__dirname, "src/components"),
        // // 配置图片要这样引用也可以自定义方法引入图片静态资源
        // "/img": "./src/assets",
      },
    },
    server: {
      host: "0.0.0.0",
      port: 8080,
      open: true,
      proxy: {
        "/api": {
          target: "http://127.0.0.1:5000",
          ws: false,
          changeOrigin: true,
          // rewrite:
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 10, // 基准值，根据实际情况调整
            propList: ["*"], // 需要转换
            minPixelValue: 2,
          }),
        ],
      },
    },
    build: {
      minify: "terser", // 必须开启：使用terserOptions才有效果
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
        // outDir: 'dist', // 指定输出路径
        // assetsDir: 'assets', // 指定生成静态文件目录
      },
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            //静态资源分拆打包
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
        },
      },
    },
  };
});
