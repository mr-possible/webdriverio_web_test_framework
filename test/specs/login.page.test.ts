import saucedemoLogin from "../pageobjects/saucedemo.login"
import saucedemoHome from "../pageobjects/saucedemo.home"
import data from "../utils/data"

describe("Feature: SauceDemo Login Feature", () => {

    it("Test Valid Login", async () => {
        for (const cred of new data().valid_credentials_testdata) {
            await browser.url("https://www.saucedemo.com/")
            await saucedemoLogin.performUserLogin(cred.username, cred.password)
            await expect(await saucedemoHome.headerProductPage).toBeDisplayed()
        }
    })

    it("Test Invalid Login", async () => {
        for (const cred of new data().invalid_credentials_testdata) {
            await browser.url("https://www.saucedemo.com/")
            await saucedemoLogin.performUserLogin(cred.username, cred.password)
            await saucedemoLogin.msgInvalidLogin.waitForDisplayed({ timeout: 1000, timeoutMsg: "Error message not displayed!" })
            await expect(saucedemoLogin.msgInvalidLogin).toHaveText("Epic sadface: Username and password do not match any user in this service")
        }
    })
})