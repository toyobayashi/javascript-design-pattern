const assert = require('assert').strict
const { A, Decorator } = require('../../src/structural/decorator.js')

const a = new A()
const d = new Decorator(a)

assert.strictEqual(d.method(), 'A@Decorator')
