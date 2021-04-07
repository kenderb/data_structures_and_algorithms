import missingNumber from './missing';

describe('contains Duplicate function', () => {
  it('should be a function', () => {
    expect(typeof missingNumber).toBe('function');
  });
  it('should return 2 giving this array [3,0,1]', () => {
    expect(missingNumber([3,0,1])).toBe(2);
  });
  it('should return 8 giving this array [9,6,4,2,3,5,7,0,1]', () => {
    expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
  });
  it('should return 1 giving this array [0]', () => {
    expect(missingNumber([0])).toBe(1);
  });
  it('should return 0 giving this array [1]', () => {
    expect(missingNumber([1])).toBe(0);
  });
  it('should return 18 giving this array [[45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]]', () => {
    expect(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14])).toBe(18);
  });
  it('should return true giving this array [1,0]', () => {
    expect(missingNumber([1,0])).toBe(2);
  });
});