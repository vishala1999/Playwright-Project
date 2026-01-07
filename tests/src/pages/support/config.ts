import { LaunchOptions } from "playwright";

const browserOptions: LaunchOptions = {
    slowMo: 50,
    headless: false,
    args: [
        '--no-sandbox',
        '--start-maximized',
        '--incognito',
        '--window-size=1920,1080',
        '--disable-web-security',
        '--ignore-certificate-errors'
    ],
    channel: 'chrome' //this will launch the system browser without downloading explicitly
}

export { browserOptions };