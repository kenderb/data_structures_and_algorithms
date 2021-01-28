import Node from '../linkList/node';

export default class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  pop() {
    if (!this.first) return undefined;
    const currentFirst = this.first;
    this.first = currentFirst.next;
    this.size -= 1;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return currentFirst;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this.size;
  }
}