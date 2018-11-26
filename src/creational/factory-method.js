function Factory (type, arg) {
  if (!(this instanceof Factory)) return new Factory(type, arg)
  return typeof this[type] === 'function' ? new this[type](arg) : {}
}

function A (arg) {
  this.member = arg
}
A.prototype.fa = function () {
  return 'A'
}

function B (arg) {
  this.member = arg
}
B.prototype.fb = function () {
  return 'B'
}

Factory.prototype[1] = A
Factory.prototype[2] = B

module.exports = { Factory }
