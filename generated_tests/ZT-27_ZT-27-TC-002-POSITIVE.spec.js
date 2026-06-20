import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-27
// Test ID: ZT-27-TC-002-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-27: User successfully resets password using the reset link', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has received the password reset email
    // Precondition: Reset link is valid (less than 24 hours old)
  });

  test('User successfully resets password using the reset link', async ({ page }) => {
    // Step 1: Click on the reset link in the email
    // Expected: Password reset page loads with new password and confirm password fields visible
    await page.getByRole('button', { name: /Reset Link/i }).or(page.getByRole('link', { name: /Reset Link/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 2: Enter new password in the new password field
    // Expected: New password field is populated with the entered password
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('NewPass123!');
    // Step 3: Enter confirm password in the confirm password field
    // Expected: Confirm password field is populated with the entered password
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('NewPass123!');
    // Step 4: Click the 'Reset Password' button
    // Expected: Password is successfully reset, user is redirected to login page
    await page.getByRole('button', { name: /Reset Password/i }).or(page.getByRole('link', { name: /Reset Password/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});