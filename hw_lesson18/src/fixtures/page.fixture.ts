import { test as base, expect } from '@playwright/test';
import { GoogleSearchPage } from '../pages/google-search.page';

interface Fixtures {
    googleTestPage: GoogleSearchPage;
}

export const test = base.extend<Fixtures>({
    googleTestPage: async ({ page }, use) => {
        const googleTestPage = new GoogleSearchPage(page);
        await googleTestPage.goto();
        await use(googleTestPage);
    }
});

export { expect };
