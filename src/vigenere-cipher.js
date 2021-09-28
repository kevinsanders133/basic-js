import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (bool = true) {
      this.method = bool;
      this.alfabet = {
          A:0, B:1, C:2, D:3, 
          E:4, F:5, G:6, H:7, 
          I:8, J:9, K:10, L:11, 
          M:12, N:13, O:14, P:15, 
          Q:16, R:17, S:18, T:19, 
          U:20, V:21, W:22, X:23, 
          Y:24, Z:25
      };
  }
  encrypt (message, key) {
      if (!message || !key) {
          throw new Error('Incorrect arguments!');
      }
      const table = {};
      let cypher = '';
      let numberOfLetters = 0;
      message = message.toUpperCase();
      key = key.toUpperCase();
      for (let i = 0; i < message.length; i++) {
          let index = message[i].charCodeAt(0);
          if (index <= 90 && index >= 65) numberOfLetters++;
      }
      for (let i = 0; i < key.length; i++) {
          let index = key[i].charCodeAt(0);
          if (index <= 90 && index >= 65) {
              table[key[i]] = [];
              for (let j = 0; j < 26; j++) {
                  if (index > 90) index = 65;
                  table[key[i]].push(String.fromCharCode(index));
                  index++;
              }
          }
      }
      const count = Math.floor(numberOfLetters / key.length);
      let finalKey = key.repeat(count);
      const diff = numberOfLetters - finalKey.length;
      for (let i = 0; i < diff; i++) {
          finalKey += key[i];
      }
      for (let i = 0, j = 0; i < message.length; i++) {
          if (message[i].charCodeAt(0) > 90 || message[i].charCodeAt(0) < 65) {
              cypher += message[i];
          } else {
              cypher += table[finalKey[j]][this.alfabet[message[i]]];
              j++;
          }
      }
      return this.method == true ? cypher : cypher.split('').reverse().join('');
  }
  decrypt (encryptedMessage, key) {
      if (!encryptedMessage || !key) {
          throw new Error('Incorrect arguments!');
      }
      const table = {};
      let string = '';
      let numberOfLetters = 0;
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      for (let i = 0; i < encryptedMessage.length; i++) {
          let index = encryptedMessage[i].charCodeAt(0);
          if (index <= 90 && index >= 65) numberOfLetters++;
      }
      for (let i = 0; i < key.length; i++) {
          let index = key[i].charCodeAt(0);
          if (index <= 90 && index >= 65) {
              table[key[i]] = [];
              for (let j = 0; j < 26; j++) {
                  if (index > 90) index = 65;
                  table[key[i]].push(String.fromCharCode(index));
                  index++;
              }
          }
      }
      const count = Math.floor(numberOfLetters / key.length);
      let finalKey = key.repeat(count);
      const diff = numberOfLetters - finalKey.length;
      for (let i = 0; i < diff; i++) {
          finalKey += key[i];
      }
      for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
          if (encryptedMessage[i].charCodeAt(0) > 90 || encryptedMessage[i].charCodeAt(0) < 65) {
              string += encryptedMessage[i];
          } else {
              string += Object.keys(this.alfabet).find(key => this.alfabet[key] === table[finalKey[j]].indexOf(encryptedMessage[i]));
              j++;
          }
      }
      return this.method == true ? string : string.split('').reverse().join('');
  }
}
