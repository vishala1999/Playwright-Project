import { expect, FrameLocator, Page } from "@playwright/test";

export class MakeMyTripPagePage{
    private locators;
    constructor(readonly page:Page){
        this.locators = {
            searchBox: this.page.getByTitle('Search'),
            searchResult: this.page.locator('#search').locator('[data-query-term="demo"]'),
            closeModalButton: this.page.locator('[data-cy="closeModal"]'),
            menuItem:(optionName:string) => this.page.locator(`.menu_${optionName}`)
        }
    }
    async searchFor(searchText:string){
        await this.page.waitForTimeout(2000); // Wait before interacting
        await this.locators.searchBox.click();
        await this.locators.searchBox.clear(); // Clear any existing text
        await this.locators.searchBox.type(searchText, { delay: 1000 }); // Slow typing
        await this.page.waitForTimeout(1000);
        await this.locators.searchBox.press('Enter');
    }
    async validateSearhResults(resultText:string){
        await expect(async () => {
        await expect(await this.locators.menuItem(resultText).locator('//a').getAttribute('class')).toContain('active')
    }).toPass({timeout:60000})
    }
    async closeLoginWindow(){
        await this.locators.closeModalButton.click();
    }
    async clickOnOption(optionName:string){
        await this.locators.menuItem(optionName).click();
    }
}