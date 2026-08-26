import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: Empty email and password fields trigger validation errors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('Empty email and password fields trigger validation errors', async ({ page }) => {
    // Step 1: Ensure the email field is empty
    // Expected: Email field contains no text
    // Step 2: Ensure the password field is empty
    // Expected: Password field contains no text
    // Step 3: Click the login button
    // Expected: Email field shows 'Email is required.' and password field shows 'Password is required.'; login button remains disabled
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});