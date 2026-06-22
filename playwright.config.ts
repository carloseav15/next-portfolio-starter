import { defineConfig } from "@playwright/test";

const port = Number(process.env.PORT ?? 4173);

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 45_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  webServer: {
    command: `npx -y serve -l ${port} out`,
    port,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
