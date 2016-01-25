module.exports = function (input) {
  var seconds = Math.floor(+input)
  if (isNaN(seconds) || input === '' || input === null) return null

  var _seconds = seconds % 60
  var _minutes = Math.floor(seconds / 60) % 60
  var _hours = Math.floor(seconds / 3600)

  _seconds = _seconds < 10 ? '0' + _seconds : _seconds

  _minutes = _hours > 0 && _minutes < 10 ? '0' + _minutes : _minutes

  _hours = _hours ? _hours + ':' : ''

  return _hours + _minutes + ':' + _seconds
}
