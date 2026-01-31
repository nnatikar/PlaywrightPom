import {Page, Locator} from '@playwright/test';
import { CheckoutData } from '../test-data/checkoutstepData';

export class CheckoutStepPage {

    readonly page: Page;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly postalcode: Locator
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstname = page.locator('#first-name');
        this.lastname = page.locator('#last-name');
        this.postalcode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async enterCheckoutDetails() {
        await this.firstname.fill(CheckoutData.checkoutstepDetails.firstname);
        await this.lastname.fill(CheckoutData.checkoutstepDetails.lastname);
        await this.postalcode.fill(CheckoutData.checkoutstepDetails.postalcode);
        await this.page.waitForTimeout(2000);
        await this.continueButton.click();
    }
};