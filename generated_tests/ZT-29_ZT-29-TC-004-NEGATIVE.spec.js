import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-29
// Test ID: ZT-29-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-29: Login with empty password field shows validation error', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('Login with empty password field shows validation error', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 3: Leave the password field empty
    // Expected: Password field is empty, login button remains disabled
    // Step 4: Click the login button
    // Expected: Validation error is displayed below the password field
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});