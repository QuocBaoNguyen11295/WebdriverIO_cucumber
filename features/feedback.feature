@feedback
Feature: The user would like to send the feedback

Background:
    Given Open the Zero Bank
  Scenario Outline: As a user, I would like to send the feedback
    When The user submits feedback with "<user_name>", <user_email>, "<user_subject>", "<user_message>"
    Then The user <user_name> checks the message
    Examples:
        | user_name | user_email | user_subject | user_message  |
        | Quoc Bao  | nqb@gmail.com | Test subject | Test message |
