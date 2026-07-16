import { test, expect } from '../src/fixtures';

test.describe('Google Search basic tests', () => {
    test('should open Google page and check the title', async ({ googleTestPage }) => {
        await expect(googleTestPage.page).toHaveTitle('Google');
    });

    test('should search a query and navigate to results', async ({ googleTestPage }) => {
        await googleTestPage.search('Playwright');

        await expect(googleTestPage.page).toHaveURL(/Playwright/i);
    });
});
