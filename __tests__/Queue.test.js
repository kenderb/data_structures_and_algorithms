import Queue from '../Queue/Queue';

describe('Queue class', () => {
  it('should push a value in the Queue', () => {
    const newStack = new Queue();
    const value = 'test';
    newStack.push(value);
    expect(newStack.first.val).toEqual('test');
  });

  it('should push a value in the Queue and increse the size', () => {
    const newStack = new Queue();
    const value = 'test';
    newStack.push(value);
    expect(newStack.size).toEqual(1);
  });

  it('should shift a value in the Queue', () => {
    const newStack = new Queue();
    const value = 'test';
    newStack.push(value);
    newStack.push('value');
    newStack.push('one');
    newStack.push('last');
    expect(newStack.shift()).toEqual('test');
  });

  it('should shift a value in the Queue and decrese the size', () => {
    const newStack = new Queue();
    newStack.push('value');
    newStack.push('one');
    newStack.push('last');
    newStack.shift();
    newStack.shift();
    newStack.shift();
    expect(newStack.shift()).toEqual(null);
  });
});