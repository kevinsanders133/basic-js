import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(inputString) {
  const arr = String(inputString).split('-');
  if (arr.length == 6) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].length == 2) {
              const t1 = arr[i][0];
              const t2 = arr[i][1];
              if (!((t1 >= '0' && t1 <= '9' || t1 >= 'A' && t1 <= 'F') &&
                    (t2 >= '0' && t2 <= '9' || t2 >= 'A' && t2 <= 'F'))) {return false}
          } else {
              return false;
          }
      }
  } else {
      return false;
  }
  return true;
}
