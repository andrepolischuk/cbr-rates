import test from 'ava';
import cbrRates from './index';

test('return last rates', async t => {
  const { usd } = await cbrRates();
  t.is(typeof usd.par, 'number');
  t.is(typeof usd.value, 'number');
});

test('return rates for specified date', async t => {
  const date = new Date();
  date.setYear(date.getFullYear() - 1);
  const { usd } = await cbrRates(date);
  t.is(typeof usd.par, 'number');
  t.is(typeof usd.value, 'number');
});
