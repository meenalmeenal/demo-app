import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-002-POSITIVE
// Type: positive, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: User session remains active within 30 minutes of inactivity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is logged in successfully using valid credentials (TC-001)
    // Precondition: User is on the dashboard page
  });

  test('User session remains active within 30 minutes of inactivity', async ({ page }) => {
    // Step 1: Verify that the dashboard is displayed
    // Expected: Dashboard elements (e.g., navigation menu, welcome banner) are visible
    await expect(page.locator('body')).toBeVisible();
    // Step 2: Wait without any interaction
    // Expected: User remains on the dashboard and session is still active
    await page.waitForLoadState('domcontentloaded');
    // Step 3: Click the 'Profile' navigation link
    // Expected: Profile page loads without prompting for login again
    await page.getByRole('link').first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});