# cbr-rates [![Build Status][travis-image]][travis-url]

  > Get currency rates from Central Bank of Russia

## Install

```sh
npm install --save cbr-rates
```

## Usage

```js
var cbrRates = require('cbr-rates');

cbrRates(function(err, rates) {
  rates.usd; // {par: ..., value: ...}
  rates.gbp; // {par: ..., value: ...}
});
```

## API

### cbrRates(fn)

  Get object with last rates

### cbrRates(date, fn)

  Get object with rates for specified `date`

```js
cbrRates(new Date(), fn);
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/cbr-rates
[travis-image]: https://travis-ci.org/andrepolischuk/cbr-rates.svg?branch=master
