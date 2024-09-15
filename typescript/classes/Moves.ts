import Input from "./Input.js";
import AI from "./AI.js";
import {
  Move,
  Matrix,
  GamePlayer,
  Color,
  RegExes,
  BoardProps,
  ColumnStatus,
} from "../types/types.js";

export default class Moves {
  AI: AI;
  movesMade: number;
  columnStatus: ColumnStatus;
  lastMove: Move;

  constructor() {
    this.AI = new AI();
    this.movesMade = 0;
    this.columnStatus = new Array(7).fill(6);
    this.lastMove = undefined!;
  }

  get validColumns() {
    const cols = [];
    for (let col = 0; col < BoardProps.Cols; col++) {
      if (this.columnStatus[col] > 0) {
        cols.push(col);
      }
    }
    return cols;
  }

  makeMove(board: Matrix, player: GamePlayer, currentPlayer: number) {
    let validMove;
    let validColumn;
    if (this.movesMade >= 42) {
      return;
    }
    if (player.playerType === 1 || player.playerType === 2) {
      validColumn =
        player.playerType === 1
          ? this.playerMove(player.name, Color[currentPlayer])
          : this.computerEasyMove();
      validMove = this.getMovePosition(board, validColumn);
    }
    if (player.playerType === 3) {
      let aiMove = this.AI.getBestMove(
        board,
        8,
        Color[currentPlayer] === "X" ? "O" : "X"
      );
      validMove = this.getMovePosition(board, aiMove);
    }

    if (validMove) {
      board[validMove.row][validMove.col] = Color[currentPlayer];
      console.log(
        `Player ${Color[currentPlayer]} made move Col: ${
          validMove.col + 1
        }}, Row: ${validMove.row + 1}`
      );
      this.lastMove = validMove;
      this.columnStatus[validMove.col] - 1;
      this.movesMade++;
    }
  }

  playerMove(player: string, color: string) {
    let validMove = null;
    while (!validMove) {
      try {
        const columnInput = Input.getValid(
          `(${color}) ${player}'s turn. Choose column (1-7): `,
          "Invalid column number! Please try again.\n",
          RegExes.Column
        );
        validMove = this.validColumns.includes(+columnInput - 1)
          ? columnInput
          : null;
        if (!validMove) {
          throw new Error("Choosen column is full, please try again.\n");
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }
    return +validMove - 1;
  }
  computerEasyMove() {
    return this.validColumns[
      Math.floor(Math.random() * (this.validColumns.length - 0)) + 0
    ];
  }
  getMovePosition(board: Matrix, c: number) {
    for (let r = 5; r >= 0; r--) {
      if (!board[r][c]) {
        return { row: r, col: c };
      }
    }
  }
}
