import test from '../../pages/BasePage';

const email = 'customer@practicesoftwaretesting.com';
const password = 'welcome01';

test.describe('Register Page Tests', () => {
    test.beforeEach('User navigates to Application URL', async ({ HomePage }) => {
        await HomePage.navigateToURL();
    });

    test('Verify Contact Link is Visible', { tag: ['@Smoke'] }, async ({ ContactPage }) => {
        await test.step('User verifies Contact Link is Visible', async () => {
            await ContactPage.isContactLinkVisible();
        });
    });

    test('Verify Contact Form is Visible', { tag: ['@Smoke'] }, async ({ ContactPage }) => {
        await test.step('User navigates to Contact Page', async () => {
            await ContactPage.navigateToContactPage();
        });
        await test.step('User clicks Contact Link', async () => {
            await ContactPage.clickContactLink();
        });
        await test.step('User verifies Contact Form is Visible', async () => {
            await ContactPage.isContactFormVisible();
        });
    });

    test('Verify successful message submission from Contact page', { tag: ['@Smoke', '@Regression'] }, async ({ LoginPage, ContactPage }) => {
        test.slow();
        /*await test.step('User clicks Sign In', async () => {
      await LoginPage.clickSignIn();
    });
        await LoginPage.fillEmail(email);
        await LoginPage.fillPassword(password);
        await LoginPage.clickLoginButton();*/
        // await LoginPage.page.waitForURL('**/account');
        await test.step('User navigates to Contact Page', async () => {
            await ContactPage.navigateToContactPage();
        });
        await test.step('User clicks Contact Link', async () => {
            await ContactPage.clickContactLink();
        });
        await test.step('User fills Contact Form', async () => {
            await ContactPage.fillContactForm();
        });
        await test.step('User verifies Success Message', async () => {
            await ContactPage.verifySuccessMessage();
        });
        await test.step('User verifies Logout link is visible', async () => {
            await LoginPage.verifyLogout();
        });
    });

});
