const abstract_page = require("./abstract_page");

class login_page extends abstract_page{
    //abstractPage = new abstract_page()
    async login_with_valid_credential(){
        const login_field = await $('label=Login').parentElement().$('input')
        await login_field.waitForDisplayed()
        await login_field.setValue(`${process.env.account_username}`);
        const password_field = await $('label=Password').parentElement().$('input')
        await password_field.waitForDisplayed()
        await password_field.setValue(`${process.env.account_password}`)
        const remember_me_checkbox = await $('label=Keep me signed in').parentElement().$('input')
        await remember_me_checkbox.waitForDisplayed()
        await remember_me_checkbox.click()
        const button_sign_in = await $('[value="Sign in"]')
        await button_sign_in.waitForClickable()
        await button_sign_in.click()
        await super.access_to_index_page('http://zero.webappsecurity.com/index.html')
    }

    async check_login_user_sucessfully(){
        const header_left_side = await $('a=Zero Bank')
        const username_label = await $(`a=Logout`).parentElement().parentElement().parentElement().$(`a*=${process.env.account_username}`)
        await expect(header_left_side).toBeDisplayed()
        await expect(username_label).toBeDisplayed()
    }
    async click_logout(){
        const username_label = await $(`a=Logout`).parentElement().parentElement().parentElement().$(`a*=${process.env.account_username}`)
        await username_label.waitForDisplayed()
        await username_label.click()
        const Logout_locator = await $('a=Logout')
        await Logout_locator.waitForDisplayed()
        await Logout_locator.click()
    }

    async login_with_invalid_credential(username,password){
        const login_field = await $('label=Login').parentElement().$('input')
        await login_field.waitForDisplayed()
        await login_field.setValue(`${username}`);
        const password_field = await $('label=Password').parentElement().$('input')
        await password_field.waitForDisplayed()
        await password_field.setValue(`${password}`)
        const remember_me_checkbox = await $('label=Keep me signed in').parentElement().$('input')
        await remember_me_checkbox.waitForDisplayed()
        await remember_me_checkbox.click()
        const button_sign_in = await $('[value="Sign in"]')
        await button_sign_in.waitForClickable()
        await button_sign_in.click()
    }

    async check_user_login_unsucessfully(message){
        const alert_content = await $('.alert-error')
        await alert_content.waitForDisplayed()
        await expect(alert_content).toHaveText(message)
    }
}
module.exports = new login_page()