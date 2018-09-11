'use strict'

const { tabUtils } = require('./tab_utils')
const closeAllId = 'tab-menu-close-all'
function onCreated () {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`)
  }
}

exports.tabMenu = {
  createMenu: () => {
    browser.menus.create({
      id: closeAllId,
      title: browser.i18n.getMessage('closeAllTabs'),
      contexts: ['tab']
    }, onCreated)

    browser.menus.onClicked.addListener((info) => {
      if (info.menuItemId === closeAllId) {
        tabUtils.closeAllTabs()
      }
    })
  }
}
