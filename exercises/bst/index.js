// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // && there is already something assigned at the left property
    if (data < this.data && this.left) {
      // delegate this insertion to the left hand node
      this.left.insert(data);
    } else if (data < this.data) { // else if there is no left node (this.left = null), insert new node at that pos
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      // delegate this insertion to the right hand node
      this.right.insert(data);
    } else {
      this. right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) return this;
    // if data is greater than this.data AND there's a right
    if (this.data < data && this.right) {
      // delegate contains to the right hand node
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }
}

module.exports = Node;
