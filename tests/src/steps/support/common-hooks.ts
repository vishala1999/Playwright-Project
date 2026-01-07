import { ChromiumBrowser, chromium, FirefoxBrowser, firefox, WebKitBrowser, webkit, Page } from "playwright";
import { BeforeAll, AfterAll, setDefaultTimeout, Before, After, BeforeStep, ITestCaseHookParameter } from "@cucumber/cucumber";
import { browserOptions } from "../../pages/support/config";
import { CustomWorld } from "../../pages/support/custom-world";

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
setDefaultTimeout(120 * 1000); // this will set the default step timeout to 120 secs

BeforeAll(async () => {
    // Launch the browser before all tests
    browser = await chromium.launch(browserOptions);
});
Before(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
    // Create a new page before each scenario
    this.page = await (await browser.newContext({
        ignoreHTTPSErrors: true // to ignore any https page or SSO pages
    })
    ).newPage();
    console.log(`\nScenario: ${scenario.pickle.name}`);
});
AfterAll(async () => {
    // Close the browser after all tests
    if (browser) {
        const contexts = browser.contexts();
        for (const context of contexts) {
            const pages = context.pages();
            for (const page of pages) {
                await page.close();
            }
            await context.close();
        }
        await browser.close();
    }
});
After(async function (this: CustomWorld, { result }: ITestCaseHookParameter) {

    // Attach screenshot on failure
    if (result?.status === "FAILED") {
        const screenshot = await this.page!.screenshot();
        await this.attach(screenshot, 'image/png');
    }

    if (browser) {
        const contexts = browser.contexts();
        for (const context of contexts) {
            const pages = context.pages();
            for (const page of pages) {
                await page.close();
            }
            await context.close();
        }
        await browser.close();
    }
});

// Print the step text before each step in console
BeforeStep(async function (step) {
    console.log(`  ${step.pickleStep.text}`);
})
