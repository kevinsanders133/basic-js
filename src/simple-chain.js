import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength: function() {
      return this.chain.length;
  },
  addLink: function (value) {
      this.chain.push(`( ${String(value)} )`);
      return this;
  },
  removeLink: function (position) {
      if (typeof position != 'number' || position % 1 != 0 || position - 1 < 0 || position - 1 >= this.chain.length) {
        [this.chain] = [[]];
        throw new Error('You can\'t remove incorrect link!');
      } else {
        this.chain.splice(position - 1, 1);
        return this;
      }
  },
  reverseChain: function () {
      this.chain.reverse();
      return this;
  },
  finishChain: function() {
      let temp = this.chain;
      [this.chain] = [[]];
      return temp.join('~~');
  }
}