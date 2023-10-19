const { validate, deleteDuplicate, reArrange, permutations } = require('./permutations')


describe('1.Permutations test case', () => {
  test('Input should not empty string', () => {
    const input = "2"
    const assert = true

    const result = validate(input);

    expect(result).toBe(assert);
  });

  test('Remove duplicate value in array', () => {
    const input = ["A", "A", "B","C","B","A"]
    const assert = ["A","B","C"]

    const result = deleteDuplicate(input)

    expect(result).toEqual(assert);
  })

  test("Check factorial when re-arange if the string length is 3 the factorial of 3! should be 3x2x1 = 6 ", () => {
    const input = "AAB"
    const assert = 6

    const result = reArrange(input, 0, input.length)

    expect(result.length).toEqual(assert);
  })


  test.each([
    { input: 'a', assert: ['a']},
    { input: 'ab', assert: ['ab', 'ba'], },
    { input: 'abc', assert: ['abc','acb','bac','bca','cab','cba'], },
    { input: 'aabb', assert: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] },
  ])('Test Permutations With input $input: should return $assert', ({ input, assert }) => {

    const result = permutations(input)

    expect(result.length).toEqual(assert.length)
    result.forEach(value => {
      expect(assert.indexOf(value)).not.toBe(-1)
    })
  })

});
