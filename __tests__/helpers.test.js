const helpers = require('../helpers');

test('reverseString', () =>
{
  const tests = [
    {value: '', expectedValue: ''}
    , {value: 'hello', expectedValue: 'olleh'}
    , {value: 'hello world', expectedValue: 'dlrow olleh'},
  ];

  tests.forEach(test =>
  {
    expect(helpers.reverseString(test.value)).toBe(test.expectedValue);
  });
});
