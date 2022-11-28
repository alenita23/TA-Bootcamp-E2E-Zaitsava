const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("The User is on the home page", async () => {
   await browser.url("https://www.newegg.com");
});

Given("the promo banner is closed if it appeared", async () => {
   try {
      const banner = await $('//*[@id="modal-Website"]/div[2]/div/div/a/img');
      await banner.waitForExist({ timeout: 9000 });
      const bannerCloseBtn = await $('//*[@id="modal-Website"]/div[2]/div/button');
      await bannerCloseBtn.click();
      await expect(banner).not.toBeDisplayed();
   } catch (error) {
      console.log('Promo banner is not displayed.');
   }
});

When("the User enters the word 'Windows' in the search bar", async () => {
   const search = await $('input[type=search]');
   await search.setValue("Windows");
});

When("clicks the search", async () => {
   const searchBtn = await $('//*[@class="ico ico-search"]');
   await searchBtn.click();
});

Then("at least one item appears in the search result", async () => {
   const list = await $('//*[@id="app"]/div[3]/section/div/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/div[2]');
   await expect(list).toBeExisting();
   await expect(list).toHaveChildren({ gte: 1 });
});




When("the User opens 'Today's Best Deals' tab", async () => {
   const bestDealTab = await $('//*[@id="trendingBanner_720202"]');
   await bestDealTab.click();
});

When("clicks on the Internet shop logo", async () => {
   const logo = await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a');
   await logo.click();
});

Then("the User is on the main page", async () => {
   await expect(browser).toHaveUrl("https://www.newegg.com/");
});