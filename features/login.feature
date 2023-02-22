@login
Feature: The user login to Zero Bank

Background:
    Given The user would like to access the Zero Bank

  Scenario Outline: As a user, I can log into the Zero Bank
    When The user logins to the Zero Bank
    Then The user is in the page

  Scenario Outline: As a user, I cannot log into the Zero Bank
    When The user logins to Zero Bank with <username>,<password>
    Then The message <message> will be shown
    Examples:
        | username | password | message |
        | Value1   | Value2   | Login and/or password are wrong. |
