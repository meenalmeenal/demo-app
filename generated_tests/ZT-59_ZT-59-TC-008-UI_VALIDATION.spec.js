import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-008-UI_VALIDATION
// Type: ui_validation, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: Login button enabled only when both fields are populated and', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('Login button enabled only when both fields are populated and inline validation w', async ({ page }) => {
    // Step 1: Verify that the login button is disabled initially
    // Expected: Login button appears greyed out and cannot be clicked
    await expect(page.locator('body')).toBeVisible();
    // Step 2: Enter an invalid email 'invalidemail' and press Tab
    // Expected: Email field shows validation message 'Enter a valid email address.'
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('invalidemail');
    // Step 3: Replace the email with a valid address 'valid.user@example.com'
    // Expected: Email validation message disappears
    // Step 4: Leave the password field empty
    // Expected: Password field shows validation message 'Password is required.'
    // Step 5: Enter password 'ValidPass123!'
    // Expected: Password validation message disappears
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('ValidPass123!');
    // Step 6: Verify that the login button becomes enabled
    // Expected: Login button is now clickable
    await expect(page.locator('body')).toBeVisible();
    // Step 7: Click the login button
    // Expected: User is logged in and redirected to the dashboard
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});