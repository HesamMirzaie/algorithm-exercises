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
    // code here
  }
  set(index, val) {
    // code here
  }
  insert(index, val) {
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
newList.pop();
console.log(newList.head.val);
console.log(newList.tail.val);
console.log('----------------------');
newList.shift();
console.log(newList.head.val);
console.log(newList.tail.val);
console.log('----------------------');
newList.unshift(12);
console.log(newList.head.val);
console.log(newList.tail.val);
