import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-PR2
// Test ID: ZT-PR2-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-PR2: User attempts to reset password with expired reset link', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has received the password reset email
    // Precondition: User is on the password reset page
    // Precondition: Reset link has expired (more than 24 hours old)
  });

  test('User attempts to reset password with expired reset link', async ({ page }) => {
    // Step 1: Click on the password reset link from the email
    // Expected: Error message is displayed, 'Reset link has expired'
    await page.getByRole('button', { name: /Reset Link/i }).or(page.getByRole('link', { name: /Reset Link/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 2: Attempt to enter new password in the new password field
    // Expected: Error message is displayed, 'Reset link has expired'
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('NewSecurePass123!');
    // Step 3: Attempt to click the 'Reset Password' button
    // Expected: Error message is displayed, 'Reset link has expired'
    await page.getByRole('button', { name: /Reset Password/i }).or(page.getByRole('link', { name: /Reset Password/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});