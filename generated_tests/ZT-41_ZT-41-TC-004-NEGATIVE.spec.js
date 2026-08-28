import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-41
// Test ID: ZT-41-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-41: Registration fails with invalid email', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the registration page
    // Precondition: Browser cookies are enabled
  });

  test('Registration fails with invalid email', async ({ page }) => {
    // Step 1: Navigate to the registration page
    // Expected: Registration page loads successfully with name, email, and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter valid name in the name field
    // Expected: Name field is populated with the entered name
    await page.locator('input[type="text"], textarea').first().fill('John Doe');
    // Step 3: Enter invalid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('johndoe');
    // Step 4: Enter valid password in the password field
    // Expected: Password field shows masked characters
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 5: Enter valid confirm password in the confirm password field
    // Expected: Confirm password field shows masked characters, register button remains disabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 6: Click the register button
    // Expected: Error message displays indicating that email is invalid
    await page.getByRole('button', { name: /Register/i }).or(page.getByRole('link', { name: /Register/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});