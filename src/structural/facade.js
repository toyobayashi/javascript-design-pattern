function _x () {
  return 'x'
}

function _y () {
  return 'y'
}

function _z () {
  return 'z'
}

function facade (type) {
  switch (type) {
    case 1: return _x()
    case 2: return _y()
    default: return _z()
  }
}

module.exports = { facade }
