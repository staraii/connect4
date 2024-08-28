import GameSetup from "./GameSetup.js";

export default class Game {
  setup: GameSetup;
  constructor() {
    this.setup = new GameSetup();
  }
}