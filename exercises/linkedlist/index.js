// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head); // the second arg (this.head) is what will get set to THIS node's next property
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next // this will either take the next node the value null and assign it node
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) { // in case the first node is not defined 
      return null
    }
    let node = this.head;
    while (node) {
      if (!node.next) { // if node.next is null, then we know we are at the end of the list
        return node;
      }
      node = node.next; // otherwise, keep looping
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;  
    if (!this.head.next) {
      this.head = null;
      return
    }    
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = getLast();
    if (last) {
      // there are existing nodes in the chain
      last.next = new Node(data);
    } else {
      // the chain is empty
      new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    if (!this.head) return null;
    while (node) {
      if (index === counter) {
        return node
      }
      counter++;
      node = node.next
    }
    return null
  }

  removeAt(index) {
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next
      return
    }
    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
    }
    const previous = this.getAt(index -1 ) || this.getLast()
    const node = new Node(data, previous.next)
    previous.next = node
  }
}

module.exports = { Node, LinkedList };
