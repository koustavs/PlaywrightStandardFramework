import { expect, Page, BrowserContext } from '@playwright/test';
import locators from '../objectRepo/locators.json';
import { LocatorUtils } from '../../../utilities/locatorUtils';

export class HomePage {

  page: Page;
  context: BrowserContext;
  newPage: Page;
  locatorUtils: LocatorUtils;

  constructor(page: Page, context: BrowserContext, newPage?: Page) {
    this.page = page;
    this.context = context;
    this.newPage = page;
    this.locatorUtils = new LocatorUtils();
  }


  async navigateToURL(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com/', {
      waitUntil: 'domcontentloaded',
    });
    await this.page.waitForTimeout(1500);
  }

  async isSignInLinkVisible(): Promise<void> {
    const signInLocator = locators.NavMenu.SignIn_NavMenu;
    await this.locatorUtils.waitForSelector(this.page, signInLocator, { state: 'visible' });
    const signInLink = await this.page.isVisible(signInLocator);
    expect(signInLink).toBe(true);
  }


}