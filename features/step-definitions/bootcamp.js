const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("The User is on the home page", async () => {
   await browser.url("https://www.newegg.com");
});

Given("the promo banner is closed if it appeared", async () => {
   const promoTimeout = 9000;
   try {
      const promoCloseBtn = await $('[class="close"]');
      const promoBanner = await $('//*[@class="modal-Website-img"]');
      await promoCloseBtn.waitForDisplayed( {timeout: promoTimeout});
      await promoCloseBtn.click();
      await $('//*[@class="modal-Website-img"]').waitForDisplayed({ reverse: true });;
   } catch (error) {
      console.log(`Promo banner was not displayed within ${promoTimeout} ms.`);
   }
});

When('the User enters the word {string} in the search bar', async (word) => {
   await $('input[type=search]').setValue(word);
});

When("the User clicks the search button", async () => {
   await $('[class*="ico-search"]').click();
});

Then("at least one item appears in the search result", async () => {
   const listTimeout = 9000;
   const list = await $('div.list-wrap > div:nth-child(3)');
   await list.waitForDisplayed({ timeout: listTimeout});
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