/**
Please implement the find and contains to the following Binary Search Tree
**/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let nowRoot = this.root;
    while (nowRoot !== null) {
      if (value === nowRoot.value) {
        return nowRoot;
      } else if (value > nowRoot.value) {
        nowRoot = nowRoot.right;
      } else {
        nowRoot = nowRoot.left;
      }
    }
    return undefined;
  }

  contains(value) {
    let nowRoot = this.root;
    while (nowRoot !== null) {
      if (value === nowRoot.value) {
        return true;
      } else if (value > nowRoot.value) {
        nowRoot = nowRoot.right;
      } else {
        nowRoot = nowRoot.left;
      }
    }
    return false;
  }
}

let myNode = new BinarySearchTree();
myNode.insert(8);
myNode.insert(3);
myNode.insert(10);
myNode.insert(1);
myNode.insert(6);
myNode.insert(14);
myNode.insert(4);
myNode.insert(7);
myNode.insert(13);
console.log(myNode.find(6));
console.log(myNode.contains(14));
