import{test,expect} from '@playwright/test'
test('cssElements',async({page})=>{

    //1) img is visible-pass
    // await page.goto('https://www.amazon.in/')
//    const img= await page.locator("//img[@src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/header/3._SY304_CB800961223_.jpg']")
//   await expect(img).toBeVisible()
//  await page.waitForTimeout(5000)

//2) img is having attribute-pass
// await expect(img).toHaveAttribute('src','https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/header/3._SY304_CB800961223_.jpg')

//3) img is having -fail
//not working
// const img=await expect(page.locator("//img[@src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/header/3._SY304_CB800961223_.jpg' and @class='_Zmx1a_fluidLandscapeImage_2euAK _Zmx1a_fluidImage_gTBjA']")).toHaveCSS('alt','Electronics')

//4) image has alt text-pass
// await expect(page.locator("//img[@src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/header/3._SY304_CB800961223_.jpg']")).toHaveAttribute('alt', 'Electronics');

//5) image has css 
/*
await page.goto('https://www.flipkart.com/')
const newimg=await page.getByAltText('Minutes')
await expect(newimg).toHaveCSS(
*/
/*
//6) demo qspiders
await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
const newimgqspi=  page.locator('//button[@type="submit"]')
await expect(newimgqspi).toHaveCSS('padding-top','6.5px')
await expect(newimgqspi).toHaveCSS('font-size','13px')
await expect(newimgqspi).toHaveCSS('background-color','rgb(249, 115, 22)')
await expect(newimgqspi).toHaveCSS('font-weight','700')

*/
//test automation website
await page.goto('https://testautomationpractice.blogspot.com/')
/*const testauto= page.getByRole('button',{name:'START'})
await expect(testauto).toHaveCSS('background-color','rgb(154, 205, 50)')
await expect(testauto).toHaveCSS('font-size','18px')
await expect(testauto).toHaveCSS('cursor','pointer')
await expect(testauto).toHaveCSS('border-radius','50px')
await expect(testauto).toHaveCSS('color','rgb(0, 0, 0)')
*/
const testauto1=page.locator("//h1[@class='title']")
await expect(testauto1).toHaveCSS('color','rgb(181, 18, 0)')
await expect(testauto1).toHaveCSS('text-shadow','rgba(0, 0, 0, 0.2) 0px 0px 0px')


})

