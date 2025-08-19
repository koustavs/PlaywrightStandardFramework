import { Page } from "@playwright/test";

export class LocatorUtils{
    
    async waitForSelector(page: Page, selector: string, options?: { state?: 'visible' | 'hidden' | 'attached' | 'detached', timeout?: number }): Promise<void> {
        await page.waitForSelector(selector, options ?? {});
    }

    async waitAndClick(page: Page, selector: string, options?: { timeout?: number }) {
        await this.waitForSelector(page, selector, { state: 'visible', ...options });
        await page.click(selector);
    }

    async waitAndType(page: Page, selector: string, text: string, options?: { timeout?: number }) {
        await this.waitForSelector(page, selector, { state: 'visible', ...options });
        await page.fill(selector, text);
    }

    async isDisplayed(page: Page, selector: string, options?: { timeout?: number }): Promise<boolean> {
        await this.waitForSelector(page, selector, { state: 'visible', ...options });
        return await page.isVisible(selector);
    }

}