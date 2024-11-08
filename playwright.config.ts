/* eslint-disable no-restricted-exports */
import { defineConfig, devices } from "@playwright/test";

import { VITE_BASE_URL } from "./src/infrastructure/NodeSettings";

export default defineConfig({
  testDir: "./src/tests/e2e",
  fullyParallel: true,
  forbidOnly: !process.env.CI,
  retries: !process.env.CI ? 2 : 0,
  workers: !process.env.CI ? 1 : undefined,
  reporter: "null",
  globalSetup: "./src/tests/e2e/setup.ts",
  use: {
    baseURL: VITE_BASE_URL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "yarn dev",
    url: VITE_BASE_URL,
    reuseExistingServer: !process.env.CI,
  },
});
