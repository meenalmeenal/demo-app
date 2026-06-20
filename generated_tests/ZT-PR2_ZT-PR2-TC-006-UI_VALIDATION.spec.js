import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-PR2
// Test ID: ZT-PR2-TC-006-UI_VALIDATION
// Type: ui_validation, Priority: P3

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-PR2: Password reset page field validation', () => {
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
    // Expected: Error message is displayed, 'New password is required'
    // Step 3: Enter new password in the new password field
    // Expected: New password field is populated with the entered password
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecureP12');
    // Step 4: Leave confirm password field empty
    // Expected: Error message is displayed, 'Confirm password is required'
  });
});