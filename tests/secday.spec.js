import{expect, test} from '@playwright/test';
// test.only("",async({browser})=>{
// let context= await browser.newContext();
// let page= await context.newPage();
// await page.goto("https://www.amazon.in/");
// await page.getByPlaceholder("Search Amazon.in").fill("phone under 15k");
// await page.keyboard.press("Enter");
// await expect(page).toHaveTitle("Amazon.in : phone under 15k");
// console.log(await page.viewportSize({width: 500, height:3000}));



// })

// test.skip(" ",async({browser})=>{
// let context= await browser.newContext();
// let page= await context.newPage();
// await page.goto("https://www.amazon.in/");
// await page.getByPlaceholder("Search Amazon.in").fill("phone under 15k");
// await page.keyboard.press("Enter");
// await expect(page).toHaveTitle("Amazon.in : phone under 15k");
// console.log("page is validated");

// })

// test.only("",async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     console.log(await page.viewportSize());
//     await page.screenshot({path:"screenshot/secday.png"})
//     await page.waitForTimeout(1000)
//     await page.setViewportSize({width:500,height:3000})
//     let jpg=new Date().getTime()
//     await page.screenshot({path:`screenshot/images${jpg}.png`})
//     await page.waitForTimeout(3000)
//     console.log(page.viewportSize());
//     await page.screenshot({path:`screenshot/images${jpg}.png`})
//     // await page.pause()
//     // console.log(page.url());
//     // console.log(await page.title());
      
// })



