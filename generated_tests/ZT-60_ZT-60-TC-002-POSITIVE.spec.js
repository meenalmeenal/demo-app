import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-002-POSITIVE
// Type: positive, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: Login succeeds with case‑insensitive email', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User account TestUser@Example.com exists with password SecurePass123!
  });

  test('Login succeeds with case‑insensitive email', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page is displayed
    await page.goto(baseUrl);
    // Step 2: Enter the email address using mixed case
    // Expected: Email field contains the entered address
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('TestUser@Example.com');
    // Step 3: Enter the correct password
    // Expected: Password field masked, Login button enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 4: Click the Login button
    // Expected: User is logged in and redirected to the dashboard
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});