import {Page, Locator} from '@playwright/test';

export class checkoutOverviewPage {

    readonly page: Page;
    readonly finishButton: Locator;
    readonly itemTotal: Locator;
    readonly taxAmount: Locator;
    readonly totalAmount: Locator;
    readonly paymentInfo: Locator;
    readonly shippingInfo: Locator;
    readonly completeHeader: Locator;
    readonly completeMessage: Locator
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('#finish');
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.taxAmount = page.locator('[data-test="tax-label"]');
        this.totalAmount = page.locator('[data-test="total-label"]');
        this.paymentInfo = page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
        this.completeMessage = page.locator('[data-test="complete-text"]');
        this.backHomeButton = page.locator('#back-to-products');
    }

    async verifyOverviewDetails() {

        const itemDesc = await this.itemTotal.innerText();
        const itemPrice = await this.taxAmount.innerText();
        const totalPrice = await this.totalAmount.innerText();
        const taxAmount = await this.taxAmount.innerText();
        const paymentInfo = await this.paymentInfo.innerText();
        const shippingInfo = await this.shippingInfo.innerText(); 
        return { itemDesc, itemPrice, taxAmount, totalPrice, paymentInfo,shippingInfo}; 
    }
    
    async finishCheckout() {
        await this.finishButton.click();
    }

   
};