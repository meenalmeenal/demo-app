import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-26
// Test ID: ZT-26-TC-003-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-26: User attempts to reset password with invalid email address', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User has a valid registered account
    // Precondition: Browser cookies are enabled
  });

  test('User attempts to reset password with invalid email address', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Click on the 'Forgot Password' link
    // Expected: Password reset page loads with email field visible
    await page.getByRole('button', { name: /Forgot Password/i }).or(page.getByRole('link', { name: /Forgot Password/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 3: Enter invalid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('invalidemail@example');
    // Step 4: Click the 'Send Reset Link' button
    // Expected: Error message is displayed, 'Email address not found' or similar
    await page.getByRole('button', { name: /Send Reset/i }).or(page.getByRole('link', { name: /Send Reset/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});