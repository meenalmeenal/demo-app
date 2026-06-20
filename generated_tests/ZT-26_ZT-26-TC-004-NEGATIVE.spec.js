import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-26
// Test ID: ZT-26-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-26: User attempts to reset password with expired reset link', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has received the password reset email
    // Precondition: User is on the password reset page
    // Precondition: Reset link has expired (more than 24 hours old)
  });

  test('User attempts to reset password with expired reset link', async ({ page }) => {
    // Step 1: Click on the password reset link from the email
    // Expected: Error message is displayed, 'Reset link has expired' or similar
    await page.getByRole('button', { name: /Reset Link/i }).or(page.getByRole('link', { name: /Reset Link/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});