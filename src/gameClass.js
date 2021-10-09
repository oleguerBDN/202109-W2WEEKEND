class GameBoard {
  board = [];
  size = 10;

  // Default board size will be 10 if there's no number specified on the constructor
  constructor(boardSize) {
    typeof boardSize !== "number"
      ? (boardSize = this.size)
      : (this.size = boardSize);

    for (let row = 0; row < boardSize; row++) {
      this.board[row] = [];
      for (let col = 0; col < boardSize; col++) {
        this.board[row][col] = 0;
      }
    }
  }

  // Return a new array with the same values
  copy() {
    const newBoard = [];
    for (let row = 0; row < this.size; row++) {
      newBoard[row] = [];
      for (let col = 0; col < this.size; col++) {
        newBoard[row][col] = this.board[row][col];
      }
    }
    console.table(newBoard);
    return newBoard;
  }

  // Return a new array (copy)  with updated positions
  updatedCopy() {
    const newBoard = this.copy();
    console.table(newBoard);
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.isGoingToLive(row, col)) {
          newBoard[row][col] = 1;
        } else {
          newBoard[row][col] = 0;
        }
      }
    }
    return newBoard;
  }

  // Return true (current position should live) or false (current position should die) after checking for neighbours
  isGoingToLive(y, x) {
    let neighboursAlive = 0;
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (
          row >= y - 1 &&
          row <= y + 1 &&
          col >= x - 1 &&
          col <= x + 1 &&
          (row !== y || col !== x) &&
          this.board[row][col] === 1
        ) {
          neighboursAlive++;
        }
      }
    }
    return (
      (neighboursAlive === 2 && this.board[y][x] === 1) || neighboursAlive === 3
    );
  }

  printBoard() {}
}

module.exports = { GameBoard };
