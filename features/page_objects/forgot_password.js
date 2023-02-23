const abstract_page = require('./abstract_page');
class forgot_password extends abstract_page{
    constructor(){
        super()
    }
    async click_forgot_password_link(){
        const link = await $('a=Forgot your password ?')
        await link.waitForClickable()
        await link.click()
    }

    async check_navigate_to_forgot_password_page(){
        const header = await $('h3')
        await expect(header).toHaveText('Forgotten Password')
        const paragraph = await $('h3').parentElement().parentElement().$('p')
        await expect(paragraph).toHaveTextContaining('So you forgot your password? Give us your email address and we will email it to you.')
    }

    async fill_email(email){
        const label = await $('label=Email')
        await label.waitForDisplayed()
        const input_email = await $('label=Email').parentElement().$('input')
        await input_email.waitForDisplayed()
        await input_email.setValue(email)
    }

    async click_send_password(){
        const button = await $('[value="Send Password"]')
        await button.waitForClickable()
        await button.click()
    }

    async check_send_password_successfully(email){
        const header = await $('h3')
        await header.waitForDisplayed()
        await expect(header).toHaveText('Forgotten Password')
        const paragraph = await $('h3').parentElement().parentElement().parentElement().$(`div*=Your password will be sent to the following email: ${email}`)
        await expect(paragraph).toBeDisplayed()
    }
}

module.exports = new forgot_password()