export class Profile{

/**
 * @param {import('playwright').Page}page
 */

constructor(page){
    this.page=page
    this.loggedin=page.getByTitle('DemoApps | Qspiders | Text Box')

}

async loggedInuse(){
   return await this.loggedin.textContent()
}
  async profileLogin(){
   await this.loggedin.locator('#email')
await this.loggedin.locator('#password')
await this.loggedin.getByRole('button',{name:'Login'}).click()
  }

}