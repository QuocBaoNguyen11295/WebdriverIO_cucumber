const {Given,When,Then} = require('@cucumber/cucumber')
const forgot_password = require('../page_objects/forgot_password')

Given('Open the Zero Bank',async()=>{
    await forgot_password.access_to_index_page()
})

When(/^The user wants to get back the password through email (\S+@\S+\.\S+)$/,async(email)=>{
    await forgot_password.click_on_signin_button()
    await forgot_password.check_access_login_page_successfully()
    await forgot_password.click_forgot_password_link()
    await forgot_password.check_navigate_to_forgot_password_page()
    await forgot_password.fill_email(email)
    await forgot_password.click_send_password()
})

Then(/^The user gets the announcement related to getting back password through (\S+@\S+\.\S+)$/,async(email)=>{
    await forgot_password.check_send_password_successfully(email)
})