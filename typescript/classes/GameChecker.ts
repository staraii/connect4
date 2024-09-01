import { Matrix, Move } from "../types/types.js";

export default class GameChecker {
  isGameOver: boolean;
  isDraw: boolean;
  isWinner: string | undefined;

  constructor() {
    this.isGameOver = false;
    this.isDraw = false;
    this.isWinner = undefined;
  }
}