
export class RegisterPage
{
    /** 
     *  @param {import('playwright').Page} page 
    */
  constructor(page) 
  {
    this.page = page;
    this.firstName = page.locator('#firstname');
    this.lastName = page.locator('#lastname');
    this.userName = page.locator('#userName');
    this.password = page.locator('#password');
    this.registerBtn = page.locator('#register');
  }

  async goto() 
  {
    await this.page.goto('https://demoqa.com/register');
  }

  async register(firstName, lastName, username, password) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.registerBtn.click();
  }
}

