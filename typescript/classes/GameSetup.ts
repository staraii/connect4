import Player from "./Player.js";

export default class GameSetup {
  _gameType: number | undefined;
  _gameTypesList: string[];
  _playerOne: Player | undefined;
  _playerTwo: Player | undefined;

  constructor() {
    this._gameType = undefined;
    this._gameTypesList = ["1 vs 1", "1 vs Computer", "Computer vs Computer"];
    this._playerOne = undefined;
    this._playerTwo = undefined;
  }
} 