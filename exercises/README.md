# Runtime Complexity

## Constant Time O(1)
* No matter how many elements we're working with, the algorithm/operation will always take the same amount of time.

## Logarithmic Time O log(n)
 * If doubling the number of elements you are iterating over doesn't double the amount of work. Always assumed that searching operations are log(n).

## Linear Time O(n)
* Iterating through all elements in a collection of data. If you see a for loop spanning from 0 to array.length, it is probably O(n).

## Quasilinear Time O n * log(n)
* If doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that sorting * algorithms are O n * log(n).

## Quadratic Time O(n^2)
* Every element in a collection has to be compared with every other element. The handshake problem.

## Exponential Time O (2^n)
* If you add a single element to a collection, the processing power required doubles.


# Identifying Runtime Complexity

## Iterating with a simple for loop through a single collection?
* Probably O(n)

## Iterating through half a collection?
* Still O(n)

## Iterating through 2 different collections with separate for loops?
* O(n + m)

## Two nested for loops iterating over the same collection?
* O(n ^ 2)

## Two nested for loops iterating over different collections?
* O(n + m)

## Sorting?
* O(n * log(n))

## Searching a sorted array?
* O(log n)


# Data Structures
### What is a data structure?
* Ways of organizing information with optimal "runtime complexity" for adding, updating, or removing records.

## Queue
### An ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.
* add to queue (enqueue) ---> array.unshift()
* remove from queue (dequeue) ---> array.pop()
