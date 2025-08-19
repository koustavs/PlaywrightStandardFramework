import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterUserPage } from '../pages/RegisterUser';
import { ContactPage } from '../pages/ContactPage';

type Fixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterUserPage;
  contactPage: ContactPage;
};

export const test = baseTest.extend<Fixtures>({

  homePage: async ({ page, context }, use) => {
    const homePage = new HomePage(page, context);
    await use(homePage);
  },
  loginPage: async ({ page, context }, use) => {
    const loginPage = new LoginPage(page, context);
    await use(loginPage);
  },
  registerPage: async ({ page, context }, use) => {
    const registerPage = new RegisterUserPage(page, context);
    await use(registerPage);
  },
  contactPage: async ({ page, context }, use) => {
    const contactPage = new ContactPage(page, context);
    await use(contactPage);
  },

});

export const expect = test.expect;