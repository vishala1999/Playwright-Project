import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { BrowserContext } from "@playwright/test";
import * as messages from "@cucumber/messages";
import { Page } from "playwright";

export interface CucumberWorkConstructorParams {
    parameters: { [key: string]: string };
}

export interface CustomWorld extends World{
    feature?: messages.Pickle;
    context?: BrowserContext;
    page?: Page;

    testName?: string;
    startTime?: Date;
    newPage?: Page;
    newContext?: BrowserContext;
    newContexts?: BrowserContext[];
}   

export class CustomWorldImpl extends World implements CustomWorld {
    constructor(options: IWorldOptions) {
        super(options);
    // debug = false;
    }
}

setWorldConstructor(CustomWorldImpl);