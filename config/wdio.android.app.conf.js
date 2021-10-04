const { config } = require('./wdio.shared.conf');

config.cucumberOpts.tagExpression = `${config.cucumberOpts.tagExpression} and not @ios`;
config.capabilities = [
  {
    platformName: 'Android',
    maxInstances: 1,
    'appium:deviceName': 'Android Emulator',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': process.env.ANDROID_APP,
    'appium:newCommandTimeout': 2400,
    'appium:chromedriverDisableBuildCheck': true,
  },
];

exports.config = config;
