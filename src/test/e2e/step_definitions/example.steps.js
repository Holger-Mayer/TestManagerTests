// features/step_definitions/example_steps.js
const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Given('ich öffne die Startseite', async function () {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
  await this.page.goto('https://example.com');
});

Then('die Seitentitel sollte {string} sein', async function (title) {
  const pageTitle = await this.page.title();
  if (pageTitle !== title) {
    throw new Error(`Erwarteter Titel: ${title}, aber gefunden: ${pageTitle}`);
  }
  await this.browser.close();
});