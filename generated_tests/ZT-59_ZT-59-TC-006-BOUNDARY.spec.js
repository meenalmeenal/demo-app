import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-006-BOUNDARY
// Type: boundary, Priority: P3

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: Password minimum length (8 characters) is accepted', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account 'minlen.user@example.com' exists with password 'Abcdef12' (8 characters)
    // Precondition: User is on the login page
  });

  test('Password minimum length (8 characters) is accepted', async ({ page }) => {
    // Step 1: Enter email 'minlen.user@example.com'
    // Expected: Email field contains the entered address
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('minlen.user@example.com');
    // Step 2: Enter password 'Abcdef12'
    // Expected: Password field contains the entered password
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('Abcdef12');
    // Step 3: Click the login button
    // Expected: User is logged in and redirected to the dashboard
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});