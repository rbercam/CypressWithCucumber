Feature: Searching for Cypress

  I want to open a social network page

  Scenario: Opening a social network page
    Given I open Google page
    Then I see "Google" in the title

  Scenario: Searching Kitchen Sink Cypress on Google
    Given I search for Cypress in Google page
    Then I validate the search result
