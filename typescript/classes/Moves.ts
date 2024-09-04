import Input from "./Input.js";
import { Move, Matrix, GamePlayer, Color, RegExes, BoardProps, ColumnStatus } from "../types/types.js";

export default class Moves {
  movesMade: number;
  columnStatus: ColumnStatus;
  lastMove: Move;

  constructor() {
    this.movesMade = 0;
    this.columnStatus = new Array(BoardProps.Cols).fill(6);
    this.lastMove = undefined!;
  }

  get validColumns() {
    const cols = [];
    for (let col = 0; col < BoardProps.Cols; col++){
      if (this.columnStatus[col] > 0) {
        cols.push(col);
      }
    }
    return cols;
  }

  makeMove(board: Matrix, player: GamePlayer, currentPlayer: number) {
    if (this.movesMade >= 42) {
      return;
    }
    const validColumn = player.playerType === 1 ? this.playerMove(player.name, Color[currentPlayer]) : this.computerEasyMove();

    const validMove = this.getMovePosition(board, validColumn);

    if (validMove) {
      board[validMove.row][validMove.col] = Color[currentPlayer];
      this.lastMove = validMove;
      this.columnStatus[validMove.col]--;
      this.movesMade++;
    }
  }
  
  playerMove(player: string, color: string) {
    let validMove = null;
    while (!validMove) {
      try {
        const choosenColumn = +Input.getValid(
          `(${color}) ${player}'s turn. Choose column (1-7): `,
          "Invalid column number! Please try again.\n",
          RegExes.Column
        );
        validMove = this.validColumns.includes(choosenColumn) ? choosenColumn : null;
        if (!validMove) {
          throw new Error("Choosen column is full, please try again.\n");
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
    return validMove;
  }
  computerEasyMove() {
    return this.validColumns[Math.floor(Math.random() * (this.validColumns.length - 0)) + 0];
  }
  getMovePosition(board: Matrix, c: number) {
    for (let r = 5; r >= 0; r--){
      if (!board[r][c]) {
        return { row: r, col: c }
      }
    }
  }
  moveIsValid(matrix: Matrix, move: string) {
    const col = +move - 1;
    for (let row = BoardProps.Rows - 1; row >= 0; row--) {
      if (!matrix[row][col]) {
        return { row, col };
      }
    }
    return null;
  }
}
