/**
  Please add dequeue function to the following Queue 
**/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    // return null or a value
    if (!this.first) {
      return null;
    }
    const curr = this.first;
    if (this.first === this.last) {
      this.first = null;
      return curr;
    }
    this.first = this.first.next;
    this.size--;
    return curr;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
