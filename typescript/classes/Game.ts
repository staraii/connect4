import GameSetup from "./GameSetup.js";
import CurrentGame from "./CurrentGame.js";
import Input from "./Input.js";
import { RegExes } from "../types/types.js";

export default class Game {
  setup: GameSetup;
  currentGame: CurrentGame;

  constructor() {
    this.setup = new GameSetup();
    this.currentGame = new CurrentGame(
      this.setup.playerOne,
      this.setup.playerTwo
    );
    this.playAgain();
  }

  playAgain() {
    const playAgain = Input.getValid("Play again? (Y/N)", "Invalid alternative! Please enter Y (Yes) or N (No) \n", RegExes.PlayAgain);
    if (playAgain.toLowerCase() === "n") {
      return;
    }
    if (playAgain.toLowerCase() === "y") {
      this.setup = new GameSetup();
      this.currentGame = new CurrentGame(this.setup.playerOne, this.setup.playerTwo);
    }
  }
}