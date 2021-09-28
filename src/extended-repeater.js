import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let repeatTimes = 1;
    if (options.repeatTimes !== null && options.repeatTimes !== undefined) {
        repeatTimes = options.repeatTimes;
    }
    let separator = options.separator !== undefined ? String(options.separator) : '+';
    let addition = options.addition !== undefined ? String(options.addition) : '';
    let additionRepeatTimes = 1;
    if (options.additionRepeatTimes !== null && options.additionRepeatTimes !== undefined) {
        additionRepeatTimes = options.additionRepeatTimes;
    }
    let additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
    let result = '';
    for (let i = 0; i < repeatTimes; i++) {
        result += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
            result += addition;
            if (j != additionRepeatTimes - 1) {
                result += additionSeparator;
            }
        }
        if (i != repeatTimes - 1) {
            result += separator;
        }
    }
    return result;
}
