# cbr-rates [![Build Status][travis-image]][travis-url]

> Get currency rates from Central Bank of Russia

[cbr-rates-cli][cbr-rates-cli] - CLI for this module

## Install

```sh
npm install --save cbr-rates
```

## Usage

```js
var cbrRates = require('cbr-rates');

cbrRates(function(err, rates) {
  rates.gbp; // {par: ..., value: ...}
  rates.usd; // {par: ..., value: ...}
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

[cbr-rates-cli]: https://github.com/andrepolischuk/cbr-rates-cli
