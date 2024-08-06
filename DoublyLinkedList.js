class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // code here
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return this.head;
  }
  shift() {
    // code here
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;

    return this.head;
  }
  unshift(val) {
    // code here
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;

    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    if (nextNode) {
      nextNode.prevNode = newNode;
    }
    this.length++;
    return true;
    // code here
  }
}

const newList = new DoublyLinkedList();
newList.push(12);
console.log(newList.head.val);
console.log(newList.tail.val);
console.log('----------------------');
newList.push(13);
console.log(newList.head.val);
console.log(newList.tail.val);
console.log('----------------------');
newList.push(14);
console.log(newList.head.val);
console.log(newList.tail.val);
console.log('----------------------');
newList.unshift(11);
console.log(newList.head.val);
console.log(newList.tail.val);
const add = newList.set(2, 11);
console.log(add);
newList.insert(2, 18);
