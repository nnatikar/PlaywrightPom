import {Page, Locator} from '@playwright/test';

export class finalPage {

    readonly page: Page;
    readonly completeHeader: Locator;
    readonly completeMessage: Locator
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeMessage = page.locator('[data-test="complete-text"]');
        this.backHomeButton = page.locator('#back-to-products');
    }

    async verifyCompletionDetails() {
        const completeHeaderText = await this.completeHeader.innerText();
        const completeMessageText = await this.completeMessage.innerText();
        return { completeHeaderText, completeMessageText };
    }

    async backToHome() {
        await this.page.waitForTimeout(2000);
        await this.backHomeButton.click();
    }
};