import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
      temp[i] = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
      switch(temp[i]) {
          case '--discard-next':
              if (temp[i + 1]) {
                  delete temp[i + 1];
              }
              break;
          case '--discard-prev':
              if (temp[i - 1]) {
                  delete temp[i - 1];
              }
              break;
          case '--double-next':
              if (temp[i + 1]) {
                  temp[i] = temp[i + 1];
              }
              break;
          case '--double-prev':
              if (temp[i - 1]) {
                temp[i] = temp[i - 1];
              }
      }
  }
  let cases = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];
  temp = temp.filter(e => e !== undefined && !cases.includes(e));
  return temp;
}
