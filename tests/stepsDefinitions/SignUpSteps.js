import { Given, When, Then } from 'cucumber';
import LoginScreen from '../screenObjects/LoginScreen';
var Fakerator = require("fakerator");
var fakerator = Fakerator("es-ES");

Given(/^I am in the signup session/, () => {
  driver.launchApp();
  LoginScreen.waitForIsShown();
  LoginScreen.tabSignUp();
});

When(/^I send the form with the correct data/, () => {
  LoginScreen.completeTheForm(fakerator.internet.email(fakerator.internet.userName()), fakerator.internet.password(10));
});

Then(/^I verify that the text (.*) is displayed on the screen/, text => {
  const textElement = LoginScreen.getTextSuccess(text);
  expect(textElement.isDisplayed()).toBe(true);
 
});

When(/^I send the form with the incorrect data (.*) and (.*)/, (email, password) => {
  LoginScreen.completeTheForm(email, password);
  
});
