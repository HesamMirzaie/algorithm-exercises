// implement the pop functionality

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    // code here
    if (!this.last) {
      return undefined;
    }
    let curr;
    if (this.last === this.first) {
      curr = this.first;
      this.last = null;
      this.first = null;
    } else {
      curr = this.first;
      this.first = this.first.next;
    }
    this.size--;
    return curr;
  }
}
const newStack = new Stack();
newStack.push(12);
newStack.push(15);
newStack.push(17);
newStack.push(19);
console.log(newStack);
console.log(newStack.pop());
console.log(newStack);
