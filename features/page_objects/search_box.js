const abstract_page = require('./abstract_page')
class search_box extends abstract_page{
    async fill_out_keyword(keyword){
        const search_box_locator = await $('[placeholder="Search"]')
        await Promise.all([
            search_box_locator.waitForDisplayed(),
            search_box_locator.setValue(keyword),
        ])
        await browser.keys('\uE007')
    }

    async check_search_result(keyword){
        const header = await $('h2')
        const paragraph = await $('.top_offset')
        let list_search_result = await $('.top_offset > ul > li').$$(`a*=${keyword}`)
        await Promise.all([
            expect(header).toHaveText('Search Results:'),
            expect(paragraph).toHaveTextContaining(`The following pages were found for the query: ${keyword}`),
            
        ])
        for(let search_result of list_search_result){
            await expect(search_result).toBeDisplayed()
        }
    }
}
module.exports = new search_box()