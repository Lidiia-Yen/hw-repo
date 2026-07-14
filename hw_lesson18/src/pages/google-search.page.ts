import { Locator, Page } from '@playwright/test';

export class GoogleSearchPage {
    public constructor(public readonly page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://www.google.com');
    }

    private get searchLogo(): Locator {
        return this.page.locator('#hplogo');
    }

    private get searchInput(): Locator {
        return this.page.locator('#APjFqb');
    }

    private get searchWithAIButton(): Locator {
        return this.page.locator('button[jsname="B6rgad"]');
    }

    private get autoSuggestList(): Locator {
        return this.page.locator('#Alh6id');
    }

    private get searchButton(): Locator {
        return this.page.locator('input[data-ved="0ahUKEwjQ7_DUrsaVAxUwLBAIHZppElIQ4dUDCD4"]');
    }

    private get ModeAItab(): Locator {
        return this.page.locator('span[jsname="KliEFc"]');
    }


    public async search(query: string): Promise<void> {

        await this.goto();
        await this.searchLogo.waitFor();

        await this.searchInput.fill(query);
        await this.autoSuggestList.waitFor();
        await this.searchWithAIButton.click();
    }
}
