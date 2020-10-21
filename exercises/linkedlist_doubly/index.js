class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // insert a new node to the end of 
  // the DoublyLinkedList
  pushNode (data) {
    let newNode = new DoublyLinkedListNode(data, null, null);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  // insert a new node into a sorted list
  // such the new node's data maintains the sort order
  sortedInsert(head, data) {
    let newNode = new DoublyLinkedListNode(data);
    if (!head) { // Insert in empty list
        return newNode;
    } else if (data < head.data) { // Insert in front of list
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    } else {
        /* Walk list with 2 pointers */
        let n1 = null;
        let n2 = head;
        while (n2 !== null && n2.data < data) {
            n1 = n2;
            n2 = n2.next;
        }
        if (n2 === null) { // Insert at end of list
            n1.next = newNode;
            newNode.prev = n1;
        } else { // insert in empty list
            n1.next = newNode;
            n2.prev = newNode;
            newNode.prev = n1;
            newNode.next = n2;
        }
        return head;
    } 
  }
}