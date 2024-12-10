class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  private first: Node<T> | null;
  private last: Node<T> | null;
  private size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: T): number {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop(): T | undefined {
    if (!this.first) {
      return undefined;
    }

    const poppedNode = this.first;
    this.first = this.first.next;
    this.size--;

    poppedNode.next = null;
    if (this.size === 0) {
      this.last = null;
    }

    return poppedNode.value;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  clear(): void {
    while (this.first) {
      const temp = this.first;
      this.first = this.first.next;
      temp.next = null;
    }
    this.last = null;
    this.size = 0;
  }
}

const newStack = new Stack();
