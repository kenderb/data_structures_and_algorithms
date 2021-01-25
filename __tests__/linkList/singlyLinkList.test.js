import SinglyLinkList from '../../linkList/singleLinkList';

describe('SinglyLinkList class', () => {
  it('should put a value as a head if the list is empty', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    newlist.push(value);
    expect(newlist.head).toEqual({ next: null, val: value });
  });

  it('should put a value as a tail if the list has elements using push', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    const value2 = 'test2';
    newlist.push(value);
    newlist.push(value2);
    expect(newlist.head.next).toEqual(newlist.tail);
  });

  it('should put every value as a tail if the list has elements using push', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value);
    newlist.push(value2);
    expect(newlist.push(value3).tail).toEqual({ next: null, val: value3 });
  });

  it('should be able to remove the last element in the list with pop', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value);
    newlist.push(value2);
    newlist.push(value3);
    expect(newlist.pop()).toEqual({ next: null, val: 'test3' });
  });

  it('should be able to remove the last element in the list with pop and add null to the last tail', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    const value2 = 'test2';
    newlist.push(value);
    newlist.push(value2);
    newlist.pop();
    expect(newlist.tail.next).toEqual(null);
  });

  it('should return undefined if the list is empty', () => {
    const newlist = new SinglyLinkList();
    expect(newlist.pop()).toEqual(undefined);
  });

  it('should return undefined if the list has 0', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    newlist.push(value);
    newlist.pop();
    expect(newlist.head).toEqual(null);
  });

  it('should be able to remove the fisrt element in the list with a shift method', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    newlist.push(value);
    expect(newlist.shift()).toEqual({ next: null, val: 'test' });
  });

  it('should be able to reduce the length of the list with a shift method', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    const value2 = 'test2';
    newlist.push(value);
    newlist.push(value2);
    newlist.shift();
    expect(newlist.length).toEqual(1);
  });

  it('shift method return undefined if the list is empty', () => {
    const newlist = new SinglyLinkList();
    expect(newlist.shift()).toEqual(undefined);
  });

  it('shift() should return null if there is no head', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    newlist.push(value);
    newlist.shift();
    expect(newlist.head).toEqual(null);
  });
  // unshift
  it('should be able to add the fisrt element in the list with the unshift method', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    newlist.unshift(value);
    expect(newlist.head).toEqual({ next: null, val: 'test' });
  });

  it('should be able to increase the length of the list with a unshift method', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    newlist.unshift(value2);
    expect(newlist.length).toEqual(1);
  });

  it('should be able to unshift an element to the head if there are elements in the list. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.unshift(value2);
    newlist.unshift(value3);
    expect(newlist.head.val).toEqual('test3');
  });

  // get method

  it('should be able to get an element given an index. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value2);
    newlist.push(value3);
    newlist.push(4);
    newlist.push('hello');
    expect(newlist.get(3).val).toEqual('hello');
  });

  it('should be able to return null if the index is geatter than the length of the list. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.unshift(value2);
    newlist.unshift(value3);
    expect(newlist.get(3)).toEqual(null);
  });

  it('should be able to return null if the index is negative. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    newlist.unshift(value2);
    expect(newlist.get(-1)).toEqual(null);
  });

  // set method

  it('should be able to set an element given an index and a value. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value2);
    newlist.push(value3);
    newlist.push(4);
    newlist.push('hello');
    newlist.set('nope', 3);
    expect(newlist.get(3).val).toEqual('nope');
  });

  it('should be able to return false if node is not found. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value2);
    newlist.push(value3);
    newlist.push(4);
    newlist.push('hello');
    newlist.set('nope', 5);
    expect(newlist.set('nope', 5)).toEqual(false);
  });

  it('should be able to return true if node is found. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value2);
    newlist.push(value3);
    newlist.push(4);
    newlist.push('hello');
    expect(newlist.set('nope', 2)).toEqual(true);
  });
  // insert

  it('insert method should be able to return false if the index is greater than the length. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value2);
    newlist.push(value3);
    newlist.push(4);
    newlist.push('hello');
    expect(newlist.insert('nope', 5)).toEqual(false);
  });

  it('insert method should be able to return false if the index is negative. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value2);
    newlist.push(value3);
    newlist.push(4);
    newlist.push('hello');
    expect(newlist.insert('nope', -1)).toEqual(false);
  });

  it('insert method should be able push a node to the end. ', () => {
    const newlist = new SinglyLinkList();
    const value2 = 'test2';
    const value3 = 'test3';
    newlist.push(value2);
    newlist.push(value3);
    newlist.push(4);
    newlist.push('hello');
    newlist.insert('yep', 4);
    expect(newlist.get(4).value).toEqual('yep');
  });
});