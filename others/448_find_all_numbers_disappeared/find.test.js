import find from './find';

describe('contains Duplicate function', () => {
  it('should be a function', () => {
    expect(typeof find).toBe('function');
  });
  it('should return 2 giving this array [4,3,2,7,8,2,3,1]', () => {
    expect(find([4,3,2,7,8,2,3,1])).toEqual([5, 6]);
  });
  it('should return 2 giving this array [1,1]', () => {
    expect(find([1,1])).toEqual([2]);
  });
});