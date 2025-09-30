export class Registration{
    /** 
     *  @param {import('playwright').Page} page 
    */
   constructor(page){

this.page=page
this.name=page.locator('#name')
this.emailid=page.locator('#email')
this.password=page.locator('#password')
this.Registerbtn=page.getByRole('button',{name:'Register'})
   }

   async goto(){

   await this.page.goto('https://demoapps.qspiders.com/ui?scenario=1')
   }

   async register(name,emailid,password){

   await this.name.fill('lakshmi')
    await this.emailid.fill('laks27@gmail.com')
    await this.password.fill('laks123')
    


   }
}