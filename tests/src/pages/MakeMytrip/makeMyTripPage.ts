import { expect, Page } from "@playwright/test";

export class MakeMyTripPagePage {
    private locators;
    constructor(readonly page: Page) {
        this.locators = {
            searchButton: this.page.locator('[data-cy="submit"]'),
            searchResult: this.page.locator('#search').locator('[data-query-term="demo"]'),
            closeModalButton: this.page.locator('[data-cy="closeModal"]'),
            menuItem: (optionName: string) => this.page.locator(`.menu_${optionName}`),
            fromCity: this.page.locator('#fromCity'),
            toCity: this.page.locator('#toCity'),
            dateInput: this.page.locator('#travelDate'),
            getByTiTle: (text: string) => this.page.getByTitle(text, { exact: true }),
            toDatePicker: (date: string) => this.page.locator(`//*[contains(@aria-label,'${date}')]`),
            trainNumber: (trainNumber: string) => this.page.locator('[data-testid="listing-train-number"]').filter({ hasText: trainNumber }),
            monthNavigation: (month: string) => this.page.locator(`[aria-label="${month} Month"]`),
            minimizeBot: this.page.locator('[alt="minimize"]')
        }
    }
    async validateSearhResults(resultText: string) {
        await expect(async () => {
            await expect(await this.locators.menuItem(resultText).locator('//a').getAttribute('class')).toContain('active')
        }).toPass({ timeout: 60000 })
    }
    async closeLoginWindow() {
        await this.locators.closeModalButton.click();
    }
    async clickOnOption(optionName: string) {
        await this.locators.menuItem(optionName).click();
    }
    async searchTrains(fromCity: string, toCity: string, date: string) {
        // Implementation for searching trains
        await this.locators.fromCity.click();
        await this.locators.getByTiTle('From').click();
        await this.locators.getByTiTle('From').fill(fromCity);
        await this.page.locator('[role="option"]').getByText(fromCity).first().click();

        await this.locators.getByTiTle('To').click();
        await this.locators.getByTiTle('To').fill(toCity);
        await this.page.locator('[role="option"]').getByText(toCity).first().click();

        await this.locators.dateInput.click();
        let dateFound = false;
        while (!dateFound) {
            if (await this.locators.toDatePicker(date).isVisible()) {
                await this.locators.toDatePicker(date).click();
                dateFound = true;
            }
            else
                await this.locators.monthNavigation('Next').click();
        }
    }
    async clickSearch() {
        await this.locators.searchButton.click();
    }
    async validateTrainNumber(trainNumber: string) {
        await expect(await this.locators.trainNumber(trainNumber)).toBeVisible({ timeout: 30000 });
    }
    async minimizeBot() {
        await expect(await this.locators.minimizeBot).toBeVisible({ timeout: 20000 });
        await expect(async () => {
            if (await this.locators.minimizeBot.isVisible())
                await this.locators.minimizeBot.click();
            await expect(await this.locators.minimizeBot).toBeHidden({ timeout: 5000 });
        }).toPass({ timeout: 30000 });
    }
}