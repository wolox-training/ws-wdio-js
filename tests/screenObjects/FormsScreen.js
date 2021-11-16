import { configs } from 'eslint-plugin-prettier';
import constants from '../../config/constants';
import AppScreen from './AppScreen';

const BUTTONS_ACTIVE = '-android uiautomator: .className("android.widget.Button").text("{TEXT}")';
const PICKER_IOS = '//XCUIElementTypePickerWheel[@value ="{TEXT}"]';
const BTN_DONE_IOS = '//XCUIElementTypeOther[@name="Done"]';
const SELECTORS = {
  FORMS: driver.isAndroid
    ? '-android uiautomator: .description("Forms")'
    : '//XCUIElementTypeOther[@name = "Forms"]',
  FORMS_SCREEN: driver.isAndroid
    ? '-android uiautomator: .description("Forms-screen")'
    : '//XCUIElementTypeOther[@name = "Input field Type something"]',
  TEXT_INPUT: driver.isAndroid
    ? '-android uiautomator: .description("text-input")'
    : '//XCUIElementTypeTextField[@name = "text-input"]',
  TEXT_INPUT_RESULT: driver.isAndroid
    ? '-android uiautomator: .description("input-text-result")'
    : '//XCUIElementTypeStaticText[@name="input-text-result"]',
  SWITCH: driver.isAndroid
    ? '-android uiautomator: .description("switch")'
    : '//XCUIElementTypeSwitch[@name="switch"]',
  SWITCH_TEXT: driver.isAndroid
    ? '-android uiautomator: .description("switch-text")'
    : '//XCUIElementTypeStaticText[@name="switch-text"]',
  SCROLL_BTN_ACTIVE: driver.isAndroid
    ? '-android uiautomator: new UiScrollable(.className("android.widget.ScrollView")).scrollIntoView(.text("Active"))'
    : '//XCUIElementTypeStaticText[@name="Active"]',
  DROPDOWN: driver.isAndroid
    ? '-android uiautomator: .description("select-Dropdown")'
    : '//XCUIElementTypeOther[@name="select-Dropdown"]',
  DROPDOWN_VALUE: driver.isAndroid
    ? '-android uiautomator: .text("{TEXT}")'
    : '//XCUIElementTypePickerWheel',
  DROPDOWN_RESULT: driver.isAndroid
    ? '-android uiautomator: .className("android.widget.TextView").text("{TEXT}")'
    : '//XCUIElementTypeOther[@label == "Dropdown {TEXT}"]',
  BTN_ACTIVE: driver.isAndroid
    ? '-android uiautomator: .description("button-Active")'
    : '//XCUIElementTypeOther[@name="Active"]',
  BTN_INACTIVE: driver.isAndroid
    ? '-android uiautomator: .description("button-Inactive")'
    : '//XCUIElementTypeStaticText[@name="Inactive"]'
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
    $(SELECTORS.SCROLL_BTN_ACTIVE);
    $(SELECTORS.DROPDOWN).click();
    if (driver.isAndroid) {
      $(SELECTORS.DROPDOWN_VALUE.replace(/{TEXT}/, dropdownValue)).click();
    } else {
      for (const i = 0; index <= 2; i++) {
        if ($(PICKER_IOS.replace(/{TEXT}/, dropdownValue)).isDisplayed()) {
          $(BTN_DONE_IOS).click();
          break;
        } else {
          driver.execute("mobile: tap", { element: $(SELECTORS.DROPDOWN_VALUE), y: 200, x: 0 });
        }
      }
    }
  }
  getTextDropdown(dropdownValue) {
    return $(SELECTORS.DROPDOWN_RESULT.replace(/{TEXT}/, dropdownValue));
  }
  clickButtonActive() {
    $(SELECTORS.SCROLL_BTN_ACTIVE);
    $(SELECTORS.BTN_ACTIVE).click();
  }
  getButtonInactive() {
    $(SELECTORS.SCROLL_BTN_ACTIVE);
    return $(SELECTORS.BTN_INACTIVE);
  }
  getTextButtonAndroid(btnValue) {
    return $(BUTTONS_ACTIVE.replace(/{TEXT}/, btnValue.toUpperCase()))

  }
  getTextButtonIos() {
    return driver.execute("mobile: alert", { 'action': 'getButtons' });
  }
}
export default new FormsScreen();
