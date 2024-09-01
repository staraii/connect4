import Input from "./Input.js";
import { Move, Matrix, GamePlayer, Color } from "../types/types.js";

export default class Moves {
  movesMade: number;
  lastMove: Move;

  constructor() {
    this.movesMade = 0;
    this.lastMove = undefined!;
  }
  makeMove(matrix: Matrix, player: GamePlayer, currentPlayer: number) {
    let validMove = null;
    if (this.movesMade >= 42) {
      return;
    }

    if (player.playerType === 1) {
      validMove = this.playerMove(matrix, player.name, Color[currentPlayer]);
    }

    if (player.playerType === 2) {
      validMove = this.computerEasyMove(matrix);
    }

    if (validMove) {
      matrix[validMove.row][validMove.col] = Color[currentPlayer];
      this.lastMove = validMove;
      this.movesMade++;
    }
  }
}
