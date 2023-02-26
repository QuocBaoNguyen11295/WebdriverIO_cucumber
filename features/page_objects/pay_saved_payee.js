const abstract_page = require('./abstract_page')
class pay_saved_payee extends abstract_page{
    async check_open_pay_saved_payee_tab(){
        const header = await $('h2')
        await expect(header).toHaveText('Make payments to your saved payees')
    }

    async fill_out_information_for_pay_saved_payee(payee,account,amount,date,description){
        const payee_locator = await $('label=Payee').parentElement().$('select').$(`option=${payee}`)
        const account_locator = await $('label=Account').parentElement().$('select').$(`option=${account}`)
        const amount_locator = await $('label=Amount').parentElement().$('input')
        const date_locator = await $('label=Date').parentElement().$('input')
        const description_locator = await $('label=Description').parentElement().$('input')
        await Promise.all([
            payee_locator.waitForDisplayed(),
            payee_locator.click(),
            account_locator.waitForDisplayed(),
            account_locator.click(),
            amount_locator.waitForDisplayed(),
            amount_locator.setValue(amount),
            date_locator.waitForDisplayed(),
            date_locator.setValue(date),
            description_locator.waitForDisplayed(),
            description_locator.setValue(description)
        ])
    }

    async click_button_pay(){
        const button_pay = await $('[value="Pay"]')
        await button_pay.waitForClickable()
        await button_pay.click()
    }

    async pay_successfully(){
        const alert_content = await $('#alert_content').$('span')
        await alert_content.waitForDisplayed()
        await expect(alert_content).toHaveText('The payment was successfully submitted.')
    }
}   

module.exports = new pay_saved_payee()