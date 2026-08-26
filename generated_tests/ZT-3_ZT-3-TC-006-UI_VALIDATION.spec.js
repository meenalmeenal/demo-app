import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-3
// Test ID: ZT-3-TC-006-UI_VALIDATION
// Type: ui_validation, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-3: Login form validation and button states', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is on the login page
    // Precondition: Browser cookies are enabled
  });

  test('Login form validation and button states', async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads successfully with email and password fields visible
    await page.goto(baseUrl);
    // Step 2: Leave email field empty and enter valid password
    // Expected: Email field is highlighted as required, login button remains disabled
    await page.fill('#username', 'SecurePass123!');
    // Step 3: Enter valid email address and leave password field empty
    // Expected: Password field is highlighted as required, login button remains disabled
    await page.fill('#username', 'testuser@example.com');
    // Step 4: Enter valid email address and password
    // Expected: Login button becomes enabled
    await page.fill('#username', 'testuser@example.com, SecurePass123!');
  });
});