
import { Given, When, Then, } from 'cucumber';
import FormsScreen from '../screenObjects/FormsScreen';
const assert = require('assert')
var textInputValidate;

Given(/^I am in the forms screen/, () => {
    FormsScreen.waitForIsShown();
    FormsScreen.tabForms();
    expect(FormsScreen.getButtonInactive().isEnabled()).toBe(false);
});

When(/^I enter the text (.*) in the input field/, text => {
    textInputValidate = text;
    FormsScreen.setValueInput(textInputValidate);
});

Then(/^I verify that the text is displayed in the following field/, () => {
    expect(FormsScreen.getTextInput()).toHaveText(textInputValidate);
});

When(/^I select the switch/, () => {
    FormsScreen.selectSwitch();
});

Then(/^I validate that the switch is (.*)/, text => {
    expect(FormsScreen.getSwitchText()).toHaveText(text);

});

When(/^I select the option (.*)/, dropdownValue => {
    FormsScreen.selectDropdown(dropdownValue);
});

Then(/^I check that the text (.*) is displayed in the field/, dropdownValue => {
    expect(FormsScreen.getTextDropdown(dropdownValue).isDisplayed()).toBe(true);
});
When(/^I click the Active button/, () => {
    FormsScreen.clickButtonActive();

});
Then(/^the following buttons are displayed on the form screen/, data => {
    if (driver.isAndroid) {
        data.raw().forEach((item) => {
            expect(FormsScreen.getTextButtonAndroid(item[0]).isDisplayed()).toBe(true);
        });
    } else {
        var list = FormsScreen.getTextButtonIos();
        data.raw().forEach((item, index) => {
            assert.equal(list[index], item[0])
        });
    }
});
