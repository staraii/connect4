import { Matrix, Move, Color } from "../types/types.js";

export default class GameChecker {
  isGameOver: boolean;
  isDraw: boolean;
  isWinner: number | undefined;

  constructor() {
    this.isGameOver = false;
    this.isDraw = false;
    this.isWinner = undefined;
  }
  checkForWin(board: Matrix, lastMove: Move, movesMade: number, currentPlayer: number) {
    const player = Color[currentPlayer]
    
    if (this.checkHorizontal(board, lastMove, player) || this.checkVertical(board, lastMove, player) || this.checkDiagonal(board, lastMove, player)) {
      this.isWinner = currentPlayer;
      this.isGameOver = true;
    }
    if (movesMade >= 42 && !this.isWinner) {
      this.isDraw = true;
      this.isGameOver = true;
    }
  }
}