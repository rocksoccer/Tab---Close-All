'use strict'

const closeAllId = 'tab-menu-close-all'
function onCreated () {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`)
  }
}

exports.tabMenuCloseAll = {
  createMenu: () => {
    browser.menus.create({
      id: closeAllId,
      title: browser.i18n.getMessage('closeAllTabs'),
      contexts: ['tab']
    }, onCreated)
  }
}
