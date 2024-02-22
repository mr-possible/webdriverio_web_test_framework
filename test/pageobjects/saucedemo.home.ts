import Page from "./page";

class SauceDemoHomePage extends Page {

    get headerProductPage() {
        return $(".title")
    }

    get productPageSideBar() {
        return $('//div[@class="bm-menu-wrap"]')
    }

    get btnSideBarOpener() {
        return $("#react-burger-menu-btn")
    }

    get productPageSideBarOptions() {
        return $$(".bm-item.menu-item")
    }

    get productPageSideBarCloseIcon() {
        return $("#react-burger-cross-btn")
    }

    get productPageProducts() {
        return $$("//div[@class='inventory_item']")
    }

    get dropDwnFilter() {
        return $("//select[@class='product_sort_container']")
    }
}

export default new SauceDemoHomePage()