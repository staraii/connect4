
export enum GameType {
  Dual = 1,
  Single,
  AI
}

export enum PlayerType {
  Player = 1,
  Easy,
  Hard
}

export enum Color {
  X = 1,
  O
}

export type GamePlayer = {
  name: string;
  playerType: PlayerType;
}

export enum BoardProps {
  Rows = 6,
  Cols = 7,
}

export type Matrix = (string | null)[][];

export enum RegExEnum {
  Column = "^[1-7]$",
  GameType = "^[1-3]$",
  PlayerName = "^[w]{1,15}$",
}

