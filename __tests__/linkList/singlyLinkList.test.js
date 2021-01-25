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
});