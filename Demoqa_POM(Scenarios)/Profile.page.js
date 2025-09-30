import { expect } from '@playwright/test';
import { expect } from '@playwright/test';
export class ProfilePage {
  constructor(page) {
    this.page = page;
    this.logoutBtn = page.locator('#submit'); // logout button
    this.userNameLabel = page.locator('.mr-sm-2');
  }

  async getLoggedInUser() {
    return await this.userNameLabel.textContent();
  }

  async logout() {
    await this.logoutBtn.click();
  }




}
