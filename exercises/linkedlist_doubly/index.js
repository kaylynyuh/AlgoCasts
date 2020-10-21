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
}