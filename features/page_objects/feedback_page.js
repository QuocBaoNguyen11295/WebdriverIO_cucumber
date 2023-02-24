const abstract_page = require('./abstract_page')
class feedback_page extends abstract_page{
    async open_tab_feedback(){
        await super.open_tab_index_page('Feedback')
    }

    async check_tab_feedback_opened(){
        const header = await $('h3')
        const description = await $('h3').parentElement().parentElement().$('p')
        const paragraph = await $('#description').nextElement()
        await Promise.all([
            expect(header).toHaveText('Feedback'),
            expect(description).toHaveTextContaining(`Our Frequently Asked Questions area will help you with many of your inquiries.\nIf you can't find your question, return to this page and use the e-mail form below.`),
            expect(paragraph).toHaveTextContaining(`IMPORTANT! This feedback facility is not secure. Please do not send any\naccount information in a message sent from here.`)
        ])
    }

    async fill_out_information_for_send_feedback(name,email,subject,message){
        const name_field = await $('[placeholder="Your Name"]')
        const email_field = await $('[placeholder="Your email address"]')
        const subject_field = await $('[placeholder="Subject"]')
        const message_field = await $('[placeholder="Type your questions here..."]')
        await Promise.all([
            name_field.waitForDisplayed(),
            email_field.waitForDisplayed(),
            subject_field.waitForDisplayed(),
            message_field.waitForDisplayed(),
        ])
        await name_field.setValue(name)
        await email_field.setValue(email)
        await subject_field.setValue(subject)
        await message_field.setValue(message)
    }

    async click_send_message(){
        const btn_send_message = await $('[value="Send Message"]')
        await btn_send_message.waitForClickable()
        await btn_send_message.click()
    }

    async check_message_after_sending_message(name){
        const header = await $('h3')
        const message = await $('h3').parentElement().parentElement()
        await Promise.all([
            expect(header).toHaveText('Feedback'),
            expect(message).toHaveTextContaining(`Thank you for your comments, ${name}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`)
        ])
    }
}

module.exports = new feedback_page()