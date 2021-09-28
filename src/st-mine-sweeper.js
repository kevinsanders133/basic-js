import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
      newMatrix.push([]);
      for (let j = 0; j < matrix[0].length; j++) {
          newMatrix[i].push(0);
      }
  }
  for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[0].length; x++) {
          if (matrix[y][x] == true) {
              newMatrix[y][x] = 1;
          } else {
              if (matrix[y - 1] !== undefined && matrix[y - 1][x] !== undefined) {
                  if (matrix[y - 1][x])
                      newMatrix[y][x]++;
              }
              if (matrix[y - 1] !== undefined && matrix[y - 1][x + 1] !== undefined) {
                  if (matrix[y - 1][x + 1])
                      newMatrix[y][x]++;
              }
              if (matrix[y] !== undefined && matrix[y][x + 1] !== undefined) {
                  if (matrix[y][x + 1])
                      newMatrix[y][x]++;
              }
              if (matrix[y + 1] !== undefined && matrix[y + 1][x + 1] !== undefined) {
                  if (matrix[y + 1][x + 1])
                      newMatrix[y][x]++;
              }
              if (matrix[y + 1] !== undefined && matrix[y + 1][x] !== undefined) {
                  if (matrix[y + 1][x])
                      newMatrix[y][x]++;
              }
              if (matrix[y + 1] !== undefined && matrix[y + 1][x - 1] !== undefined) {
                  if (matrix[y + 1][x - 1])
                      newMatrix[y][x]++;
              }
              if (matrix[y] !== undefined && matrix[y][x - 1] !== undefined) {
                  if (matrix[y][x - 1]) 
                      newMatrix[y][x]++;
              }
              if (matrix[y - 1] !== undefined && matrix[y - 1][x - 1] !== undefined) {
                  if (matrix[y - 1][x - 1])
                      newMatrix[y][x]++;
              }
          }
      }
  }
  return newMatrix;
}

