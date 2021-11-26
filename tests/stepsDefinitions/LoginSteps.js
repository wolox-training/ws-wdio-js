import { Given, When, Then } from 'cucumber';
import LoginScreen from '../screenObjects/LoginScreen';


Given(/^I am in the login screen/, () => {
  LoginScreen.waitForIsShown();
  LoginScreen.tabLogin();
});

When(/^I login with the user data "(.*)"/, user => {
  LoginScreen.login(global.users[user].email, global.users[user].password)
});

When(/^I login with the incorrect data (.*) and (.*)/, (email, password) => {
  LoginScreen.login(email, password);

});
