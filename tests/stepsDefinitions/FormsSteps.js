
import { Given, When, Then, } from 'cucumber';
import FormsScreen from '../screenObjects/FormsScreen';

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
When(/^I click the button/, () => {
    FormsScreen.clickButtonActive();
    
});

Then(/^display the buttons "(.*)", "(.*)" and "(.*)"/, (btnAskMeLater, btnCancel, btnOk) => {
    expect(FormsScreen.getTextButtonsActive(btnAskMeLater).isDisplayed()).toBe(true);
    expect(FormsScreen.getTextButtonsActive(btnCancel).isDisplayed()).toBe(true);
    expect(FormsScreen.getTextButtonsActive(btnOk).isDisplayed()).toBe(true);
});

