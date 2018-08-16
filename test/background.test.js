const path = require('path');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;
chai.use(sinonChai);

const webExtensionsJSDOM = require('webextensions-jsdom');
const manifestPath = path.resolve(path.join(__dirname, 'src/manifest.json'));

describe('hello world', () => {
    it('just fails', () => {
        expect(true).to.equal(false);
    });
});