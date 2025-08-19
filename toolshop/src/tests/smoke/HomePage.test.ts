import test from '../../pages/BasePage';
import { expect } from '@playwright/test';
import locators from '../../objectRepo/locators.json';

test.describe('Home Page Tests', () => {
  test.beforeEach('User navigates to Application URL', async ({ HomePage }) => {
    await HomePage.navigateToURL();
  });

  test('Verify Home Page Title', { tag: ['@Smoke'] }, async ({ HomePage }) => {
    let title = "";
    test.slow();
    await test.step('User captures Home Page Title', async () => {
      title = await HomePage.page.title();
    });
    await test.step('User verifies Home Page Title', async () => {
      expect(title).toMatch(/Practice Software Testing/);
    });
  });

  test('Verify Sign In Link is Visible', { tag: ['@Smoke'] }, async ({ HomePage }) => {
    await test.step('User verifies Sign In Link is Visible', async () => {
      await HomePage.isSignInLinkVisible();
    });
  });

  test('Verify Left Panel Sections are Visible', { tag: ['@Smoke'] }, async ({ HomePage }) => {
    test.slow();
    await test.step('User verifies Sort Section is visible', async () => {
      const sortSection = await HomePage.page.isVisible(locators.HomePage.Sort);
      expect(sortSection).toBe(true);
    });

    await test.step('User verifies Price Range Section is visible', async () => {
      const priceRangeSection = await HomePage.page.isVisible(locators.HomePage.Price_Range);
      expect(priceRangeSection).toBe(true);
    });

    await test.step('User verifies Search Section is visible', async () => {
      const searchSection = await HomePage.page.isVisible(locators.HomePage.Search);
      expect(searchSection).toBe(true);
    });

    await test.step('User verifies Filters Section is visible', async () => {
      const filtersSection = await HomePage.page.isVisible(locators.HomePage.Filters);
      expect(filtersSection).toBe(true);
    });

    await test.step('User verifies By Category Section is visible', async () => {
      const byCategorySection = await HomePage.page.isVisible(locators.HomePage.By_category);
      expect(byCategorySection).toBe(true);
    });

    await test.step('User verifies By Brand Section is visible', async () => {
      const byBrandSection = await HomePage.page.isVisible(locators.HomePage.By_brand);
      expect(byBrandSection).toBe(true);
    });
  });

  test('Verify Page Navigation Menus are visible', { tag: ['@Smoke', '@Regression'] }, async ({ HomePage }) => {
    test.slow();

    await test.step('User verifies Home Link is visible', async () => {
      const homeLink = await HomePage.page.isVisible(locators.NavMenu.Home_NavMenu);
      expect(homeLink).toBe(true);
    });

    await test.step('User verifies Sign In Link is visible', async () => {
      const signInLink = await HomePage.page.isVisible(locators.NavMenu.SignIn_NavMenu);
      expect(signInLink).toBe(true);
    });

    await test.step('User verifies Categories Link is visible', async () => {
      const categoriesLink = await HomePage.page.isVisible(locators.NavMenu.Categories_NavMenu);
      expect(categoriesLink).toBe(true);
    });

    await test.step('User verifies Contact Link is visible', async () => {
      const contactLink = await HomePage.page.isVisible(locators.NavMenu.Contact_NavMenu);
      expect(contactLink).toBe(true);
    });

    await test.step('User verifies Language Button is visible', async () => {
      const languageButton = await HomePage.page.isVisible(locators.NavMenu.Language_NavMenu);
      expect(languageButton).toBe(true);
    });

  });

  test('Verify 9 Product cards are loaded in Homepage', { tag: ['@Smoke', '@Regression'] }, async ({ HomePage }) => {
    test.slow();
    let productCardLocator
    await test.step('User verifies Product cards are loaded', async () => {
      productCardLocator = HomePage.page.locator(locators.HomePage.ProductCard);
      await expect(productCardLocator.first()).toBeVisible({ timeout: 10000 });
    });
    await test.step('User verifies 9 Product cards are displayed', async () => {
      expect(await productCardLocator.count()).toBe(9);
    });
  });

});