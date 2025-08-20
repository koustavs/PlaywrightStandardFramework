import test from '../../pages/BasePage';

test.describe('Register Page Tests', () => {
  test.beforeEach(async ({ HomePage }) => {
    await HomePage.navigateToURL();
  });

  test('Verify Register link is visible', { tag: ['@Smoke'] }, async ({ LoginPage, RegisterUserPage }) => {
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User verifies Register link is visible', async () => {
      await RegisterUserPage.isRegisterLinkVisible();
    });
  });

  test('Verify Register link navigates to Register User page', { tag: ['@Smoke'] }, async ({ LoginPage, RegisterUserPage }) => {
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User navigates to Register User page', async () => {
      await RegisterUserPage.navigateToRegisterPage();
    });

  });

  test('Verify successful registration redirects to Sign-In page', { tag: ['@Smoke'] }, async ({ LoginPage, RegisterUserPage }) => {
    test.slow();
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User navigates to Register User page', async () => {
      await RegisterUserPage.navigateToRegisterPage();
    });
    await test.step('User fills Registration Form', async () => {
      await RegisterUserPage.fillRegistrationForm();
    });
    await test.step('User selects Country', async () => {
      await RegisterUserPage.selectCountry('India');
    });
    await test.step('User submits Registration Form', async () => {
      await RegisterUserPage.submitRegistrationForm();
    });
  });

  test('Verify *Required/Mandatory* fields are validated with Error messages on blank submit of Register User form', { tag: ['@Smoke', '@Regression'] }, async ({ LoginPage, RegisterUserPage }) => {
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User navigates to Register User page', async () => {
      await RegisterUserPage.navigateToRegisterPage();
    });
    await test.step('User submits blank Registration Form', async () => {
      await RegisterUserPage.blankSubmitRegistrationForm();
    });
    await test.step('User verifies error message is visible on blank submit', async () => {
      await RegisterUserPage.isErrorMessageVisibleOnBlankSubmit();
    });
  });

  test('Verify newly added user can log in', { tag: ['@Smoke', '@Regression'] }, async ({ LoginPage, RegisterUserPage }) => {
    test.slow();
    await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
    await test.step('User fills Email', async () => {
      await LoginPage.fillEmail(RegisterUserPage.Email_Txt);
    });
    await test.step('User fills Password', async () => {
      await LoginPage.fillPassword(RegisterUserPage.Password_Txt);
    });
    await test.step('User clicks Login Button', async () => {
      await LoginPage.clickLoginButton();
    });
    await test.step('User waits for My Account Page', async () => {
      await LoginPage.verifyMyAccountPage();
    });
  });

});
