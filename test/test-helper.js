'use strict'

require('./helpers/tabs')
const { listeners } = require('./helpers/listeners')

browser['menus'] = require('./helpers/menus').menus
browser['listeners'] = listeners

beforeEach(() => {
  listeners.clear()
})

afterEach(() => {
  listeners.clear()
})
