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

  it('should pop a value in the stack', () => {
    const newStack = new Stack();
    const value = 'test';
    newStack.push(value);
    newStack.push('newvalue');
    newStack.push('one more');
    expect(newStack.pop()).toEqual('one more');
  });

  it('should reduce the size of the stack using pop()', () => {
    const newStack = new Stack();
    const value = 'test';
    newStack.push(value);
    newStack.push('newvalue');
    newStack.push('one more');
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.size).toEqual(0);
  });

  it('should return null if the Stack size is zero with pop()', () => {
    const newStack = new Stack();
    expect(newStack.pop()).toEqual(null);
  });
});