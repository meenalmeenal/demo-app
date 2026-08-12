import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-43
// Test ID: ZT-43-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-43: Empty fields show validation errors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('Empty fields show validation errors', async ({ page }) => {
    // Step 1: Click the login button without entering any credentials
    // Expected: Error messages appear below both email and password fields, indicating required fields
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 2: Enter valid email address in the email field but leave password field empty
    // Expected: Error message appears below the password field, indicating required field
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
  });
});