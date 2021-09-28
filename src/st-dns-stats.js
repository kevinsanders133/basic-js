import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const stats = {};
  for (let i = 0; i < domains.length; i++) {
      let names = domains[i].split('.');
      names.reverse();
      let domain = '';
      for (let j = 0; j < names.length; j++) {
          domain += `.${names[j]}`;
          if (stats[domain]) stats[domain]++;
          else stats[domain] = 1;
      }
  }
  return stats;
}
