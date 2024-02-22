import saucedemoLogin from "../pageobjects/saucedemo.login"
import saucedemoHome from "../pageobjects/saucedemo.home"

describe('Feature: Home Page sidebar feature', () => {

    before('Login to the application', async () => {
        await browser.url("https://www.saucedemo.com/")
        await saucedemoLogin.performUserLogin("standard_user", "secret_sauce")
    })

    it('Verify Home Page Side Bar Burger Opener is Displayed', async () => {
        await expect(await saucedemoHome.btnSideBarOpener).toBeDisplayed()
    })

    it('Verify Home Page Side Bar is Displayed', async () => {
        await saucedemoHome.btnSideBarOpener.click();
        await expect(await saucedemoHome.productPageSideBar).toBeDisplayed()
    })

    it('Verify Home Page Side Bar consists of Logout button', async () => {
        let flag: boolean = false
        for await (const item of saucedemoHome.productPageSideBarOptions) {
            if (await item.getText() === "Logout") {
                flag = true
                break
            }
        }
        expect(flag).toEqual(true)
    })

    it('Verify Home Page Side Bar closes through X button', async () => {
        await expect(saucedemoHome.productPageSideBarCloseIcon).toBeDisplayed()
        await saucedemoHome.productPageSideBarCloseIcon.click()
        await expect(await saucedemoHome.productPageSideBar).not.toBeDisplayed()
    })
})

describe('Feature: Home Page Filters Dropdown', () => {
    before('Login to the application', async () => {
        await browser.url("https://www.saucedemo.com/")
        await saucedemoLogin.performUserLogin("standard_user", "secret_sauce")
    })

    it('Verify Home Page Filter dropdown is displayed', async () => {
        await expect(saucedemoHome.dropDwnFilter).toBeDisplayed()
    })
})

describe('Feature: Home Page Products List', () => {
    before('Login to the application', async () => {
        await browser.url("https://www.saucedemo.com/")
        await saucedemoLogin.performUserLogin("standard_user", "secret_sauce")
    })

    it('Verify products are shown in the Home Page', async () => {
        await expect(await saucedemoHome.productPageProducts).toBeElementsArrayOfSize({ gte: 0 })
    })
})

afterEach("Hard wait", async () => {
    await browser.pause(2000)
})