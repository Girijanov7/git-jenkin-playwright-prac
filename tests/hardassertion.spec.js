import {test,expect} from '@playwright/test'
/*
test('assertiontest',async({page})=>{
await page.goto('https://www.nopcommerce.com/en/get-started')

//1.expect(page).toHaveURL()
await expect(page).toHaveURL('https://www.nopcommerce.com/en/get-started')

//2. expect(page).toHaveTitle()
await expect(page).toHaveTitle('Get started with nopCommerce - nopCommerce')

//3. expect(page).toBeVisible()
await expect(page.locator("//h1[text()='Get started']")).toBeVisible();

//4. expect(page).toBeEnabled()
const but= await page.locator("//li/a[@class='get-started-link btn black-border-button']")
await expect(but).toBeEnabled()
})
*/
//5. expect(locator).toBeChecked()
// for Radio Button

// test('radio button',async({page})=>{
/*await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')

//for radio button
const rad=await page.locator("//div/input[@type='radio' and @value='Upi']")
await rad.click()
await expect(rad).toBeChecked()
*/
//for checkbox
/*
await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
const checbox= await page.locator("//div/input[@type='checkbox']").first()
await checbox.check()
await expect(checbox).toBeChecked()    
*/

//6. to have attribute: (const locator = page.locator('input');
//await expect(locator).toHaveAttribute('type', 'text');)
/*
await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
await page.getByRole('button', {name: 'Yes'}).click()
const loc= page.locator(".text-green-600 p-1 px-2 ms-2 rounded-md")
// await expect(loc).toHaveAttribute('type','text')
await expect(loc).toHaveAttribute('class','text-green-600 p-1 px-2 ms-2 rounded-md')    //it didn't worked
// await expect(await loc.textContent()).toBe('You selected "Yes"')



*/

/*
await page.goto('https://www.amazon.in/s?k=phone+under+15k&crid=46LYJY8TJRD9&sprefix=%2Caps%2C267&ref=nb_sb_ss_recent_1_0_recent')
await page.getByRole('button',{name:'Add to cart'}).first().click()
const loc=await page.locator('#a-autoid-1-announce')
await expect(loc).toHaveAttribute('id', 'a-autoid-1-announce')
*/
//eg2
// await page.goto('https://www.amazon.in/s?k=kurta&crid=2615VCIKKLS7E&sprefix=kurt%2Caps%2C299&ref=nb_sb_noss_2')
// await page.locator('#a-autoid-1-announce').click()
// const loc1=await page.locator('//span[@id="a-autoid-1"]/ancestor::div[@class="a-section puis-atcb-add-container aok-inline-block"]')
// await expect(loc1).toHaveAttribute('class', 'a-section puis-atcb-add-container aok-inline-block')

//7. toHaveText() 
// await page.goto('https://www.amazon.in/s?k=kurta&crid=2615VCIKKLS7E&sprefix=kurt%2Caps%2C299&ref=nb_sb_noss_2')
// await expect(page.locator('//span[@id="a-autoid-1"]/ancestor::div[@class="a-section puis-atcb-add-container aok-inline-block"]')).toHaveText('Add to cart')

// })

//to contain text()

test('demoqsi',async({page})=>{
/*
await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
await page.getByRole('button',{name:'Yes'})
await expect(page.getByRole('button',{name:'Yes'})).toHaveText('Yes')
await expect(page.getByRole('button',{name:'Yes'})).toContainText('Ye')
*/
//toHavevalue()
/*
await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
const name= page.getByPlaceholder('Enter your name')
await name.fill('lakshmi')
await expect(name).toHaveValue('lakshmi')
*/

//toHaveCount()
await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
const list= page.locator('#select3 option')
console.log(list);
await expect(list).toHaveCount(9)

})
