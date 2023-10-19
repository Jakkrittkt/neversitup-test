const { validate, findTheOddInt } = require('./find-the-odd-int')


describe('2.Find the odd init test case', () => {
  test('Input should be array of integer', () => {
    const input = [1, 2, 3]
    const assert = true

    const result = validate(input);

    expect(result).toBe(assert);
  });

  test.each([
    { input: [7], assert: 7, occurs: 1 },
    { input: [0], assert: 0, occurs: 1 },
    { input: [1, 1, 2], assert: 2, occurs: 1 },
    { input: [0, 1, 0, 1, 0], assert: 0, occurs: 3 },
    { input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], assert: 4, occurs: 3 }
  ])('$input should return $assert, because it occurs $occurs time (which is odd).', ({ input, assert, occurs }) => {

    const result = findTheOddInt(input)

    expect(result).toEqual(assert);
  })

});
