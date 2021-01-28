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
});