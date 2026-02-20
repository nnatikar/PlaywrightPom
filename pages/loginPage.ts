import { Page, Locator } from '@playwright/test';
import { loginData } from '../test-data/loginData'; 

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly loginError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.loginError = page.locator('[data-test="error"]');
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.setViewportSize({ width: 2560, height: 1440 });
        await this.page.waitForTimeout(2000);
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}