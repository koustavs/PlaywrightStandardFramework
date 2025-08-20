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

  async isProductCardVisible(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.HomePage.ProductCard, { state: 'visible' });
    const ProductCard = await this.page.isVisible(locators.HomePage.ProductCard);
    expect(ProductCard).toBe(true);
  }

  async isSortSectionVisible(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.HomePage.Sort, { state: 'visible' });
    const SortSection = await this.page.isVisible(locators.HomePage.Sort);
    expect(SortSection).toBe(true);
  }

  async isPriceRangeSectionVisible(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.HomePage.Sort, { state: 'visible' });
    const PriceRangeSection = await this.page.isVisible(locators.HomePage.Price_Range);
    expect(PriceRangeSection).toBe(true);
  }

  async isHomeNavMenuDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.NavMenu.Home_NavMenu, { state: 'visible' });
    const HomeNavMenu = await this.page.isVisible(locators.NavMenu.Home_NavMenu);
    expect(HomeNavMenu).toBe(true);
  }

  async isSignInNavMenuDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.NavMenu.SignIn_NavMenu, { state: 'visible' });
    const SignInNavMenu = await this.page.isVisible(locators.NavMenu.SignIn_NavMenu);
    expect(SignInNavMenu).toBe(true);
  }

  async isCategoriesNavMenuDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.NavMenu.Categories_NavMenu, { state: 'visible' });
    const CategoriesNavMenu = await this.page.isVisible(locators.NavMenu.Categories_NavMenu);
    expect(CategoriesNavMenu).toBe(true);
  }

  async isContactNavMenuDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.NavMenu.Contact_NavMenu, { state: 'visible' });
    const ContactNavMenu = await this.page.isVisible(locators.NavMenu.Contact_NavMenu);
    expect(ContactNavMenu).toBe(true);
  }

  async isLanguageNavMenuDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.NavMenu.Language_NavMenu, { state: 'visible' });
    const LanguageNavMenu = await this.page.isVisible(locators.NavMenu.Language_NavMenu);
    expect(LanguageNavMenu).toBe(true);
  }

  async isSearchSectionDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.HomePage.Search, { state: 'visible' });
    const SearchSection = await this.page.isVisible(locators.HomePage.Search);
    expect(SearchSection).toBe(true);
  }

  async isFilterSectionDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.HomePage.Filters, { state: 'visible' });
    const FiltersSection = await this.page.isVisible(locators.HomePage.Filters);
    expect(FiltersSection).toBe(true);
  }

  async isByCategorySectionDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.HomePage.By_category, { state: 'visible' });
    const ByCategorySection = await this.page.isVisible(locators.HomePage.By_category);
    expect(ByCategorySection).toBe(true);
  }

  async isByBrandSectionDisplayed(): Promise<void> {
    await this.locatorUtils.waitForSelector(this.page, locators.HomePage.By_brand, { state: 'visible' });
    const ByBrandSection = await this.page.isVisible(locators.HomePage.By_brand);
    expect(ByBrandSection).toBe(true);
  }

  async verifyProductCountAtLandingPage(): Promise<void> {
    expect(await this.page.locator(locators.HomePage.ProductCard).count()).toBe(9);
  }

  async getPageTitle(): Promise<string> {
    let title = await this.page.title();
    return title;
  }

  async verifyPageTitle(): Promise<void> {
    let actualTitle = await this.getPageTitle();
    expect(actualTitle).toMatch("Practice Software Testing");
  }

}