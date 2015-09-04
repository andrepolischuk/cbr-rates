import test from 'ava';
import cbrRates from './index';

test('should return last rates', t => {
  t.plan(4);

  cbrRates((err, rates) => {
    t.assert(!err, err);
    t.assert(typeof rates.usd === 'object');
    t.assert(typeof rates.usd.par === 'number');
    t.assert(typeof rates.usd.value === 'number');
  });
});

test('should return rates for specified date', t => {
  t.plan(4);
  const date = new Date();
  date.setYear(date.getFullYear() - 1);

  cbrRates(date, (err, rates) => {
    t.assert(!err, err);
    t.assert(typeof rates.usd === 'object');
    t.assert(typeof rates.usd.par === 'number');
    t.assert(typeof rates.usd.value === 'number');
  });
});
