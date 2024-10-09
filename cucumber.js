// cucumber.js
module.exports = {
    e2e: {
      require: ['src/test/e2e/step_definitions/*.js'],
      format: ['progress', 'json:reports/e2e_cucumber_report.json'],
      parallel: 2
    },
    api: {
      require: ['src/test/api/step_definitions/*.js'],
      format: ['progress', 'json:reports/api_cucumber_report.json'],
      parallel: 2
    }
  };