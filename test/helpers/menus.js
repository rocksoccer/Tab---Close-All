// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus

exports.menus = {
  create: jest.fn((props = {}, cb) => {
    if (cb !== undefined) {
      return cb(props)
    }
    return Promise.resolve(props)
  })
}
