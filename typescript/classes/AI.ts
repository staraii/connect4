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
}