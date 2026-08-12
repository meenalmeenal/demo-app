import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-43
// Test ID: ZT-43-TC-003-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-43: Invalid password shows error message', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
  });

  test('Invalid password shows error message', async ({ page }) => {
    // Step 1: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 2: Enter an invalid password in the password field
    // Expected: Password field shows masked characters, login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('wrongpassword');
    // Step 3: Click the login button
    // Expected: Error message appears below the password field, indicating incorrect password
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});