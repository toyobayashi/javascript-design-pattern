const assert = require('assert').strict
const { facade } = require('../../src/structural/facade.js')

assert.strictEqual(facade(1), 'x')
assert.strictEqual(facade(2), 'y')
assert.strictEqual(facade(3), 'z')
