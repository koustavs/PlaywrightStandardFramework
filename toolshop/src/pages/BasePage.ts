import { TestInfo, test as baseTest } from '@playwright/test';

import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterUserPage } from './RegisterUser';
import { ContactPage } from './ContactPage';
import { MyAccountPage } from './MyAccount';

const test = baseTest.extend<{

    HomePage: HomePage;
    LoginPage: LoginPage;
    RegisterUserPage: RegisterUserPage;
    ContactPage: ContactPage;
    MyAccountPage: MyAccountPage;

}>({
  HomePage: async ({ page, context }, use) => {
    await use(new HomePage(page, context));
  },
  LoginPage: async ({ page, context }, use) => {
    await use(new LoginPage(page, context));
  },
  RegisterUserPage: async ({ page, context }, use) => {
    await use(new RegisterUserPage(page, context));
  },
  ContactPage: async ({ page, context }, use) => {
    await use(new ContactPage(page, context));
  },
  MyAccountPage: async ({ page, context }, use) => {
    await use(new MyAccountPage(page, context));
  }

});

export default test;