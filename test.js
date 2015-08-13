import cbrRates from './index';
import assert from 'assert';

describe('cbrRates(fn)', () => {
  it('should return last rates', (done) => {
    cbrRates((err, rates) => {
      assert(!err, err);
      assert(rates && typeof rates === 'object');
      assert(rates.usd && typeof rates.usd === 'object');
      assert(typeof rates.usd.par === 'number');
      assert(typeof rates.usd.value === 'number');
      done();
    });
  });
});

describe('cbrRates(date, fn)', () => {
  it('should return rates for specified date', (done) => {
    const date = new Date();
    date.setYear(date.getFullYear() - 1);

    cbrRates(date, (err, rates) => {
      assert(!err, err);
      assert(rates && typeof rates === 'object');
      assert(rates.usd && typeof rates.usd === 'object');
      assert(typeof rates.usd.par === 'number');
      assert(typeof rates.usd.value === 'number');
      done();
    });
  });
});
