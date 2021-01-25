import SinglyLinkList from '../../linkList/singleLinkList';

describe('SinglyLinkList class', () => {
  it('should put a value as a head if the list is empty', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    newlist.push(value);
    expect(newlist.head).toEqual({ next: null, val: value });
  });

  it('should put a value as a tail if the list has elements', () => {
    const newlist = new SinglyLinkList();
    const value = 'test';
    const value2 = 'test2';
    newlist.push(value);
    newlist.push(value2);
    expect(newlist.head.next).toEqual(newlist.tail);
  });
});