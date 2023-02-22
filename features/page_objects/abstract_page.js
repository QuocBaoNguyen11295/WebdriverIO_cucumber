module.exports = class abstract_page {
    constructor(){

    }
    async access_to_index_page(url){
        await browser.url(url)
    }

    async pause(timeout){
        await browser.pause(timeout)
    }
}