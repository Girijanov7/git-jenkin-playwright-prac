// import{test,expect} from '@playwright/test'
// test('keyboard',async({page})=>{
    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
    
    // Click&Hold
    /*
await page.locator('#circle').hover()
await page.mouse.down()
await page.waitForTimeout(3000)
await page.mouse.up()
   */

//Drag&Drop
/*
await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
await page.locator("//div[text()='Drag Me']")
await page.mouse
*/

/*
//mouseHover
await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
await page.locator("//img[@src='/assets/message-hint-nbRmWGWf.png']").hover()
*/

//insertText and press
/*
await page.locator('//input[@type="text" and @name="handleInput"]')
await page.keyboard.insertText('hi')
await page.keyboard.press('Enter')
*/

/*
//click and hold
await page.locator('#circle').hover()
await page.mouse.up()
await page.waitForTimeout(3000)
await page.mouse.down()
*/
  
//  })
/*
test('keyboardAct',async({page})=>{
await page.goto('https://www.amazon.in/')
await page.locator('input#twotabsearchtextbox').click()

})
// */
import{test,expect} from '@playwright/test'
test('scrolling',async({page})=>{
    // await page.goto('https://demoapps.qspiders.com/ui/scroll?scenario=1')
    // await page.locator("//a[text()='Open In New Tab']").click()
 
    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // await page.waitForTimeout(2000)
    // await page.mouse.wheel(0,500)
    
//     await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal')
// await page.mouse.wheel(500,0)
//     await page.locator()
   
    
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
/*
    let drag=await page.getByText('Mobile Charger')
let drop=await page.getByText('Mobile Accessories')
await page.getByText('Laptop Charger').dragTo(page.getByText('Mobile Accessories'))
await drag.dragTo(drop)
  */ 
    
//manually
/*
await page.getByText('Mobile Charger').hover()
await page.mouse.down()
await page.getByText('Mobile Accessories').hover()
await page.mouse.up()
await page.waitForTimeout(2000)
*/

//manually but using coordinates-
await page.getByText('Mobile Charger').hover()
await page.mouse.down()
let drop=await page.getByText('Mobile Accessories').boundingBox()
console.log(drop);
console.log(drop.x,drop.y);
await page.waitForTimeout(2000)
await page.mouse.move(drop.x,drop.y)
// await page.waitForTimeout(2000)
})