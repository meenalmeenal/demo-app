import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-001-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: User logs in successfully with valid email and password', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account 'valid.user@example.com' exists with password 'ValidPass123!'
    // Precondition: User is on the login page
    // Precondition: Browser cookies are enabled
  });

  test('User logs in successfully with valid email and password', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('valid.user@example.com');
    // Step 3: Enter valid password in the password field
    // Expected: Password field shows masked characters and the login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('ValidPass123!');
    // Step 4: Click the login button
    // Expected: User is redirected to the dashboard, a welcome message is displayed, and a session cookie is set
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});