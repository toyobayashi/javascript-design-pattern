function A () {
  this.member = 'A'
}
A.prototype.method = function () {
  return this.member
}

function Decorator (a) {
  this.a = a
}
Decorator.prototype.method = function () {
  return this.a.method() + '@Decorator'
}

module.exports = { A, Decorator }
