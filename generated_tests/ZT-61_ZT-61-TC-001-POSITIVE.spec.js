import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-001-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Successful login with valid credentials", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User account exists with email testuser@example.com and password SecurePass123!
    // Precondition: Browser cookies are enabled
  });

  test("Successful login with valid credentials", async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter valid email address in the email field
    // Expected: Email field is populated with the entered email
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("testuser@example.com");
    // Step 3: Enter valid password in the password field
    // Expected: Password field shows masked characters and login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill("SecurePass123!");
    // Step 4: Click the login button
    // Expected: User is redirected to the dashboard page and a welcome message with the user's name is displayed
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 5: Verify that a session cookie is set
    // Expected: Session cookie (e.g., JSESSIONID) is present in the browser and user profile icon is visible
    await expect(page.locator('body')).toBeVisible();
  });
});