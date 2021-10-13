Feature: Sign up in the app

  Scenario: Sign up user successfully
    Given I am in the signup screen
    When I send the form with the correct data
    Then I verify that the text You successfully signed up! is displayed on the screen

  Scenario Outline: Sign up user with incorrect data
    Given I am in the signup screen
    When I send the form with the incorrect data <email> and <password>
    Then I verify that the text <message> is displayed on the screen
    Examples:
      | email              | password    | message                    |
      | prueba.com         | Prueba1234* | Some fields are not valid! |
      | test0813@gmail.com |             | Some fields are not valid! |
      | test0813@gmail.com | erwrwr      | Some fields are not valid! |
      |                    | Prueba1234* | Some fields are not valid! |