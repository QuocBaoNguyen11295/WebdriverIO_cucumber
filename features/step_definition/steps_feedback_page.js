const {Given,When,Then} = require('@cucumber/cucumber')
const feedback_page = require('../page_objects/feedback_page')

Given('Open Zero Bank page',async()=>{
    await feedback_page.access_to_index_page()
})

When(/^The user submits feedback with "(.*)", (\S+@\S+\.\S+), "(.*)", "(.*)"$/,async(user_name,user_email,user_subject,user_message)=>{
    await feedback_page.open_tab_feedback()
    await feedback_page.check_tab_feedback_opened()
    await feedback_page.fill_out_information_for_send_feedback(user_name,user_email,user_subject,user_message)
    await feedback_page.click_send_message()
})

Then(/^The user (.*) checks the message$/,async(user_name)=>{
    await feedback_page.check_message_after_sending_message(user_name)
})