const { validateEyes, validateMount, validateNose, countSmileys } = require('./count-smileys');

describe('3.Count the smiley faces! test case', () => {
  describe(`Eyes can be marked as ':' or ';'`, () => {
    test.each([":", ";"])(`Eyes is '%s' should be valid`, ([eyes]) => {
      const assert = true

      const result = validateEyes(eyes);

      expect(result).toBe(assert);
    })

    test(`Eyes is '$' should be invalid`, () => {
      const input = "$"
      const assert = false

      const result = validateEyes(input);

      expect(result).toBe(assert);
    });
  });

  describe(`Nose can be marked as '-' or '~' but it does not have to.`, () => {
    test.each(["-", "~"])(`Nose is '%s' should be valid`, ([nose]) => {
      const assert = true

      const result = validateNose(nose);

      expect(result).toBe(assert);
    })

    test(`Does not have a nose should be valid`, () => {
      const input = ""
      const assert = true

      const result = validateNose(input);

      expect(result).toBe(assert);
    });

    test(`Nose is '>' should be invalid`, () => {
      const input = ">"
      const assert = false

      const result = validateNose(input);

      expect(result).toBe(assert);
    });

  });

  describe(`Every smiling face must have a smiling mouth that should be marked with either ')' or 'D'`, () => {
    test.each([")", "D"])(`Mount is '%s' should be valid`, ([mount]) => {
      const assert = true

      const result = validateMount(mount);

      expect(result).toBe(assert);
    })

    test(`Mount is '(' should be invalid`, () => {
      const input = "("
      const assert = false

      const result = validateMount(input);

      expect(result).toBe(assert);
    });
  });

  test.each([
    { input: [':)', ';(', ';}', ':-D'], assert: 2 },
    { input: [';D', ':-(', ':-)', ';~)'], assert: 3 },
    { input: [';]', ':[', ';*', ':$', ';-D'], assert: 1 },
    { input: [], assert: 0 }
  ])(`countSmileys($input) should return $assert`, ({ input, assert }) => {

    const result = countSmileys(input);

    expect(result).toBe(assert);
  })
});
