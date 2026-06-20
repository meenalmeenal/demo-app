import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-PR2
// Test ID: ZT-PR2-TC-003-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-PR2: User attempts to reset password with invalid email address', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('User attempts to reset password with invalid email address', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Click on the 'Forgot Password' link
    // Expected: Password reset page loads with email field visible
    await page.click('a');
    // Step 3: Enter invalid email address in the email field
    // Expected: Error message is displayed indicating that the email address is not found
    await page.fill('#username', 'invalidemail');
    // Step 4: Click the 'Send Reset Link' button
    // Expected: Error message is displayed, password reset email is not sent
    await page.click('button');
  });
});