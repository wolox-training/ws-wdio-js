Feature: Validate forms screen

  Scenario: Validate the Input form field
    Given I am in the forms screen
    When I enter the text "test" in the input field
    Then I verify that the text "test" is displayed in the following field

  Scenario: Validate the Switch form field
    Given I am in the forms screen
    And I validate that the switch is Click to turn the switch ON
    When I select the OFF value
    Then I validate that the switch is Click to turn the switch OFF

  Scenario: Validate the Button Active
    Given I am in the forms screen
    When I click the Active button
    Then the following buttons are displayed on the form screen
      | Ask me later |
      | Cancel       |
      | OK           |

  Scenario Outline: Validate the Dropdown form field
    Given I am in the forms screen
    When I select the option <dropdownValue>
    Then I check that the text <dropdownValue> is displayed in the field
    Examples:
      | dropdownValue           |
      | Appium is awesome       |
      | This app is awesome     |
      | webdriver.io is awesome |