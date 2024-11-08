/* eslint-disable no-restricted-exports */
import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    silent: true,
    environment: "happy-dom",
    globals: true,
    setupFiles: "src/tests/api/setup.ts",
    exclude: [...configDefaults.exclude, "**/tests/**"],
    coverage: {
      provider: "istanbul",
      all: false,
      exclude: [
        ...configDefaults.exclude,
        "src/core/*",
        "src/infrastructure/*",
        "src/presentation/AppShell.tsx",
        "src/presentation/initReact.tsx",
        "src/presentation/routes/*",
        "**/tests/*",
      ],
    },
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
    deps: {
      optimizer: {
        web: {
          exclude: ["react/jsx-runtime"],
        },
      },
    },
  },
});
