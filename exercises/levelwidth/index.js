// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// typically, with any tree problems that suggest calculating
// a width, you will want to think BFS.
function levelWidth(root) {
  let arr = [root, 's']; // 's' will act as the var that indicates our stopper
  let widths = [0];
  // greater than 1 to account for 's'
  while(arr.length > 1) {
    let node = arr.shift();
    // if node === 's' we know we have reached the end of that row, reset the counter
    // and reposition 's' to be at the beginning of the array again 
    if (node === 's') { 
      // start processing another row
      widths.push(0)
      arr.push('s')
    } else {
      arr.push(...node.children)
      widths[widths.length - 1]++; // find the last element in widths, increment by 1
    }
  }
  return widths;
}

module.exports = levelWidth;
