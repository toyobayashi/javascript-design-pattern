const assert = require('assert').strict
const { abstractFactory } = require('../../src/creational/abstract-factory.js')

function A (arg) {
  this.membera = arg
}

function B (arg) {
  this.memberb = arg
}

abstractFactory(A, 1)
abstractFactory(B, 2)
const a = new A('123')
const b = new B('456')
assert.strictEqual(a.constructor, A)
assert.strictEqual(b.constructor, B)
assert.strictEqual(a.type, 1)
assert.strictEqual(a.membera, '123')
assert.strictEqual(b.type, 2)
assert.strictEqual(b.memberb, '456')
try {
  a.fa()
} catch (err) {
  assert.strictEqual(err.message, 'ABSTRACT CLASS.')
}
try {
  b.fb()
} catch (err) {
  assert.strictEqual(err.message, 'ABSTRACT CLASS.')
}

A.prototype.fa = function () {
  return 'A'
}
B.prototype.fb = function () {
  return 'B'
}

const c = new A('123')
const d = new B('456')

assert.strictEqual(c.constructor, A)
assert.strictEqual(d.constructor, B)
assert.strictEqual(c.fa(), 'A')
assert.strictEqual(c.type, 1)
assert.strictEqual(c.membera, '123')
assert.strictEqual(d.fb(), 'B')
assert.strictEqual(d.type, 2)
assert.strictEqual(d.memberb, '456')
