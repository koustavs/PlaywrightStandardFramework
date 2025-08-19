import { defineConfig, devices } from '@playwright/test';

const APP = process.env.APP;
const date = new Date().toISOString().slice(0, 10); //2022-10-10

if (!APP || ![`toolshop`, `autoex`].includes(APP)) {
  console.log(
    `Kindly ensure the you specify the valid application name following the command using one of the supported options "--APP=toolshop|autoex" (e.g., $env:APP = "toolshop";echo $env:APP ).`
  );
  process.exit();
}
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: `./${APP}/src/tests`,
  timeout: 90000, // Timeout for test - Default 30000
  expect: {
    timeout: 10000, // Timeout for expect assertions - Default 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [`line`],
    [`list`],
    ['json', { outputFile: './outputs/test-results.json' }],
    [`allure-playwright`, { outputFolder: `allure-results/${APP}` }],
    [`html`, { outputFolder: `./html-report/${APP}`, open: 'never' }],
    [
      `monocart-reporter`,
      {
        name: `${APP} Test Execution Results ${date}`,
        outputFile: `./test-results/${APP}/index.html`,
        autoOpen: false,
        attachments: false,
        trace: false,
        screenshots: false,
        inlineAttachments: false,
        metadata: false,
        onEnd: async (reportData, capability) => {
        }
      }
    ]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // headless: !!process.env.CI, // Run in headless mode on CI, otherwise run in headed mode
    headless: true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video:'on',
        launchOptions: {
          slowMo: 900,
          args: [
            "--start-maximized",
          ]
        }
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
