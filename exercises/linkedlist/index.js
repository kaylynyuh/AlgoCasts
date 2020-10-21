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
    // exhaust the list until you've reached the last node
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

  // adds new node to end of linked list
  push(data) {  
    let node = new Node(data);
    let current = this.head;
    // iterate through entire list until its been exhausted
    while (current.next) {
      current = current.next
    } 
    current.next = node
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
    while (p2.next) {
      p1 = p1.next
      p2 = p2.next.next
      if (!p2.next) {
        p1.next = p2.next
      }
    }
  }

  reverse() {
    if (!this.head || !this.head.next) return;
    let p1 = null
    let p2 = this.head
    let p3
    while (p2) {
      p3 = p2.next
      p2.next = p1
      p1 = p2
      p2 = p3
    }
    this.head = p1
  }

  // easier to understand reverse solution
  reverse(head) {
    let node = head;
    let previous = null;
    let tmp = null;
    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;
        // reverse pointer
        node.next = previous;
        // step forward in the list
        previous = node;
        node = tmp;
    }
    return previous;
  }

  // Write a method to partition a linked list around a value val, 
  // such that all nodes less than val come before all nodes 
  // greater than or equal to val
  partition(val) {
    // create 2 linked lists, one for beforeVal,
    // one for afterVal
    let beforeVal = new LinkedList()
    let afterVal = new LinkedList()
    let p1 = this.head
    while (p1) {
      if (p1.data < val) {
        beforeVal.push(p1.data)
      } else if (p1.data >= val) {
        afterVal.push(p1.data)
      }
      p1 = p1.next
    }
    // merge beforeVal and afterVal
    let p2 = beforeVal.head
    while (p2.next) {
      p2 = p2.next
    }
    // where the first list ends, the second one begins
    p2.next = afterVal.head
    return beforeVal;
  }

  // Write a function that merges 2 sorted linked lists
  merge(l1, l2) {
    let merged = { val: -1, next: null } // instantiated with dummy node
    let runner = merged;
    while (l1 && l2) {
      if (l1.data < l2.data) {
        runner.next = l1.data
        l1 = l1.next
      } else {
        runner.next = l2.data
        l2 = l2.next
      }
    }
    // l1 = 1->2->3, l2 = 10->20->30
    // In that case l1, will point to null and while loop will break
    // Simply point runner to l2. We do not have to add individual nodes
    runner.next = l1 || l2;
    return merged.next;
  }

  // You have 2 numbers represented by a linked list, where
  // each node contains a single digit. The digits are stored
  // in reverse order such that the 1's digit is at the head
  // of the list. Write a function that adds the two numbers
  // and returns the sum as linked list.
  // https://dev.to/alisabaj/add-two-numbers-problems-how-to-sum-two-linked-lists-7oe
  sumLists(l1, l2) {
    let list = new Node(0);
    let currentNode = list;
    let sum = 0; // will contain the value of adding the nodes
    let carry = 0; // will contain any number that may need to be carried over
    // sum > 0 is a neccessary check to account for the use case where 
    // boths lists have been exhausted but there's still a remaining
    // carried over digit
    while (l1 !== null || l2 !== null || sum > 0) {
      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }
      // Now is the point we have to deal with the possibility of a carried over number
      // If sum is greater than or equal to 10, then there will be a carry
      carry = Math.floor(sum / 10); // this will give us our whole number remainder
      // For the sum, we just want what's in the ones-digit spot
      // To single out the digit we will be adding to the result, we can use modulo
      sum = sum % 10;
      // Add new node to list with the value of our sum
      currentNode.next = new Node(sum);
      // keep traversing through the list
      currentNode = currentNode.next;
      // Finally, the last thing we'll want to do is move any carry value to sum, 
      // setting carry back equal to 0. This way, when the cycle repeats for the 
      // next node, the sum will start with any value that was carried over.
      sum = carry;
      carry = 0;
    }
  
    return list.next;
  }

  // Write a function to compare the data in the nodes of the linked lists 
  // to check if they are equal. If all data attributes are equal and the 
  //lists are the same length, return 1. Otherwise, return 0.
  compareLists(l1, l2) {
    while ((l1 && l2) && (l1.data === l2.data)) {
        if (l1.data === l2.data) {
            l1 = l1.next;
            l2 = l2.next;
        }
    }
    return (l1 === l2) ? 1 : 0;
  }

  // Write a funciton that returns a node 
  // at x positions from the tail
  positionFromTail(head, positionFromTail) {
    if (!head) return null;
    let current = head;
    let runner = head;
    /* Move runner into the list by k elements */
    for (let i = 0; i < positionFromTail; i++) {
      runner = runner.next;
    }
    /* Move both pointers */
    while (runner.next) {
      current = current.next;
      runner = runner.next;
    }
    return current.data;
  }
}

module.exports = { Node, LinkedList };
