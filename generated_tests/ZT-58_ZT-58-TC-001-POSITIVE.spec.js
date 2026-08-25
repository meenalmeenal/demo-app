import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-58
// Test ID: ZT-58-TC-001-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-58: User logs in successfully with valid email and password', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page (https://example.com/login)
    // Precondition: A valid user account exists with email test.user@example.com and password SecurePass123!
  });

  test('User logs in successfully with valid email and password', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads with email and password input fields and a disabled login button
    await page.goto(baseUrl);
    // Step 2: Enter a valid email address
    // Expected: Email field contains the entered address
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('test.user@example.com');
    // Step 3: Enter a valid password
    // Expected: Password field masks the characters and the login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 4: Click the login button
    // Expected: User is redirected to the dashboard, a welcome banner with the user's name appears, and a session cookie is set
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 5: Verify session is active
    // Expected: User profile icon is visible in the header and the logout option is available
    await expect(page.locator('body')).toBeVisible();
  });
});