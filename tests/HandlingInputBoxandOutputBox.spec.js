import{test,expect} from '@playwright/test'
test('inputandoutputbox',async({page})=>{
await page.waitForTimeout(2000)
await page.goto('https://testautomationpractice.blogspot.com/')
//for inputbox
/*
await expect(page.getByPlaceholder("Enter Name")).toBeVisible()
await expect(page.getByPlaceholder("Enter Name")).toBeEmpty()
await expect(page.getByPlaceholder("Enter Name")).toBeEditable()
await expect(page.getByPlaceholder("Enter Name")).toBeEnabled()
await page.getByPlaceholder("Enter Name").fill('lakshmi')
*/

//handle RadioButton
// await page.waitForTimeout(2000)
// await page.getByRole('radio',{name:"Male"}).check()
/*
await page.locator('//input[@id="male"]').check()
await expect(page.locator('//input[@id="male"]')).toBeChecked()
await expect(page.locator('//input[@id="male"]').isChecked()).toBeTruthy()
*/


//handle dropdown
/*
await page.locator('#country').selectOption('Canada')
// await page.selectOption("#country",'Canada')     //this is not working
*/


//assertions
let a= page.locator('#country option')
await expect(a).toHaveCount(10)











})