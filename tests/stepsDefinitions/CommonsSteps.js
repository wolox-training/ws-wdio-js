import { Given} from 'cucumber';
import TabBar from '../screenObjects/TabBar';

Given(/^I am in the (.*) screen/, tabName => {
    TabBar.waitForIsShown();
    TabBar.goToTab(tabName);
});