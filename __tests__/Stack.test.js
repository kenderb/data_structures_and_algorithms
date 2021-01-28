import Stack from '../Stack/Stack';

describe('Stack class', () => {
  it('should push a value in the stack', () => {
    const newStack = new Stack();
    const value = 'test';
    newStack.push(value);
    expect(newStack.first.val).toEqual('test');
  });

  it('should increase the size of the stack using push()', () => {
    const newStack = new Stack();
    const value = 'test';
    newStack.push(value);
    newStack.push('newvalue');
    newStack.push('one more');
    expect(newStack.size).toEqual(3);
  });
});