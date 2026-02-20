import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { loginData } from '../test-data/loginData';
import { InventoryPage } from '../pages/inventory';
import { inventoryData } from '../test-data/inventoryData';
import { CartPage } from '../pages/CartPage';
import { cartData } from '../test-data/cartData';
import { CheckoutStepPage } from '../pages/checkoutStep';
import { CheckoutData } from '../test-data/checkoutstepData';
import { overviewData } from '../test-data/overviewData';
import { checkoutOverviewPage } from '../pages/checkoutOverview'
import { finalpageData } from '../test-data/finalpageData';
import { finalPage } from '../pages/finalPage';

test('Valid Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(loginData.validCredentials.username, loginData.validCredentials.password);
    await expect(page).toHaveURL(loginData.validCredentials.expectedUrl);
    
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItemToCart();
    await expect(page).toHaveURL(inventoryData.validUrl.expectedUrl);

    const cartPage = new CartPage(page);
    const cartItem = await cartPage.verifyCartItem();
    await expect(cartPage.inventoryItemdesc).toHaveText(cartItem.itemDesc);
    await expect(cartPage.inventoryItemPrice).toHaveText(cartItem.itemPrice);
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(cartData.cartItem.expectedUrl);

    const checkoutstepPage = new CheckoutStepPage(page);
    await checkoutstepPage.enterCheckoutDetails();
    await expect(page).toHaveURL(CheckoutData.checkoutstepDetails.expectedUrl);

    const checkoutOverview = new checkoutOverviewPage(page);
    const overviewDetails = await checkoutOverview.verifyOverviewDetails();
    await expect(checkoutOverview.itemTotal).toHaveText(overviewData.overviewDetails.expecteditemTotal);
    await expect(checkoutOverview.taxAmount).toHaveText(overviewData.overviewDetails.expectedtaxAmount);
    await expect(checkoutOverview.totalAmount).toHaveText(overviewData.overviewDetails.expectedtotalAmount);
    await expect(checkoutOverview.paymentInfo).toHaveText(overviewData.overviewDetails.expectedpaymentInfo);
    await expect(checkoutOverview.shippingInfo).toHaveText(overviewData.overviewDetails.expectedshippingInfo);
    await checkoutOverview.finishCheckout();
    await expect(page).toHaveURL(overviewData.overviewDetails.expectedUrl);

    const finalpage = new finalPage(page);
    await expect(finalpage.completeHeader).toHaveText(finalpageData.finalPage.expectedCompleteHeader);
    await expect(finalpage.completeMessage).toHaveText(finalpageData.finalPage.expectedCompleteMessage);
    await finalpage.backToHome();
    await expect(page).toHaveURL(finalpageData.finalPage.expectedBackHomeUrl);

});

