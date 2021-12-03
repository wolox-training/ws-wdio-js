import { Given, When,Then} from 'cucumber';
import SwipeScreen from '../screenObjects/SwipeScreen';

Given(/^I am in the swipe screen/, () => {
    SwipeScreen.waitForIsShown();
    SwipeScreen.goToTheSwipeTab();
});

When(/^I search for an item with the name (.*)/, itemName => {
    SwipeScreen.searchTheItem(itemName)
    
});

Then(/^I verify that the text (.*) is displayed in the carousel/, itemName => {
    expect(SwipeScreen.getTextCarousel(itemName).isDisplayed()).toBe(true);
});