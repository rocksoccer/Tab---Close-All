// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus

const { listeners } = require('./listeners')

exports.menus = {
  create: jest.fn((props = {}, cb) => {
    if (cb !== undefined) {
      return cb(props)
    }
    return Promise.resolve(props)
  }),
  onClicked: {
    addListener: jest.fn((listener) => {
      listeners.recordListener('menus', 'onClicked', listener);
    })
  }
}
