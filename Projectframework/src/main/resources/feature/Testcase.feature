@jainbookagency
Feature: Jainbook Website
@TC01_Jainbook
Scenario:
Login to the jainbookagency
Given the user launch the chrome application
When the user open the jainbookagency Home page 
Then the user login using username and password
Then click on the login button user nagivate to the next page
@TC02_Jainbook
Scenario:
Login and  Search book
Given user launch the chrome application
When the user clicks advanced search
Then the user fills the form  
Then  user clicks the search button then the user gets the searched book 


@TC03_Jainbook
Scenario:
Login and Add to cart
Given launch the chrome application
When the user clicks add to cart
Then the user gets the cart details
Then Close the browser
@TC04_Jainbook
Scenario:
Login and click category
Given launch chrome application
When the user clicks the categories
Then the user moves to any one element
 Then the user click on add to cart 
 #Then user  close and logout the page
 
