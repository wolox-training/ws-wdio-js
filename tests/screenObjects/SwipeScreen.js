import AppScreen from './AppScreen';

const SWIPE_ITEM_IOS = '//XCUIElementTypeStaticText[@name="{TEXT}"]';
const DIRECT_ACCESS_BAR = 'type == "XCUIElementTypeScrollView"';

const SELECTORS = {
  SWIPE_ITEM: driver.isAndroid
    ? '-android uiautomator: new UiScrollable( .scrollable(true)).setAsHorizontalList().scrollIntoView( .text("{TEXT}"))'
    : '//XCUIElementTypeOther[@name = "button-sign-up-container"]',
  CAROUSEL_ITEM_SCREEN: driver.isAndroid
    ? '-android uiautomator: .className("android.widget.TextView").text("{TEXT}")'
    : '//XCUIElementTypeStaticText[@name="{TEXT}"]'
};

class SwipeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.SWIPE_ITEM);
  }

  searchTheItem(itemName) {
    var swipesDone = 1;
    if (driver.isAndroid) {
      $(SELECTORS.SWIPE_ITEM.replace(/{TEXT}/, itemName));
    } else {
      while (1) {
        if ($(SWIPE_ITEM_IOS.replace(/{TEXT}/, itemName)).isExisting()) {

          if ($(SWIPE_ITEM_IOS.replace(/{TEXT}/, itemName)).getAttribute('visible') === ('true')) {
            break;
          }
        }
        driver.execute('mobile: scroll', { element: $(`-ios predicate string:${DIRECT_ACCESS_BAR}`), direction: 'right' });
        swipesDone++;
        if (swipesDone > 6) {
          throw new Error(`Direct access not found on direct access bar`);
        }
      }
    }

  }
  getTextCarousel(itemName) {
    return $(SELECTORS.CAROUSEL_ITEM_SCREEN.replace(/{TEXT}/, itemName));
  }
}

export default new SwipeScreen();
