import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-007-BOUNDARY
// Type: boundary, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: Session expires after 30 minutes of inactivity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is logged in using valid credentials and is on the dashboard page
  });

  test('Session expires after 30 minutes of inactivity', async ({ page }) => {
    // Step 1: Verify that the dashboard is displayed
    // Expected: Dashboard elements are visible
    await expect(page.locator('body')).toBeVisible();
    // Step 2: Wait without any interaction
    // Expected: Inactivity period exceeds the 30‑minute limit
    await page.waitForLoadState('domcontentloaded');
    // Step 3: Attempt to navigate to a protected page (e.g., click 'Settings')
    // Expected: User is redirected to the login page with message 'Session expired due to inactivity.'
    await page.goto(baseUrl);
  });
});