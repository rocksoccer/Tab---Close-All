'use strict'

require('./test-helper')

describe('tab menu close all', () => {
  const { tabMenuCloseAll } = require('../src/tab_menu_close_all')

  describe('when there is error when creating menu', () => {
    beforeEach(() => {
      browser.runtime.lastError = 'test error'
    })

    afterEach(() => {
      delete browser.runtime.lastError
    })

    it('logs the error to console', () => {
      jest.spyOn(global.console, 'log')
      tabMenuCloseAll.createMenu()
      expect(global.console.log).toHaveBeenCalledWith(expect.any(String))
    })
  })

  it('creates tab context menu', () => {
    tabMenuCloseAll.createMenu()
    expect(browser.menus.create).toHaveBeenCalledWith(
      {
        id: 'tab-menu-close-all',
        title: expect.any(String),
        contexts: ['tab']
      },
      expect.any(Function)
    )
  })
})
