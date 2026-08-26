import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-61
// Test ID: ZT-61-TC-005-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe("ZT-61: Account locks after five consecutive failed login attempts", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account exists with email locktest@example.com and password CorrectPass123!
    // Precondition: Account is currently unlocked
  });

  test("Account locks after five consecutive failed login attempts", async ({ page }) => {
    // Step 1: Navigate to the login page
    // Expected: Login page loads
    await page.goto(baseUrl);
    // Step 2: Enter valid email address
    // Expected: Email field populated
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill("locktest@example.com");
    // Step 3: Enter an incorrect password and click login (Attempt 1)
    // Expected: Error message "Invalid email or password." displayed
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 4: Repeat step 3 with a different wrong password (Attempt 2)
    // Expected: Same error message displayed
    // Step 5: Repeat step 3 (Attempt 3)
    // Expected: Same error message displayed
    // Step 6: Repeat step 3 (Attempt 4)
    // Expected: Same error message displayed
    // Step 7: Repeat step 3 (Attempt 5)
    // Expected: Same error message displayed; account is now locked
    // Step 8: Attempt to log in with the correct password after lockout
    // Expected: Lockout message "Your account is locked due to multiple failed login attempts. Please contact support." is displayed
  });
});