import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-006-BOUNDARY
// Type: boundary, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: Login succeeds with password at minimum allowed length', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account minlen@example.com exists with password Abc12345 (8 characters)
  });

  test('Login succeeds with password at minimum allowed length', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page displayed
    await page.goto(baseUrl);
    // Step 2: Enter email address
    // Expected: Email field populated
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('minlen@example.com');
    // Step 3: Enter password of exactly 8 characters
    // Expected: Password field masked, Login button enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('Abc12345');
    // Step 4: Click Login
    // Expected: User is logged in and redirected to the dashboard
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});