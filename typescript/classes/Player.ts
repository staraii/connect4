import prompt from "../helpers/prompt.js";
//import { PlayerType } from "../types/types.js";

export default class Player {
  #name: string = "";
  //#playerType!: PlayerType;

  constructor(name: string, _playerType: number) {
    this.name = name;
    //this.playerType = playerType;
  }

  set name(value: string) {
    if (value.trim().length === 0) {
      value = prompt("Enter player name: ");
    }
    while (value.trim().length === 0) {
      console.clear();
      console.log("Player name must be at least on character long. Please try again!");
      value = prompt("Enter player name: ");
    }
    this.#name = value;
  }

  get name() {
    return this.#name;
  }

  // get playerType() {
  //   return this._playerType;
  // }
  // set playerType(type: string) {
  //   if (type === "1") this._playerType = "Player";
  //   if (type === "2") this._playerType = "Computer Easy";
  //   if (type === "3") {
  //     this._playerType = "Computer Hard";
  //   } else {
  //     throw new Error("Game type must be a value between 1-3.");
  //   }
    
  // }
}
