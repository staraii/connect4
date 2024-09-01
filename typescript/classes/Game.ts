import GameSetup from "./GameSetup.js";
import { GamePlayer } from "../types/types.js";
import CurrentGame from "./CurrentGame.js";

export default class Game {
  setup: GameSetup;
  playerOne: GamePlayer;
  playerTwo: GamePlayer;
  currentGame: CurrentGame;

  constructor() {
    this.setup = new GameSetup();
    this.playerOne = this.setup.playerOne;
    this.playerTwo = this.setup.playerTwo;
    this.currentGame = new CurrentGame(this.playerOne, this.playerTwo);
  }
}