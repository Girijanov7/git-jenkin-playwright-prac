// import {expect,test} from "@playwright/test";
// import { text } from "stream/consumers";

// test('tes1',async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/")
//     await page.getByRole('textbox',{name:"Search store"}).fill("phone under 10k")
//     await page.getByRole('button',{name:"search"}).click()
//     await expect(page).toHaveTitle("nopCommerce demo store. Search")
// await page.locator('[data-val-required="The Advanced search field is required."]').check()
// await page.waitForTimeout(3000);
// await page.locator('//button[@class="button-1 search-button"]').click()
// // await page.getByRole('button',{class:"button-1 search-button"}).click()

// })


//qspidersDemo
// import {test,expect} from "@playwright/test"
// // test('qspider',async({page})=>{
// //     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
// // await page.locator('//p[text()="UI Testing Concepts"]/following-sibling::div').click()
// // await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")

// //lable text
// await page.getByLabel("name").fill("lakshmi")
// await page.getByPlaceholder("Enter your name").fill("lakshmi")
// await page.getByPlaceholder("Enter Your Email").fill("laksmisingh27dec@gmail.com")
// await page.getByRole('button',{name:"Register"}).click()

// // partial label text
// await page.getByLabel("nam").fill("lakshmi")
// await page.getByLabel("nam",{exact:false}).fill("laks")

// // get by Role
// let text1=await page.getByRole('button', {name:"Register"}).textContent()
// console.log(text1);


//get by getbyalttext()
// await page.getByAltText("signin").click()

//get by title
// test('fortitle',async({page})=>{
// await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
// await page.getByTitle("DemoApps | Qspiders | Text Box")

// })

// test('test3',async({page})=>{
// await page.goto("https://demoapps.qspiders.com/ui/link?sublist=0")
// await
// })
