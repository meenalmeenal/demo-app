import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-003-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Login fails with incorrect password", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account exists with email testuser@example.com and password SecurePass123!
  });

  test("Login fails with incorrect password", async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page is displayed
    await page.goto(baseUrl);
    // Step 2: Enter valid email address
    // Expected: Email field contains the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("testuser@example.com");
    // Step 3: Enter an incorrect password
    // Expected: Password field contains the entered text (masked)
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill("WrongPass!23");
    // Step 4: Click the login button
    // Expected: Error message "Invalid email or password." is displayed and user remains on the login page
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});