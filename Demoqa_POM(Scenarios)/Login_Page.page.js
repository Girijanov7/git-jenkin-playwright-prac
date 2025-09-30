import { expect } from "@playwright/test";
import { expect } from "@playwright/test";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginBtn = page.locator('#login');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
