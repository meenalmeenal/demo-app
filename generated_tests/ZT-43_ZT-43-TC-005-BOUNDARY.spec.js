import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-43
// Test ID: ZT-43-TC-005-BOUNDARY
// Type: boundary, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-43: Account locks after 5 failed attempts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
  });

  test('Account locks after 5 failed attempts', async ({ page }) => {
    // Step 1: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 2: Enter an invalid password in the password field and click the login button 5 times
    // Expected: After the 5th attempt, an account lockout message appears, indicating the account is temporarily locked
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});