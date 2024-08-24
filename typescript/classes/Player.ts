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
}
