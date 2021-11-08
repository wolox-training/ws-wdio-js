import constants from '../../config/constants';
import AppScreen from './AppScreen';


const SELECTORS = {
  FORMS: driver.isAndroid
    ? '-android uiautomator: .description("Forms")'
    : '//XCUIElementTypeOther[@name = "Forms"]',
  FORMS_SCREEN: driver.isAndroid
    ? '-android uiautomator: .description("Forms-screen")'
    : '//XCUIElementTypeOther[@name = "Forms-screen"]',
  TEXT_INPUT: driver.isAndroid
    ? '-android uiautomator: .description("text-input")'
    : '//XCUIElementTypeTextField[@name = "text-input"]',
  TEXT_INPUT_RESULT: driver.isAndroid
    ? '-android uiautomator: .description("input-text-result")'
    : '//XCUIElementTypeSecureTextField[@name = "input-text-result"]',
  SWITCH: driver.isAndroid
    ? '-android uiautomator: .description("switch")'
    : '//XCUIElementTypeSecureTextField[@name = "switch"]',
  SWITCH_TEXT: driver.isAndroid
    ? '-android uiautomator: .description("switch-text")'
    : '//XCUIElementTypeStaticText[@name = "switch-text"]',
  SCROLL_BTN_ACTIVE: driver.isAndroid
    ? '-android uiautomator: new UiScrollable(.className("android.widget.ScrollView")).scrollIntoView(.text("Active"))'
    : '//XCUIElementTypeOther[@name = "select-Dropdown"]',
  DROPDOWN: driver.isAndroid
    ? '-android uiautomator: .description("select-Dropdown")'
    : '//XCUIElementTypeOther[@name = "select-Dropdown"]',
  DROPDOWN_VALUE: driver.isAndroid
    ? '-android uiautomator: .text("{TEXT}")'
    : '//XCUIElementTypeOther[@name = "select-Dropdown"]',
  DROPDOWN_RESULT: driver.isAndroid
    ? '-android uiautomator: .className("android.widget.TextView").text("{TEXT}")'
    : '//XCUIElementTypeOther[@name = "select-Dropdown"]',
  BTN_ACTIVE: driver.isAndroid
    ? '-android uiautomator: .description("button-Active")'
    : '//XCUIElementTypeOther[@name = "button-Active"]',
};

class FormsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.FORMS);
  }

  tabForms() {
    $(SELECTORS.FORMS).click();
    $(SELECTORS.FORMS_SCREEN).waitForDisplayed();
  }
  setValueInput(text) {
    $(SELECTORS.TEXT_INPUT).setValue(text);
  }
  getTextInput() {
    return $(SELECTORS.TEXT_INPUT_RESULT);
  }
  selectSwitch() {
    $(SELECTORS.SWITCH).click();
  }
  getSwitchText() {
    return $(SELECTORS.SWITCH_TEXT);
  }
  selectDropdown(dropdownValue) {
    $(SELECTORS.SCROLL_BTN_ACTIVE)
    $(SELECTORS.DROPDOWN).click();
    $(SELECTORS.DROPDOWN_VALUE.replace(/{TEXT}/, dropdownValue)).click();
  }
  getTextDropdown(dropdownValue) {
    return $(SELECTORS.DROPDOWN_RESULT.replace(/{TEXT}/, dropdownValue));
  }
  clickButtonActive() {
    $(SELECTORS.SCROLL_BTN_ACTIVE)
    $(SELECTORS.BTN_ACTIVE).click();
  }

}

export default new FormsScreen();
