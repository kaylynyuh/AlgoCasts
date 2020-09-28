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
    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous.next)
    previous.next = node
  }

  // remove dups in a SORTED linked list
  removeDuplicates(head) {
    let current = head
    while (current && current.next) {
      if (current.data === current.next.data) {
        current = current.next.next
      } else {
        current.next
      }
    }
    return head
  }

  // remove dups in an UNSORTED linked list
  // caveat: only works if you are allowed to use
  // additional data structures to reach your solution
  removeDuplicates() { // O(n)
    let p1 = this.head
    let p2 = p1.next
    let nodes = {}
    node[p1.data] = true
    while (p2) {
      let data = p2.data
      if (nodes[data]) {
        p1.next = p2.next
      } else {
        nodes[data] = true
        p1 = p2
      }
      p2 = p2.next
    }
  }

  // remove dups in an UNSORTED linked list
  // if you are NOT allowed to use
  // additional data structures to reach your solution
  removeDuplicates() { // O(n^2)
    let p1, p2, p3;
    let val = null;
    while (p2) {
      val = p2.data;
      p1 = p2;
      p3 = p1.next;
  
      while (p3) {
        if (p3.data === val) {
            p1.next = p3.next;
        } else {
          p1 = p3;
        }
        p3 = p3.next;
      }
  
      p2 = p2.next;
    }
  }

  // The solution your interviewer is likely after is to have 
  // two pointers; one that starts iterating through the list 
  // immediately, and one that is delayed kk times before iterating. 
  // Once the first pointer reaches the end, the second pointer will 
  // either be the kkth last element, or it will not be initialised, 
  // meaning that the list was not of sufficient length.
  kthToLast(k) {
    let p1 = this.head
    let p2 = this.head
    for (let i = 0; i < k - 1; i++) {
      if (!p2.next) return null;
      p2 = p2.next;
    }
    while (p2.next) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1.data;
  }

  deleteMiddle() {
    let p1 = this.head
    let p2 = this.head.next
    while (p2) {
      p1 = p1.next
      p2 = p2.next.next
      if (!p2.next) {
        p1.next = p2.next
      }
    }
  }
}

module.exports = { Node, LinkedList };
