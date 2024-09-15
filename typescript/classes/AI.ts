import { Matrix, BoardProps, Color } from "../types/types.js";

export default class AI {
  ROWS: number;
  COLS: number;
  currentPlayer: Color;
  movesMade: number;

  constructor() {
    this.ROWS = BoardProps.Rows;
    this.COLS = BoardProps.Cols;
    this.currentPlayer = 1;
    this.movesMade = 0;
  }

  makeMove(board: Matrix, move: number, player: "X" | "O" | string) {
    for (let r = this.ROWS - 1; r >= 0; r--) {
      if (!board[r][move]) {
        this.movesMade++;
        board[r][move] = player;
        break;
      }
    }
    return true;
  }

  undoMove(board: Matrix, move: number) {
    for (let r = 0; r < this.ROWS; r++) {
      if (board[r][move] !== null) {
        this.movesMade--;
        board[r][move] = null;
        break;
      }
    }
    return true;
  }

  isValidColumn(board: Matrix, col: number) {
    return !board[0][col] ? true : false;
  }

  checkWinningMove(board: Matrix) {
    let players = ["X", "O"];
    for (let player of players) {
      // Horizontal
      for (let row = 0; row < this.ROWS; row++) {
        for (let col = 0; col < this.COLS - 3; col++) {
          if (
            board[row].slice(col, col + 4).every((column) => column === player)
          ) {
            return player;
          }
        }
      }
      // Vertical
      for (let col = 0; col < this.COLS; col++) {
        for (let row = 0; row < this.ROWS - 3; row++) {
          if ([0, 1, 2, 3].every((r) => board[row + r][col] === player)) {
            return player;
          }
        }
      }
      for (let row = 0; row < this.ROWS - 3; row++) {
        for (let col = 0; col < this.COLS - 3; col++) {
          if (
            [0, 1, 2, 3].every(
              (offset) => board[row + offset][col + offset] === player
            )
          ) {
            return player;
          }
        }
      }
      for (let row = 0; row < this.ROWS - 3; row++) {
        for (let col = 3; col < this.COLS; col++) {
          if (
            [0, 1, 2, 3].every(
              (offset) => board[row + offset][col - offset] === player
            )
          ) {
            return player;
          }
        }
      }
    }
    if (this.getValidMoves(board).length === 0) {
      return "DRAW";
    }
    return false;
  }
}