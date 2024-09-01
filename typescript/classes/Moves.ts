import Input from "./Input.js";
import { Move } from "../types/types.js";

export default class Moves {
  movesMade: number;
  lastMove: Move;

  constructor() {
    this.movesMade = 0;
    this.lastMove = undefined!;
  }
}
