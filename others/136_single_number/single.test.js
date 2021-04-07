import singleNumber from './single';

describe('contains Duplicate function', () => {
  it('should be a function', () => {
    expect(typeof singleNumber).toBe('function');
  });
  it('should return 1 given the array [2,2,1]', () => {
    expect(singleNumber([2,2,1])).toBe(1);
  });
  it('should return 4 given the array [4,1,2,1,2]', () => {
    expect(singleNumber([4,1,2,1,2])).toBe(4);
  });
  it('should return 1 given the array [1]', () => {
    expect(singleNumber([1])).toBe(1);
  });
});