import AppScreen from './AppScreen';

const SELECTORS = {
  LOGIN: driver.isAndroid
    ? '-android uiautomator: .description("Login")'
    : '//XCUIElementTypeOther[@name = "Login"]',
  LOGIN_SCREEN: driver.isAndroid
    ? '-android uiautomator: .description("Login-screen")'
    : '//XCUIElementTypeOther[@name = "Login-screen"]',
  BUTTON_SIGN_UP: driver.isAndroid
    ? '-android uiautomator: .description("button-sign-up-container")'
    : '//XCUIElementTypeOther[@name = "button-sign-up-container"]',
  EMAIL: driver.isAndroid
    ? '-android uiautomator: .description("input-email")'
    : '//XCUIElementTypeTextField[@name = "input-email"]',
  PASSWORD: driver.isAndroid
    ? '-android uiautomator: .description("input-password")'
    : '//XCUIElementTypeSecureTextField[@name = "input-password"]',
  CONFIRM_PASSWORD: driver.isAndroid
    ? '-android uiautomator: .description("input-repeat-password")'
    : '//XCUIElementTypeSecureTextField[@name = "input-repeat-password"]',
  BUTTON_SEND_SIGN_UP: driver.isAndroid
    ? '-android uiautomator: .description("button-SIGN UP")'
    : '//XCUIElementTypeStaticText[@name = "SIGN UP"]',
  BUTTON_LOGIN: driver.isAndroid
    ? '-android uiautomator: .description("button-LOGIN")'
    : '//XCUIElementTypeOther[@name = "button-LOGIN"]',
  ALERT_SUCCESS: driver.isAndroid
    ? '-android uiautomator: .text("{TEXT}")'
    : '///XCUIElementTypeStaticText[@name="{TEXT}"]'
};

class LoginScreen extends AppScreen {
  constructor() {
    super(SELECTORS.LOGIN);
  }

  tabSignUp() {
    $(SELECTORS.LOGIN).click();
    $(SELECTORS.BUTTON_SIGN_UP).waitForDisplayed();
    $(SELECTORS.BUTTON_SIGN_UP).click();
    $(SELECTORS.LOGIN_SCREEN).waitForDisplayed();
  }
  
  login(email, password) {
    console.log(email);
    console.log(password);
    $(SELECTORS.EMAIL).setValue(email);
    $(SELECTORS.PASSWORD).setValue(password);
    $(SELECTORS.BUTTON_LOGIN).click();
    
  }

  completeTheForm(email, password) {
    $(SELECTORS.EMAIL).setValue(email);
    $(SELECTORS.PASSWORD).setValue(password);
    $(SELECTORS.CONFIRM_PASSWORD).setValue(password);
    $(SELECTORS.BUTTON_SEND_SIGN_UP).click();
    $(SELECTORS.BUTTON_SIGN_UP).waitForDisplayed();
  }

  getTextSuccess(searchedText) {
    $(SELECTORS.ALERT_SUCCESS.replace(/{TEXT}/, searchedText)).waitForDisplayed();
    return $(SELECTORS.ALERT_SUCCESS.replace(/{TEXT}/, searchedText));
  }
}

export default new LoginScreen();
