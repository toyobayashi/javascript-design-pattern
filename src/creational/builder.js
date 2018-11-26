function _A () {
  this.x = 'A'
}
function _B () {
  this.y = 'B'
}
function _C () {
  this.z = 'C'
}

function BuilderClass (arg) {
  this.a = new _A()
  this.b = new _B()
  this.c = new _C()
}

module.exports = { BuilderClass }
