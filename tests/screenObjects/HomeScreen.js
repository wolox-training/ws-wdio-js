import AppScreen from './AppScreen';


const SELECTORS = {
  HOME_SCREEN: driver.isAndroid
    ? '-android uiautomator: new UiSelector().description("Home-screen")'
    : '~Home-screen',
  TEXT: driver.isAndroid
    ? '-android uiautomator: new UiSelector().text("{TEXT}")'
    : '//XCUIElementTypeStaticText[@name="{TEXT}"]'
};

class HomeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HOME_SCREEN);
  }
  /*
    This way, you can make a flexible selector that depends on a variable value and it also works for
    both techs
  */
  getElementByText(searchedText) {
    return $(SELECTORS.TEXT.replace(/{TEXT}/, searchedText));
  }
}
export default new HomeScreen();
