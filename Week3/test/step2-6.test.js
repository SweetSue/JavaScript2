/* eslint-disable no-return-assign, dot-notation */
const { printArray2d, printArray3d } = require('../homework/step2-6');

const arr2d = [[1, 2], [3, 4], [5, 6]];
const expected2d = [1, 2, 3, 4, 5, 6].join('');

const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const expected3d = [1, 2, 3, 4, 5, 6, 7, 8].join('');

describe('step2-6', () => {
  let outputData;
  const storeLog = (...inputs) => (outputData += inputs.join(' '));

  test('printArray2d -> 1, 2, 3, 4, 5, 6', () => {
    outputData = '';
    console['log'] = jest.fn(storeLog);
    printArray2d(arr2d);
    expect(outputData).toBe(expected2d);
  });

  test('printArray3d -> 1, 2, 3, 4, 5, 6, 7, 8', () => {
    outputData = '';
    console['log'] = jest.fn(storeLog);
    printArray3d(arr3d);
    expect(outputData).toBe(expected3d);
  });
});
