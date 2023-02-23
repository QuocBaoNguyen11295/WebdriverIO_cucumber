@forgot_password
Feature: The user would like to get back the password through the email of user

Background:
    Given Open the Zero Bank
  Scenario Outline: As a user, I would like to get back my password through my email
    When The user wants to get back the password through email <email>
    Then The user gets the announcement related to getting back password through <email>
    Examples:
        | email |
        | nqb@gmail.com |
