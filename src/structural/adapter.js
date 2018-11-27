// error-first callback async funtion -> Promise/async-await adapter
function adapter (errorFirstCallbackAsyncFunction) {
  return function () {
    var args = []
    var self = this
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    return new Promise(function (resolve, reject) {
      args.push(function (err, data) {
        if (err) reject(err)
        else resolve(data)
      })
      errorFirstCallbackAsyncFunction.apply(self, args)
    })
  }
}

function Executor (obj) {
  this.obj = obj
}
Executor.prototype.exec = function () {
  return this.obj.exec()
}

function A () {}
A.prototype.execute = function () {
  return 'A'
}

function Adapter (a) {
  this._a = a
}
Adapter.prototype.exec = function () {
  return this._a.execute()
}

module.exports = { adapter, Adapter, Executor, A }
