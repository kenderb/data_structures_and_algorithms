import {moveZeros} from './index';
describe('Describe moveZeros function', () => {
  it('Should be a function', () => {
    expect(typeof moveZeros).toBe('function');
  })
  it('Should return the right array, input: [0, 1, 3, 5, 0], output: [1, 3, 5, 0, 0]', () => {
    const input = [0, 1, 3, 5, 0];
    const result = [1, 3, 5, 0, 0];
    expect(moveZeros(input)).toBe(result);
  })
  it('Should return the right array, input: [0], output: [0]', () => {
    const input = [0];
    const result = [0];
    expect(moveZeros(input)).toBe(result);
  })
  it('Should return the right array, input: [], output: []', () => {
    const input = [];
    const result = [];
    expect(moveZeros(input)).toStrictEqual(result);
  })
});