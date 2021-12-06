import {When} from 'cucumber';
import LoginScreen from '../screenObjects/LoginScreen';


When(/^I login with the user data "(.*)"/, user => {
  LoginScreen.login(global.users[user].email, global.users[user].password)
});

When(/^I login with the incorrect data (.*) and (.*)/, (email, password) => {
  LoginScreen.login(email, password);

});
