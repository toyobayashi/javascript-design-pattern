const assert = require('assert').strict
const { adapter, Adapter, Executor, A } = require('../../src/structural/adapter.js')

const executor = new Executor(new Adapter(new A()))
assert.strictEqual(executor.exec(), 'A');

(async function () {
  const promiseReadFile = adapter(require('fs').readFile)
  const data = await promiseReadFile(require('path').join(__dirname, './facade.js'), 'utf8')
  assert.strictEqual(Object.prototype.toString.call(data), '[object String]')
})()
