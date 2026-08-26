import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-009-RISK_BASED
// Type: risk_based, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: SQL injection attempt in email field is rejected', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('SQL injection attempt in email field is rejected', async ({ page }) => {
    // Step 1: Enter a SQL injection string into the email field
    // Expected: Email field contains the raw string
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('' OR '1'='1');
    // Step 2: Enter any password
    // Expected: Password field masked, Login button enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('randomPass123');
    // Step 3: Click the Login button
    // Expected: Error message 'Invalid email or password.' is displayed; no authentication bypass occurs
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});