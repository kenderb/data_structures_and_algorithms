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
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let value = this.head;
    while (counter < index) {
      counter += 1;
      value = value.next;
    }
    return value;
  }

  set(value, index) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }

  addNodeToAnyPosition(value, index) {
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }

  insert(value, index) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    return this.addNodeToAnyPosition(value, index);
  }

  removeNodeFromAnyPosition(index) {
    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;
    prevNode.next = currentNode.next;
    this.length -= 1;
    return currentNode;
  }

  remove(index) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    return this.removeNodeFromAnyPosition(index);
  }

  switchHeadToTail() {
    const currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    return currentNode;
  }

  reverse() {
    let node = this.switchHeadToTail();
    let next;
    let prev = null;
    for (let index = 0; index < this.length; index += 1) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}