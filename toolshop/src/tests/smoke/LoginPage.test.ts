import test from '../../pages/BasePage';

const email = 'customer@practicesoftwaretesting.com';
const password = 'welcome01';

test.describe('Login Page Tests', () => {
  test.beforeEach('User navigates to Application URL', async ({ HomePage }) => {
    await HomePage.navigateToURL();
  });

  test('Verify Sign In Link is Visible', { tag: ['@Smoke', '@Regression'] }, async ({ HomePage }) => {
    await test.step('User verifies Sign In Link is Visible', async () => {
      await HomePage.isSignInLinkVisible();
    });
  });

  test('Verify Login screen displayed when user clicks Sign In', { tag: ['@Smoke', '@Regression'] }, async ({ LoginPage }) => {
    test.slow();
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User verifies Login Form is displayed', async () => {
      await LoginPage.isLoginFormVisible();
    });
  });

  test('Verify Login Form fields are visible', { tag: ['@Smoke', '@Regression'] }, async ({ LoginPage }) => {
    test.slow();
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User verifies Email field is visible', async () => {
      await LoginPage.isEmailFieldVisible();
    });
    await test.step('User verifies Password field is visible', async () => {
      await LoginPage.isPasswordFieldVisible();
    });
    await test.step('User verifies SignIn With Google button is visible', async () => {
      await LoginPage.isSignInWithGoogleVisible();
    });
  });

  test('Verify Forgot Password link is visible', async ({ LoginPage }) => {
    test.slow();
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User verifies Forgot Password link is visible', async () => {
      await LoginPage.isForgotPasswordLinkVisible();
    });
  });

  test('Verify Register link is visible', async ({ LoginPage }) => {
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User verifies Register link is visible', async () => {
      await LoginPage.isRegisterLinkVisible();
    });
  });

  test('Verify successful login with valid credentials', async ({ LoginPage }) => {
    test.slow();
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
    await test.step('User verifies My Account page is displayed', async () => {
      await LoginPage.verifyMyAccountPage();
    });
    await test.step('User verifies Logout link is visible', async () => {
      await LoginPage.verifyLogout();
    });
  });

  test('Verify unsuccessful login with invalid credentials', async ({ LoginPage }) => {
    test.slow();
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User fills Email', async () => {
      await LoginPage.fillEmail('invalid@example.com');
    });
    await test.step('User fills Password', async () => {
      await LoginPage.fillPassword('wrongpassword');
    });
    await test.step('User clicks Login Button', async () => {
      await LoginPage.clickLoginButton();
    });
    await test.step('User verifies Unsuccessful Login', async () => {
      await LoginPage.verifyUnsuccessfulLogin();
    });

  });

}); // LoginPage Tests