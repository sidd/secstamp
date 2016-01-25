# secstamp

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
