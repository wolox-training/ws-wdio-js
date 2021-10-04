import AppScreen from './AppScreen';


const SELECTORS = {
  LOGIN: driver.isAndroid ? '-android uiautomator: new UiSelector().description("Login")' : 'Login',
  LOGIN_SCREEN: driver.isAndroid ? '-android uiautomator: new UiSelector().description("Login-screen")' : 'Login-screen',
  BUTTON_SIGN_UP: driver.isAndroid ? '-android uiautomator: new UiSelector().description("button-sign-up-container")' : 'button-sign-up-container',
  EMAIL: driver.isAndroid ? '-android uiautomator: new UiSelector().description("input-email")' : 'input-email',
  PASSWORD: driver.isAndroid ? '-android uiautomator: new UiSelector().description("input-password")' : 'input-password',
  CONFIRM_PASSWORD: driver.isAndroid ? '-android uiautomator: new UiSelector().description("input-repeat-password")' : 'input-repeat-password',
  BUTTON_SEND_SIGN_UP: driver.isAndroid ? '-android uiautomator: new UiSelector().description("button-SIGN UP")' : 'button-SIGN UP',
  BUTTON_LOGIN: driver.isAndroid ? '-android uiautomator: new UiSelector().description("button-LOGIN")' : 'button-LOGIN',
  ALERT_SUCCESS: driver.isAndroid ? '-android uiautomator: new UiSelector().text("{TEXT}")' : '//XCUIElementTypeStaticText[@name="{TEXT}"]'
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
