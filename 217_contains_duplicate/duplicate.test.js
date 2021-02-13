import containsDuplicate from './duplicate';

describe('contains Duplicate function', () => {
  it('should be a function', () => {
    expect(typeof containsDuplicate).toBe('function');
  });
  it('should return true giving this array [1,2,3,1]', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true);
  });
  it('should return true giving this array [1,2,3,4]', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false);
  });
  it('should return true giving this array [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
  });
  
});