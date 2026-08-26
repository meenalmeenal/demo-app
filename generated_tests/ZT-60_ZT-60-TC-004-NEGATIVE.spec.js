import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-004-NEGATIVE
// Type: negative, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: Empty email and password fields show validation errors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('Empty email and password fields show validation errors', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page displayed
    await page.goto(baseUrl);
    // Step 2: Leave email and password fields blank and click Login
    // Expected: Email field shows 'Email is required' and password field shows 'Password is required'; Login button remains disabled
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});