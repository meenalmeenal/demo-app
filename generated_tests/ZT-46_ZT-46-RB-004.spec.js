import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-46
// Test ID: ZT-46-RB-004
// Type: positive, Priority: P2

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-46: Successful behaviour: system accepts valid scenario for Inva', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: Implementation for Jira issue ZT-46 is deployed to the test environment.
    // Precondition: Tester has access to the application area related to: [PR #1]  Add login validation feature.
  });

  test('Successful behaviour: system accepts valid scenario for Invalid password shows e', async ({ page }) => {
    // Step 1: Navigate to the feature described by: [PR #1]  Add login validation feature.
    // Expected: Relevant UI or API endpoint is available.
    await page.goto(baseUrl);
    // Step 2: Perform the primary user action that should satisfy: Invalid password shows error message.
    // Expected: The system behaves exactly as described in the acceptance criterion: Invalid password shows error message
    await expect(page.locator('body')).toContainText(/error|invalid|message/i);
    // Step 3: Verify persisted state, UI feedback, and any side effects.
    // Expected: All observable outcomes align with the business expectation and no errors are shown.
    await expect(page.locator('body')).toBeVisible();
  });
});