import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-26
// Test ID: ZT-26-TC-006-UI_VALIDATION
// Type: ui_validation, Priority: P3

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-26: Password reset page field validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has received the password reset email
    // Precondition: User is on the password reset page
  });

  test('Password reset page field validation', async ({ page }) => {
    // Step 1: Click on the password reset link from the email
    // Expected: Password reset page loads with new password and confirm password fields visible
    await page.getByRole('button', { name: /Reset Link/i }).or(page.getByRole('link', { name: /Reset Link/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 2: Leave new password field empty
    // Expected: Error message is displayed, 'New password is required' or similar
    // Step 3: Leave confirm password field empty
    // Expected: Error message is displayed, 'Confirm password is required' or similar
    // Step 4: Enter different passwords in new password and confirm password fields
    // Expected: Error message is displayed, 'Passwords do not match' or similar
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('Secure123! and Secure1234!');
  });
});