const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "v6h8fz",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    viewportWidth: 1680,
    viewportHeight: 1050,
  },
});
