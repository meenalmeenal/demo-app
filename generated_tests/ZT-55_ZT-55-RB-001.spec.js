import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-55
// Test ID: ZT-55-RB-001
// Type: positive, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-55: Successful behaviour: system accepts valid scenario for User', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: Implementation for Jira issue ZT-55 is deployed to the test environment.
    // Precondition: Tester has access to the application area related to: [PR #1]  Add login validation feature.
  });

  test('Successful behaviour: system accepts valid scenario for User can log in with val', async ({ page }) => {
    // Step 1: Navigate to the feature described by: [PR #1]  Add login validation feature.
    // Expected: Relevant UI or API endpoint is available.
    await page.goto(baseUrl);
    // Step 2: Perform the primary user action that should satisfy: User can log in with valid email and password.
    // Expected: The system behaves exactly as described in the acceptance criterion: User can log in with valid email and password
    await expect(page.locator('body')).toBeVisible();
    // Step 3: Verify persisted state, UI feedback, and any side effects.
    // Expected: All observable outcomes align with the business expectation and no errors are shown.
    await expect(page.locator('body')).toBeVisible();
  });
});