module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ['<rootDir>/src/test/javascript/playwright/**/@(*.)@(spec.ts)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['firefox'],
      launchOptions: {
        headless: false,
        devtools: false,
      },
    },
  },
};
