const path = require('path')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const expect = chai.expect
chai.use(sinonChai)

const webExtensionsJSDOM = require('webextensions-jsdom')
const manifestPath = path.resolve(path.join(__dirname, '../src/manifest.json'))
let webExtension

beforeEach(async () => {
  webExtension = await webExtensionsJSDOM.fromManifest(manifestPath, {wiring: true})
})

afterEach(async () => {
  await webExtension.destroy()
})

it('adds the context menu entry', () => {
  expect(webExtension.background.browser.menus.create).called
})

it('adds the menu listener', () => {
  expect(webExtension.background.browser.menus.onClicked.addListener).called
})
