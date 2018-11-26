const assert = require('assert').strict
const { Singleton } = require('../../src/creational/singleton.js')

const o = Singleton()
assert.strictEqual(o.member, 'single')
assert.strictEqual(o.method(), 'private')
const x = Singleton()
assert.strictEqual(x.member, 'single')
assert.strictEqual(x.method(), 'private')
assert.strictEqual(x, o)

o.member = 'changed'
assert.strictEqual(x.member, 'changed')
assert.strictEqual(x, o)
