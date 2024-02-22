import saucedemoLogin from "../pageobjects/saucedemo.login"
import saucedemoHome from "../pageobjects/saucedemo.home"

describe("Feature: SauceDemo Login Feature", () => {
    it("Test Valid Login", async () => {
        await browser.url("https://www.saucedemo.com/")

        await saucedemoLogin.performUserLogin("standard_user", "secret_sauce")
        await expect(await saucedemoHome.headerProductPage).toBeDisplayed()
    })

    it("Test Invalid Login", async () => {
        await browser.url("https://www.saucedemo.com/")

        await saucedemoLogin.performUserLogin("wrong_user", "not_so_secret_sauce")
        await saucedemoLogin.msgInvalidLogin.waitForDisplayed({ timeout: 1000, timeoutMsg: "Error message not displayed!" })
        await expect(saucedemoLogin.msgInvalidLogin).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})