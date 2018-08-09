Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario

Given User is already on login page

When title of login page is Free CRM
Then user enters username and password
Then user clicks on login button
Then user is on home page
Then close the browser

Scenario: user is able to create a new contact
Given User is already on home page
When user mouse over on contact link
Then user clicks on new contact link
Then user enters firstname and lastname
Then user clicks on save button
