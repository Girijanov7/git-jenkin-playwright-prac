import {test,expect} from '@playwright/test'
test('soft assertion',async({page})=>{
await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')

/*
//hard assertion
await expect(page).toHaveTitle('DemoApps | Qspiders | Dropdown')
await expect(page).toHaveURL('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
await expect(page.locator('#select3')).toBeVisible()
*/


//NegativeAssertion
/*
await expect(page).not.toHaveTitle('DemoApps | Qspiders | Dropdown')
await expect(page).not.toHaveURL('DemoApps | Qspiders | Dropdown')
await expect(page.locator('#select3')).not.toBeVisible()
*/

//soft Assertion
await expect.soft(page).toHaveTitle('DemoApps2')
await expect.soft(page).toHaveURL('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
await expect.soft(page.locator('#select3')).toBeVisible()






















})