import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-PR2
// Test ID: ZT-PR2-TC-001-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-PR2: User successfully requests a password reset email from the l', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('User successfully requests a password reset email from the login page', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Click on the 'Forgot Password' link
    // Expected: Password reset page loads with email field visible
    await page.click('a');
    // Step 3: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.fill('#username', 'testuser@example.com');
    // Step 4: Click the 'Send Reset Link' button
    // Expected: Password reset email is sent to the user's email address, success message is displayed
    await page.click('button');
  });
});