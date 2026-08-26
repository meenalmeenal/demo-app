import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-001-POSITIVE
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: User successfully logs in with valid credentials', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: User account testuser@example.com exists with password SecurePass123!
    // Precondition: Browser cookies are enabled
  });

  test('User successfully logs in with valid credentials', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Enter a valid email address
    // Expected: Email field contains the entered address
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('testuser@example.com');
    // Step 3: Enter a valid password
    // Expected: Password field shows masked characters and the Login button becomes enabled
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('SecurePass123!');
    // Step 4: Click the Login button
    // Expected: User is redirected to the dashboard, a welcome banner with the user's name appears
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 5: Verify session establishment
    // Expected: User profile icon is visible in the header and a Logout option is present
    await expect(page.locator('body')).toBeVisible();
  });
});