import test, { expect, Page, BrowserContext } from '@playwright/test';
import locators from '../objectRepo/locators.json';
import { LocatorUtils } from '../../../utilities/locatorUtils';

export class RegisterUserPage {

    page: Page;
    context: BrowserContext;
    newPage: Page;
    locatorUtils: LocatorUtils;

    public Email_Txt: string;
    public Password_Txt: string;

    constructor(page: Page, context: BrowserContext, newPage?: Page) {
        this.page = page;
        this.context = context;
        this.newPage = page;
        this.locatorUtils = new LocatorUtils();
        this.Email_Txt = "test.user@example.com";
        this.Password_Txt = "Welcome@01*";
    }

    async isRegisterLinkVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.Register_Lnk, { state: 'visible' })
        const registerLink = await this.page.isVisible(locators.LoginPage.Register_Lnk);
        expect(registerLink).toBe(true);
    }

    async navigateToRegisterPage(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.Register_Lnk, { state: 'visible' });
        await this.page.click(locators.LoginPage.Register_Lnk);
        const registerFormVisible = await this.page.isVisible(locators.CustomerRegistrationPage.Register_Form);
        expect(registerFormVisible).toBe(true);
    }

    async blankSubmitRegistrationForm() {
        await this.page.click(locators.CustomerRegistrationPage.Register_Btn);
    }

    async isErrorMessageVisibleOnBlankSubmit() {
        const errorFields = [
            { key: 'FirstName_Error', expected: 'First name is required' },
            { key: 'LastName_Error', expected: 'Last name is required' },
            { key: 'DoB_Error', expected: 'Please enter a valid date in YYYY-MM-DD format.  Date of Birth is required' },
            { key: 'Street_Error', expected: 'Street is required' },
            { key: 'PostalCode_Error', expected: 'Postcode is required' },
            { key: 'City_Error', expected: 'City is required' },
            { key: 'State_Error', expected: 'State is required' },
            { key: 'Country_Error', expected: 'Country is required' },
            { key: 'Phone_Error', expected: 'Phone is required.' },
            { key: 'Email_Error', expected: 'Email is required' },
            { key: 'Password_Error', expected: 'Password is required  Password must be minimal 6 characters long.  Password can not include invalid characters.' }
        ];

        for (const { key, expected } of errorFields) {
            const locator = locators.CustomerRegistrationPage[key];
            const isVisible = await this.page.isVisible(locator);
            expect(isVisible).toBe(true);

            const actualText = await this.page.textContent(locator);
            expect.soft(actualText?.trim()).toBe(expected);
        }
    }

    async fillRegistrationForm(countryValue: string = 'IN') {
        await this.page.fill(locators.CustomerRegistrationPage.FirstName_Txt, 'Test');
        await this.page.fill(locators.CustomerRegistrationPage.LastName_Txt, 'User');
        await this.page.fill(locators.CustomerRegistrationPage.DoB_Txt, '1990-01-01');
        await this.page.fill(locators.CustomerRegistrationPage.Street_Txt, '123 Main St');
        await this.page.fill(locators.CustomerRegistrationPage.PostalCode_Txt, '12345');
        await this.page.fill(locators.CustomerRegistrationPage.City_Txt, 'Anytown');
        await this.page.fill(locators.CustomerRegistrationPage.State_Txt, 'CA');
        await this.page.fill(locators.CustomerRegistrationPage.Phone_Txt, '1234567890');
        await this.page.fill(locators.CustomerRegistrationPage.Email_Txt, this.Email_Txt);
        await this.page.fill(locators.CustomerRegistrationPage.Password_Txt, this.Password_Txt);
        await this.selectCountry(countryValue);
    }

    async selectCountry(countryValue: string) {
        await this.page.selectOption(locators.CustomerRegistrationPage.Country_Menu, countryValue);
    }

    async submitRegistrationForm() {
        await this.page.click(locators.CustomerRegistrationPage.Register_Btn);
        // await this.page.waitForURL('**/auth/login');
        await this.locatorUtils.waitForSelector(this.page, locators.LoginPage.LoginForm, { state: 'visible' });
    }


}