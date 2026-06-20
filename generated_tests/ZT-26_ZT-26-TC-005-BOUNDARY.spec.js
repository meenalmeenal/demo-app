import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-26
// Test ID: ZT-26-TC-005-BOUNDARY
// Type: boundary, Priority: P3

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-26: User attempts to reset password with minimum length password', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has received the password reset email
    // Precondition: User is on the password reset page
  });

  test('User attempts to reset password with minimum length password', async ({ page }) => {
    // Step 1: Click on the password reset link from the email
    // Expected: Password reset page loads with new password and confirm password fields visible
    await page.getByRole('button', { name: /Reset Link/i }).or(page.getByRole('link', { name: /Reset Link/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 2: Enter minimum length password (8 characters) in the new password field
    // Expected: New password field is populated with the entered password
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('Secure123!');
    // Step 3: Enter confirm password in the confirm password field
    // Expected: Confirm password field is populated with the entered password
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('Secure123!');
    // Step 4: Click the 'Reset Password' button
    // Expected: Password is successfully reset, user is redirected to login page
    await page.getByRole('button', { name: /Reset Password/i }).or(page.getByRole('link', { name: /Reset Password/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});