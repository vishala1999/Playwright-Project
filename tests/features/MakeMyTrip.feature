Feature: Test Google functionalities

Background: Navigate to Makemytrip site
    Given Navigate to "www.makemytrip.com/"
    When Close the Login window

Scenario: Search for demo and validate the search results
    And Click on 'Trains' options
    Then Validate option 'Trains' is select from menu

Scenario: Search trains from Hyderabad to Bangalore on specific date and validate results
    When Click on 'Trains' options
    Then Validate option 'Trains' is select from menu
    Then Minimize bot popup
    And Search trains from 'Hyderabad' to 'Bangalore' on date 'Mar 10 2026'
    And Click on search button
    Then Validate search results displays train number '#20703'