import{test} from '@playwright/test'
import path from 'path';
test('setinputfile',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
//    await page.locator('#singleFileInput').setInputFiles("C:/Users/SONY/Desktop/playwright.txt");     //if u'r fetching direct from desktop


    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, 'playwright.txt'))   //if u provide path in tests in playwright
    await page.getByRole('button',{name:'Upload Single File'}).click()
    await page.waitForTimeout(2000)
    
    
})