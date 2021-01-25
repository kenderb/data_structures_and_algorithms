import Node from './node';

export default class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.length += 1;
      this.head = newNode;
      this.tail = this.head;
      return this;
    }
    this.length += 1;
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}