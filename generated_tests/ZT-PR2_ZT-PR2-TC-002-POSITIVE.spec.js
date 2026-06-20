import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-PR2
// Test ID: ZT-PR2-TC-002-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-PR2: User successfully resets password using the reset link', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has received the password reset email
    // Precondition: Reset link is valid (less than 24 hours old)
  });

  test('User successfully resets password using the reset link', async ({ page }) => {
    // Step 1: Click on the reset link in the email
    // Expected: Password reset page loads with new password and confirm password fields visible
    await page.click('a');
    // Step 2: Enter new password in the new password field
    // Expected: New password field is populated with the entered password
    await page.fill('#password', 'NewSecurePass123!');
    // Step 3: Enter confirm password in the confirm password field
    // Expected: Confirm password field is populated with the entered password
    await page.fill('#password', 'NewSecurePass123!');
    // Step 4: Click the 'Reset Password' button
    // Expected: Password is successfully reset, user is redirected to login page
    await page.click('button');
  });
});