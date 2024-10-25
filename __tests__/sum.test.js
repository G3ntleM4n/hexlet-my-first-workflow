import sum from '../src/sum.js';

test('sum test', () => {
  expect(sum(0, 0)).toBe(0);
  expect(sum(10000000, 50000000)).toBe(60000000);
  expect(sum(-555, 666)).toBe(111);
});