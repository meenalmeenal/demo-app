import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-36
// Test ID: ZT-36-TC-003-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-36: User registration fails with missing required fields', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the registration page
    // Precondition: Browser cookies are enabled
  });

  test('User registration fails with missing required fields', async ({ page }) => {
    // Step 1: Navigate to the registration page
    // Expected: Registration page loads successfully with name, email, and password fields visible
    await page.goto(baseUrl);
    // Step 2: Leave name field blank
    // Expected: Name field is empty
    // Step 3: Leave email field blank
    // Expected: Email field is empty
    // Step 4: Leave password field blank
    // Expected: Password field is empty, register button is disabled
    // Step 5: Click the register button
    // Expected: Error message displays indicating that name, email, and password are required
    await page.getByRole('button', { name: /Register/i }).or(page.getByRole('link', { name: /Register/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});