
const capitalize = require('./capitalize');

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string if input is empty', () => {
  expect(capitalize('')).toBe('');
});

test('handles already capitalized input', () => {
  expect(capitalize('World')).toBe('World');
});
