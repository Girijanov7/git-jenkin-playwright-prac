import{test,expect} from '@playwright/test'
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    let f1= await page.frames()
  console.log(f1.length);
  
  let frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
  await frame1.locator('//input[@name="mytext1"]').fill('lakshmi')
  await page.waitForTimeout(2000)

  let frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
  await frame2.locator('//input[@name="mytext2"]').fill('singh')
  await page.waitForTimeout(2000)

  let frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   
  //1st approach
    let innerframe=await frame3.locator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]').contentFrame()
    
  //2nd approach
  //  let innerframe=await frame3.frameLocator('iframe')
    await innerframe.locator('//div[@class="AB7Lab Id5V1"]').last().click()
    await innerframe.locator('//input[@type="text" and @class="Hvn9fb zHQkBf"]').fill('kjhggfdd')
    await innerframe.locator('//div[@class="uHMk6b fsHoPb"]').first().check()
    await innerframe.locator('//span[@class="vRMGwf oJeWuf"]').first().click()
    await innerframe.locator("//span[text()='Next']").click()

//for frame4
let frame4=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'})
await frame4.locator('//input[@name="mytext4"]').fill('kjhgfl')


  })



  


