import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ku73ce',
  e2e: {
    baseUrl:'http://localhost:4200',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
