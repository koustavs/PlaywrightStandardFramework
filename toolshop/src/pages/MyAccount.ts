import test, { expect, Page, BrowserContext } from '@playwright/test';
import locators from '../objectRepo/locators.json';

export class MyAccountPage {

    page: Page;
    context: BrowserContext;
    newPage: Page;

    constructor(page: Page, context: BrowserContext, newPage?: Page) {
        this.page = page;
        this.context = context;
        this.newPage = page;
    }

    async verifyMyAccountPage() {
        await expect(this.page.locator(locators.MyAccountPage.Header)).toBeVisible();
        await expect(this.page.locator(locators.MyAccountPage.Favourites)).toBeVisible();
        await expect(this.page.locator(locators.MyAccountPage.Profile)).toBeVisible();
        await expect(this.page.locator(locators.MyAccountPage.Invoices)).toBeVisible();
    }

    async navigateToFavouritesPage() {
        await this.page.locator(locators.MyAccountPage.Favourites).click();
    }

    async navigateToProfilePage() {
        await this.page.locator(locators.MyAccountPage.Profile).click();
    }

    async navigateToInvoicesPage() {
        await this.page.locator(locators.MyAccountPage.Invoices).click();
    }

    async verifyMessagesPage() {
        await expect(this.page.locator(locators.MyAccountPage.Messages)).toBeVisible();
    }

}