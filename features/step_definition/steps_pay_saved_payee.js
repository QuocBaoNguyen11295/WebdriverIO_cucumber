const {Given,When,Then} = require('@wdio/cucumber-framework')
const pay_saved_payee = require('../page_objects/pay_saved_payee')

When(/^The user create a pay saved payee with (.*), (.*), (.*), (.*), (.*)$/,async(payee,account,amount,date,description)=>{
    await pay_saved_payee.open_service('Online Banking')
    await pay_saved_payee.check_open_service_page()
    await pay_saved_payee.select_banking_feature('Pay Bills')
    await pay_saved_payee.select_pay_bill_feature('Pay Saved Payee')
    await pay_saved_payee.check_open_pay_saved_payee_tab()
    await pay_saved_payee.fill_out_information_for_pay_saved_payee(payee,account,amount,date,description)
    await pay_saved_payee.click_button_pay()
})

Then(/^The user gets the message$/,async()=>{
    await pay_saved_payee.pay_successfully()
})

Given(/^Open Zero Bank index page$/,async()=>{
    await pay_saved_payee.access_to_index_page()
    await pay_saved_payee.click_on_signin_button()
    await pay_saved_payee.check_access_login_page_successfully()
    await pay_saved_payee.login_with_valid_credential()
})