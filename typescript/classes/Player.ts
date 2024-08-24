import prompt from "../helpers/prompt.js";

export default class Player {
  _name: string;
  color: string;
  playerType: string;

  constructor(color: string, playerType: string) {
    this._name = "";
    this.color = color;
    this.playerType = playerType;
  }

  set name(name: string) {
    if (name.trim().length > 0) {
      this._name = name;
    } else {
      throw new Error("Name must contain at least one character.");
    }
  }

  get name() {
    return this._name;
  }
}
