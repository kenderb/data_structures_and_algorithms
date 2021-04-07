import Node from '../linkList/node';

export default class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const currentHead = this.first;
    this.first = currentHead.next;
    this.size -= 1;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return currentHead.val;
  }
}