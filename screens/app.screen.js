import { DEFAULT_TIMEOUT } from '../config/constants';

export default class AppScreen {
  constructor(selector) {
    this.selector = selector;
  }

  /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown Default = True
     * @return {boolean} True if shown
     */
  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed({
      timeout: DEFAULT_TIMEOUT,
      reverse: !isShown,
    });
  }
}
