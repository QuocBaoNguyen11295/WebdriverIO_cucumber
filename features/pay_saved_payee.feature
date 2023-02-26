@pay_saved_payee
Feature: The user would like to create a pay saved payee
Background: Open index page and login user
    Given Open Zero Bank index page

    Scenario Outline: As a user, I would like to create a pay saved payee on the page
        When The user create a pay saved payee with <payee>, <account>, <amount>, <date>, <description>
        Then The user gets the message
        Examples:
            | payee | account | amount | date  | description |
            | Apple | Loan | 4000 | 2021-02-25 | Test Message |