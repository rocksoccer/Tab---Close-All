'use strict'

const { when } = require('jest-when')
require('./test-helper')

const { tabUtils } = require('../src/tab_utils')

describe('tabUtils', () => {
  const tab = { id: 'the_tab_id' }

  describe('when there are pinned tabs', () => {
    it('closes all tabs except the pinned tabs', async () => {
      when(browser.tabs.query)
        .calledWith({ currentWindow: true, pinned: true })
        .mockReturnValue(['a_pinned_tab'])
      when(browser.tabs.query)
        .calledWith({ currentWindow: true, pinned: false })
        .mockReturnValue([tab])
      await tabUtils.closeAllTabs()
      expect(browser.tabs.remove).toHaveBeenCalledWith('the_tab_id')
    })
  })

  describe('when there is no pinned tabs', () => {
    it('creates a new tab and closes the other tabs', () => {

    })
  })

  describe('when there is error', () => {
    it('writes the error to console', () => {

    })
  })
})
