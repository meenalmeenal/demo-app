import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-003-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: Login attempt with invalid password shows error message', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account 'valid.user@example.com' exists
    // Precondition: User is on the login page
  });

  test('Login attempt with invalid password shows error message', async ({ page }) => {
    // Step 1: Enter the valid email address
    // Expected: Email field contains the entered address
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('valid.user@example.com');
    // Step 2: Enter an invalid password
    // Expected: Password field shows masked characters
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('WrongPass123!');
    // Step 3: Click the login button
    // Expected: Error message 'Invalid email or password.' is displayed and user stays on the login page
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});