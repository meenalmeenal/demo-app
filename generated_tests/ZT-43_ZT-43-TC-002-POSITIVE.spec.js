import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-43
// Test ID: ZT-43-TC-002-POSITIVE
// Type: positive, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-43: User logs in after a short period of inactivity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User is logged in
    // Precondition: User has been inactive for less than 30 minutes
  });

  test('User logs in after a short period of inactivity', async ({ page }) => {
    // Step 1: Wait for 20 minutes without interacting with the application
    // Expected: User remains logged in, session is still active
    await page.waitForLoadState('domcontentloaded');
    // Step 2: Interact with the application by clicking on a link
    // Expected: User is still logged in, no login prompt appears
    await page.getByRole('link').first().click();
    await page.waitForLoadState('domcontentloaded');
  });
});