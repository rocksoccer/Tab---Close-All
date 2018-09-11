'use strict'

exports.tabUtils = {
  closeAllTabs: async () => {
    try {
      let query = {
        currentWindow: true,
        pinned: false
      }
  
      // if current browser does not have pinned tabs, create a new tab which becomes active
      let pinned = await browser.tabs.query({
        currentWindow: true,
        pinned: true
      })
      if (pinned.length === 0) {
        browser.tabs.create({})
        query.active = false
      }
  
      let tabs = await browser.tabs.query(query)
      for (let tab of tabs) {
        browser.tabs.remove(tab.id)
      }
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
}