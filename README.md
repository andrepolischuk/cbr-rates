# cbr-rates [![Build Status][travis-image]][travis-url]

> Get currency rates from Central Bank of Russia

[cbr-rates-cli][cbr-rates-cli] - CLI for this module

## Install

```sh
npm install --save cbr-rates
```

## Usage

```js
import cbrRates from 'cbr-rates';

cbrRates().then(rates => {
  console.log(rates.usd); // {par: ..., value: ...}
});

cbrRates(new Date()).then(rates => {
  console.log(rates.usd); // {par: ..., value: ...}
});
```

## API

### cbrRates([date])

Return last currency rates or rates for specified `date`

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/cbr-rates
[travis-image]: https://travis-ci.org/andrepolischuk/cbr-rates.svg?branch=master

[cbr-rates-cli]: https://github.com/andrepolischuk/cbr-rates-cli
