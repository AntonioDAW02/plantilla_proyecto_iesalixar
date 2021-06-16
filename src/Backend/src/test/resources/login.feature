#Author: alum.agarciam@iesalixar.org

@LoginTest
Feature: Login Functionality Feature

  I want to run the cucumber test to verify it is working

  Scenario Outline: Check login is successful with valid credentials
  
    Given browser is open
    And user is on login page
    When user enters <username> and <password>
    And user clicks on login
    Then user is navigated to the home page

    Examples: 
    	| username 		 | password |
      | admin1   		 | Admin1! | 
      | fabricante3  | Fabricante1! |
      | distribuidor1 | Distribuidor1! |