import AppScreen from './AppScreen';
const SELECTORS = {
    HOME_SCREEN: driver.isAndroid
        ? '-android uiautomator: new UiSelector().description("Home-screen")'
        : '~Home-screen',
    TAB: driver.isAndroid
        ? '-android uiautomator: .description("{TEXT}")'
        : '//XCUIElementTypeOther[@name = "{TEXT}"]',
        TAB_SCREEN: driver.isAndroid
    ? '-android uiautomator: .description("{TEXT}-screen")'
    : '//XCUIElementTypeOther[@name = "{TEXT}-screen"]',

}
class TabBar extends AppScreen {
    constructor() {
        super(SELECTORS.HOME_SCREEN);
    }
    goToTab(tabName) {
        $(SELECTORS.TAB.replace(/{TEXT}/, tabName)).click();
        $(SELECTORS.TAB_SCREEN.replace(/{TEXT}/, tabName)).waitForDisplayed();
    }
}

export default new TabBar();
