import { Given, When, Then } from 'cucumber';
import HomeScreen from '../screenObjects/HomeScreen';


When(/^i am in the home screen$/, () => {
  HomeScreen.waitForIsShown();
});

Then(/^i should see a the text (.*)$/, text => {
  const textElement = HomeScreen.getElementByText(text);
  expect(textElement.isDisplayed()).toBe(true);
});
