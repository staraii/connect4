import prompt from "../helpers/prompt.js";

export default class Player {
  _name: string;
  color: string;
  _playerType: string | undefined;

  constructor(color: string) {
    this._name = "";
    this.color = color;
    this._playerType = undefined;
  }

  set name(name: string) {
    if (name.trim().length > 0) {
      this._name = name;
    } else {
      throw new Error("Player name must contain at least one character.");
    }
  }

  get name() {
    return this._name;
  }

  promptForPlayerName() {
    let valid = false;
    while (!valid) {
      try {
        let playerName = prompt("Enter player name: ");
        this.name = playerName;
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
}
