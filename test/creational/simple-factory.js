const assert = require('assert').strict
const { simpleFactory1, simpleFactory2 } = require('../../src/creational/simple-factory.js')

const a = simpleFactory1(1, '123')
const b = simpleFactory1(2, '456')
const c = simpleFactory2(1, '123')
const d = simpleFactory2(2, '456')

assert.strictEqual(a.fa(), 'A')
assert.strictEqual(c.fa(), 'A')
assert.strictEqual(b.fb(), 'B')
assert.strictEqual(d.fb(), 'B')

assert.strictEqual(a.member, '123')
assert.strictEqual(c.member, '123')
assert.strictEqual(b.member, '456')
assert.strictEqual(d.member, '456')
