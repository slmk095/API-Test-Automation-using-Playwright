// @ts-check
const { devices } = require('@playwright/test');
require('dotenv').config();

const config = {
  testDir: './tests',
  // testIgnore: ['*fake*'],
  timeout: 60 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', 'list'], ['junit', { outputFile: 'results.xml' }]],
  // globalSetup: require.resolve('./global-setup'),
  // globalTeardown: require.resolve('./global-destroy'),
  use: {
    actionTimeout: 0,
    baseURL: `${process.env.BASE_URL}`,
    trace: 'on',
    video: 'on',
    // extraHTTPHeaders: {
    //   Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    //   'Content-Type': 'application/json'
    // }
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

module.exports = config;
