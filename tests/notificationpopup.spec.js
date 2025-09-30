import{test, expect} from '@playwright/test'
test ('notification',async({browser})=>{
const context=await browser.newContext(
    {
        permissions:['notifications']
    }
)
const page=await context.newPage()
await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
await page.getByRole('button',{name:'Notification'}).click()
await page.waitForTimeout(2000)


let res= await page.evaluate(()=>{return Notification.permission})
console.log(res);
})