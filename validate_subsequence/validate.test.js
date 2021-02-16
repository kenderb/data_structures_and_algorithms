import validate from './validate';

describe('contains Duplicate function', () => {
  it('should be a function', () => {
    expect(typeof validate).toBe('function');
  });
  it('should return true giving this array [5, 1, 22, 25, 6, -1, 8, 10] with sequence = [1, 6, -1, 10]', () => {
    expect(validate([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toBe(true);
  });
  it('should return true giving this array [5, 1, 2, 25, 6, 3, 4, 10, 6] with sequence = [2, 3, 4, 6]', () => {
    expect(validate([5, 1, 2, 25, 6, 3, 4, 10, 6], [2, 3, 4, 6])).toBe(true);
  });
  it('should return true giving this array [5, 1, 2] with sequence = [2, 3, 4, 6]', () => {
    expect(validate([5, 1, 2], [2, 3, 4, 6])).toBe(false);
  });
});