const helpers = require('../helpers/helpers')

test('reverseString', () =>
{
  const tests = [
    {value: '', expectedValue: ''},
    {value: 'hello', expectedValue: 'olleh'},
    {value: 'hello world', expectedValue: 'dlrow olleh'}]

  tests.forEach(test =>
  {
    expect(helpers.reverseString(test.value)).toBe(test.expectedValue)
  })
})

test('isDefined', () =>
{
  const tests = [
    {value: undefined, expectedValue: false},
    {value: null, expectedValue: false},
    {value: false, expectedValue: false},
    {value: true, expectedValue: true},
    {value: '', expectedValue: true},
    {value: {}, expectedValue: true},
    {value: [], expectedValue: true}]

  tests.forEach(test =>
  {
    expect(helpers.isDefined(test.value)).toBe(test.expectedValue)
  })
})
