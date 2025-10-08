import { test } from "@playwright/test";

test("test 1", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
});
test("test 2", async ({ page }) => {
  await page.goto("https://www.amazon.com");
});
test("test 3", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("folder1", async ({ page }) => {
  await page.goto("https://www.myntra.com");
});
