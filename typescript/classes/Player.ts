import prompt from "../helpers/prompt.js";
import { PlayerType } from "../types/types.js";

export default class Player {
  #name: string = "";
  #playerType!: PlayerType;

  constructor(name: string, playerType: number) {
    this.name = name;
    this.playerType = playerType;
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

  set playerType(typeInput: number) {
    if (typeInput === 1) {
      this.#playerType = typeInput;
    }
    if (typeInput === 0) {
      console.log("\n1. Easy \n2. Hard");
      typeInput = +prompt("Select computer difficulty level(1-2): ");
      while (typeInput < 1 || typeInput > 2) {
        console.log("\nInvalid option! Please try again. \n1. Easy \n2. Hard");
        typeInput = +prompt("Select computer difficulty level(1-2): ");
      }
      console.log("Computer level " + PlayerType[typeInput + 1] + " selected.");
      this.#playerType = typeInput + 1;
    }
  }
  get playerType() {
    return this.#playerType;
  }
}
