// 2nd approach for wait for event

import {test,expect} from '@playwright/test'
test('wait for event', async({browser})=>{

   const p1= await browser.newContext()
const p2=await p1.newPage()
await p2.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
let[p3]=await Promise.all([
    p2.waitForEvent('popup'),
    p2.locator("//button[text()='view more']").first().click()])

await p3.getByRole('button',{name:'Add to Cart'}).click()
await p3.locator("//*[local-name()='svg']").click()
await p3.waitForTimeout(2000)

})

