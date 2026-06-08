import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-3
// Test ID: ZT-3-TC-003-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-3: User attempts to log in with invalid email address', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('User attempts to log in with invalid email address', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter an invalid email address in the email field
    // Expected: Email field is populated with the entered email, but an error message is displayed
    await page.fill('#username', 'invalidemail');
    // Step 3: Enter a valid password in the password field
    // Expected: Password field shows masked characters, but login button remains disabled
    await page.fill('#password', 'SecurePass123!');
    // Step 4: Click the login button
    // Expected: An error message is displayed indicating that the email address is invalid, login fails
    await page.click('button');
  });
});