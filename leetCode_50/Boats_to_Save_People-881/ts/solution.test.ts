import {numRescueBoats} from './index';
describe('Describe moveZeros function', () => {
  it('Should be a function', () => {
    expect(typeof numRescueBoats).toBe('function');
  });
  
  it('Should return the right result, Input: people = [1,2], limit = 3, result: 1', () => {
    const people = [1,2];
    const limit = 3;
    const result = 1;
    expect(numRescueBoats(people, limit)).toBe(result);
  });
  
  it('Should return the right result, Input: people = [3,2,2,1], limit = 3, result: 3', () => {
    const people = [3,2,2,1];
    const limit = 3;
    const result = 3;
    expect(numRescueBoats(people, limit)).toBe(result);
  });
  
  it('Should return the right result, Input: people = [3,5,3,4], limit = 5 result: 4', () => {
    const people = [3,5,3,4];
    const limit = 5;
    const result = 4;
    expect(numRescueBoats(people, limit)).toBe(result);
  });
  
  it('Should return the right result, Input: people = [44,10,29,12,49,41,23,5,17,26], limit = 50, result: 6', () => {
    const people = [44,10,29,12,49,41,23,5,17,26];
    const limit = 50;
    const result = 6;
    expect(numRescueBoats(people, limit)).toBe(result);
  });
  
  
});