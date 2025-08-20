import test from '../../pages/BasePage';

test.describe('Home Page Tests', () => {
  test.beforeEach('User navigates to Application URL', async ({ HomePage }) => {
    await HomePage.navigateToURL();
  });

  test('Verify Home Page Title', { tag: ['@Smoke'] }, async ({ HomePage }) => {
    test.slow();
    await test.step('User captures Home Page Title', async () => {
      await HomePage.getPageTitle();
    });
    await test.step('User verifies Home Page Title', async () => {
      await HomePage.verifyPageTitle();
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
      await HomePage.isSortSectionVisible();
    });

    await test.step('User verifies Price Range Section is visible', async () => {
      await HomePage.isPriceRangeSectionVisible();
    });

    await test.step('User verifies Search Section is visible', async () => {
      await HomePage.isSearchSectionDisplayed();
    });

    await test.step('User verifies Filters Section is visible', async () => {
      await HomePage.isFilterSectionDisplayed();
    });

    await test.step('User verifies By Category Section is visible', async () => {
      await HomePage.isByCategorySectionDisplayed();
    });

    await test.step('User verifies By Brand Section is visible', async () => {
      await HomePage.isByBrandSectionDisplayed();
    });
  });

  test('Verify Page Navigation Menus are visible', { tag: ['@Smoke', '@Regression'] }, async ({ HomePage }) => {
    test.slow();
    await test.step('User verifies Home Link is visible', async () => {
      await HomePage.isHomeNavMenuDisplayed();
    });

    await test.step('User verifies Sign In Link is visible', async () => {
      await HomePage.isSignInNavMenuDisplayed();
    });

    await test.step('User verifies Categories Link is visible', async () => {
      await HomePage.isCategoriesNavMenuDisplayed();
    });

    await test.step('User verifies Contact Link is visible', async () => {
      await HomePage.isContactNavMenuDisplayed();
    });

    await test.step('User verifies Language Button is visible', async () => {
      await HomePage.isLanguageNavMenuDisplayed();
    });

  });

  test('Verify 9 Product cards are loaded in Homepage', { tag: ['@Smoke', '@Regression'] }, async ({ HomePage }) => {
    test.slow();
    await test.step('User verifies Product cards are loaded', async () => {
      await HomePage.isProductCardVisible();
    });
    await test.step('User verifies 9 Product cards are displayed', async () => {
      await HomePage.verifyProductCountAtLandingPage();
    });
  });

});