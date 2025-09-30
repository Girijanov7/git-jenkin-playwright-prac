import{test,expect}from '@playwright/test';
// test('test1',async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     await page.getByPlaceholder("Search for Products, Brands and More").fill("iphone");
//         await page.getByPlaceholder("Search for Products, Brands and More").press("Enter");
// await expect(page).toHaveTitle("Iphone- Buy Products Online at Best Price in India - All Categories | Flipkart.com");
// console.log("title is validated");

    
// })



test('test',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//div[@id="nav-cart-text-container"]/span[contains(text(),"Cart")]').click();
    await expect(page).toHaveTitle("Amazon.in Shopping Cart");
     console.log("text is validated");
    
})