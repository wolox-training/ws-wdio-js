require('dotenv').config();

exports.config = {
   runner: 'local',
   specs: ['tests/features/**/*.feature'],
   exclude: [
      // 'path/to/excluded/files'
   ],
   maxInstances: 10,
   logLevel: 'debug',
   // If you only want to run your tests until a specific amount of tests have failed use
   // bail (default is 0 - don't bail, run all tests).
   bail: 0,
   baseUrl: 'http://localhost',
   waitforTimeout: 10000,
   // Default timeout in milliseconds for request¡
   connectionRetryTimeout: 120000,
   // Default request retries count
   connectionRetryCount: 3,
   services: [
      ['appium']
   ],
   port: 4322,
   path: '/wd/hub',
   framework: 'cucumber',
   reporters: ['spec'],
   // If you are using Cucumber you need to specify the location of your step definitions.
   cucumberOpts: {
      // <string[]> (file/dir) require files before executing features
      require: ['./tests/steps_definitions/*steps.js'],
      // <boolean> show full backtrace for errors
      backtrace: false,
      // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      requireModule: ['@babel/register'],
      // <boolean> invoke formatters without executing steps
      dryRun: false,
      // <boolean> abort the run on first failure
      failFast: false,
      // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      format: ['pretty'],
      // <boolean> hide step definition snippets for pending steps
      snippets: true,
      // <boolean> hide source uris
      source: true,
      // <string[]> (name) specify the profile to use
      profile: [],
      // <boolean> fail if there are any undefined or pending steps
      strict: false,
      // <string> (expression) only execute the features or scenarios with tags matching the expression
      tagExpression: 'not @skip',
      // <number> timeout for step definitions
      timeout: 60000,
      // <boolean> Enable this config to treat undefined definitions as warnings.
      ignoreUndefinedDefinitions: false,
   },
   sync: true
};
