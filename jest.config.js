const path = require("node:path");

const testConfig = require("./test/jest.config.js");

// Wrapper for `aio app test`, which runs `jest ./test` from the project root.
// rootDir stays at project root so the `./test` CLI path resolves correctly.
module.exports = {
  ...testConfig,
  rootDir: __dirname,
  collectCoverageFrom: [
    "actions/**/*.js",
    "onboarding/**/*.js",
    "utils/**/*.js",
    "!**/node_modules/**",
  ],
  setupFilesAfterEnv: [path.join(__dirname, "test/jest.setup.js")],
  coverageDirectory: path.join(__dirname, "test/test-coverage"),
  moduleNameMapper: {
    "^camelcase$": path.join(__dirname, "test/helpers/camelcase-cjs.js"),
  },
};
