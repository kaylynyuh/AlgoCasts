// Write a function that creates a string that represents
// an n x n grid using new line characters to separate lines.
// At each position the grid, there is either a "#" or a space.
// The characters should form a chess board.
function chessBoard(n) {
  let board = '';
  for (let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if((i + j) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
      board += '\n';
    }
    console.log(board);
  }
}

module.exports = chessBoard;
