// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  // a constructor() within a class will automatically
  // get called when a new instance gets created on new Queue()
  constructor() {
    this.data = [];
  }

  // this will add a record into the START of the array
  add(record) {
    this.data.unshift(record);
  }

  // remove a record from the END of the array
  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
