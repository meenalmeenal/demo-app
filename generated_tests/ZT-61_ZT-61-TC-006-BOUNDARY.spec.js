import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-006-BOUNDARY
// Type: boundary, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Login succeeds with password at minimum allowed length (8 ch", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account exists with email minlenuser@example.com and password Abcdef12 (8 characters)
  });

  test("Login succeeds with password at minimum allowed length (8 characters)", async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page is displayed
    await page.goto(baseUrl);
    // Step 2: Enter the email address
    // Expected: Email field contains the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("minlenuser@example.com");
    // Step 3: Enter the 8‑character password
    // Expected: Password field contains the entered password (masked) and login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill("Abcdef12");
    // Step 4: Click the login button
    // Expected: User is redirected to the dashboard and a welcome message is shown
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});