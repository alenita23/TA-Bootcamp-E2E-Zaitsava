Feature: Bootcamp E2E

   Background:
      Given The User is on the home page
      And the promo banner is closed if it appeared

   Scenario: Search bar
      When the User enters the word 'Windows' in the search bar
      And clicks the search
      Then at least one item appears in the search result

   Scenario: Internet shop logo button
      When the User opens 'Today's Best Deals' tab
      And clicks on the Internet shop logo
      Then the User is on the main page