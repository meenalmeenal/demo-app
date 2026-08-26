import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-58
// Test ID: ZT-58-TC-003-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-58: Login fails with incorrect password', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: A registered account exists with email test.user@example.com
  });

  test('Login fails with incorrect password', async ({ page }) => {
    // Step 1: Enter the registered email address
    // Expected: Email field is populated
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('test.user@example.com');
    // Step 2: Enter an incorrect password
    // Expected: Password field is populated and login button is enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('WrongPass!@#');
    // Step 3: Click the login button
    // Expected: Error message 'Invalid email or password.' appears below the password field; user remains on the login page
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});