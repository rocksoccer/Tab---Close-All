'use strict'

require('./test-helper')

const { tabMenu } = require('../src/tab_menu')
const { tabUtils } = require('../src/tab_utils')

describe('tab menu close all', () => {
  it('creates tab context menu', () => {
    tabMenu.createMenu()
    expect(browser.menus.create).toHaveBeenCalledWith(
      {
        id: 'tab-menu-close-all',
        title: expect.any(String),
        contexts: ['tab']
      },
      expect.any(Function)
    )
    jest.spyOn(tabUtils, 'closeAllTabs')
    browser.listeners.trigger('menus', 'onClicked', [{ menuItemId: 'tab-menu-close-all' }])
    expect(tabUtils.closeAllTabs).toHaveBeenCalled()
  })

  it('close all tabs when the close all tab menu is clicked', () => {

  })

  it('does not close all tabs when other items are clicked in tab menu', ()=>{

  });
  

  describe('when there is error when creating menu', () => {
    beforeEach(() => {
      browser.runtime.lastError = 'test error'
    })

    afterEach(() => {
      delete browser.runtime.lastError
    })

    it('logs the error to console', () => {
      jest.spyOn(global.console, 'log')
      tabMenu.createMenu()
      expect(global.console.log).toHaveBeenCalledWith(expect.any(String))
    })
  })
})
