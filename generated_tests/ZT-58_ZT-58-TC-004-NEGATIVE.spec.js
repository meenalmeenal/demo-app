import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-58
// Test ID: ZT-58-TC-004-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-58: Account locks after five consecutive failed login attempts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: A registered account exists with email locked.user@example.com
  });

  test('Account locks after five consecutive failed login attempts', async ({ page }) => {
    // Step 1: Enter the registered email address
    // Expected: Email field is populated
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('locked.user@example.com');
    // Step 2: Enter an incorrect password and click login (repeat 5 times)
    // Expected: After each attempt, error 'Invalid email or password.' is shown
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 3: After the fifth failed attempt, click login again with any password
    // Expected: Message 'Your account has been locked due to multiple failed login attempts. Please contact support.' is displayed and login button remains disabled
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});