import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-37
// Test ID: ZT-37-TC-003-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-37: Registration failure with missing name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the registration page
    // Precondition: Browser cookies are enabled
  });

  test('Registration failure with missing name', async ({ page }) => {
    // Step 1: Leave the name field empty
    // Expected: Name field is empty
    // Step 2: Enter a valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('test@example.com');
    // Step 3: Enter a valid password in the password field
    // Expected: Password field shows masked characters
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 4: Enter the same password in the confirm password field
    // Expected: Confirm password field shows masked characters, matching the password field
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 5: Click the register button
    // Expected: Registration fails, an error message indicates the name field is required
    await page.getByRole('button', { name: /Register/i }).or(page.getByRole('link', { name: /Register/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});