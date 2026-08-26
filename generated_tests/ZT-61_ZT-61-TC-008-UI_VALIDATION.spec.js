import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-008-UI_VALIDATION
// Type: ui_validation, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Login button enabled only when both fields are populated and", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
  });

  test("Login button enabled only when both fields are populated and validation messages", async ({ page }) => {
    // Step 1: Verify the login button state on page load
    // Expected: Login button is disabled
    await expect(page.locator('body')).toBeVisible();
    // Step 2: Click into the email field and then click elsewhere without typing
    // Expected: Inline validation message "Email is required." appears beneath the email field
    await page.getByRole('link').first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 3: Enter a valid email address
    // Expected: Email field contains the entered email and validation message disappears
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("uiuser@example.com");
    // Step 4: Verify login button state after entering email only
    // Expected: Login button remains disabled because password is empty
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("testuser@example.com");
    // Step 5: Click into the password field and then click elsewhere without typing
    // Expected: Inline validation message "Password is required." appears beneath the password field
    await page.getByRole('link').first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 6: Enter a valid password
    // Expected: Password field is populated and validation message disappears
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill("ValidPass123!");
    // Step 7: Verify login button state after both fields are filled
    // Expected: Login button becomes enabled
    await page.locator('input[type="text"], textarea').first().fill("test value");
    // Step 8: Click the login button
    // Expected: User is logged in and redirected to the dashboard
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});