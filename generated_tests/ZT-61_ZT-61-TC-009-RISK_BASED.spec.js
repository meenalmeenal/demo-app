import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-009-RISK_BASED
// Type: risk_based, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Protect against SQL injection in email field", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: Test environment has monitoring for database errors
  });

  test("Protect against SQL injection in email field", async ({ page }) => {
    // Step 1: Enter a SQL injection string into the email field
    // Expected: Email field contains the exact string entered
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("test' OR '1'='1");
    // Step 2: Enter any password
    // Expected: Password field is populated
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill("anyPass123");
    // Step 3: Click the login button
    // Expected: Error message "Invalid email or password." is displayed; authentication does not succeed
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 4: Review server logs for SQL errors
    // Expected: No SQL syntax errors or unexpected queries are logged; database state remains unchanged
  });
});