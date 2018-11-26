const Singleton = (function () {
  let _instance = null
  const _private = 'private'

  function Single () {
    this.member = 'single'
  }

  Single.prototype.method = function () {
    return _private
  }

  return function () {
    if (_instance) return _instance
    _instance = new Single()
    return _instance
  }
})()

module.exports = { Singleton }
