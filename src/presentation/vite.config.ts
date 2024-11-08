/* eslint-disable no-restricted-exports */
import path from "path";

import react from "@vitejs/plugin-react-swc";
import { ConfigEnv, defineConfig, loadEnv } from "vite";

export default (configEnv: ConfigEnv) => {
  process.env = {
    ...process.env,
    ...loadEnv(configEnv.mode, process.cwd(), ""),
  };

  return defineConfig({
    plugins: [react()],
    publicDir: "../../public",
    envDir: "../../",
    build: {
      minify: true,
      sourcemap: false,
      outDir: "../../dist",
      modulePreload: {
        resolveDependencies: () => {
          return [];
        },
      },
      rollupOptions: {
        output: {
          sourcemap: false,
        },
      },
    },
    server: {
      host: true,
      port: 8086,
      strictPort: true,
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "../../src"),
        },
      ],
    },
  });
};
