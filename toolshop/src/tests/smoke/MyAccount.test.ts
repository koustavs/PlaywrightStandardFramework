import test from '../../pages/BasePage';
import { HomePage } from '../../pages/HomePage';
import { MyAccountPage } from '../../pages/MyAccount';

const email = 'customer@practicesoftwaretesting.com';
const password = 'welcome01';

test.describe('My Account Page Tests', () => {
  test.beforeEach('User navigates to Application URL', async ({ HomePage }) => {
    await HomePage.navigateToURL();
  });

  test('Verify Sign In Link is Visible', async ({ HomePage }) => {
    await test.step('User verifies Sign In Link is Visible', async () => {
      await HomePage.isSignInLinkVisible();
    });
  });

  test('Verify My Account Page is displayed', async ({ LoginPage, MyAccountPage }) => {
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User fills Email', async () => {
      await LoginPage.fillEmail(email);
    });
    await test.step('User fills Password', async () => {
      await LoginPage.fillPassword(password);
    });
    await test.step('User clicks Login Button', async () => {
      await LoginPage.clickLoginButton();
    });
    await test.step('User verifies My Account Page', async () => {
      await MyAccountPage.verifyMyAccountPage();
    });
    await test.step('User verifies Logout link is visible', async () => {
      await LoginPage.verifyLogout();
    });

  });
});