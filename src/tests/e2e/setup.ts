/* eslint-disable no-restricted-exports */
import { chromium, type FullConfig } from "@playwright/test";

const playwrightSetup = async (config: FullConfig) => {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);
  await browser.close();
};

export default playwrightSetup;
