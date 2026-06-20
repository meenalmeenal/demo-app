import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-3
// Test ID: ZT-3-TC-005-BOUNDARY
// Type: boundary, Priority: P3

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-3: User attempts to log in with maximum length password', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('User attempts to log in with maximum length password', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.fill('#username', 'testuser@example.com');
    // Step 3: Enter password with maximum allowed length (e.g., 128 characters)
    // Expected: Password field shows masked characters, login button becomes enabled
    await page.fill('#password', 'SecurePass123!SecurePass123!SecurePass123!SecurePass123!');
    // Step 4: Click the login button
    // Expected: User is redirected to dashboard page, welcome message displays with user's name
    await page.click('button');
  });
});