export class CellDataSet {
  row: number;
  col: number;
  value: number;
  isValid: boolean;

  constructor(domMap: DOMStringMap) {
    this.col = parseInt(domMap?.col ?? "");
    this.row = parseInt(domMap?.row ?? "");
    this.value = parseFloat(domMap?.value ?? "");
    this.isValid = !(isNaN(this.col) || isNaN(this.row) || isNaN(this.value));
  }
}
