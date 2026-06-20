import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-3
// Test ID: ZT-3-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-3: User attempts to log in with invalid password', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('User attempts to log in with invalid password', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.fill('#username', 'testuser@example.com');
    // Step 3: Enter invalid password in the password field
    // Expected: Password field shows masked characters, but login button remains disabled due to invalid password
    await page.fill('#password', 'wrongpassword');
    // Step 4: Click the login button
    // Expected: Error message is displayed, indicating that password is incorrect
    await page.click('button');
  });
});