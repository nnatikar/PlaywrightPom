import {Page, Locator} from '@playwright/test';
import { cartData } from '../test-data/cartData';

export class CartPage {

    readonly page: Page;
    readonly cartItems: Locator;
    readonly inventoryItemPrice: Locator;
    readonly checkoutButton: Locator;
    readonly inventoryItemdesc: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly postalcode: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.getByText('Sauce Labs Backpack');
        this.inventoryItemPrice = page.locator('[data-test="inventory-item-price"]');
        this.checkoutButton = page.locator('#checkout');
        this.inventoryItemdesc = page.locator('[data-test="inventory-item-desc"]');
        this.firstname = page.locator('[data-test="firstName"]');
        this.lastname = page.locator('[data-test="lastName"]');
        this.postalcode = page.locator('[data-test="postalCode"]');
    }

    async verifyCartItem() {
    
        await this.cartItems.waitFor();
        const itemDesc = await this.inventoryItemdesc.innerText();
        const itemPrice = await this.inventoryItemPrice.innerText();
        return { itemDesc, itemPrice };
    }

    async proceedToCheckout() {
    await this.checkoutButton.click();
    }
};

