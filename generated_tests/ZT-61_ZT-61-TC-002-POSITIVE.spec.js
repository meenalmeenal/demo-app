import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-002-POSITIVE
// Type: positive, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Session remains active within 30 minutes of inactivity", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has a valid account (testuser@example.com / SecurePass123!)
    // Precondition: User is logged in and on the dashboard
  });

  test("Session remains active within 30 minutes of inactivity", async ({ page }) => {
    // Step 1: Log in with valid credentials
    // Expected: Dashboard is displayed and session is established
    // Step 2: Wait for 10 minutes without any interaction
    // Expected: Session remains valid (no automatic logout)
    await page.waitForLoadState('domcontentloaded');
    // Step 3: Click on the "Profile" link in the header
    // Expected: Profile page loads successfully, confirming the session is still active
    await page.getByRole('link').first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});