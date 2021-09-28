import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date instanceof Date && Object.prototype.toString.call(date) === '[object Date]') {
        try {
            date.getTime();
        } catch(e) {
            throw new Error('Invalid date!');
        }
      const month = date.getMonth();
      const year = date.getFullYear();
      let maxDay;
      switch (month) {
          case 1 :
              maxDay = (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
              break;
          case 3 : case 5 : case 8 : case 10 :
              maxDay = 30;
              break;
          default :
          maxDay = 31;
      }
      if (date.getDate() <= maxDay) {
          if (month == 11 || month <= 1) {
              return 'winter';
          } else if (month >= 2 && month <= 4) {
              return 'spring';
          } else if (month >= 5 && month <= 7) {
              return 'summer';
          } else {
              return 'autumn';
          }
      } else {
        throw new Error('Invalid date!');
      }
  } else {
    throw new Error('Invalid date!');
  }
}