function A () {}
A.prototype.method = function () {
  return 'A'
}

function B (arg) {
  this.member = arg
}

function Proxy (b) {
  this._b = b
}
Proxy.prototype.method = function () {
  return this._b.member || new A().method()
}

module.exports = { A, B, Proxy }
