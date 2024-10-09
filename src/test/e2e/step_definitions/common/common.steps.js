const { When  } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

When('ich nichts mache und nur logge', async function () {
    console.log('Nichts zu tun');
  });