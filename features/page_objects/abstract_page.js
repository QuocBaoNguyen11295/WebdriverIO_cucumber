module.exports = class abstract_page {
    constructor(){

    }
    async access_to_index_page(){
        await browser.url('http://zero.webappsecurity.com/index.html')
        await browser.maximizeWindow()
    }

    async click_on_signin_button(){
        const signin_button = await $('button*=Signin')
        await signin_button.click()
    }

    async check_access_login_page_successfully(){
        const header = await $('h3')
        await header.waitForDisplayed()
        await expect(header).toHaveText('Log in to ZeroBank')
    }

    async open_tab_index_page(name_tab){
        const tab = await $(`strong=${name_tab}`)
        await tab.waitForClickable()
        await tab.click()
    }

    async login_with_valid_credential(){
        const login_field = await $('label=Login').parentElement().$('input')
        await login_field.waitForDisplayed()
        await login_field.setValue(`username`);
        const password_field = await $('label=Password').parentElement().$('input')
        await password_field.waitForDisplayed()
        await password_field.setValue(`password`)
        const remember_me_checkbox = await $('label=Keep me signed in').parentElement().$('input')
        await remember_me_checkbox.waitForDisplayed()
        await remember_me_checkbox.click()
        const button_sign_in = await $('[value="Sign in"]')
        await button_sign_in.waitForClickable()
        await button_sign_in.click()
        await this.access_to_index_page('http://zero.webappsecurity.com/index.html')
    }

    async check_login_user_sucessfully(){
        const header_left_side = await $('a=Zero Bank')
        const username_label = await $(`a=Logout`).parentElement().parentElement().parentElement().$(`a*=username`)
        await expect(header_left_side).toBeDisplayed()
        await expect(username_label).toBeDisplayed()
    }

    async pause(timeout){
        await browser.pause(timeout)
    }

    //Service
    async open_service(service){
        const service_locator = await $('#nav').$(`strong=${service}`)
        await service_locator.waitForClickable()
        await service_locator.click()
    }

    async check_open_service_page(){
        const header = await $('h1')
        const paragraph_below_header = await $('h1').parentElement().$('p')
        await expect(header).toHaveText('Online Banking')
        await expect(paragraph_below_header).toHaveText('Pay bills easily')
    }

    async select_banking_feature(feature){
        const feature_locator = await $('#online_banking_features').$(`span=${feature}`)
        await feature_locator.waitForClickable()
        await feature_locator.click()
    }

    //Pay bills
    async select_pay_bill_feature(feature){
        const pay_bill_tab = await $('#tabs').$(`a=${feature}`)
        await pay_bill_tab.waitForClickable()
        await pay_bill_tab.click()
    }
}