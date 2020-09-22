// Implement a queue ↴ with 2 stacks. ↴ Your queue should 
// have an enqueue and a dequeue method and it should be 
// "first in first out" (FIFO).

// Optimize for the time cost of mm calls on your queue. 
// These can be any mix of enqueue and dequeue calls.

// Assume you already have a stack implementation and it 
// gives O(1)O(1) time push and pop.


class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length === 0) {

      // Move items from inStack to outStack, reversing order
      while (this.inStack.length > 0) {
        const newestInStackItem = this.inStack.pop();
        this.outStack.push(newestInStackItem);
      }

      // If outStack is still empty, raise an error
      if (this.outStack.length === 0) {
        throw new Error("Can't dequeue from empty queue!");
      }
    }
    return this.outStack.pop();
  }
}

export default QueueTwoStacks;