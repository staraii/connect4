import prompt from "../helpers/prompt.js";
import { PlayerType } from "../types/types.js";

export default class Player {
  #name!: string;
  #playerType!: PlayerType;

  constructor(name: string, playerType: number) {
    this.name = name;
    this.playerType = playerType;
  }

  set name(name: string) {
    if (name.trim().length > 0) {
      this.#name = name;
    } else {
      throw new Error("Player name must contain at least one character.");
    }
  }

  get name() {
    return this.#name;
  }

  // promptForPlayerName() {
  //   let valid = false;
  //   while (!valid) {
  //     try {
  //       let playerName = prompt("Enter player name: ");
  //       this.name = playerName;
  //       valid = true;
  //     } catch (error) {
  //       let message;
  //       if (error instanceof Error) {
  //         message = error.message;
  //       } else {
  //         message = String(error);
  //       }
  //       console.log(message);
  //     }
  //   }
  // }

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
