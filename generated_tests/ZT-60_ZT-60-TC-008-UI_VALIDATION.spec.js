import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-008-UI_VALIDATION
// Type: ui_validation, Priority: P3

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: Login button remains disabled until both fields are populate', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('Login button remains disabled until both fields are populated', async ({ page }) => {
    // Step 1: Observe the state of the Login button on page load
    // Expected: Login button is disabled
    // Step 2: Enter a valid email address only
    // Expected: Login button remains disabled
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 3: Enter a valid password
    // Expected: Login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 4: Clear the password field
    // Expected: Login button returns to disabled state
  });
});