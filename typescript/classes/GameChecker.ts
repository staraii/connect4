import { Matrix, Move, Color, BoardProps } from "../types/types.js";

export default class GameChecker {
  isGameOver: boolean;
  isDraw: boolean;
  isWinner: number | undefined;

  constructor() {
    this.isGameOver = false;
    this.isDraw = false;
    this.isWinner = undefined;
  }
  checkForWin(
    board: Matrix,
    lastMove: Move,
    movesMade: number,
    currentPlayer: number
  ) {
    const player = Color[currentPlayer];

    if (
      this.checkHorizontal(board, lastMove, player) ||
      this.checkVertical(board, lastMove, player) ||
      this.checkDiagonal(board, lastMove, player)
    ) {
      this.isWinner = currentPlayer;
      this.isGameOver = true;
    }
    if (movesMade >= 42 && !this.isWinner) {
      this.isDraw = true;
      this.isGameOver = true;
    }
  }
  checkHorizontal(board: Matrix, lastMove: Move, player: string) {
    for (let cols = 0; cols <= BoardProps.Cols - 4; cols++) {
      if (
        board[lastMove.row].slice(cols, cols + 4).every((col) => col === player)
      ) {
        return true;
      }
    }
  }
  checkVertical(board: Matrix, lastMove: Move, player: string) {
    const result: number = board.reduce((count, row) => {
      if (row[lastMove.col] === player) {
        return count + 1;
      } else {
        return 0;
      }
    }, 0);
    if (result >= 4) {
      return true;
    }
  }
}