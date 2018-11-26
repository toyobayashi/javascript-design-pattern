const assert = require('assert').strict
const { PrototypePatternClass } = require('../../src/creational/prototype.js')

const o = new PrototypePatternClass('123')
assert.strictEqual(o.pattern, 'prototype')
assert.strictEqual(o.member, '123')
assert.strictEqual(o.method(), 'SuperClass')
