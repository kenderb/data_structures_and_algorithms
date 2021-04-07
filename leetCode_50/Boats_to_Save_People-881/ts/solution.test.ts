import {numRescueBoats} from './index';
describe('Describe moveZeros function', () => {
  it('Should be a function', () => {
    expect(typeof numRescueBoats).toBe('function');
  });
  
  it('Should return the right result, Input: people = [1,2], limit = 3, Output: 1', () => {
    const people = [1,2];
    const limit = 3;
    const result = 1;
    expect(numRescueBoats(people, limit)).toBe(result);
  });
  
  it('Should return the right result, Input: people = [3,2,2,1], limit = 3, Output: 3', () => {
    const people = [3,2,2,1];
    const limit = 3;
    const result = 3;
    expect(numRescueBoats(people, limit)).toBe(result);
  });
  
  it('Should return the right result, Input: people = [3,5,3,4], limit = 5 Output: 4', () => {
    const people = [3,5,3,4];
    const limit = 5;
    const result = 4;
    expect(numRescueBoats(people, limit)).toBe(result);
  });
  
  
});