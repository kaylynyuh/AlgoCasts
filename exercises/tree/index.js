// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {}

class Tree {
  constructor() {
    this.root = null;
  }

  // accepts a fn as an arg, this fn will be called
  // on every node of the tree
  // with BF, children are added to the end of the temp []
  traverseBF(fn) {
    if (!this.root) return;
    let temp = [this.root];
    while(temp.length) {
      let node = temp.shift(); // shift takes out the first element of an array
      temp.push(...node.children) // with the spread operator we are saying, taking each element of this arr and add them one by one to temp
      fn(node);
    }
  }

  // with DF, children are added to the beginning of the temp []
  traverseDF(fn) {
    if (!this.root) return;
    let temp = [this.root];
    while(temp.length) {
      let node = temp.shift(); // shift takes out the first element of an array
      temp.unshift(...node.children) // with the spread operator we are saying, taking each element of this arr and add them one by one to temp
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
