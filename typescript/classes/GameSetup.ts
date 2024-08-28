//import Player from "./Player.js";
import prompt from "../helpers/prompt.js";
import { GameType } from "../types/types.js";

export default class GameSetup {
  #gameType: string = "";
  //_playerOne: Player;
  //_playerTwo: Player;

  constructor() {
    this.gameType = "";
    //this._playerOne = undefined!;
    //this._playerTwo = undefined!;
  }

  set gameType(option: string) {
    function validateInput(input: string) {
      return /^[1-3]$/.test(input);
    }
    let valid = validateInput(option);
    while (!valid) {
      console.log("1. Dual player \n2. Single player \n3. AI \n");
      option = prompt(`Select game type (1-3): `);
      validateInput(option) ? valid = true : (console.clear(), console.log("Invalid input, please try again."));
    }
    this.#gameType = GameType[+option];
  }
  get gameType() {
    return this.#gameType;
  }
} 

