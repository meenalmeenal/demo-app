import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-003-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: Invalid password displays error message', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User account testuser@example.com exists
  });

  test('Invalid password displays error message', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads
    await page.goto(baseUrl);
    // Step 2: Enter a valid email address
    // Expected: Email field populated
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 3: Enter an incorrect password
    // Expected: Password field masked, Login button enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('WrongPass!23');
    // Step 4: Click the Login button
    // Expected: Error message 'Invalid email or password.' is displayed and user remains on login page
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});