import{test,expect} from '@playwright/test'
test('ExplicitWait',async({page})=>{     //type here browser

    await page.goto('https://www.amazon.in/')
    await page.title('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('phones')
    await page.waitForLoadState('domcontentloaded')
    const nepg=await page.locator('//input[@id="nav-search-submit-button"]').click()
  
})