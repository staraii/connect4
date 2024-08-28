import GameSetup from "./GameSetup.js";
import { GamePlayer } from "../types/types.js";
export default class Game {
  setup: GameSetup;
  playerOne: GamePlayer;
  playerTwo: GamePlayer;
  constructor() {
    this.setup = new GameSetup();
    this.playerOne = this.setup.playerOne;
    this.playerTwo = this.setup.playerTwo;
  }
}