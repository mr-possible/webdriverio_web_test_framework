import Page from "./page";

class SauceDemoLoginPage extends Page {

    get inputUsername() {
        return $("#user-name")
    }

    get inputPassword() {
        return $("#password")
    }

    get btnLogin() {
        return $("#login-button")
    }

    get msgInvalidLogin() {
        return $("//h3[@data-test='error']")
    }

    async performUserLogin(username: string, password: string) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.waitForClickable({timeout: 10000, timeoutMsg: "Login button not clickable!"})
        await this.btnLogin.click()
    }
}

export default new SauceDemoLoginPage()