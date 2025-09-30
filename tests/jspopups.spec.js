import {expect, test} from '@playwright/test'
/*
test('handlingwindows', async({browser})=>{
    const context=await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
    const pagepromise= context.waitForEvent('page')      //here we'll not use await it will throw error
    await page.getByRole('button',{name:'view more'}).first().click()


const newPage=await pagepromise
await newPage.getByRole('button',{name:'Add to Cart'}).click()
await newPage.locator("//*[local-name()='svg']").click()
await newPage.waitForTimeout(2000)

console.log(await context.pages());
let pg=await context.pages()
 // console.log(await pg.length);
 let maintab=pg[0]
 let childtab=pg[1]

 console.log(await maintab.title());
 console.log(await childtab.title());
 await maintab.bringToFront()
  await childtab.close()
console.log(pg.length);


})
*/


//confirm pop-up
test('confirmpopup', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')
   
    page.on('dialog',async dialog =>{
        console.log( await dialog.type());
        console.log(await dialog.message());
        await page.waitForTimeout(2000)
        await dialog.accept()    //ok
        await expect(dialog.message()).toContain('delete')

    })
     await page.locator('//tbody/tr[1]/td/input').check()
    await page.getByRole('button', {name: 'Delete', exact:true}).click()
})

/*

// 2nd approach for waitForEvent()
await page.goto("")
let[page2]=await Promise.all([
    page.waitForEvent('popup')
    page.locator().click()])

    */

