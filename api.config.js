const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.spec.js",
    viewportWidth: 1400,
    viewportHeight: 800,
    watchForFileChanges: false,
    env: {
      snapshotOnly: true,
      requestMode: true
    }
  },
});
