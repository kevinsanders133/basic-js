import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth (array, count = 1) {
      let maxDepth = count;
      let start = count;
      for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
              let temp = this.calculateDepth(array[i], count + 1);
              if (temp > maxDepth) {
                  maxDepth = temp;
              }
          }
          count = start;
      }
      return maxDepth;
  }
}
