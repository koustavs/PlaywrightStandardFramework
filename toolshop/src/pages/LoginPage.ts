import test, { expect, Page, BrowserContext } from '@playwright/test';
import locators from '../objectRepo/locators.json';
import { LocatorUtils } from '../../../utilities/locatorUtils';

export class LoginPage {

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

    async clickSignIn(): Promise<void> {
        this.page.waitForLoadState('domcontentloaded');
        await this.page.click(locators.NavMenu.SignIn_NavMenu);
    }

    async isLoginFormVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.LoginForm, { state: 'visible' });
        const LoginForm = await this.page.isVisible(locators.LoginPage.LoginForm);
        expect(LoginForm).toBe(true);
    }

    async isEmailFieldVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.Email_Txt, { state: 'visible' });
        const emailField = await this.page.isVisible(locators.LoginPage.Email_Txt);
        expect(emailField).toBe(true);
    }

    async isPasswordFieldVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.Password_Txt, { state: 'visible' });
        const passwordField = await this.page.isVisible(locators.LoginPage.Password_Txt);
        expect(passwordField).toBe(true);
    }

    async isSignInWithGoogleVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.SignInWithGoogle_Btn, { state: 'visible' });
        const signInWithGoogleButton = await this.page.isVisible(locators.LoginPage.SignInWithGoogle_Btn);
        expect(signInWithGoogleButton).toBe(true);
    }
    
    async isForgotPasswordLinkVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.ForgotPassword_Lnk, { state: 'visible' });
        const forgotPasswordLink = await this.page.isVisible(locators.LoginPage.ForgotPassword_Lnk);
        expect(forgotPasswordLink).toBe(true);
    }

    async isRegisterLinkVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.Register_Lnk, { state: 'visible' });
        const registerLink = await this.page.isVisible(locators.LoginPage.Register_Lnk);
        expect(registerLink).toBe(true);
    }

    async fillEmail(email: string): Promise<void> {
        await this.page.fill(locators.LoginPage.Email_Txt, email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.page.fill(locators.LoginPage.Password_Txt, password);
    }

    async clickLoginButton(): Promise<void> {
        await this.page.click(locators.LoginPage.Login_Btn);
    }

    async verifyMyAccountPage(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.MyAccountPage.Header, { state: 'visible',timeout: 15000});
        const myAccountPageVisible = await this.page.isVisible(locators.MyAccountPage.Header);
        const favouritesVisible = await this.page.isVisible(locators.MyAccountPage.Favourites);
        const profileVisible = await this.page.isVisible(locators.MyAccountPage.Profile);
        const invoicesVisible = await this.page.isVisible(locators.MyAccountPage.Invoices);
        if (!myAccountPageVisible || !favouritesVisible || !profileVisible || !invoicesVisible) {
            throw new Error('My Account page or its elements are not loaded correctly');
        }

    }

    async verifyUnsuccessfulLogin(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.InvalidCredentials_Alert, { state: 'visible' });
        const errorMessage = await this.page.isVisible(locators.LoginPage.InvalidCredentials_Alert);
        if (!errorMessage) {
            throw new Error('Error message for unsuccessful login is not displayed');
        }
    }

    async verifyLogout(): Promise<void> {
        const logoutLinkVisible = await this.page.isVisible(locators.NavMenu.Logout_Lnk);
        if (await this.page.locator(locators.NavMenu.LoggedInUser_Dropdown).isVisible()) {
            await this.page.locator(locators.NavMenu.LoggedInUser_Dropdown).click();
            await this.page.locator(locators.NavMenu.Logout_Lnk).click();
        }
    }


}