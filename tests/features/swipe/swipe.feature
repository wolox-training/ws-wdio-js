Feature: Swipe on the carousel

    Scenario Outline: Swipe on the carousel successfully
        Given I am in the Swipe screen
        When I search for an item with the name <itemName>
        Then I verify that the text <itemName> is displayed in the carousel
        Examples:
            | itemName          |
            | FULLY OPEN SOURCE |
            | CREAT COMMUNITY   |
            | JS.FOUNDATION     |
            | SUPPORT VIDEOS    |

