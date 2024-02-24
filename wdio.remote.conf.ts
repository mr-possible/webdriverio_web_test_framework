import { config as baseConfig } from './wdio.conf'

export const config = {
    ...baseConfig,
    capabilities: [
        {
            maxInstances: 3,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [
                    '--headless',
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage'
                ]
            }
        }
    ],
    services: [],
    hostname: process.env.HOST || "localhost",
    port: 4444,
    path: "/wd/hub/",
    protocol: "http"
}