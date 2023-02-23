const {Given,When,Then} = require('@cucumber/cucumber')
const loginPage = require('../page_objects/login_page')
const forgot_password = require('../page_objects/forgot_password')
Given('The user would like to access the Zero Bank',async()=>{
    await loginPage.access_to_index_page()
})

When('The user logins to the Zero Bank',async()=>{
    await loginPage.click_on_signin_button()
    await loginPage.check_access_login_page_successfully()
    await loginPage.login_with_valid_credential()
})

When(/^The user logins to Zero Bank with (\w+),(.+)$/,async(username,password)=>{
    await loginPage.click_on_signin_button()
    await loginPage.login_with_invalid_credential(username,password)
})

Then('The user is in the page',async()=>{
    await loginPage.check_login_user_sucessfully()
    await loginPage.click_logout()
})

Then(/^The message ([^"]*) will be shown$/,async(message)=>{
    await loginPage.check_user_login_unsucessfully(message)
})


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
