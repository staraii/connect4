
export default class Board {
  matrix: (string | null)[][];
  rows: number;
  cols: number;

  constructor() {
    this.rows = 6;
    this.cols = 7;
    this.matrix = [...new Array(this.rows)].map(_row => [...new Array(this.cols)].map(_column => " "));
  }

}