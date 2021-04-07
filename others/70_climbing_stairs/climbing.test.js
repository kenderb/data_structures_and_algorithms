import climbStairs from './climbing';

describe('contains Duplicate function', () => {
  it('should be a function', () => {
    expect(typeof climbStairs).toBe('function');
  });
  it('should return 2 given the number 2', () => {
    expect(climbStairs(2)).toBe(2);
  });
  it('should return 3 given the number 3', () => {
    expect(climbStairs(3)).toBe(3);
  });
  it('should return 5 given the number 4', () => {
    expect(climbStairs(4)).toBe(5);
  });
});