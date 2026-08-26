import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Validation errors for empty email and password fields", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test("Validation errors for empty email and password fields", async ({ page }) => {
    // Step 1: Click the login button without entering any data
    // Expected: Email field shows "Email is required." and password field shows "Password is required."; login button remains disabled
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 2: Enter a valid email address only
    // Expected: Email field is populated; password field still empty
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("testuser@example.com");
    // Step 3: Click the login button
    // Expected: Password field shows "Password is required." and login is not submitted
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 4: Clear the email field, enter a password only
    // Expected: Password field is populated; email field empty
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("SecurePass123!");
    // Step 5: Click the login button
    // Expected: Email field shows "Email is required." and login is not submitted
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});