import Player from "./Player.js";
import prompt from "../helpers/prompt.js";

export default class GameSetup {
  _gameType: string;
  _gameTypesList: string[];
  _playerOne: Player;
  _playerTwo: Player;

  constructor() {
    this._gameType = undefined!;
    this._gameTypesList = ["1 vs 1", "1 vs Computer", "Computer vs Computer"];
    this._playerOne = undefined!;
    this._playerTwo = undefined!;
    this.selectGameType();
    //this.setPlayers();
  }

  set gameType(option: string) {
    let index = +option;
    if (index > 0 && index < 4) {
      this._gameType = this._gameTypesList[index -1]
    } else {
      throw new Error("Please select a gametype between 1-3.");
    }
  }
  get gameType() {
    return this._gameType;
  }
  selectGameType() {
    let valid = false;
    while(!valid){
      try {
        let gameType = prompt(`Select game type. \n 1. ${this._gameTypesList[0]}  \n 2. ${this._gameTypesList[1]} \n 3. ${this._gameTypesList[2]}`);
        this.gameType = gameType;
        valid = true;
      } catch (error) {
        let message;
        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }
        console.log(message);
      } 
    }
  }
  // setPlayers() {
    
  // }
} 

