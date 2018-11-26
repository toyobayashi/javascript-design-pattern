function abstractFactory (SubClass, type) {
  if (typeof abstractFactory[type] !== 'function') throw new Error('Class not registered.')
  function __ () {}
  __.prototype = new abstractFactory[type]()
  SubClass.constructor = SubClass
  SubClass.prototype = new __()
}

function _A () {
  this.type = 1
}
_A.prototype.fa = function () {
  throw new Error('ABSTRACT CLASS.')
}

function _B () {
  this.type = 2
}
_B.prototype.fb = function () {
  throw new Error('ABSTRACT CLASS.')
}

abstractFactory[1] = _A
abstractFactory[2] = _B

module.exports = { abstractFactory }
