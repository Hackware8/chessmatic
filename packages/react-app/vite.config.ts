import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// import react from "@vitejs/plugin-react";
// import { UserConfig, ConfigEnv } from "vite";
// import { join, resolve } from "path";
// import alias from "@rollup/plugin-alias";

// const srcRoot = join(__dirname, "src");
// const projectRootDir = resolve(__dirname);

// export default ({ command }: ConfigEnv): UserConfig => {
//   // DEV
//   if (command === "serve") {
//     return {
//       root: srcRoot,
//       base: "/",
//       plugins: [alias(), react()],
//       define: {
//         global: "globalThis",
//       },
//       // resolve: {
//       //   alias: {
//       //     "/@": srcRoot,
//       //   },
//       // },
//       resolve: {
//         alias: {
//           "@": resolve(projectRootDir, "src"),
//         },
//       },

//       build: {
//         // outDir: join(srcRoot, "/out"),
//         outDir: join(srcRoot, "/build"),
//         emptyOutDir: true,
//         rollupOptions: {},
//       },
//       server: {
//         port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
//       },
//       optimizeDeps: {
//         // exclude: ["path"],
//         exclude: ["path", "ipfs-http-client", "electron-fetch"],
//       },
//     };
//   }
//   // PROD
//   return {
//     root: srcRoot,
//     // base: `${__dirname}/src/out/`,
//     base: ``,
//     plugins: [alias(), react()],
//     define: {
//       global: "globalThis",
//     },
//     // resolve: {
//     //   alias: {
//     //     "/@": srcRoot,
//     //   },
//     // },
//     resolve: {
//       alias: {
//         "@": resolve(projectRootDir, "src"),
//       },
//     },

//     build: {
//       // outDir: join(srcRoot, "/out"),
//       outDir: join(srcRoot, "/build"),
//       emptyOutDir: true,
//       rollupOptions: {},
//     },
//     server: {
//       port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
//     },
//     optimizeDeps: {
//       // exclude: ["path"],
//       exclude: ["path", "ipfs-http-client", "electron-fetch"],
//     },
//   };
// };
