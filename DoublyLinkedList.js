/**
Complete the following DoublyLinkedList
**/

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
      this.tail.next = newNode;
      newNode.tail = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // code here
  }
  shift() {
    // code here
  }
  unshift(val) {
    // code here
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
newList.push(15);
newList.push(2);
newList.push(19);
console.log(newList);
