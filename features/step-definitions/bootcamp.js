const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("The User is on the home page", async () => {
   await browser.url("https://www.newegg.com");
});

Given("the promo banner is closed if it appeared", async () => {
   try {
      await $('//*[@class="close"]').click();
      await expect(await $('//*[@class="modal-Website-img"]')).not.toBeDisplayed();
   } catch (error) {
      console.log('Promo banner is not displayed.');
   }
});

When('the User enters the word {string} in the search bar', async (word) => {
   await $('input[type=search]').setValue(word);
});

When("the User clicks the search button", async () => {
   await $('[class*="ico-search"]').click();
});

Then("at least one item appears in the search result", async () => {
   const list = await $('div.list-wrap > div:nth-child(3)');
   await expect(list).toBeExisting();
   await expect(list).toHaveChildren({ gte: 1 });
});

When("the User opens 'Today's Best Deals' tab", async () => {
   await $('//*[@id="trendingBanner_720202"]').click();
});

When("clicks on the Internet shop logo", async () => {
   await $('//*[@class="header2021-logo-img"]').click();
});

Then("the User is on the main page", async () => {
   await expect(browser).toHaveUrl("https://www.newegg.com/");
});