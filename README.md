# secstamp [![Build Status](https://travis-ci.org/sidd/secstamp.svg?branch=master)](https://travis-ci.org/sidd/secstamp) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

convert seconds to a timestamp string (h*:mm:ss)

## installation

```
npm install secstamp --save
```

## usage

```js
var secstamp = require('secstamp')

secstamp(42) // ➜ '0:42'
secstamp(63) // ➜ '1:03'
secstamp('4357') // ➜ '1:12:37'

```

See [tests](test/index.js) for more examples.

## license

MIT
