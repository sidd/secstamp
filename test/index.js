var test = require('tape')
var secstamp = require('../')

test('generates seconds properly', function (t) {
  t.equals(secstamp(42), '0:42')
  t.end()
})

test('accepts string as input', function (t) {
  t.equals(secstamp(42), secstamp('42'))
  t.end()
})

test('pads periods with 0s if needed', function (t) {
  t.equals(secstamp(34), '0:34', "doesn't pad seconds greater than 10")
  t.equals(secstamp(0), '0:00', 'pads seconds less than 10')
  t.equals(secstamp(1), '0:01', 'pads seconds less than 10')
  t.equals(secstamp(63), '1:03', "doesn't pad minutes when no hours present")
  t.equals(secstamp(4357), '1:12:37', "doesn't pad minutes when hours present and minutes >= 10")
  t.equals(secstamp(3657), '1:00:57', "pads minutes when hours present and minutes < 10")
  t.equals(secstamp(31337), '8:42:17', "doesn't pad minutes when minutes > 10")
  t.end()
})

test("returns null if input isn't a number", function (t) {
  t.equals(secstamp('potato'), null)
  t.equals(secstamp(''), null)
  t.equals(secstamp(null), null)
  t.equals(secstamp(), null)
  t.end()
})
