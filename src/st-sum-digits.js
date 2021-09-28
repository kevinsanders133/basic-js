import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  while (n > 9) {
      let t = n;
      let sum = 0;
      while (t != 0) {
          sum += t % 10;
          t = Math.floor(t / 10);
      }
      n = sum;
  }
  return n;
}
