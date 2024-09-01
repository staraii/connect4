import GameSetup from "./GameSetup.js";
import { GamePlayer } from "../types/types.js";
import Board from "./Board.js";
import CurrentGame from "./CurrentGame.js";

export default class Game {
  setup: GameSetup;
  playerOne: GamePlayer;
  playerTwo: GamePlayer;
  board: Board;
  currentGame: CurrentGame;

  constructor() {
    this.setup = new GameSetup();
    this.playerOne = this.setup.playerOne;
    this.playerTwo = this.setup.playerTwo;
    this.board = new Board();
    this.currentGame = new CurrentGame(this.board, this.playerOne, this.playerTwo);
  }
}