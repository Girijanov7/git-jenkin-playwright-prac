/*import {test,expect} from '@playwright/test'
test('locators', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // page.waitForSelector("//button[text()='Register']")
    await page.getByPlaceholder('Enter your name').fill('laks')
    await page.getByPlaceholder('Enter Your Email').fill('laks27dec@gmail.com')
    await page.getByPlaceholder('Enter your password').fill('123')
    await page.locator("//button[text()='Register']").click()
    const error=await page.locator("//p[@class='text-red-500 text-sm mt-1']").textContent()
    expect(error).toEqual('Password must be atleast 6 characters')
    await page.getByPlaceholder('Enter your password').fill('123456')
     await page.locator("//button[text()='Register']").click()
     await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box');
     
     //locate all buttons in left side
     const links=await page.locator('[class="poppins text-[14px]"]')       //$$ deprecated method
     for(const link of links){
        const linktext=await link.textContent();
        console.log(linktext);
        
     }
})
     */

import {test,expect} from '@playwright/test'
test('checkbox', async({page})=>{
await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
await page.getByTitle('DemoApps | Qspiders | CheckBoxMain')
await page.locator('//input[@type="checkbox"]').last().waitFor()
const elements= await page.locator('//input[@type="checkbox"]').all()
for(const ele of elements){
     const eletext= await ele.textContent()   //not taking bcz they have sibling tag not following(cant use innertext()& innerHTML())
     console.log(eletext);
     await ele.check()
}
await page.locator("//input[@id='mode_g']").click()
const pop=await page.locator("//div[text()='Successfully Submitted!']")
console.log(await pop.textContent());
await page.locator("//span//input[@id='tog' and @class='w-0 h-0 opacity-0 absolute']").click()    //some error is here
await page.getByRole('button',{name:'Place Order'}).click()
const verify=await page.locator("//p[text()='ORDER PLACED']").textContent()
 expect(verify).toEqual('ORDER PLACED')   //i want to verify the page
await page.waitForTimeout(2000)
})