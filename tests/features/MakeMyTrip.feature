Feature: Test Google functionalities

Scenario: Search for demo and validate the search results
    Given Navigate to "www.makemytrip.com/"
    When Close the Login window
    And Click on 'Trains' options
    Then Validate option 'Trains' is select from menu