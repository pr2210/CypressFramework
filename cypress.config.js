const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // require('cypress-mochawesome-reporter/plugin')(on);

  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
  
}

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: "cypress/reports/html/screenshots",
  videosFolder: "cypress/reports/html/videos",
  env: {
    url: "https://rahulshettyacademy.com/"
  },
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/**/*.js']
  },
});
