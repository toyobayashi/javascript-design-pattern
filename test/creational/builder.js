const assert = require('assert').strict
const { BuilderClass } = require('../../src/creational/builder.js')

const o = new BuilderClass()
assert.strictEqual(o.a.x, 'A')
assert.strictEqual(o.b.y, 'B')
assert.strictEqual(o.c.z, 'C')
