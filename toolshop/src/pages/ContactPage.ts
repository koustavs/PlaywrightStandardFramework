import { expect, Page, BrowserContext } from '@playwright/test';
import { LocatorUtils } from '../../../utilities/locatorUtils';
import locators from '../objectRepo/locators.json';
import path from 'path';

export class ContactPage {

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

    async navigateToContactPage() {
        await this.page.click(locators.NavMenu.Contact_NavMenu);
        await this.locatorUtils.waitForSelector(this.page, locators.ContactPage.ContactFormHeader, { state: 'visible' });
        const contactFormVisible = await this.page.isVisible(locators.ContactPage.ContactFormHeader);
        expect(contactFormVisible).toBe(true);
    }

    async isContactLinkVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.NavMenu.Contact_NavMenu, { state: 'visible' });
        const contactLink = await this.page.isVisible(locators.NavMenu.Contact_NavMenu);
        expect(contactLink).toBe(true);
    }

    async isContactFormVisible(): Promise<void> {
        await this.locatorUtils.waitForSelector(this.page, locators.ContactPage.ContactFormHeader, { state: 'visible' });
        const contactForm = await this.page.isVisible(locators.ContactPage.ContactFormHeader);
        expect(contactForm).toBe(true);
    }

    async clickContactLink() {
        await this.page.click(locators.NavMenu.Contact_NavMenu);
    }

    async fillContactForm(subjectValue = 'Customer service') {
        await this.locatorUtils.waitForSelector(this.page, locators.ContactPage.SendMessage_Btn, { state: 'visible' });
        if (await this.page.locator(locators.ContactPage.FirstName_Txt).isVisible()) {
            await this.page.fill(locators.ContactPage.FirstName_Txt, 'John');
        }
        if (await this.page.locator(locators.ContactPage.LastName_Txt).isVisible()) {
            await this.page.fill(locators.ContactPage.LastName_Txt, 'Doe');
        }
        if (await this.page.locator(locators.ContactPage.Email_Txt).isVisible()) {
            await this.page.fill(locators.ContactPage.Email_Txt, 'john.doe@example.com');
        }
        await this.selectSubject(subjectValue);
        await this.page.fill(locators.ContactPage.Message_Txt, 'This is a test message.This is a test message.This is a test message.');
        await this.uploadFile(path.join(__dirname, '..\\..\\..\\Test.txt'));
        await this.page.click(locators.ContactPage.SendMessage_Btn);
    }

    async uploadFile(filePath: string) {
        await this.page.setInputFiles(locators.ContactPage.Attachment_file, filePath);
    }

    async selectSubject(subjectValue: string) {
        await this.page.selectOption(locators.ContactPage.Subject_Menu, subjectValue);
    }

    async verifySuccessMessage() {
        // await this.page.waitForSelector(locators.ContactPage.SuccessMessage_Alert, { state: 'visible' });
        await this.locatorUtils.waitForSelector(this.page, locators.ContactPage.SuccessMessage_Alert, { state: 'visible' });
        const successMessage = await this.page.isVisible(locators.ContactPage.SuccessMessage_Alert);
        expect(successMessage).toBe(true);
    }

}