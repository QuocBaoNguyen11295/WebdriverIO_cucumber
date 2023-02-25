@search_box
Feature: As a user, I would like to find the keyword on the page

Background:
    Given Open Zero Bank index page

    Scenario Outline: As a user, I would like find the keyword
        When The user tries to find <keyword> on the page
        Then The user checks the result with the keyword <keyword>
        Examples:
            | keyword |
            | bank  |