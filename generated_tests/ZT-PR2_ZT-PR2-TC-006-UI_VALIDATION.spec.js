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
    await page.click('a');
    // Step 2: Leave new password field empty
    // Expected: Error message is displayed, indicating that new password is required
    // Step 3: Leave confirm password field empty
    // Expected: Error message is displayed, indicating that confirm password is required
    // Step 4: Enter different passwords in new password and confirm password fields
    // Expected: Error message is displayed, indicating that passwords do not match
    await page.fill('#password', 'Secure123! and Secure1234!');
  });
});