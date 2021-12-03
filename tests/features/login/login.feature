Feature: Login to the application

    Scenario: login with a user successfully
        Given I am in the login screen
        When I login with the user data "firstUser"
        Then I verify that the text You are logged in! is displayed on the screen

    Scenario Outline: Login with incorrect data
        Given I am in the login screen
        When I login with the incorrect data <email> and <password>
        Then I verify that the text <message> is displayed on the screen
        Examples:
            | email              | password    | message                            |
            | test0813@gmail.com | Prueba      | Please enter at least 8 characters |
            | test0813@gmail.com |             | Please enter at least 8 characters |
            | prueba.com         | Prueba1234* | Please enter a valid email address |
            |                    | Prueba1234* | Please enter a valid email address |