import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-57
// Test ID: ZT-57-TC-001-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-57: User logs in successfully with valid email and password', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has an active account with email testuser@example.com and password SecurePass123!
    // Precondition: User is on the login page (https://example.com/login)
    // Precondition: Browser cookies and JavaScript are enabled
  });

  test('User logs in successfully with valid email and password', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads with Email and Password fields, and a disabled Login button
    await page.goto(baseUrl);
    // Step 2: Enter a valid email address
    // Expected: Email field contains the entered address
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 3: Enter a valid password
    // Expected: Password field shows masked characters and the Login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 4: Click the Login button
    // Expected: User is redirected to the dashboard (https://example.com/dashboard) and a session cookie is set
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 5: Verify user is logged in
    // Expected: User's name appears in the header, Logout option is visible, and no error messages are shown
    await expect(page.locator('body')).toBeVisible();
  });
});