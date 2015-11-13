import test from 'ava';
import cbrRates from './index';

test('should return last rates', async t => {
  const {usd} = await cbrRates();
  t.true(typeof usd.par === 'number');
  t.true(typeof usd.value === 'number');
});

test('should return rates for specified date', async t => {
  const date = new Date();
  date.setYear(date.getFullYear() - 1);
  const {usd} = await cbrRates(date);
  t.true(typeof usd.par === 'number');
  t.true(typeof usd.value === 'number');
});
