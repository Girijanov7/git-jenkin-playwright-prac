import{expect} from '@playwright/test'
export class RegisterPage1
{
/**
 * @param {import('playwright').Page} page 
 */

constructor(page)
{
this.page=page
this.nametf=page.getByPlaceholder('Enter your name')
this.emailtf=page.getByPlaceholder('Enter Your Email')
this.passwordtf=page.getByPlaceholder('Enter your password')
this.registerbutton=page.getByRole('button',{name:'Register'})
}
async register(username,email,pwd)
{
    await expect(this.nametf).toBeEditable()
    await this.nametf.fill(username)
    await this.emailtf.fill(email)
    await this.passwordtf.fill(pwd)
    await this.registerbutton.click()
}
}