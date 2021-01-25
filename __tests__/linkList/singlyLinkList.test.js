import SinglyLinkList from '../../linkList/singleLinkList';

describe('SinglyLinkList class', () => {
  it('should put a value as a head if the list is empty', () => {
    const newlist = new SinglyLinkList();
    const value = 'value';
    newlist.push(value);
    expect(newlist.head).toEqual({ next: null, val: 'value' });
  });
});