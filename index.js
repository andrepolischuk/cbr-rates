import format from 'dateformat';
import isDate from 'is-date-object';
import Promise from 'pinkie-promise';
import sortKeys from 'sort-keys';
import { get } from 'superagent';
import xmlParser from 'xml-parser';

const cbrApiUrl = 'http://www.cbr.ru/scripts/XML_daily.asp';

export default function cbrRates(date) {
  const request = get(cbrApiUrl);

  if (isDate(date)) request.query({ date_req: format(date, 'dd/mm/yyyy') });
  if (typeof window !== 'undefined') request.withCredentials();

  return new Promise((resolve, reject) => {
    request.end((err, { text }) => {
      if (err) reject(err);

      const rates = {};
      const obj = xmlParser(text);

      obj.root.children.forEach(({ children }) => {
        rates[children[1].content.toLowerCase()] = {
          par: parseInt(children[2].content, 10),
          value: parseFloat(children[4].content.replace(/,/g, '.'))
        };
      });

      resolve(sortKeys(rates));
    });
  });
}
