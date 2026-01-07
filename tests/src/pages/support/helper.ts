import { Page } from "playwright";

export class Helper {
    constructor(readonly page: Page) {

    }
    async navigateTo(url: string) {
        await this.page.goto(`https://${url}`);
    }
}