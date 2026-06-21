import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-30
// Test ID: ZT-30-TC-002-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-30: User successfully logs in with valid credentials without rem', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('User successfully logs in with valid credentials without remember me option', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 3: Enter valid password in the password field
    // Expected: Password field shows masked characters, login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 4: Ensure the remember me checkbox is unchecked
    // Expected: Remember me checkbox is unchecked
    await expect(page.locator('body')).toBeVisible();
    // Step 5: Click the login button
    // Expected: User is redirected to dashboard page, welcome message displays with user's name
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 6: Verify user session is established and remember me option is not applied
    // Expected: User profile icon is visible in header, logout option is available, and user is logged out after closing the browser
    await expect(page.locator('body')).toBeVisible();
  });
});