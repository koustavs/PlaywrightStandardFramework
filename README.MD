# 🧪 Playwright-TS Automation Framework

A robust end-to-end testing framework built with [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/) to automate UI testing for modern web applications.

## 🚀 Features

- ⚙️ Built with Playwright & TypeScript
- 🔍 Supports Chromium, Firefox, and WebKit
- 🧪 Parallel test execution
- 📸 Automatic screenshots on failure
- 📄 HTML & JSON reporting via Allure/Playwright Test Reporter
- 🔧 Custom utilities and test fixtures
- 🌐 Environment-specific configuration

## 📦 Installation

```bash
git clone https://github.com/your-username/playwright-ts-framework.git
cd playwright-ts-framework
npm install
```

## 🏃‍♂️ Usage
Run all tests:
```bash
npx playwright test
```
Run tests with UI:
```bash
npx playwright test --headed
```
Run specific test:
```bash
npx playwright test tests/login.spec.ts
```
Generate and view HTML report:
```bash
npx playwright show-report
```
🗂️ Project Structure
<pre> <code>
ToolShopAutomation/
├── lib/
│   ├── webAction.ts
│   ├── DBActions.ts
│   └──  apiActions.ts
|
├── **app1**/                      # APP 1 Folder structure starts here
│   ├── data/                      # Data and Configs
│   │    ├── testConfig.ts
│   │    └── testData.json
│   └── src/
│        ├── fixtures/
│        │      └── pageFixtures.ts  # Custom Fixtures
│        ├── objectRepo/
│        │      └── locator.json   # Locators
│        ├── pages/                # Page Object Model classes
│        │      ├── Main.ts
│        │      ├── BaseTest.ts
│        │      └── Home.ts
│        └──  tests/
│              |── functional/
│              |      └── SampleFeature.test.ts
│              |── regression/
│              |      └── SampleFeature.test.ts
│              └── smoke/
│                     └── SampleFeature.test.ts
├── **app2**/                      # APP 2 Folder structure starts here
│   ├── data/
│   │    ├── testConfig.ts
│   │    └── testData.json
│   └── src/
│        ├── fixtures/
│        │     └── pageFixtures.ts  # Custom Fixtures
│        ├── objectRepo/
│        │     └── locator.json    # Locators
│        ├── pages/                # Page Object Model classes
│        │     ├── Main.ts
│        │     ├── BaseTest.ts
│        │     └── Home.ts
│        └── tests/                # Test scripts
│              |── functional/
│              |      └── SampleFeature.test.ts
│              |── regression/
│              |      └── SampleFeature.test.ts
│              └── smoke/
│                     └── SampleFeature.test.ts
├── Utilities/                     # Reusable utility functions
│      ├── Util1.ts
│      └── Util2.ts
├── html-report/
├── test-results/
├── allure-results/
├── node_modules/
├── package-lock.json
├── package.json
├── playwright.config.ts
├── .gitignore
└── README.md
</code> </pre>
⚙️ Configuration
Environment can be set via command line:
```bash
ENV=staging npx playwright test
```
Playwright config supports multiple projects (e.g., browsers, environments).

📜 Scripts
| Script               | Description              |
| ---------------------| ------------------------ |
| `test`               | Run all tests            |
| `test:headed`        | Run tests in headed mode |
| `report`             | Generate test report     |
| `lint`               | Run ESLint               |
| `build`              | Compile TypeScript       |



✍️ Sample Test
```ts
test('Login page loads', async ({ page }) => {
  await page.goto('/login');
  await expect(page).toHaveTitle(/Login/);
});
```

🤝 Contributing

Feel free to fork the repo and submit pull requests. Please run tests and lint before submitting.

📄 License
MIT