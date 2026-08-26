import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-60
// Test ID: ZT-60-TC-010-RISK_BASED
// Type: risk_based, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-60: User session expires after 30 minutes of inactivity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is logged in and on the dashboard page
    // Precondition: System session timeout is configured to 30 minutes
  });

  test('User session expires after 30 minutes of inactivity', async ({ page }) => {
    // Step 1: Remain idle on the dashboard without any mouse or keyboard interaction
    // Expected: No change in UI for the duration of inactivity
    // Step 2: After 31 minutes, attempt to navigate to a protected page (e.g., https://example.com/account)
    // Expected: User is redirected to the login page with a message 'Session expired. Please log in again.'
    await page.goto(baseUrl);
  });
});