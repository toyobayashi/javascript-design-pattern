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

function simpleFactory1 (type, arg) {
  switch (type) {
    case 1: return new A(arg)
    case 2: return new B(arg)
    default: return {}
  }
}

function simpleFactory2 (type, arg) {
  const o = {}
  o.member = arg
  switch (type) {
    case 1:
      o.fa = function () { return 'A' }
      return o
    case 2:
      o.fb = function () { return 'B' }
      return o
    default: return {}
  }
}

module.exports = { simpleFactory1, simpleFactory2 }
