import { Page, Locator } from '@playwright/test';

export class InventoryPage {

    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly addtocartButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItem = page.getByText('Sauce Labs Backpack');
        this.addtocartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async addItemToCart() {
        await this.inventoryItem.waitFor();
        await this.addtocartButton.click();
        await this.cartIcon.click();
    }

}
