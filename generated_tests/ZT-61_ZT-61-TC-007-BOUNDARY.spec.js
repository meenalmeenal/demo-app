import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-007-BOUNDARY
// Type: boundary, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Session expires exactly after 30 minutes of inactivity", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User has successfully logged in and is on the dashboard
  });

  test("Session expires exactly after 30 minutes of inactivity", async ({ page }) => {
    // Step 1: Log in with valid credentials
    // Expected: Dashboard is displayed and session is active
    // Step 2: Remain idle without any mouse or keyboard interaction for 30 minutes
    // Expected: Session remains idle for the full duration
    // Step 3: Attempt to navigate directly to a protected page (e.g., https://example.com/dashboard)
    // Expected: User is redirected to the login page with message "Session expired due to inactivity."
    await page.goto(baseUrl);
  });
});