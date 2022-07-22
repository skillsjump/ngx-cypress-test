const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    username: 'beauty123@test.com',
    password: 'Welcome1',
    apiUrl: 'https://api.realworld.io/api/'
  },
  e2e: {
    baseUrl: 'https://angular.realworld.io/',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
