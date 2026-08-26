import { test, expect } from '@playwright/test';

// Auto-generated test case for ZT-59
// Test ID: ZT-59-TC-005-NEGATIVE
// Type: negative, Priority: P1

const baseUrl = process.env.APP_BASE_URL || 'http://localhost:3000';

test.describe('ZT-59: Account locks after five consecutive failed login attempts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    // Precondition: User account 'lock.user@example.com' exists with password 'LockPass123!'
    // Precondition: Account is not currently locked
    // Precondition: User is on the login page
  });

  test('Account locks after five consecutive failed login attempts', async ({ page }) => {
    // Step 1: Enter email 'lock.user@example.com'
    // Expected: Email field is populated
    await page.getByRole('textbox', { name: /email|username/i }).or(page.locator('#username, #email, input[type=email]')).first().fill('lock.user@example.com');
    // Step 2: Enter invalid password 'WrongPass1!'
    // Expected: Password field is populated
    await page.getByRole('textbox', { name: /password/i }).or(page.locator('#password, input[type=password]')).first().fill('WrongPass1!');
    // Step 3: Click the login button
    // Expected: Error message 'Invalid email or password.' is displayed
    await page.getByRole('button', { name: /Login/i }).or(page.getByRole('link', { name: /Login/i })).first().click();
    await page.waitForLoadState('domcontentloaded');
    // Step 4: Repeat steps 2‑3 with passwords 'WrongPass2!', 'WrongPass3!', 'WrongPass4!', and 'WrongPass5!'
    // Expected: After the fifth attempt, the same error is shown and the account becomes locked
    // Step 5: Attempt to log in again using the correct password 'LockPass123!'
    // Expected: Error message 'Account locked due to multiple failed login attempts. Contact support.' is displayed and login is denied
  });
});