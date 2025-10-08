import { test, expect } from '@playwright/test';
import { RegisterPage } from '../Demoqa_POM(Scenarios)/RegistrationPage.page.js';
import { LoginPage } from '../Demoqa_POM(Scenarios)/Login_Page.page';
import { ProfilePage } from '../Demoqa_POM(Scenarios)/Profile.page';

test.describe('E2E New User Flow', () => {
  test('User should register, login and logout successfully', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);

    // Generate unique username to avoid conflicts
    const username = 'user' + Date.now();
    const password = 'Test@123';

    // Step 1: Go to Register Page
    await registerPage.goto();

    // Step 2: Fill registration form
    await registerPage.register('Lakshmi', 'Singh', username, password);

    // ❗ Note: DemoQA has captcha → in real automation you would mock/disable captcha
    // For now we assume captcha is handled manually or bypassed in test setup.

    // Step 3: Navigate to login page & login with new credentials
    await loginPage.goto();
    await loginPage.login(username, password);

    // Step 4: Verify user is logged in
    const loggedInUser = await profilePage.getLoggedInUser();
    expect(loggedInUser).toBe(username);

    // Step 5: Logout
    await profilePage.logout();

    // Step 6: Verify user redirected back to login
    await expect(page).toHaveURL('https://demoqa.com/login');
  });
});
