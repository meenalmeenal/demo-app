import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-43
// Test ID: ZT-43-TC-006-UI_VALIDATION
// Type: ui_validation, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-43: Field validation and button states', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('Field validation and button states', async ({ page }) => {
    // Step 1: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email, login button remains disabled
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 2: Enter valid password in the password field
    // Expected: Password field shows masked characters, login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 3: Clear the password field
    // Expected: Login button becomes disabled again
  });
});