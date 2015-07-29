import format from 'dateformat';
import isDate from 'is-date-object';
import {get} from 'superagent';
import xmlParser from 'xml-parser';
const url = 'http://www.cbr.ru/scripts/XML_daily.asp';

export default (date, fn) => {
  fn = typeof date === 'function' ? date : fn;
  const request = get(url);
  if (isDate(date)) request.query({date_req: format(date, 'dd/mm/yyyy')});
  if (typeof window !== 'undefined') request.withCredentials();

  request.end((err, {text}) => {
    if (err) return fn(err);
    const obj = xmlParser(text);
    const rates = {};

    obj.root.children.forEach(function({children}) {
      rates[children[1].content.toLowerCase()] = {
        par: parseInt(children[2].content),
        value: parseFloat(children[4].content.replace(/,/g, '.'))
      };
    });

    fn(null, rates);
  });
};
