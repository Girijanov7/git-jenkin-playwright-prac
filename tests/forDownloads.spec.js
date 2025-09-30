import{test,expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'
test('download',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')  //either write here this or in 10 line
    const folder='C:/Users/SONY/Desktop'
    const file ='dwnld.txt'
    const fullpath=path.join(folder,file)

// await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
await page.getByPlaceholder('Enter text here').fill('downloadedfile')

const [download]=await Promise.all([
page.waitForEvent('download'),
page.getByRole('button',{name:'Download'}).click()

])
console.log(fullpath);
await download.saveAs(fullpath)

if(fs.existsSync(fullpath)){
    console.log('file downloded in'+ fullpath);
}else{
    console.log("not downloaded");
    
}
})