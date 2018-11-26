const assert = require('assert').strict
const { Factory } = require('../../src/creational/factory-method.js')

const a = Factory(1, '123')
const b = Factory(2, '456')
const c = new Factory(1, '123')
const d = new Factory(2, '456')

assert.strictEqual(a.fa(), 'A')
assert.strictEqual(c.fa(), 'A')
assert.strictEqual(b.fb(), 'B')
assert.strictEqual(d.fb(), 'B')

assert.strictEqual(a.member, '123')
assert.strictEqual(c.member, '123')
assert.strictEqual(b.member, '456')
assert.strictEqual(d.member, '456')
