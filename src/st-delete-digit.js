import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = String(n).split('');
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
      let number = '';
      for (let j = 0; j < arr.length; j++) {
          if (j != i) number += arr[j];
      }
      numbers.push(Number(number));
  }
  numbers.sort(function(a, b) { 
      return b - a;
  });
  return numbers[0];
}
