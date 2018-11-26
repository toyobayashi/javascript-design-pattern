function SuperClass (arg) {
  this.member = arg
}
SuperClass.prototype.method = function () {
  return 'SuperClass'
}

function PrototypePatternClass () {
  SuperClass.apply(this, arguments)
  this.pattern = 'prototype'
}
PrototypePatternClass.prototype = new SuperClass()
PrototypePatternClass.prototype.constructor = PrototypePatternClass

module.exports = { PrototypePatternClass }
