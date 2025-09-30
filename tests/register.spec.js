import {test,expect} from '@playwright/test'
import { RegisterPage1 } from '../POM_folder/Register.page.js'
import tdata from './Fetching_data/data.json'

/*
test('register action',async({page})=>{
*/
/*
const rpage=new RegisterPage(page)
await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
await rpage.register('laks','laks@gmail.com','123abc')
await page.waitForTimeout(2000)
*/
/*
await page.goto(tdata.url)
const rpage=new RegisterPage1(page)
await rpage.register(tdata.name,tdata.email,tdata.pwd)
await page.waitForTimeout(2000)

})
*/
tdata.forEach(({url,name,email,pwd},index)=>{

    test(`register #${index}`,async({page})=>{

        await page.goto(url)
        let rpage=new RegisterPage1(page)
        await rpage.register(name,email,pwd)
        await page.waitForTimeout(2000)
    })

})
