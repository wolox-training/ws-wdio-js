
import {When, Then, } from 'cucumber';
import FormsScreen from '../screenObjects/FormsScreen';
import assert from 'assert';


When(/^I enter the text "(.*)" in the input field/, textInputValidate => {
    expect(FormsScreen.getButtonInactive().isEnabled()).toBe(false);
    FormsScreen.setValueInput(textInputValidate);
});

Then(/^I verify that the text "(.*)" is displayed in the following field/, textInputValidate => {
    expect(FormsScreen.getTextInput()).toHaveText(textInputValidate);
});

When(/^I select the OFF value/, () => {
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
