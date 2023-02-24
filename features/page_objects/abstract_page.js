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


    async pause(timeout){
        await browser.pause(timeout)
    }
}