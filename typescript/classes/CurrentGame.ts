import { Color, GamePlayer } from "../types/types.js";
import Board from "./Board.js";
import Moves from "./Moves.js";
import GameChecker from "./GameChecker.js";

export default class CurrentGame {
  currentPlayer: Color;
  players: GamePlayer[];
  board: Board;
  moves: Moves;
  gameChecker: GameChecker;

  constructor(playerOne: GamePlayer, playerTwo: GamePlayer) {
    this.currentPlayer = 1;
    this.players = [playerOne, playerTwo];
    this.board = new Board();
    this.moves = new Moves();
    this.gameChecker = new GameChecker();
  }



}