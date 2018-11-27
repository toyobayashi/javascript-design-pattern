const assert = require('assert').strict
const { B, Proxy } = require('../../src/structural/proxy.js')

const b1 = new B(null)
const b2 = new B('B')

assert.strictEqual(new Proxy(b1).method(), 'A')
assert.strictEqual(new Proxy(b2).method(), 'B')
