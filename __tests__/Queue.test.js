import Queue from '../Queue/Queue';

describe('Queue class', () => {
  it('should enqueue a value in the Queue', () => {
    const newStack = new Queue();
    const value = 'test';
    newStack.enqueue(value);
    expect(newStack.first.val).toEqual('test');

  });

  it('should enqueue a value in the Queue and increse the size', () => {
    const newStack = new Queue();
    const value = 'test';
    newStack.enqueue(value);
    expect(newStack.size).toEqual(1);
  });

  it('should dequeue a value in the Queue', () => {
    const newStack = new Queue();
    const value = 'test';
    newStack.enqueue(value);
    newStack.enqueue('value');
    newStack.enqueue('one');
    newStack.enqueue('last');
    expect(newStack.dequeue()).toEqual('test');
  });

  it('should dequeue a value in the Queue and decrese the size', () => {
    const newStack = new Queue();
    newStack.enqueue('value');
    newStack.enqueue('one');
    newStack.enqueue('last');
    newStack.dequeue();
    newStack.dequeue();
    newStack.dequeue();
    expect(newStack.dequeue()).toEqual(null);
  });
});