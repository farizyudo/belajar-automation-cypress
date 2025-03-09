const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      lockedUser: 'locked_out_user',
      orangeHRM: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    },
    // viewportWidth: 1280,
    // viewportHeight: 960,
    // baseUrl: "http://localhost/SenimanKoding",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    // specPattern: "cypress/e2e/1-getting-started/*.{js,jsx,ts,tsx,feature}"
    // specPattern: "cypress/e2e/1-getting-started/**/*.{js,jsx,ts,tsx,feature}"
    // specPattern: "cypress/e2e/2-advanced-examples/*.{js,jsx,ts,tsx,feature}"
  },
});
