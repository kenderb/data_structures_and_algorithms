import {validMountainArray} from './index';
describe('Describe validMountainArray function', () => {
  
  it('Should be a function', () => {
    expect(typeof validMountainArray).toBe('function');
  });
  
  it('Should return the right result, Input = [2,1], result = false', () => {
    const input = [2,1];
    const result = false;
    expect(validMountainArray(input)).toBe(result);
  });
  
  it('Should return the right result, Input = [3,5,5], result = false', () => {
    const input = [3,5,5];
    const result = false;
    expect(validMountainArray(input)).toBe(result);
  });
  
  it('Should return the right result, Input = [0,3,2,1], result = true', () => {
    const input = [0,3,2,1];
    const result = true;
    expect(validMountainArray(input)).toBe(result);
  });
  
  it('Should return the right result, Input = [0, 2, 3, 3, 5, 2, 1, 0], result = false', () => {
    const input = [0, 2, 3, 3, 5, 2, 1, 0];
    const result = false;
    expect(validMountainArray(input)).toBe(result);
  });
  
  
});