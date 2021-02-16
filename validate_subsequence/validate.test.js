import validate from './validate';

describe('contains Duplicate function', () => {
  it('should be a function', () => {
    expect(typeof validate).toBe('function');
  });
  it('should return TRUE giving this array [1, 2, 3, 4] with sequence = [1, 3, 4]', () => {
    expect(validate([1, 2, 3, 4], [1, 3, 4])).toBe(true);
  });
  it('should return TRUE giving this array [1] with sequence = [1]', () => {
    expect(validate([1], [1])).toBe(true);
  });
  it('should return FALSE giving this array [2] with sequence = [1]', () => {
    expect(validate([2], [1])).toBe(false);
  });
  it('should return FALSE giving this array [2, 1, 4, 3] with sequence = [1, 3, 4]', () => {
    expect(validate([2, 1, 4, 3], [1, 3, 4])).toBe(false);
  });
  it('should return TRUE giving this array [1, 2, 3, 4] with sequence = [2, 4]', () => {
    expect(validate([1, 2, 3, 4], [2, 4])).toBe(true);
  });
  it('should return FALSE giving this array [5, 1, 22, 25, 6, -1, 8, 10] with sequence = [1, 6, -1, 10]', () => {
    expect(validate([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toBe(true);
  });
  it('should return TRUE giving this array [5, 1, 2, 25, 6, 3, 4, 10, 6] with sequence = [2, 3, 4, 6]', () => {
    expect(validate([5, 1, 2, 25, 6, 3, 4, 10, 6], [2, 3, 4, 6])).toBe(true);
  });
  it('should return FALSE giving this array [5, 1, 2] with sequence = [2, 3, 4, 6]', () => {
    expect(validate([5, 1, 2], [2, 3, 4, 6])).toBe(false);
  });
});