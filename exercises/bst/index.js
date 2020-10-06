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
    this.children = [];
  }

  add(data) {
    let node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    // if filter returns true, we want to keep the element
    // if filter returns false, it will not return the element
    // thus, "removing" it from the list
    // since filter does not modify the original array,
    // we have to reassign it with this.children = this.children...
    this.children = this.children.filter(node => {
      return node.data !== data
    });
  }
}

module.exports = Node;
