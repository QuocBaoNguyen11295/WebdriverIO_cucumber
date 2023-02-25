const {Given,When,Then} = require('@cucumber/cucumber')
const search_box = require('../page_objects/search_box')

Given('Open Zero Bank index page',async()=>{
    await search_box.access_to_index_page()
})

When(/^The user tries to find (.*) on the page?/,async(keyword)=>{
    await search_box.fill_out_keyword(keyword)
})

Then(/^The user checks the result with the keyword (.*)?/,async(keyword)=>{
    await search_box.check_search_result(keyword)
})