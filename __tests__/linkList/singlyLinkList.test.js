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
    newlist.push(value);
    newlist.push(value2);
    expect(newlist.pop()).toEqual(newlist.tail);
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
});