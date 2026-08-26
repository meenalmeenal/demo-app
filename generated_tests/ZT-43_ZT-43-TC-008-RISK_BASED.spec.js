import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-43
// Test ID: ZT-43-TC-008-RISK_BASED
// Type: risk_based, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-43: XSS attempt', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test('XSS attempt', async ({ page }) => {
    // Step 1: Enter a XSS payload in the email field
    // Expected: Application does not execute the malicious JavaScript code, instead shows an error message or ignores the input
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('<script>alert('XSS')</script>');
  });
});