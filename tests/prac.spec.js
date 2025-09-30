import {test,expect} from '@playwright/test'
test('frames',async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/')
await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
let f1=await page.frames
console.log(f1.length);

let frame1=await page.frame({url:''})
await frame1.locator('').fill()

let frame2=await page.frame({url:''})
await frame2.locator('').click()
let frame3=await page.frame({url:''})
let innerframe=await frame3.frameLocator('').fill('')







})


















test("test1",async({page})=>{
await page.goto("https://www.flipkart.com");
})

test("test2",async({page})=>{
await page.goto("https://www.amazon.com");
})

test("test3",async({page})=>{
await page.goto("https://www.myntra.com");
})