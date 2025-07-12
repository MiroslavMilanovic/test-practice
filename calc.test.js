const calc = require('./calc');

test('adds two numbers', () => {
  expect(calc.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(calc.sub(5, 2)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calc.mul(4, 3)).toBe(12);
});

test('divides two numbers', () => {
  expect(calc.div(10, 2)).toBe(5);
});

test('returns null on division by zero', () => {
  expect(calc.div(5, 0)).toBeNull();
});