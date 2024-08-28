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

  set playerType(type: number) {
    if (!(type in PlayerType)) {
      console.clear();
      console.log("Computer players difficulty level.\n1. Easy \n2. Hard\n")
      type = prompt("Select level: ");
    }
    while (!(type in PlayerType)) {
      console.clear();
      console.log("Invalid level input! \n1. Easy \n2. Hard\n");
      type = prompt("Please select level 1 or 2: ");
    }
    this.#playerType = type;
  }
  get playerType() {
    return this.#playerType;
  }
}
